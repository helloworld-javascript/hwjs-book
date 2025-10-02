
# Implementation Plan: JavaScript Tutorial Book Content Update

**Branch**: `001-it-s-been` | **Date**: 2025-10-02 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/Users/seungha/dev/hwjs-book/specs/001-it-s-been/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from file system structure or context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, `QWEN.md` for Qwen Code or `AGENTS.md` for opencode).
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Update JavaScript tutorial book content to reflect current standards as of 2025. The book's core content was last substantially updated in 2021 (4 years ago). This update will modernize ECMAScript version references (ES2022-ES2025), update external links, refresh browser compatibility information, ensure code examples use current patterns, mark deprecated features, and evaluate new JavaScript features for inclusion. The approach is chapter-by-chapter content review and update following constitutional principles of accuracy, clarity, and modern JavaScript focus.

## Technical Context
**Language/Version**: JavaScript (ES2025/ES2024), Gatsby 2.x (static site generator), TypeScript 4.2+
**Primary Dependencies**: Gatsby, @primer/gatsby-theme-doctocat, React 16.13+, MDX for content
**Storage**: Git repository, 24 MDX content files in `content/pages/`
**Testing**: Manual content review, code example validation (Node.js latest LTS)
**Target Platform**: Static website deployment (Netlify), modern browsers (Chrome, Firefox, Safari, Edge 2025 versions)
**Project Type**: Documentation site (single Gatsby project)
**Performance Goals**: N/A (static content update, not performance focused)
**Constraints**: Must maintain backward compatibility with existing learning progression, Korean language explanations with English code
**Scale/Scope**: 24 content chapters covering JavaScript fundamentals to advanced topics, chapter-by-chapter update approach

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### I. Accuracy & Currency ✅ PASS
- **Requirement**: Content MUST reflect latest JavaScript standards and best practices, verified before publication
- **Compliance**: This update specifically targets accuracy by researching ES2022-ES2025 features, verifying current MDN/TC39 documentation, and updating all version references
- **Status**: PASS - Core requirement of this feature

### II. Clarity & Accessibility ✅ PASS
- **Requirement**: Concise, understandable expressions for readers with no programming experience
- **Compliance**: Updates will maintain existing Korean explanations style, focus on improving clarity where outdated information caused confusion
- **Status**: PASS - No new complexity introduced

### III. Progressive Learning Structure ✅ PASS
- **Requirement**: Logical progression, no forward dependencies
- **Compliance**: Chapter-by-chapter update maintains existing learning sequence, only modernizing content within each chapter
- **Status**: PASS - Preserves existing structure

### IV. Practical Examples ✅ PASS
- **Requirement**: Executable code examples demonstrating real-world usage
- **Compliance**: All updated code examples will be tested in Node.js latest LTS, ensuring they run correctly
- **Status**: PASS - Enhanced by using current JavaScript syntax

### V. Modern JavaScript Focus ✅ PASS
- **Requirement**: Prioritize ES6+ syntax, mark legacy patterns
- **Compliance**: This is the primary goal - updating to ES2022-ES2025, marking deprecated patterns from 2021
- **Status**: PASS - Core requirement of this feature

**Initial Constitution Check: PASS** - All five constitutional principles are satisfied by this update approach.

## Project Structure

