# Daniel Ayomide Olanrewaju — Personal Portfolio

A clean, academic personal website built with React, Vite, and Tailwind CSS. The site is designed to deploy as a static website on GitHub Pages with no backend required.

## Features

- Minimal, academic design
- Mobile responsive layout
- Sticky navigation and smooth scrolling
- Modular React components
- SEO metadata and OpenGraph tags
- Downloadable CV from `public/Daniel_Olanrewaju_CV.pdf`

## Project structure

- `src/` — React source files
- `src/components/` — reusable UI components
- `public/` — static assets, including the CV PDF
- `tailwind.config.js` — Tailwind CSS configuration
- `vite.config.ts` — Vite configuration with deploy base path support

## Setup

```bash
cd /home/daniel/Desktop/Work/personal/danielayomide-git
yarn install
```

### Local development

```bash
yarn dev
```

### Production build

```bash
yarn build
```

### Deploy to GitHub Pages

1. Add the CV file to `public/Daniel_Olanrewaju_CV.pdf`.
2. If your site is served from a project page, set the public path in `.env`:

```bash
VITE_PUBLIC_PATH="/your-repo-name/"
```

3. Run:

```bash
yarn deploy
```

> If you are using a repository page, make sure the `base` path in `vite.config.ts` matches your repository path or set `VITE_PUBLIC_PATH` accordingly.

## Adding the CV PDF

Save the PDF as `public/Daniel_Olanrewaju_CV.pdf`. The website uses this file for the `Download CV` link and does not render the PDF as HTML.

## Notes

- The website is intentionally light, subtle, and academic.
- All content is populated from realistic profile details and academic experience.
