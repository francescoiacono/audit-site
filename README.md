# audit-site

`audit.iacono.dev` is a one-page website for a frontend developer who improves websites through frontend fixes, technical SEO, and accessibility work.

The site should feel clean, credible, and practical. It is not intended to feel like a large agency site.

## Stack

- React 19
- React Router 7
- TypeScript
- Vite+
- PandaCSS
- Lucide React icons

## Getting Started

Install dependencies with Vite+:

```bash
vp install
```

Start the local development server:

```bash
vp run dev
```

The app is available at `http://localhost:5173`.

## Commands

```bash
vp check
```

Formats, lints, and type-checks the project.

```bash
vp run build
```

Creates the production build.

```bash
vp run start
```

Serves the built React Router app from `build/server/index.js`.

```bash
vp test
```

Runs tests when test files exist. At the moment, this project has no matching test files.

## Project Structure

The app uses a vertical structure for product sections and keeps reusable primitives in `app/shared`.

```txt
app/
  routes/
  shared/
    i18n/
    lib/
    ui/
      button/
      wrapper/
  verticals/
    site-header/
      mobile-menu/
```

Use `app/verticals` for section-specific UI and behavior. Use `app/shared/ui` for reusable primitives and `app/shared/lib` for reusable utilities.

## Styling

Styling is handled with PandaCSS.

- Component styles live next to components in lowercase kebab-case `.style.ts` files.
- Style files import `css` from `styled-system/css`.
- Shared component variants use Panda recipes where that keeps behavior consistent.
- Global CSS should stay minimal in `app/app.css`.

The project color tokens are defined in `panda.config.ts`. Use semantic tokens such as `background.page`, `text.primary`, `text.secondary`, `border.default`, `border.subtle`, `accent.blue`, and `accent.green` in component styles instead of hard-coded hex values.

## Shared UI

Reusable UI primitives live in their own folders under `app/shared/ui` and are exported through barrels.

Current primitives:

- `Wrapper` for page width and horizontal spacing.
- `Button` for native button actions and form submission.
- `ButtonLink` for navigational CTAs.
- `ButtonIcon` for icon-only controls with accessible labels.

Prefer importing shared UI through `app/shared/ui` when practical.

## Copy And Accessibility

User-facing copy lives in `app/shared/i18n/copy.ts`.

Accessibility expectations:

- Use semantic HTML first.
- Keep every interactive control keyboard-accessible.
- Provide visible focus states.
- Respect reduced-motion preferences.
- Use accessible labels for icon-only controls.
- Do not rely on color alone to communicate state.

## Deployment

Create a production build:

```bash
vp run build
```

The React Router build output is written to:

```txt
build/
  client/
  server/
```

The included `Dockerfile` can be used for container deployment.
