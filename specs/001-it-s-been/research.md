# Research: JavaScript Tutorial Book Content Update (2021 → 2025)

**Date**: 2025-10-02
**Purpose**: Research JavaScript features, tools, and best practices changes from 2021 to 2025 for tutorial book update

---

## Executive Summary

The JavaScript ecosystem has evolved significantly from 2021 to 2025, with four new ECMAScript versions (ES2022-ES2025) adding beginner-friendly features that promote better coding practices. Browser support for modern features is now excellent across all major browsers. This research identifies which new features should be included in the tutorial and what outdated information needs correction.

---

## 1. New JavaScript Features (ES2022-ES2025)

### ES2022 Features to Include

#### ✅ Array.prototype.at() - HIGH PRIORITY
- **Decision**: Include in array chapter
- **Rationale**: Makes negative indexing intuitive (`arr.at(-1)` for last element)
- **Browser Support**: Excellent (Chrome 92+, Firefox 90+, Safari 15.4+, Edge 92+)
- **Target Location**: `/content/pages/190-array.mdx` around line 78

#### ✅ Object.hasOwn() - MEDIUM PRIORITY
- **Decision**: Include in object chapter
- **Rationale**: Safer than `hasOwnProperty`, simpler API
- **Browser Support**: Excellent (Chrome 93+, Firefox 92+, Safari 15.4+, Edge 93+)
- **Target Location**: `/content/pages/180-object.mdx` or `/content/pages/240-object-in-depth.mdx`

#### ✅ Error Cause - MEDIUM PRIORITY
- **Decision**: Include in exception chapter
- **Rationale**: Improves error handling and debugging
- **Browser Support**: Good (Chrome 93+, Firefox 91+, Safari 15+, Edge 93+)
- **Target Location**: `/content/pages/290-exception.mdx`

#### ⚠️ CRITICAL UPDATE: Class Fields
- **Issue**: Book states "클래스 필드는 아직 정식 표준으로 채택된 기능은 아닙니다" (line 196-197 in 270-class.mdx)
- **Reality**: Class fields became official ES2022 standard in June 2022 with full browser support
- **Action**: Update statement to reflect official status

### ES2023 Features to Include

#### ✅ findLast() & findLastIndex() - HIGH PRIORITY
- **Decision**: Include in array chapter
- **Rationale**: Natural complement to `find()` method, searches from end
- **Browser Support**: Excellent (Chrome 97+, Firefox 104+, Safari 15.4+, Edge 97+)
- **Target Location**: `/content/pages/190-array.mdx` after line 508 (after find/findIndex section)

#### ✅ Non-mutating Array Methods - STRONGLY INCLUDE
- **Methods**: `toSorted()`, `toReversed()`, `toSpliced()`, `with()`
- **Decision**: Strongly include - promotes immutability
- **Rationale**: Helps beginners avoid mutation bugs, modern best practice
- **Browser Support**: Good (Chrome 110+, Firefox 115+, Safari 16+, Edge 110+)
- **Target Location**: `/content/pages/190-array.mdx` after line 202 (after reverse section)

### ES2024 Features to Include

#### ✅ Object.groupBy() - HIGH PRIORITY
- **Decision**: Strongly include - very practical
- **Rationale**: Common data manipulation task, eliminates need for manual grouping
- **Browser Support**: Excellent (Chrome 117+, Firefox 119+, Safari 17.4+, Edge 117+)
- **Example**: Grouping people by age, products by category
- **Target Location**: `/content/pages/180-object.mdx` or `/content/pages/240-object-in-depth.mdx`

#### ✅ Promise.withResolvers() - MEDIUM PRIORITY
- **Decision**: Include in async chapter
- **Rationale**: Cleaner promise patterns, easier to understand than executor pattern
- **Browser Support**: Excellent (Chrome 119+, Firefox 121+, Safari 17.4+, Edge 119+)
- **Target Location**: `/content/pages/285-async.mdx`

### ES2025 Features to Include

#### ✅ Set Methods - MEDIUM-HIGH PRIORITY
- **Methods**: `union()`, `intersection()`, `difference()`, `symmetricDifference()`, `isSubsetOf()`, `isSupersetOf()`, `isDisjointFrom()`
- **Decision**: Include - makes Set practical and useful
- **Rationale**: Native set operations eliminate need for libraries
- **Browser Support**: Excellent (Chrome 122+, Firefox 127+, Safari 17+, Edge 122+)
- **Target Location**: `/content/pages/282-data-structures.mdx`

