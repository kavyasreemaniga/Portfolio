# Portfolio (React + Vite)

Stitch-inspired multi-page portfolio with a shared data model and mobile-first hardening updates.

## Tech Stack

- React 19
- Vite 8
- React Router DOM
- Tailwind (available in project, custom CSS currently used for page styling)

## Pages

- `/` Home
- `/projects` Projects archive with search/filter and featured bento card
- `/resume` Resume narrative page

## Project Structure

```text
src/
  App.jsx                   # App shell + top nav + route registration
  main.jsx                  # React root + BrowserRouter
  index.css                 # Global styling and responsive layout rules
  data/
    portfolioData.js        # Shared content model for all pages
  pages/
    HomePage.jsx            # Home page
    ProjectsPage.jsx        # Projects archive page
    ResumePage.jsx          # Resume page
  LegacyPortfolio.jsx       # Preserved earlier single-page version
  assets/
    hero.png                # Hero image used in home page
```

## Local Setup

1. Install Node.js 20+ (Node 24 LTS recommended).
2. Install dependencies:

```bash
npm install
```

3. Start dev server:

```bash
npm run dev
```

4. Build production bundle:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build in `dist/`
- `npm run preview` - serve built app locally
- `npm run lint` - run ESLint

## Content Updates

Most profile updates should only touch:

- `src/data/portfolioData.js`

This keeps pages consistent and avoids duplicate edits.

## Resume Download Behavior

- The top nav now links to the in-app `/resume` page.
- Use the `Download as PDF` button on `/resume` (browser print-to-PDF).
- If you want direct file download via link, add a real file at:
  - `public/resume.pdf`
  Then switch the nav action back to a direct download link.

## Security and Privacy Notes

- Direct raw email exposure was removed from active pages.
- Outbound links use `noopener noreferrer` and `no-referrer` policies.
- Page-level referrer policy is set in `index.html`.
- Keep truly sensitive data server-side; anything shipped to browser can be inspected.

## Branch and PR Milestones

Recommended workflow:

1. Create/continue a feature branch.
2. Commit one milestone at a time (layout, content, hardening, deploy).
3. Open PR per milestone for easier review and rollback.

## Free Hosting

You can host this portfolio for free using:

- GitHub Pages (good for public repos)
- Vercel (easy CI deploy + previews)
- Netlify (easy CI deploy + previews)

For GitHub Pages, deploy `dist/` from a GitHub Actions workflow on push to your main branch.

## GitHub Pages Setup (Automated)

This repo now includes an automation workflow:

- `.github/workflows/deploy-pages.yml`

### Is deployment automated already?

- Yes, once GitHub Pages is enabled in repo settings.
- The workflow auto-builds and deploys on every push to `main`.
- You can also trigger it manually from the Actions tab (`workflow_dispatch`).

### One-time GitHub setup

1. Open your GitHub repository.
2. Go to `Settings -> Pages`.
3. Under `Build and deployment`, set:
   - `Source: GitHub Actions`
4. Save.

After this, push to `main` and Pages deploys automatically.

### Notes for project/repo pages

- Workflow auto-detects base path:
  - `owner.github.io` repo -> `/`
  - any other repo -> `/<repo-name>/`
- Workflow also creates `dist/404.html` from `index.html` to reduce refresh/route issues for client-side routing pages.

### Verify deployment

1. Push changes to `main`.
2. Open `Actions` tab and wait for `Deploy to GitHub Pages` to succeed.
3. Open `Settings -> Pages` to see the published URL.

## Agent Docs

- [AGENTS.md](./AGENTS.md) - onboarding for any coding agent
- [CLAUDE.md](./CLAUDE.md) - Claude-specific onboarding and prompts
