# Portfolio Template Refactor TODO

## Goal
Build a reusable portfolio template system that learns from this codebase without modifying the live app behavior. All planning and migration work is isolated in `project-plan/`.

## Milestones

### M1 - Config Architecture Design
- Define JSON config split:
  - `profile.json`
  - `theme.json`
  - `sections.json`
  - `projects.json`
  - `resume.json`
- Define required vs optional fields and defaults.
- Define runtime validation strategy and error model.

### M2 - Component Configurability Map
- Map every hardcoded string/label/link in current pages to a config key.
- Define component props contract for:
  - hero
  - social links
  - stack groups
  - experience timeline
  - project cards
  - certifications
  - CTA/footer labels
- Define feature flags for section visibility and contact mode.

### M3 - Theme Tokenization
- Move styling tokens to config-driven CSS variables.
- Define theme schema:
  - palette
  - radii
  - spacing scale
  - typography hooks
- Define fallback behavior when theme keys are missing.

### M4 - Orchestration Layer (Scaffold)
- Design CLI orchestration script:
  - `template:init <variant-name>`
  - `template:validate`
  - `template:format`
- Define `portfolio-variants/<slug>/` structure.
- Define active variant selection mechanism.

### M5 - Migration and Cutover Plan
- Plan non-breaking migration path from current `portfolioData.js`.
- Define parity checklist by route:
  - `/`
  - `/projects`
  - `/resume`
- Define deprecation steps for legacy hardcoded paths.

### M6 - QA + Release Checklist
- Config validation tests.
- Build verification (`npm run build`).
- Mobile/desktop snapshot checks.
- Link/privacy scan (referrer and outbound link policies).
- GitHub Pages build/deploy verification.

## Acceptance Criteria
- No page copy/content needs component edits for normal portfolio updates.
- Theme changes can be made from JSON config.
- New portfolio variant can be scaffolded from CLI in one command.
- Missing config fields fail clearly or use documented defaults.
- Existing routes and UX remain stable.

## Deliverables
- Config schema docs (`project-plan/CONFIG-SCHEMA.md`)
- Migration map (`project-plan/MIGRATION-NOTES.md`)
- Implementation PR milestones aligned to this TODO.