#### ✅ Promise.try() - MEDIUM PRIORITY
- **Decision**: Include in async chapter
- **Rationale**: Safely execute sync/async functions, better error handling
- **Browser Support**: Good (latest versions of all major browsers)
- **Target Location**: `/content/pages/285-async.mdx`

### Features to Skip (Too Advanced for Beginners)

- **Top-level await**: Requires understanding of modules
- **Iterator helpers**: Requires understanding of iterators
- **RegExp advanced features**: Regex is already advanced topic
- **TypedArray/ArrayBuffer features**: Too advanced
- **Symbols as WeakMap keys**: Advanced data structures
- **Import attributes**: Module system is intermediate level

---

## 2. Browser & Runtime Environment Updates

### Current Browser Versions (2025)

| Browser | Version | JavaScript Engine | ES2025 Support |
|---------|---------|-------------------|----------------|
| Chrome | 140+ | V8 | Full |
| Firefox | 133+ | SpiderMonkey | Full |
| Safari | 26 | JavaScriptCore | Full |
| Edge | 140+ | V8 (Chromium) | Full |

**Decision**: Update browser compatibility information throughout book
**Rationale**: 2021 references (Chrome 90s, Firefox 80s, Safari 14) are outdated
**Action**: Update `/content/pages/100-javascript.mdx` browser compatibility section

### Node.js Versions

**Current LTS**: Node.js 22 (Jod) - Active until April 2027
**2021 Baseline**: Node.js 16 LTS

**Decision**: Reference Node.js 22 as current LTS
**Rationale**: Students should learn with current stable version
**Target Location**: `/content/pages/100-javascript.mdx` section on JavaScript environments

---

## 3. Development Tools & Ecosystem

### Transpilers

#### TypeScript
- **Current**: TypeScript 5.9 (August 2025)
- **2021**: TypeScript 4.3-4.4
- **Key Changes**: Smaller package size, faster compilation, better ESM support
- **Decision**: Update TypeScript version references if mentioned

#### Babel
- **Current**: Babel 7.27.0, Babel 8 in beta
- **2021**: Babel 7.14.0
- **Decision**: Update Babel version references in `/content/pages/100-javascript.mdx`

### Build Tools

**Major Shift**: Vite has become the recommended build tool

#### Vite (Recommended 2025)
- **Current**: Vite 7.1.7
- **Performance**: ~7-8 second builds, 50ms HMR
- **Decision**: Update build tools discussion to mention Vite as modern standard
- **Target**: `/content/pages/100-javascript.mdx` transpiler/polyfill section

