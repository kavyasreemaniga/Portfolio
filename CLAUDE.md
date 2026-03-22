# CLAUDE.md

Claude-specific onboarding and working notes for this repository.

## Project Context

This is a React + Vite portfolio with three active routes:

- Home (`/`)
- Projects (`/projects`)
- Resume (`/resume`)

Content is centralized in:

- `src/data/portfolioData.js`

## First Commands to Run

```bash
npm install
npm run dev
```

Before finalizing changes:

```bash
npm run build
```

## Architecture Map

- `src/main.jsx`: BrowserRouter bootstrap
- `src/App.jsx`: top nav + route switch
- `src/pages/HomePage.jsx`: hero + stack + experience snapshot
- `src/pages/ProjectsPage.jsx`: searchable/filterable project archive
- `src/pages/ResumePage.jsx`: resume narrative and credentials
- `src/index.css`: global visual system and responsive behavior
- `src/LegacyPortfolio.jsx`: preserved older one-page implementation

## Claude Workflow Guidance

1. Read `src/data/portfolioData.js` first before editing page copy.
2. Keep edits small and milestone-oriented.
3. Prefer adding reusable data fields instead of hardcoding values in page components.
4. Maintain privacy defaults for external links:
   - `rel="noopener noreferrer"`
   - `referrerPolicy="no-referrer"`
5. Validate with `npm run build`.

## Suggested Prompt Patterns

Use prompts like:

- "Update only `portfolioData.js` with new project details and keep UI unchanged."
- "Improve mobile behavior for Home hero without changing desktop layout."
- "Add a new route page and wire it through `App.jsx` and nav."
- "Run a privacy sweep for inspectable personal data and patch exposures."

## Do Not

- Do not delete `src/LegacyPortfolio.jsx` unless explicitly requested.
- Do not modify `sample Stitch Prototypes/` unless asked.
- Do not introduce secrets or environment tokens into client code.
