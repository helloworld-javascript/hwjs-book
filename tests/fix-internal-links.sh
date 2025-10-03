#!/bin/bash

# Fix all internal links by removing .md and .mdx extensions

echo "Fixing internal links in MDX files..."

find content/pages -name "*.mdx" | while read file; do
  # Remove .md) and .mdx) from links
  sed -i '' 's/\](\.\/[^)]*\)\.mdx*)/](\1)/g' "$file"
  echo "Fixed: $file"
done

echo "Done!"
