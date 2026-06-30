# Scenario Flywheel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `Part IV / Demo` with a strategic `Scenario Flywheel` section that communicates future full-loop scenario coverage across Planning, Creation, Monitoring, and Review.

**Architecture:** Move the new section to a dedicated presentation component so `Home.tsx` stays readable. Keep the content in `src/data/presentation.ts` so wording can be tuned without reopening layout code. Verify the change through `App.test.tsx` by asserting the new section content appears and the old demo content is gone.

**Tech Stack:** React, TypeScript, Tailwind CSS, Vitest, Testing Library

---

## File Structure

- Modify: `src/data/presentation.ts`
  - Add a focused data model for the flywheel section: eyebrow, title, center statement, loop labels, and four domain cards.
- Create: `src/components/presentation/ScenarioFlywheel.tsx`
  - Render the flywheel section body using the existing visual language: dark glass panel, serif heading accents, compact sans body copy, and four balanced domain cards.
- Modify: `src/pages/Home.tsx`
  - Replace the old `Demo` section with the new `Scenario Flywheel` section and wire it to the new data/component.
- Modify: `src/App.test.tsx`
  - Update homepage assertions to cover the new section and ensure the removed demo content is no longer rendered.

---

### Task 1: Add the Scenario Flywheel data model

**Files:**
- Modify: `src/data/presentation.ts`
- Test: `src/App.test.tsx`

- [ ] **Step 1: Write the failing test**

Append a new assertion block inside the existing homepage test in `src/App.test.tsx`:

```tsx
    expect(screen.getByText("Part IV / Scenario Flywheel")).toBeInTheDocument();
    expect(screen.getByText("From point tools to full-loop scenario coverage")).toBeInTheDocument();
    expect(screen.getByText("One loop. Four scenario domains. Continuous optimization.")).toBeInTheDocument();
    expect(screen.getByText("Planning")).toBeInTheDocument();
    expect(screen.getByText("Creation")).toBeInTheDocument();
    expect(screen.getByText("Monitoring")).toBeInTheDocument();
    expect(screen.getByText("Review")).toBeInTheDocument();
    expect(screen.queryByText("Part IV / Demo")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Campaign List UI demo")).not.toBeInTheDocument();
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-en
npm test -- --run src/App.test.tsx
```

Expected: FAIL because the homepage still renders the old `Part IV / Demo` section and does not contain the new flywheel copy.

- [ ] **Step 3: Add the flywheel data in `src/data/presentation.ts`**

Append this export near the other presentation data:

```ts
export const scenarioFlywheelSection = {
  eyebrow: "Part IV / Scenario Flywheel",
  title: "From point tools to full-loop scenario coverage",
  centerStatement: "One loop. Four scenario domains. Continuous optimization.",
  loopLabels: ["Planning", "Creation", "Monitoring", "Review", "Planning"],
  domains: [
    {
      id: "planning",
      index: "01 / Planning",
      title: "Set the strategy",
      items: ["Major promotion planning", "Budget strategy", "Pacing setup"],
      accent: "from-cyan-300/18 to-sky-300/8",
    },
    {
      id: "creation",
      index: "02 / Creation",
      title: "Launch faster",
      items: ["Bulk campaign setup", "Pre-launch testing", "Creative setup"],
      accent: "from-violet-300/18 to-fuchsia-300/8",
    },
    {
      id: "monitoring",
      index: "03 / Monitoring",
      title: "Find what matters",
      items: ["Opportunity discovery", "Automated optimization", "Alert-driven action"],
      accent: "from-emerald-300/18 to-cyan-300/8",
    },
    {
      id: "review",
      index: "04 / Review",
      title: "Feed the next loop",
      items: ["Performance diagnosis", "Insight synthesis", "Presentation-ready review"],
      accent: "from-amber-300/18 to-rose-300/8",
    },
  ],
} as const;
```

- [ ] **Step 4: Run test to confirm it still fails for the right reason**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-en
npm test -- --run src/App.test.tsx
```

Expected: FAIL remains, but now only because `Home.tsx` still renders the old demo section.

- [ ] **Step 5: Commit**

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-en
git add src/data/presentation.ts src/App.test.tsx
git commit -m "test: define scenario flywheel expectations"
```

---

### Task 2: Build the flywheel presentation component

**Files:**
- Create: `src/components/presentation/ScenarioFlywheel.tsx`
- Modify: `src/data/presentation.ts`
- Test: `src/App.test.tsx`

- [ ] **Step 1: Create the component with the minimal rendering contract**

Create `src/components/presentation/ScenarioFlywheel.tsx` with this implementation:

```tsx
type ScenarioFlywheelDomain = {
  id: string;
  index: string;
  title: string;
  items: readonly string[];
  accent: string;
};

type ScenarioFlywheelProps = {
  centerStatement: string;
  loopLabels: readonly string[];
  domains: readonly ScenarioFlywheelDomain[];
};

export default function ScenarioFlywheel({
  centerStatement,
  loopLabels,
  domains,
}: ScenarioFlywheelProps) {
  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 shadow-[0_44px_148px_rgba(0,0,0,0.34)] md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.1),transparent_30%)]" />

      <div className="relative grid gap-6 xl:grid-cols-2">
        {domains.map((domain) => (
          <article
            key={domain.id}
            className={`rounded-[28px] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7 shadow-[0_28px_72px_rgba(0,0,0,0.2)]`}
          >
            <div className={`inline-flex rounded-full border border-white/12 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-zinc-400`}>
              {domain.index}
            </div>
            <h3 className="mt-5 font-serif text-3xl text-white">{domain.title}</h3>
            <ul className="mt-5 space-y-3 text-[15px] leading-7 text-zinc-200">
              {domain.items.map((item) => (
                <li key={item} className="rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="relative mt-8 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-6 py-4 text-center text-sm font-medium tracking-[0.08em] text-cyan-100">
        {centerStatement}
      </div>

      <div className="relative mt-5 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
        {loopLabels.map((label, index) => (
          <span key={`${label}-${index}`} className="inline-flex items-center gap-3">
            <span>{label}</span>
            {index < loopLabels.length - 1 ? <span>→</span> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Run the test to verify it still fails**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-en
npm test -- --run src/App.test.tsx
```

