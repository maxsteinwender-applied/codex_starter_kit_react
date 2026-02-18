# React Stack Profile

## Purpose

Use this profile when the selected stack is `react`.

## Framework

- Primary: Next.js (App Router) + TypeScript
- Runtime target: modern web applications (SSR, SSG, client components where needed)

## UI and Styling

- Tailwind CSS
- shadcn/ui (Radix primitives)
- Icons: lucide-react

## Motion and Animations

- motion (`motion/react`)

## Charts and Data Visualization

- Recharts
- Prefer shadcn/ui chart patterns when possible

## Forms and Validation

- react-hook-form
- zod
- @hookform/resolvers

## State and Data

- Local state: React hooks
- Shared app state: Context API (or agreed team default)
- Backend and auth: Supabase (default)

## Deployment

- Vercel (default)

## Quality and Tooling

- Linting: ESLint + eslint-config-next
- Build: Next.js build pipeline
- Package manager: npm (default in this starter)

## Testing (Current Baseline)

- Unit/component: Vitest + Testing Library (`@testing-library/react`, `jsdom`).
- E2E smoke: Playwright (`@playwright/test`, Chromium project).

## Agent Notes

- `/fe` should follow React component patterns from this profile.
- `/qa` should build test plans for React/Next behaviors.
- `/prod` and `/ux` should keep coding guidance aligned with this React-only profile.
