# Data Model: Content Update Structure

**Feature**: JavaScript Tutorial Book Content Update
**Date**: 2025-10-02

---

## Entity Definitions

### 1. ContentChapter

Represents a single chapter/page in the tutorial book.

**Attributes**:
- `filePath`: String - Absolute path to the .mdx file (e.g., `/content/pages/100-javascript.mdx`)
- `chapterNumber`: String - Chapter identifier (e.g., "100", "190", "270")
- `title`: String - Chapter title in Korean (e.g., "JavaScript 소개", "배열")
- `priority`: Enum - Update priority level (CRITICAL, HIGH, MEDIUM, LOW, MINIMAL)
- `updateStatus`: Enum - Current update status (PENDING, IN_PROGRESS, COMPLETED, VERIFIED)
- `lastModified`: Date - Last modification date in repository
- `estimatedLines`: Number - Approximate number of lines in the file

**Relationships**:
- Has many `UpdateTask` (one chapter may need multiple updates)
- Has many `ExternalLink` (chapters contain reference links)
- Has many `CodeExample` (chapters contain code snippets)

**Validation Rules**:
- `filePath` must exist and be readable
- `priority` must match research findings
- `title` must be non-empty

---

### 2. UpdateTask

Represents a specific content update needed within a chapter.

**Attributes**:
- `taskId`: String - Unique task identifier (e.g., "T001", "T015")
- `chapterNumber`: String - Associated chapter (foreign key to ContentChapter)
- `taskType`: Enum - Type of update (FEATURE_ADD, TEXT_UPDATE, LINK_VERIFY, DEPRECATION_MARK, CRITICAL_FIX)
- `description`: String - What needs to be updated
- `location`: String - Where in the file (e.g., "line 196-197", "after line 508")
- `newFeature`: String (optional) - JavaScript feature being added (e.g., "Array.at()", "Promise.try()")
- `ecmaVersion`: String (optional) - ECMAScript version (e.g., "ES2022", "ES2024")
- `priority`: Enum - Task priority (P1_CRITICAL, P2_HIGH, P3_MEDIUM, P4_LOW)
- `parallelizable`: Boolean - Can be done in parallel with other tasks
- `dependencies`: Array<String> - Task IDs that must complete first
- `estimatedEffort`: Enum - Effort estimate (SMALL, MEDIUM, LARGE)

**Relationships**:
- Belongs to one `ContentChapter`
- May require one or more `CodeExample` updates
- May require one or more `ExternalLink` verifications

**Validation Rules**:
- `taskId` must be unique
- `chapterNumber` must reference valid ContentChapter
- If `parallelizable` is true, `dependencies` must be empty
- `priority` must align with chapter priority

---

### 3. CodeExample

Represents a code snippet that needs to be added or updated.

**Attributes**:
- `exampleId`: String - Unique identifier
- `feature`: String - JavaScript feature being demonstrated (e.g., "Array.toSorted()")
- `codeContent`: String - The actual JavaScript code
- `explanation`: String - Korean explanation of the code
- `targetChapter`: String - Chapter where this belongs
- `language`: String - Code language (typically "javascript")
- `tested`: Boolean - Whether code has been verified to run
- `nodeVersion`: String - Node.js version used for testing (e.g., "22.x")
- `browserSupport`: String - Browser support summary (e.g., "Chrome 110+, Firefox 115+")

**Relationships**:
- Belongs to one or more `UpdateTask`
- May relate to one `FeatureSpecification`

**Validation Rules**:
- `codeContent` must be syntactically valid JavaScript
- `tested` must be true before marking task complete
- `explanation` must be in Korean
- `codeContent` must be in English/JavaScript

**State Transitions**:
1. DRAFT → Code written but not tested
2. TESTED → Code verified to run correctly
3. INTEGRATED → Code added to chapter content
4. VERIFIED → Code confirmed in final content review

---

### 4. ExternalLink

Represents an external reference link in the content.

**Attributes**:
- `linkId`: String - Unique identifier
- `url`: String - The URL being referenced
- `linkType`: Enum - Category (MDN_DOCS, TC39_SPEC, BROWSER_COMPAT, TOOL_DOCS, GENERAL)
- `chapterNumber`: String - Chapter containing this link
- `contextDescription`: String - What the link is about
- `verificationStatus`: Enum - Status (NOT_CHECKED, VALID, BROKEN, REDIRECTED, UPDATED)
- `originalUrl`: String (optional) - Original URL if link was updated
- `lastChecked`: Date - When link was last verified
- `statusCode`: Number (optional) - HTTP status code from verification

**Relationships**:
- Belongs to one `ContentChapter`
- May be related to multiple `UpdateTask` if needs fixing

**Validation Rules**:
- `url` must be valid URL format
- `verificationStatus` must be VALID before chapter can be marked complete
- If `verificationStatus` is UPDATED, `originalUrl` must be populated

**State Transitions**:
1. NOT_CHECKED → Link not yet verified
2. VALID → Link works and points to correct content
3. BROKEN → Link returns 404 or other error
4. REDIRECTED → Link redirects to different URL (may need manual review)
5. UPDATED → Link was broken/outdated and has been updated

---

### 5. FeatureSpecification

Represents a new JavaScript feature being added to the book.

