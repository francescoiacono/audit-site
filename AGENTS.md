<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.

<!--VITE PLUS END-->

# Project Notes

## Product Direction

`audit.iacono.dev` is a simple one-page website for a frontend developer who improves websites through frontend fixes, technical SEO, and accessibility. The site should feel clean, credible, and practical rather than like a large agency site.

The page should communicate:

- A clear headline.
- A short explanation of the work.
- A focused list of services.
- Two sample before-and-after case studies.
- An easy contact path.

## Architecture

Use a vertical structure for product sections instead of a broad horizontal component layout.

Recommended source layout:

```txt
app/
  routes/
  shared/
    lib/
    ui/
  verticals/
    site-header/
    hero/
    services/
    case-studies/
    contact/
```

Place section-specific code inside its vertical. Put reusable primitives in `app/shared/ui` and reusable utilities in `app/shared/lib`.

## Naming

- Use lowercase kebab-case for source file and folder names under `app`.
- Keep React component exports in PascalCase so JSX can render them normally.
- Prefer arrow functions assigned to `const` wherever the framework does not require a function declaration.
- Use required framework/tooling filenames as-is when a tool expects them, such as `AGENTS.md`, `README.md`, or config files.

## Shared UI And Utilities

- Use the shared `Wrapper` component for consistent page width and horizontal spacing in headers, body content, and sections.
- Import shared UI through the barrel export in `app/shared/ui` when practical.
- Use the shared `cn()` utility for class name composition. Do not manually join class names with array/filter/join patterns.

## Styling

- Use PandaCSS for styling. Do not add Tailwind dependencies, Tailwind directives, or Tailwind utility classes.
- Put component styles in an adjacent lowercase kebab-case `.style.ts` file.
- Each component style file should import `css` from `styled-system/css` and export `styles` from `css({ ... })`.
- Use generated Panda class names from the adjacent `.style.ts` file inside the component, combining with optional caller classes through `cn()` when needed.
- Keep `app/app.css` focused on Panda layer setup: `@layer reset, base, tokens, recipes, utilities;`. Add only true global CSS there when Panda cannot reasonably own it.

## Accessibility

- Treat WCAG 2.2 AA as the baseline for user-facing work, and prefer inclusive defaults even when a requirement is not explicitly covered by automated checks.
- Start with semantic HTML: use meaningful landmarks, headings in document order, lists for grouped content, and native links or buttons for interactive controls before reaching for ARIA.
- Give every interactive control an accessible name, a visible focus state, and keyboard behavior that works with Tab, Shift+Tab, Enter, Escape, and Space where those keys are expected.
- Keep visible text, accessible labels, image alt text, form labels, helper text, error text, and status messages in the i18n copy layer when they are user-facing.
- Do not remove browser focus outlines without replacing them with a clearly visible PandaCSS focus style that passes contrast expectations.
- Do not rely on color alone to convey state. Pair color with text, iconography, shape, or another non-color cue.
- Respect reduced-motion preferences for non-essential animation, transitions, parallax, smooth scrolling, and auto-playing movement.
- For images and media, provide useful alt text for informative content, empty alt text for decorative images, captions or transcripts when needed, and avoid text embedded only in images.
- For forms, pair every field with a programmatic label, connect help and error text with ARIA relationships, and make validation errors readable without moving focus unexpectedly.
- Validate substantial UI changes with keyboard-only navigation and at least one accessibility-oriented check, such as browser accessibility inspection or an automated audit, in addition to `vp check`.

## Documentation

- Add TSDoc comments to utility functions, including utility functions defined inside components.
- Add a one-line TSDoc summary to each type and interface.
- Add a one-line TSDoc comment to each attribute in each type or interface.
- Add inline comments only for complex logic or major function sections where they improve readability.
- Keep comments concise and focused on intent, constraints, or non-obvious behavior.

## Validation

- Run `vp check` after source changes.
- Run `vp run build` when route, root, styling, dependency, or build-related files change.
- Run `vp test` when tests exist or when changes touch tested behavior. If no test files exist, note that `vp test` exits because there are no matching test files.
