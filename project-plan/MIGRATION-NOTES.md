# Migration Notes (Current Portfolio -> Template Config)

## Current Source of Truth
- `src/data/portfolioData.js` currently stores:
  - profile
  - techStack
  - experience
  - projects
  - education
  - certifications

## Target Source of Truth
- Move data into JSON files under a new config root (to be decided in implementation phase).
- Keep current components as presentation-only with normalized config selectors.

## Mapping Plan

### Home Page
- `profile.name` -> `profile.json.name`
- `profile.role` -> `profile.json.role`
- `profile.blurb` -> `profile.json.blurb`
- social links -> `profile.json.links`
- hero image behavior -> section/theme config toggle
- stack snapshot -> `resume.json.techStack`
- recent experience snapshot -> first N items from `resume.json.experience`

### Projects Page
- full project list -> `projects.json`
- featured project logic -> `featured` flag
- filters -> derived from `category`
- search index text -> derived from title + description + tags/tech

### Resume Page
- summary + role -> `profile.json` + resume summary block
- capabilities -> `resume.json.techStack`
- experience -> `resume.json.experience`
- education -> `resume.json.education`
- certifications -> `resume.json.certifications`

## Hardcoded Items to Remove During Refactor
- Section labels and button labels currently inline in page components.
- Route-level static headings currently inline in page components.
- Any direct text fallback in components that duplicates config values.

## Backward-Compatible Migration Strategy
1. Add config loader + validator layer.
2. Read from JSON config first; keep old data file as fallback for one PR.
3. Flip components to normalized config selectors.
4. Remove fallback once parity is verified across routes.

## Verification Checklist
- `/` renders same user-facing content as pre-migration.
- `/projects` search/filter/featured behavior unchanged.
- `/resume` section order and content parity maintained.
- `npm run build` passes.
- no new direct personal data hardcoding introduced.
