# Stack Profile

This file defines the coding stack contract for prompt-based work.

## Active Stack

- `react` -> `.codex/rules/stacks/react.md`

## Default Library Baselines

Use these as the default stack presets unless explicitly overridden.

### React (`stack: react`)

- UI: `shadcn/ui`
- Motion: `motion` (`motion/react`)
- Charts: `Recharts`
- Backend/Auth: `Supabase`
- Deployment: `Vercel`

## Selection Contract

For a new project start, use this contract:

1. Line 1: `/start`
2. Line 2: track declaration (`project_track: coding|operations`)
3. Line 3: stack declaration (`stack: react`) when track is `coding`
4. Remaining lines: task context

Example:

```text
/start
project_track: coding
stack: react
Define MVP scope for a team task manager.
```

## Operating Rules

1. Stacks apply only to `project_track: coding`.
2. For `project_track: coding`, do not assume a stack if none is provided.
3. For `project_track: coding`, if stack is missing, ask a clarification question and stop.
4. For `project_track: operations`, stack is optional and must not be enforced.
5. If a stack is provided and unsupported, ask the user to use `react`.
6. Use only tools and conventions from the selected stack profile when in coding track.
7. If the user explicitly requests a different stack, explain that this starter kit is React-only.

## Customization

Use the files below as the canonical source for your team defaults:

- `.codex/rules/stacks/react.md`

You can update these profiles at any time to set your preferred libraries.
