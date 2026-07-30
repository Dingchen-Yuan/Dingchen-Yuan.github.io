# Dingchen Yuan — Portfolio

**Live:** https://dingchen-yuan.github.io

React + TypeScript + Vite + Tailwind portfolio, published with GitHub Pages.

## Branches

| Branch | Purpose |
|--------|---------|
| `main` | Built static site only (Pages source: `/` root) |
| `source` | Full React project source (edit here) |

## Local development

```bash
git checkout source
npm install
npm run dev
```

## Deploy to Pages

```bash
git checkout source
npm install
npm run build
# publish dist/ to main (root)
rm -rf /tmp/dy-pages-clean && mkdir /tmp/dy-pages-clean && cp -R dist/. /tmp/dy-pages-clean/
cd /tmp/dy-pages-clean
git init -b main
git add -A
git commit -m "deploy: update site"
git remote add origin https://github.com/Dingchen-Yuan/Dingchen-Yuan.github.io.git
git push -f origin main
```

## Custom domain

In repo **Settings → Pages → Custom domain**, add your domain and create DNS records (A/CNAME). Optionally add `public/CNAME` on `source`, rebuild, and redeploy.

## Resume PDF

Add `public/resume.pdf` on the `source` branch, rebuild, and redeploy.