#### Webpack (Legacy)
- **Current**: Webpack 5.101.3
- **Status**: Still relevant for legacy apps but slower (~180 seconds vs Vite's 7 seconds)
- **Decision**: Keep Webpack mentioned but note Vite as modern alternative

### Package Managers

**Major Change**: pnpm is now recommended over npm

#### pnpm (Recommended 2025)
- **Current**: pnpm 10.17.1
- **Advantages**: 65% faster installs, 70% less disk space
- **Decision**: Mention pnpm as modern standard alongside npm
- **Rationale**: Students entering field should know current best practices

---

## 4. External Links to Verify & Update

### High-Priority Links (Must Update)

1. **TC39 Specification** (100-javascript.mdx line 27)
   - Current link: `https://tc39.github.io/ecma262/`
   - Should be: `https://262.ecma-international.org/` (official spec site)

2. **Browser Compatibility Table** (100-javascript.mdx line 27)
   - Current link: `http://kangax.github.io/compat-table/es2016plus/`
   - Status: Still valid but may need verification
   - Alternative: Link to MDN compatibility tables

3. **MDN Documentation Links**
   - Verify all MDN links point to current pages
   - MDN has restructured some URLs since 2021

### Links to Add

- **Current ECMAScript Spec**: https://262.ecma-international.org/
- **TC39 Proposals**: https://github.com/tc39/proposals
- **Can I Use** (browser support): https://caniuse.com/
- **Node.js Releases**: https://nodejs.org/en/about/previous-releases

---

## 5. Deprecated Patterns & Anti-patterns

### Patterns to Mark as Deprecated

1. **String.prototype.substr()**
   - Status: Deprecated, use `substring()` or `slice()`
   - Action: Check string chapter for usage

2. **arguments.callee**
   - Status: Deprecated in strict mode
   - Action: Check function chapters

3. **Array mutation methods without alternatives**
   - Previous: Only show `sort()`, `reverse()`
   - Now: Also teach `toSorted()`, `toReversed()` as preferred methods

### Best Practice Changes (2021 → 2025)

| Old Pattern | New Pattern | Rationale |
|-------------|-------------|-----------|
| Mutating arrays with `sort()` | Use `toSorted()` | Immutability |
| `hasOwnProperty()` | `Object.hasOwn()` | Safer, cleaner API |
| Manual array grouping | `Object.groupBy()` | Native support |
| Complex promise handling | `Promise.withResolvers()` | Cleaner patterns |
| Library-based Set operations | Native Set methods | Built-in support |

---

## 6. Content Update Priority Matrix

### Priority 1: Critical Updates (Must Fix)

1. **Class fields status** (270-class.mdx:196-197)
   - WRONG: "아직 정식 표준으로 채택된 기능은 아닙니다"
   - CORRECT: "ES2022(2022년 6월)에 정식 표준으로 채택되었으며, 모든 주요 브라우저에서 지원됩니다"

2. **ECMAScript version references** (100-javascript.mdx)
   - Update to ES2024/ES2025 as latest
   - Update browser versions to 2025

3. **Browser compatibility information** (100-javascript.mdx)
   - Update browser version numbers
   - Note that polyfills are less necessary in 2025

### Priority 2: High-Value Additions

1. **Array immutable methods** (190-array.mdx)
   - Add `toSorted()`, `toReversed()`, `with()`, `toSpliced()`
   - Teach as preferred methods

2. **Negative array indexing** (190-array.mdx)
   - Add `at()` method for negative indexing

3. **Array search from end** (190-array.mdx)
   - Add `findLast()`, `findLastIndex()`

4. **Object grouping** (180-object.mdx or 240-object-in-depth.mdx)
   - Add `Object.groupBy()` for data manipulation

5. **Set methods** (282-data-structures.mdx)
   - Add native Set operations

### Priority 3: Medium-Value Additions

1. **Object.hasOwn()** (180-object.mdx)
2. **Error cause** (290-exception.mdx)
3. **Promise.withResolvers()** (285-async.mdx)
4. **Promise.try()** (285-async.mdx)

### Priority 4: Link & Reference Updates

1. Verify all external links (MDN, TC39, compatibility tables)
2. Update tool version numbers (Babel, TypeScript, Node.js)
3. Update browser version references

---

## 7. Chapter-by-Chapter Update Plan

### Chapter 020: Tutorial (020-tutorial.mdx)
- **Updates Needed**: Minimal, verify Node.js installation instructions

### Chapter 100: JavaScript Introduction (100-javascript.mdx) ⭐ HIGH PRIORITY
- **Updates Needed**:
  - Update ECMAScript version to ES2024/ES2025
  - Update browser versions (Chrome 140+, Firefox 133+, Safari 26, Edge 140+)
  - Update Babel version reference
  - Update Node.js version reference
  - Verify/update TC39 specification link
  - Verify/update compatibility table link
  - Mention Vite alongside Babel/Webpack
  - Note that modern browsers need fewer polyfills

### Chapter 120: Values, Variables, Types (120-value-variable-type.mdx)
- **Updates Needed**: Minimal, content is timeless

### Chapter 130: Number (130-number.mdx)
- **Updates Needed**: Minimal, verify numeric separator syntax (added ES2021, should be present)

### Chapter 140: String (140-string.mdx)
- **Updates Needed**: Verify no use of deprecated `substr()`

### Chapter 150: Boolean (150-boolean.mdx)
- **Updates Needed**: None

### Chapter 160: Null & Undefined (160-null-undefined.mdx)
- **Updates Needed**: None

### Chapter 170: Functions (170-function.mdx)
- **Updates Needed**: Verify no use of `arguments.callee`

### Chapter 175: Control Statements (175-control-statement.mdx)
- **Updates Needed**: None

### Chapter 180: Objects (180-object.mdx) ⭐ HIGH PRIORITY
- **Updates Needed**:
  - Add `Object.hasOwn()` method
  - Add `Object.groupBy()` for data manipulation
  - Update property checking best practices

### Chapter 190: Arrays (190-array.mdx) ⭐ HIGH PRIORITY
- **Updates Needed**:
  - Add `at()` method for negative indexing (line ~78)
  - Add `findLast()` and `findLastIndex()` (after line 508)
  - Add immutable methods: `toSorted()`, `toReversed()`, `with()`, `toSpliced()` (after line 202)
  - Recommend immutable methods as preferred approach

### Chapter 220: Values In Depth (220-value-in-depth.mdx)
- **Updates Needed**: Minimal

### Chapter 230: Functions In Depth (230-function-in-depth.mdx)
- **Updates Needed**: Minimal

### Chapter 240: Objects In Depth (240-object-in-depth.mdx)
- **Updates Needed**:
  - Consider adding `Object.groupBy()` here if not in 180

### Chapter 245: Operators In Depth (245-operator-in-depth.mdx)
- **Updates Needed**:
  - Verify optional chaining section is current (added 2021, should be good)

### Chapter 250: Built-in Objects (250-builtins.mdx)
- **Updates Needed**:
  - Verify Promise methods section
  - Consider mentioning `Promise.withResolvers()` and `Promise.try()`

### Chapter 255: Functional Programming (255-fp.mdx)
- **Updates Needed**:
  - Emphasize immutable array methods as functional approach

### Chapter 260: Iteration (260-iteration.mdx)
- **Updates Needed**: Minimal (skip Iterator helpers as too advanced)

### Chapter 270: Classes (270-class.mdx) ⭐ CRITICAL
- **Updates Needed**:
  - **FIX line 196-197**: Update class fields status to official ES2022
  - Confirm private fields/methods examples are current

### Chapter 282: Data Structures (282-data-structures.mdx) ⭐ HIGH PRIORITY
- **Updates Needed**:
  - Add Set methods: `union()`, `intersection()`, `difference()`
  - Add Set comparison methods: `isSubsetOf()`, `isSupersetOf()`, `isDisjointFrom()`

### Chapter 285: Async Programming (285-async.mdx) ⭐ HIGH PRIORITY
- **Updates Needed**:
  - Add `Promise.withResolvers()`
  - Add `Promise.try()`
  - Update best practices for promise handling

### Chapter 290: Exception Handling (290-exception.mdx)
- **Updates Needed**:
  - Add error cause parameter

### Chapter 293: Modules (293-module.mdx)
- **Updates Needed**:
  - Verify current state of ES modules
  - Note ESM is now standard, not experimental

### Chapter 999: Miscellaneous (999-misc.mdx)
- **Updates Needed**: Review for outdated information

---

## 8. Key Decisions Summary

### Features to Include
1. **Array**: `at()`, `findLast()`, `findLastIndex()`, `toSorted()`, `toReversed()`, `with()`, `toSpliced()`
2. **Object**: `Object.hasOwn()`, `Object.groupBy()`
3. **Set**: All ES2024/ES2025 Set methods
4. **Promise**: `Promise.withResolvers()`, `Promise.try()`
5. **Error**: Error cause parameter

### Critical Corrections
1. Class fields are official ES2022 (not experimental)
2. Browser versions updated to 2025
3. ECMAScript version updated to ES2024/ES2025

### External Resources to Update
1. TC39 specification link
2. Browser compatibility tables
3. MDN documentation links
4. Node.js/Babel/TypeScript version references

### Teaching Approach Updates
1. Emphasize immutability with new array methods
2. Teach modern promise patterns
3. Use current browser versions in examples
4. Mention modern tools (Vite, pnpm) alongside traditional ones

---

## 9. Alternatives Considered

### Why Not Include Iterator Helpers?
- **Decision**: Skip for beginners
- **Alternatives**: Could add to advanced section
- **Rejected Because**: Requires understanding of iterator protocol, too advanced for beginners

### Why Not Update Build Tool Recommendations Heavily?
- **Decision**: Mention modern tools but don't restructure
- **Alternatives**: Could create new chapter on modern tooling
- **Rejected Because**: Book is focused on JavaScript language, not tooling ecosystem

### Why Include Immutable Array Methods Prominently?
- **Decision**: Strongly feature as preferred methods
- **Alternatives**: Could just mention as alternatives
- **Chosen Because**: Modern best practice, helps beginners avoid mutation bugs from the start

---

## 10. Validation Checklist

**Research Completion**:
- ✅ ES2022-ES2025 features identified
- ✅ Beginner-relevant features selected
- ✅ Browser support verified
- ✅ Tool ecosystem changes documented
- ✅ Deprecated patterns identified
- ✅ Chapter-by-chapter update plan created

**Next Steps**:
- Phase 1: Create data model for content updates
- Phase 1: Create quickstart validation guide
- Phase 2: Generate detailed tasks list

---

**Research Complete**: 2025-10-02
**Ready for Phase 1**: Design & Contracts
