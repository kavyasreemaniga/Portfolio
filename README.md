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

## Agent Docs

- [AGENTS.md](./AGENTS.md) - onboarding for any coding agent
- [CLAUDE.md](./CLAUDE.md) - Claude-specific onboarding and prompts
