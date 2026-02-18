const sections = [
  {
    title: "Quick Start (4 Steps)",
    items: [
      "npm install",
      "npm run doctor",
      "npm run dev",
      "Start new projects with /start",
    ],
  },
  {
    title: "Golden Path",
    items: [
      "/start -> /prod -> /ux -> /copy -> /fe -> /qa -> /prod",
      "One tag in line 1 (if missing, suggest and choose)",
      "For new projects, always start with /start.",
    ],
  },
  {
    title: "First Prompt Templates",
    items: [
      "Coding: /start + project_track:coding + stack:react",
      "Operations: /start + project_track:operations",
      "Use /help when unsure what to run next",
    ],
  },
  {
    title: "Definition of Done",
    items: [
      "Kickoff summary filled in .codex/skills/start/PROJECT_START_CHECKLIST.md",
      "Scope and AC updated in .codex/skills/product/PRD.md + .codex/skills/product/features/PROJ-*.md",
      "QA recommendation recorded using .codex/skills/qa/qa-report.md",
      "All gates pass: doctor, validate:docs, lint, build",
    ],
  },
  {
    title: "Useful Commands",
    items: [
      "npm run doctor",
      "npm run validate:docs",
      "npm run lint",
      "npm run build",
      "npm run check",
    ],
  },
  {
    title: "Key Files",
    items: [
      "AGENTS.md",
      ".codex/skills/prompts.md",
      ".codex/skills/start/PROJECT_START_CHECKLIST.md",
      ".codex/rules/stacks/STACKS.md",
      ".codex/skills/playbooks/",
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 py-12 sm:px-8">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Codex Starter Kit
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Productized onboarding with explicit agent handoffs
        </h1>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground">
          Build with a consistent, file-based flow that starts with a mandatory kickoff gate and
          ends with an explicit release recommendation.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <article key={section.title} className="rounded-lg border bg-card p-5 text-card-foreground">
            <h2 className="mb-3 text-lg font-semibold">{section.title}</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {section.items.map((item) => (
                <li key={item} className="rounded bg-muted px-3 py-2">
                  <code>{item}</code>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
