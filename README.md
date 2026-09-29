# Anmol Srivastava — Portfolio

Personal portfolio for **Anmol Srivastava**, Entry-Level Python Developer | SQL Developer | Data Analyst | IT Fresher.

Single-page React site with sections for: Hero, Professional Summary, Technical Skills, Experience, Projects,
Education, Certifications, Leadership & Activities, Additional Information and Contact.

## Editing content

All resume content lives in `src/data/`, so text can be updated without touching components:

| File | Content |
| --- | --- |
| `profile.js` | Name, title, summary, strengths, languages, "open to" roles, leadership, contact links, resume filename |
| `skills.js` | Technical skill categories |
| `experience.js` | Work experience |
| `projects.js` | Projects |
| `education.js` | Education and certifications |

The downloadable resume is `public/Anmol_Srivastava_Resume.pdf`. Replace that file (same name) to update it.

## Tech stack

- React 17 (Create React App 4)
- Tailwind CSS v4 browser build (loaded in `public/index.html`) plus shared component styles in `src/styles/App.css`
- No other runtime dependencies; icons are inline SVG (`src/components/Icon.jsx`)

## Run locally

```bash
npm ci
# Node 17+ needs the legacy OpenSSL flag for CRA 4
NODE_OPTIONS=--openssl-legacy-provider npm start
```

## Build & deploy

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

`homepage` is set to `"."` so the build works from any path (GitHub Pages project site, Netlify, Vercel, etc.).
Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy-gh-pages.yml`; `public/_redirects` is kept for Netlify.