### Documentation (this feature)
```
specs/001-it-s-been/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (JavaScript features research 2021-2025)
├── data-model.md        # Phase 1 output (Content update entities/structure)
├── quickstart.md        # Phase 1 output (Update validation process)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Content Files (repository root)
```
content/
├── pages/
│   ├── 020-tutorial.mdx                # Tutorial introduction
│   ├── 100-javascript.mdx              # JavaScript introduction (ECMAScript versions - HIGH PRIORITY)
│   ├── 120-value-variable-type.mdx     # Values, variables, types
│   ├── 130-number.mdx                  # Number type
│   ├── 140-string.mdx                  # String type
│   ├── 150-boolean.mdx                 # Boolean type
│   ├── 160-null-undefined.mdx          # Null & undefined
│   ├── 170-function.mdx                # Functions
│   ├── 175-control-statement.mdx       # Control flow
│   ├── 180-object.mdx                  # Objects
│   ├── 190-array.mdx                   # Arrays
│   ├── 220-value-in-depth.mdx          # Advanced values
│   ├── 230-function-in-depth.mdx       # Advanced functions
│   ├── 240-object-in-depth.mdx         # Advanced objects
│   ├── 245-operator-in-depth.mdx       # Advanced operators (Optional chaining added 2021)
│   ├── 250-builtins.mdx                # Built-in objects
│   ├── 255-fp.mdx                      # Functional programming
│   ├── 260-iteration.mdx               # Iteration
│   ├── 270-class.mdx                   # Classes
│   ├── 282-data-structures.mdx         # Data structures
│   ├── 285-async.mdx                   # Async programming
│   ├── 290-exception.mdx               # Exception handling
│   ├── 293-module.mdx                  # Modules
│   └── 999-misc.mdx                    # Miscellaneous
├── about.mdx
└── index.mdx
```

**Structure Decision**: Documentation site with 24 MDX content chapters. Updates will be applied chapter-by-chapter to each `.mdx` file in `content/pages/`. No structural changes to the Gatsby site itself - only content updates within existing files.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:
   ```
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Generate contract tests** from contracts:
   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:
   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh claude`
     **IMPORTANT**: Execute it exactly as specified above. Do not add or remove any arguments.
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:

1. **From Research.md** - Extract JavaScript features to add:
   - Priority 1 (CRITICAL): Class fields status fix → 1 task
   - Priority 2 (HIGH): ES2022-ES2025 features → ~15 tasks (array methods, Object methods, Set methods, Promise methods)
   - Priority 3 (MEDIUM): Link verifications, tool version updates → ~5-8 tasks
   - Priority 4 (LOW): Style and consistency checks → ~3-5 tasks

2. **From Data-Model.md** - Generate tasks by entity type:
   - ContentChapter updates (24 chapters, prioritized by CRITICAL/HIGH/MEDIUM/LOW) → ~24 tasks
   - CodeExample creation and testing → integrated into chapter tasks
   - ExternalLink verification → separate validation tasks
   - FeatureSpecification implementation → one task per new JS feature

3. **From Quickstart.md** - Create validation tasks:
   - Constitutional compliance check → 1 validation task
   - Code example testing (8 test scripts) → 1 task per feature test
   - External link verification → batched by priority
   - Build and dev server testing → 2 final validation tasks

**Task Categorization**:

- **Phase 3.1: Critical Fix** (1 task)
  - Fix class fields status statement (270-class.mdx)

- **Phase 3.2: High Priority Content Updates** (5 tasks, parallelizable)
  - Update 100-javascript.mdx (versions, browsers, tools, links)
  - Update 190-array.mdx (at(), findLast, immutable methods)
  - Update 180-object.mdx (Object.hasOwn, Object.groupBy)
  - Update 282-data-structures.mdx (Set methods)
  - Update 285-async.mdx (Promise.withResolvers, Promise.try)

- **Phase 3.3: Medium Priority Content Updates** (5 tasks, parallelizable)
  - Update 240-object-in-depth.mdx (groupBy placement consideration)
  - Update 250-builtins.mdx (Promise methods)
  - Update 255-fp.mdx (emphasize immutability)
  - Update 290-exception.mdx (error cause)
  - Update 293-module.mdx (ESM status)

- **Phase 3.4: Low Priority Content Updates** (13 tasks, batched)
  - Batch update minimal-change chapters (020, 120, 130, 140, 150, 160, 170, 175, 220, 230, 245, 260, 999)
  - Verify Node.js installation instructions
  - Check for deprecated methods
  - Verify numeric separators, optional chaining

- **Phase 3.5: Code Example Testing** (8 tasks, parallelizable after content updates)
  - Test ES2022 features (Array.at, Object.hasOwn)
  - Test ES2023 features (findLast, immutable arrays)
  - Test ES2024 features (Object.groupBy, Promise.withResolvers)
  - Test ES2025 features (Set methods, Promise.try)

- **Phase 3.6: External Link Verification** (3 tasks)
  - Verify critical links (TC39, MDN, Can I Use)
  - Verify tool documentation links (Babel, Node.js)
  - Update broken or redirected links

- **Phase 3.7: Build & Validation** (3 tasks, sequential at end)
  - Run Prettier formatting check
  - Run Gatsby build test
  - Run dev server and visual spot check

**Ordering Strategy**:

1. **Sequential Dependencies**:
   - Phase 3.1 (Critical Fix) must complete first
   - Phases 3.2-3.4 (Content Updates) can run in parallel within each phase
   - Phase 3.5 (Code Testing) depends on content updates completing
   - Phase 3.6 (Link Verification) can run parallel with Phase 3.5
   - Phase 3.7 (Build & Validation) must run last

2. **Parallelization Markers**:
   - Mark [P] for tasks in same phase that modify different files
   - No [P] for tasks modifying same file
   - High priority chapter updates [P] (different files)
   - Code example tests [P] (independent test scripts)

3. **Chapter-by-Chapter Approach**:
   - Each chapter update is one atomic task
   - Within a chapter task: research → update text → add code examples → verify
   - Follow constitutional principles per chapter
   - Test code examples immediately after adding

**Task Numbering Example**:
- T001: Fix class fields status in 270-class.mdx (CRITICAL)
- T002: [P] Update ECMAScript versions in 100-javascript.mdx (HIGH)
- T003: [P] Add Array.at() to 190-array.mdx (HIGH)
- T004: [P] Add Object.hasOwn() and Object.groupBy() to 180-object.mdx (HIGH)
- T005: [P] Add Set methods to 282-data-structures.mdx (HIGH)
- T006: [P] Add Promise helpers to 285-async.mdx (HIGH)
- T007-T011: [P] Medium priority chapter updates
- T012-T024: [P] Low priority chapter updates (batched)
- T025-T032: [P] Code example testing (ES2022-ES2025)
- T033-T035: External link verification
- T036: Prettier formatting
- T037: Gatsby build test
- T038: Dev server visual check

**Estimated Output**:
- **Total Tasks**: 35-40 numbered, ordered tasks
- **Parallelizable**: ~25-30 tasks (marked with [P])
- **Sequential**: ~8-10 tasks (critical, validation)
- **Estimated Time**: 10-15 hours total work (with parallelization: 5-7 hours)

**Dependencies Visualization**:
```
T001 (Critical Fix)
  ↓
