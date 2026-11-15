# AutomateStudio

Marketing site for AutomateStudio — React 19, TypeScript, Vite and Tailwind CSS v4, deployed to GitHub Pages by GitHub Actions.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint       # oxlint
npm run typecheck  # tsc
npm run build      # production build into dist/
npm run preview    # serve dist/
```

## Deploy

`.github/workflows/deploy.yml` lints, type-checks and builds every pull request, and on a push to `main` deploys `dist/` to GitHub Pages.

One-time setup: push to a GitHub repo, then **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The base path (`/<repo>/`) is taken from the Pages configuration, so the same build works on a project site or a custom domain.