Expected: FAIL because the component exists but is not yet mounted in `Home.tsx`.

- [ ] **Step 3: Polish the component to match the established style**

Replace the article opening block with this version so each card uses the configured accent and remains visually balanced:

```tsx
          <article
            key={domain.id}
            className={`rounded-[28px] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7 shadow-[0_28px_72px_rgba(0,0,0,0.2)]`}
          >
            <div className={`pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br ${domain.accent} opacity-70`} />
            <div className="relative">
              <div className="inline-flex rounded-full border border-white/12 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-zinc-400">
                {domain.index}
              </div>
              <h3 className="mt-5 font-serif text-3xl text-white">{domain.title}</h3>
              <ul className="mt-5 space-y-3 text-[15px] leading-7 text-zinc-200">
                {domain.items.map((item) => (
                  <li key={item} className="rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
```

Then update the outer domain map wrapper line to make the absolute accent legal:

```tsx
        {domains.map((domain) => (
          <article
            key={domain.id}
            className="relative rounded-[28px] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7 shadow-[0_28px_72px_rgba(0,0,0,0.2)]"
          >
```

- [ ] **Step 4: Commit**

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-en
git add src/components/presentation/ScenarioFlywheel.tsx
git commit -m "feat: add scenario flywheel presentation component"
```

---

### Task 3: Replace the Demo section in the homepage

**Files:**
- Modify: `src/pages/Home.tsx`
- Modify: `src/data/presentation.ts`
- Test: `src/App.test.tsx`

- [ ] **Step 1: Wire the new import in `Home.tsx`**

Update the import block near the top of `src/pages/Home.tsx`:

```tsx
import ScenarioFlywheel from "@/components/presentation/ScenarioFlywheel";
import {
  monitoringFlow,
  scenarioCards,
  scenarioFlywheelSection,
  toolkitColumns,
} from "@/data/presentation";
```

Remove the unused `Sparkles`-based demo image section dependencies if they become dead after replacement.

- [ ] **Step 2: Replace the old `demo` section markup**

Replace the entire current `section id="demo"` block in `src/pages/Home.tsx` with:

```tsx
        <section id="demo" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="space-y-10">
            <SectionTitle
              eyebrow={scenarioFlywheelSection.eyebrow}
              title={scenarioFlywheelSection.title}
              description=""
            />
            <ScenarioFlywheel
              centerStatement={scenarioFlywheelSection.centerStatement}
              loopLabels={scenarioFlywheelSection.loopLabels}
              domains={scenarioFlywheelSection.domains}
            />
          </div>
        </section>
```

- [ ] **Step 3: Update the section label in navigation data**

In `src/data/presentation.ts`, update the `navItems` entry:

```ts
  { href: "#demo", label: "Flywheel" },
```

This keeps the anchor stable while making the nav label match the new section intent.

- [ ] **Step 4: Run tests to verify the homepage passes**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-en
npm test -- --run src/App.test.tsx
```

Expected: PASS, including the new assertions for `Scenario Flywheel` and the absence of `Part IV / Demo`.

- [ ] **Step 5: Run build to verify the page compiles**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-en
npm run build
```

Expected: successful `vite build` with no TypeScript errors.

- [ ] **Step 6: Commit**

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-en
git add src/pages/Home.tsx src/data/presentation.ts src/App.test.tsx
git commit -m "feat: replace demo section with scenario flywheel"
```

---

### Task 4: Final visual verification and cleanup

**Files:**
- Modify: `src/components/presentation/ScenarioFlywheel.tsx`
- Test: `src/App.test.tsx`

- [ ] **Step 1: Start the local app**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-en
npm run dev -- --host 127.0.0.1 --port 5178
```

Expected: dev server starts on `http://127.0.0.1:5178/`.

- [ ] **Step 2: Check the flywheel section visually**

Verify these points in the browser:

1. The new `Part IV / Scenario Flywheel` heading appears.
2. Four domain cards are visible in a balanced layout.
3. The center statement is readable and not cramped.
4. No old demo image remains.
5. Card text does not overflow on the current viewport.

- [ ] **Step 3: If spacing is off, apply the minimal refinement**

Use only one of these targeted edits in `src/components/presentation/ScenarioFlywheel.tsx`, depending on what you see:

```tsx
<div className="relative grid gap-5 xl:grid-cols-2">
```

or

```tsx
<ul className="mt-4 space-y-2.5 text-[15px] leading-7 text-zinc-200">
```

or

```tsx
<div className="relative mt-7 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-6 py-4 text-center text-sm font-medium tracking-[0.08em] text-cyan-100">
```

Only keep the minimal change needed for balance.

- [ ] **Step 4: Re-run tests and build**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-en
npm test -- --run src/App.test.tsx
npm run build
```

Expected: both commands pass.

- [ ] **Step 5: Commit**

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-en
git add src/components/presentation/ScenarioFlywheel.tsx
git commit -m "style: polish scenario flywheel layout"
```