[T002, T003, T004, T005, T006] (High Priority Content - Parallel)
  ↓
[T007-T011] (Medium Priority Content - Parallel)
  ↓
[T012-T024] (Low Priority Content - Parallel)
  ↓
[T025-T032] (Code Testing - Parallel) || [T033-T035] (Link Verification - Parallel)
  ↓
T036 (Prettier) → T037 (Build) → T038 (Visual Check)
```

**Success Criteria per Task**:
- Content update tasks: Pass constitutional review checklist
- Code testing tasks: All assertions pass in Node.js 22
- Link verification tasks: All links return HTTP 200 and correct content
- Build tasks: No errors, successful compilation
- Final task: Dev server runs, updated pages render correctly

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
  - ✅ ES2022-ES2025 features researched
  - ✅ Browser/tool ecosystem changes documented
  - ✅ research.md created
- [x] Phase 1: Design complete (/plan command)
  - ✅ data-model.md created (content update structure)
  - ✅ quickstart.md created (validation guide)
  - ✅ CLAUDE.md updated (agent context)
- [x] Phase 2: Task planning approach described (/plan command)
  - ✅ Task generation strategy defined
  - ✅ 35-40 tasks estimated
  - ✅ Parallelization strategy documented
  - ✅ Dependencies mapped
- [ ] Phase 3: Tasks generated (/tasks command - NEXT STEP)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
  - ✅ Accuracy & Currency: Content updates target latest JS standards
  - ✅ Clarity & Accessibility: Maintains beginner-friendly approach
  - ✅ Progressive Learning: Preserves chapter structure
  - ✅ Practical Examples: All features include code examples
  - ✅ Modern JavaScript: Focuses on ES2022-ES2025 features
- [ ] Post-Design Constitution Check: PENDING (will verify after Phase 1)
- [x] All NEEDS CLARIFICATION resolved: N/A (no unknowns in spec)
- [x] Complexity deviations documented: NONE (no violations)

**Artifacts Generated**:
- ✅ `/specs/001-it-s-been/plan.md` (this file)
- ✅ `/specs/001-it-s-been/research.md` (JavaScript 2021-2025 research)
- ✅ `/specs/001-it-s-been/data-model.md` (content update entities)
- ✅ `/specs/001-it-s-been/quickstart.md` (validation guide)
- ✅ `/Users/seungha/dev/hwjs-book/CLAUDE.md` (updated agent context)
- ⏳ `/specs/001-it-s-been/tasks.md` (awaiting /tasks command)

**Ready for Next Phase**: ✅ YES - Run `/tasks` command to generate implementation tasks

---
*Based on Constitution v1.0.0 - See `/memory/constitution.md`*
