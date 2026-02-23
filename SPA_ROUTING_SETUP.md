# SPA Routing Setup (React Router + BrowserRouter)

This project uses client-side routing (`BrowserRouter`), so production servers must always return `index.html` for non-file routes.

## Included fixes

- React Router fallback route in `src/App.jsx`:
  - `path="*"` redirects unknown URLs to `/`
- Netlify fallback file:
  - `public/_redirects`
- IIS fallback rewrite:
  - `public/web.config`
- Apache fallback rewrite:
  - `public/.htaccess`
- Vercel fallback routes:
  - `vercel.json`

## Nginx (if needed)

Use this in your site config:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Verify after deployment

1. Open a deep URL directly (example: `/iqac/criteria`).
2. Refresh on that deep URL.
3. Navigate around and use browser back/forward.
4. Confirm all work without 404/blank page.

## Asset reliability (PDF/Image/Video)

This repo tracks `*.pdf` and `*.mp4` with Git LFS. On deployment/build server, ensure LFS objects are fetched:

```bash
git lfs pull
git lfs checkout
```

Before build, run:

```bash
npm run verify:assets
```

This checks:
- Missing static asset references in `src/`
- LFS pointer files accidentally left inside `public/`

## MIME types (server)

Most hosts set these automatically. If needed, ensure:
- `.pdf` => `application/pdf`
- `.mp4` => `video/mp4`
