# Dingchen Yuan — Portfolio

Personal site for [Dingchen-Yuan](https://github.com/Dingchen-Yuan).

**Live:** https://dingchen-yuan.github.io

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion
- GitHub Pages (`main` / root via Actions build of static assets)

## Local development

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. GitHub Actions builds the site and publishes to GitHub Pages.

```bash
npm run build
```

## Custom domain

After DNS is ready, add a `CNAME` file in `public/` (e.g. `www.yourdomain.com`) and set the custom domain under **Settings → Pages**.

## Resume PDF

Place your PDF at `public/resume.pdf`, then commit and push.