**Attributes**:
- `featureName`: String - Feature name (e.g., "Array.prototype.at()")
- `ecmaVersion`: String - ECMAScript version (e.g., "ES2022")
- `category`: Enum - Feature category (ARRAY_METHOD, OBJECT_METHOD, PROMISE_METHOD, SET_METHOD, CLASS_FEATURE, SYNTAX)
- `beginnerFriendly`: Boolean - Whether suitable for beginners
- `includionDecision`: Enum - Decision (INCLUDE, SKIP, MENTION_BRIEFLY)
- `rationale`: String - Why this decision was made
- `browserSupport`: Object - Browser version support
  - `chrome`: String (e.g., "92+")
  - `firefox`: String (e.g., "90+")
  - `safari`: String (e.g., "15.4+")
  - `edge`: String (e.g., "92+")
- `targetChapters`: Array<String> - Chapters where feature should be added
- `exampleCode`: String - Example code demonstrating the feature
- `mdnLink`: String - Link to MDN documentation

**Relationships**:
- Generates one or more `UpdateTask`
- Has one or more `CodeExample`
- May update multiple `ContentChapter`

**Validation Rules**:
- If `inclusionDecision` is INCLUDE, `targetChapters` must be non-empty
- If `beginnerFriendly` is false, `inclusionDecision` should be SKIP or MENTION_BRIEFLY
- `browserSupport` must have all four major browsers specified

---

## Entity Relationship Diagram

```
┌─────────────────┐
│ ContentChapter  │
│ --------------- │
│ + filePath      │
│ + chapterNumber │◄────┐
│ + title         │     │
│ + priority      │     │
│ + updateStatus  │     │
└────────┬────────┘     │
         │              │
         │ 1:N          │
         │              │
         ▼              │
┌─────────────────┐     │
│   UpdateTask    │     │
│ --------------- │     │
│ + taskId        │     │
│ + chapterNumber │─────┘
│ + taskType      │
│ + description   │◄────┐
│ + newFeature    │     │
│ + priority      │     │
└────────┬────────┘     │
         │              │
         │ 1:N          │
         │              │
         ▼              │
┌─────────────────┐     │
│   CodeExample   │     │
│ --------------- │     │
│ + exampleId     │     │
│ + feature       │─────┘
│ + codeContent   │
│ + explanation   │
│ + tested        │
└─────────────────┘

┌─────────────────┐
│ ExternalLink    │
│ --------------- │
│ + linkId        │
│ + url           │
│ + linkType      │
│ + verification  │
└────────┬────────┘
         │
         │ N:1
         │
         ▼
┌─────────────────┐
│ ContentChapter  │
└─────────────────┘

┌──────────────────┐
│FeatureSpecifctn  │
│ ---------------  │
│ + featureName    │
│ + ecmaVersion    │
│ + decision       │
└────────┬─────────┘
         │
         │ 1:N
         │
         ▼
┌─────────────────┐
│   UpdateTask    │
└─────────────────┘
```

---

## Update Workflow State Machine

```
ContentChapter States:
PENDING → IN_PROGRESS → COMPLETED → VERIFIED

UpdateTask States:
NOT_STARTED → IN_PROGRESS → COMPLETED → VERIFIED

CodeExample States:
DRAFT → TESTED → INTEGRATED → VERIFIED

ExternalLink States:
NOT_CHECKED → [VALID | BROKEN | REDIRECTED] → UPDATED → VALID
```

---

## Data Validation Rules Summary

### Pre-Update Validation
1. All `ContentChapter` files must exist and be readable
2. All `ExternalLink` URLs must be verified before marking chapter complete
3. All `CodeExample` snippets must pass syntax validation
4. All `CodeExample` snippets must be tested in Node.js 22

### During Update Validation
1. Changes must preserve Korean explanations and English code
2. New features must align with constitutional principle of beginner-friendliness
3. Updates must maintain existing learning progression (no forward dependencies)
4. Code formatting must follow Prettier rules (.prettierrc)

### Post-Update Validation
1. All tasks marked COMPLETED must have passed content review
2. All code examples must be TESTED and VERIFIED
3. All external links must be VALID
4. Chapter must pass constitutional review checklist

---

## Chapter Update Priority Matrix

Based on research findings, chapters are categorized by update priority:

### CRITICAL Priority
- **270-class.mdx**: Fix incorrect class fields status statement

### HIGH Priority
- **100-javascript.mdx**: Update ECMAScript versions, browser versions, tool references, external links
- **180-object.mdx**: Add `Object.hasOwn()`, `Object.groupBy()`
- **190-array.mdx**: Add `at()`, `findLast()`, `findLastIndex()`, immutable methods
- **282-data-structures.mdx**: Add Set methods
- **285-async.mdx**: Add `Promise.withResolvers()`, `Promise.try()`

### MEDIUM Priority
- **240-object-in-depth.mdx**: Consider `Object.groupBy()` placement
- **250-builtins.mdx**: Update Promise methods section
- **255-fp.mdx**: Emphasize immutable array methods
- **290-exception.mdx**: Add error cause parameter
- **293-module.mdx**: Verify ESM current status

### LOW/MINIMAL Priority
- **020-tutorial.mdx**: Verify Node.js installation instructions
- **120-value-variable-type.mdx**: Minimal changes
- **130-number.mdx**: Verify numeric separators
- **140-string.mdx**: Verify no deprecated methods
- **150, 160, 175, 220, 230, 260, 999**: Minimal or no changes needed

---

## Summary Statistics

**Total Chapters**: 24 MDX files
**Critical Updates**: 1 chapter
**High Priority Updates**: 5 chapters
**Medium Priority Updates**: 5 chapters
**Low/Minimal Priority**: 13 chapters

**Estimated Tasks**: 30-40 update tasks
**New Features to Add**: ~15 JavaScript features
**External Links to Verify**: ~10-15 links
**Code Examples to Create**: ~20-30 examples

---

**Data Model Complete**: 2025-10-02
**Ready for**: Quickstart validation guide creation
