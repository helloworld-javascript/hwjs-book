#!/usr/bin/env node

/**
 * HTML Link Checker
 * 
 * Checks the built HTML artifacts for broken links by:
 * 1. Internal links - verifying file existence
 * 2. External links - checking HTTP status codes (not 4xx)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const PUBLIC_DIR = path.join(__dirname, '../public');
const errors = [];
const warnings = [];
const checkedUrls = new Map(); // Cache for external URL checks

// Get all HTML files
function getAllHtmlFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory ${dir} does not exist. Run 'yarn build' first.`);
    process.exit(1);
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Extract all links from HTML
function extractLinks(content) {
  // Match href="..." attributes
  const linkRegex = /href="([^"]+)"/g;
  const links = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const url = match[1];
    // Skip anchors and special protocols
    if (url && url !== '#' && !url.startsWith('mailto:') && !url.startsWith('tel:')) {
      links.push(url);
    }
  }
  
  return [...new Set(links)]; // Remove duplicates
}

// Check if URL is external
function isExternalLink(url) {
  return url.startsWith('http://') || url.startsWith('https://');
}

// Check external URL with HTTP request
function checkExternalUrl(url) {
  return new Promise((resolve) => {
    // Check cache first
    if (checkedUrls.has(url)) {
      resolve(checkedUrls.get(url));
      return;
    }
    
    const client = url.startsWith('https://') ? https : http;
    
    const options = {
      method: 'HEAD',
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)'
      }
    };
    
    const req = client.request(url, options, (res) => {
      const result = {
        statusCode: res.statusCode,
        ok: res.statusCode >= 200 && res.statusCode < 400
      };
      checkedUrls.set(url, result);
      resolve(result);
    });
    
    req.on('error', (err) => {
      const result = {
        statusCode: null,
        error: err.message,
        ok: false
      };
      checkedUrls.set(url, result);
      resolve(result);
    });
    
    req.on('timeout', () => {
      req.destroy();
      const result = {
        statusCode: null,
        error: 'Timeout',
        ok: false
      };
      checkedUrls.set(url, result);
      resolve(result);
    });
    
    req.end();
  });
}

// Resolve internal URL to file path
function resolveInternalUrl(url, fromFile) {
  // Remove query strings and anchors
  const cleanUrl = url.split('?')[0].split('#')[0];
  
  if (!cleanUrl || cleanUrl === '/') {
    return path.join(PUBLIC_DIR, 'index.html');
  }
  
  // Handle absolute paths
  if (cleanUrl.startsWith('/')) {
    const filePath = path.join(PUBLIC_DIR, cleanUrl);
    
    // If it's a directory, check for index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      return path.join(filePath, 'index.html');
    }
    
    // If no extension, try adding .html
    if (!path.extname(filePath)) {
      return filePath + '.html';
    }
    
    return filePath;
  }
  
  // Handle relative paths
  const dir = path.dirname(fromFile);
  const resolvedPath = path.resolve(dir, cleanUrl);

  // If no extension, try adding .html
  if (!path.extname(resolvedPath)) {
    return resolvedPath + '.html';
  }

  return resolvedPath;
}

// Check a single HTML file
async function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const links = extractLinks(content);
  const relPath = path.relative(PUBLIC_DIR, filePath);
  
  for (const link of links) {
    if (isExternalLink(link)) {
      // Check external link
      const result = await checkExternalUrl(link);
      
      if (!result.ok) {
        errors.push({
          file: relPath,
          issue: result.error ? `Failed to fetch: ${result.error}` : `HTTP ${result.statusCode}`,
          link: link,
          type: 'external'
        });
      }
    } else {
      // Check internal link
      const targetPath = resolveInternalUrl(link, filePath);
      
      if (!fs.existsSync(targetPath)) {
        errors.push({
          file: relPath,
          issue: 'File does not exist',
          link: link,
          resolvedTo: path.relative(PUBLIC_DIR, targetPath),
          type: 'internal'
        });
      }
    }
  }
}

// Main execution
async function main() {
  console.log('🔍 Checking links in built HTML files...\n');
  
  const htmlFiles = getAllHtmlFiles(PUBLIC_DIR);
  console.log(`Found ${htmlFiles.length} HTML files to check\n`);
  
  for (const file of htmlFiles) {
    process.stdout.write(`Checking ${path.relative(PUBLIC_DIR, file)}...\r`);
    await checkFile(file);
  }
  
  console.log('\n');
  
  // Report results
  if (errors.length === 0) {
    console.log('✅ All links are valid!\n');
    console.log(`   Checked ${checkedUrls.size} unique external URLs`);
    console.log(`   Checked ${htmlFiles.length} HTML files\n`);
    process.exit(0);
  }
  
  // Separate internal and external errors
  const internalErrors = errors.filter(e => e.type === 'internal');
  const externalErrors = errors.filter(e => e.type === 'external');
  
  if (internalErrors.length > 0) {
    console.log(`❌ Found ${internalErrors.length} broken internal link(s):\n`);
    internalErrors.forEach((err, i) => {
      console.log(`${i + 1}. ${err.file}`);
      console.log(`   Link: ${err.link}`);
      console.log(`   Issue: ${err.issue}`);
      if (err.resolvedTo) {
        console.log(`   Resolved to: ${err.resolvedTo}`);
      }
      console.log('');
    });
  }
  
  if (externalErrors.length > 0) {
    console.log(`❌ Found ${externalErrors.length} broken external link(s):\n`);
    externalErrors.forEach((err, i) => {
      console.log(`${i + 1}. ${err.file}`);
      console.log(`   Link: ${err.link}`);
      console.log(`   Issue: ${err.issue}`);
      console.log('');
    });
  }
  
  console.log(`Total errors: ${errors.length}`);
  console.log(`Checked ${checkedUrls.size} unique external URLs\n`);
  
  process.exit(1);
}

main().catch(err => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
