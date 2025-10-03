<!--
Sync Impact Report:
- Version: 1.0.0 → 1.1.0 (Added Link Integrity standards)
- Principles created: 5 core principles for JavaScript tutorial book
- Sections added: Core Principles, Content Standards (+ Link Integrity), Development Workflow, Governance
- New standards: Link validation MUST be performed before every commit (npm run test:links)
- Templates status:
  ✅ plan-template.md - aligned with accuracy and research principles
  ✅ spec-template.md - aligned with clarity and user-focused requirements
  ✅ tasks-template.md - aligned with validation and review workflow
- Tool added: tests/check-html-links.js - validates all internal and external links in built HTML
- Deferred items: NONE
- Notes: Added mandatory link checking to prevent broken links in production
-->

# JavaScript로 만나는 세상 Constitution

## Core Principles

### I. Accuracy & Currency
Content MUST reflect the latest JavaScript standards and best practices. All technical information must be researched and verified before publication.

**Rationale**: Educational content requires factual accuracy to build correct mental models. Outdated or incorrect information undermines learning outcomes and student trust.

### II. Clarity & Accessibility
Use concise, easily understandable expressions appropriate for readers with no programming experience. Avoid jargon without explanation; prefer concrete examples over abstract theory.

**Rationale**: The target audience (독자) has zero programming experience. Complex explanations create barriers to entry and reduce learning effectiveness.

### III. Progressive Learning Structure
Content must be organized in logical progression from fundamentals to advanced topics. Each section builds on previously introduced concepts without forward dependencies.

**Rationale**: Learners need scaffolded knowledge construction. Breaking the dependency order forces readers to skip around, fragmenting comprehension.

### IV. Practical Examples
Every concept MUST include executable code examples demonstrating real-world usage. Examples should be minimal, focused, and immediately testable.

**Rationale**: Programming is learned through practice. Abstract explanations without concrete examples fail to activate hands-on learning pathways.

### V. Modern JavaScript Focus
Prioritize ES6+ syntax and modern JavaScript features. Legacy patterns should be mentioned only for historical context with clear "do not use" guidance.

**Rationale**: Students entering the field should learn current industry practices. Teaching outdated patterns creates technical debt in learners' skillsets.

## Content Standards

### Technical Accuracy
- All code examples MUST be syntax-checked and tested
- Feature compatibility MUST specify browser/Node.js version requirements
- Research current MDN documentation and ECMAScript specifications before writing
- Verify examples work in latest stable JavaScript environments

### Language & Style
- Write in Korean (한국어) for explanatory text
- Use English for code, technical terms, and identifiers
- Maintain consistent terminology throughout the book
- Keep sentences short (prefer <50 characters per clause)
- Use active voice over passive constructions

### Example Quality
- Examples should be self-contained (runnable without external dependencies)
- Prefer console.log output demonstration over abstract concepts
- Include both "correct usage" and "common mistakes" where helpful
- Code snippets MUST follow Prettier formatting rules (.prettierrc)

### Link Integrity
- **Internal links MUST NOT include file extensions** (`.md`, `.mdx`)
  - Correct: `[배열](./190-array)`
  - Incorrect: `[배열](./190-array.mdx)`
- All links MUST be validated before committing via `npm run test:links`
- External links returning 4XX status codes MUST be updated or removed
- Broken links undermine user experience and content credibility

## Development Workflow

### Content Creation Process
1. **Research Phase**: Verify feature specifications against authoritative sources (MDN, TC39, ECMAScript spec)
2. **Draft Phase**: Write content following clarity and accessibility principles
3. **Example Phase**: Create tested, working code examples
4. **Review Phase**: Check against constitution compliance (accuracy, clarity, progression)
5. **Publication Phase**: Commit changes with descriptive messages

### Review Checklist (Per Content Section)
- [ ] Code examples tested and working
- [ ] **All hyperlinks verified (internal and external) - MUST run `npm run test:links` before every commit**
- [ ] Technical accuracy verified against current standards
- [ ] Language is accessible to programming beginners
- [ ] Section fits logically in learning progression
- [ ] Modern JavaScript practices demonstrated
- [ ] No unexplained jargon or undefined terms

### Change Management
- Content updates MUST maintain backward compatibility with existing learning paths
- Corrections to errors take priority over new content
- User-reported issues and pull requests should be reviewed for accuracy before merging

## Governance

### Amendment Procedure
1. Propose change with rationale and impact analysis
2. Document which principles/standards are affected
3. Update constitution version following semantic versioning
4. Propagate changes to affected templates and workflows

### Compliance Expectations
- All content contributions must be reviewed against this constitution
- Template files (.specify/templates/*.md) must align with constitutional principles
- Deviations from principles require explicit justification in commit messages
- Constitution supersedes informal practices or undocumented conventions

### Version Policy
- **MAJOR** version: Fundamental restructuring of learning approach or removal of core principles
- **MINOR** version: Addition of new principles or significant expansion of standards
- **PATCH** version: Clarifications, wording improvements, non-semantic refinements

**Version**: 1.1.0 | **Ratified**: 2025-10-02 | **Last Amended**: 2025-10-03
