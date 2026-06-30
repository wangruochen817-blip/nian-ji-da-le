# Horizontal Slide Deck Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a separate `Ruochen-slide` website that preserves the current English story and visual language while converting the experience into a seven-slide 16:9 horizontal deck.

**Architecture:** Clone `Ruochen-en` into a sibling workspace, keep `src/data/presentation.ts` as the shared content source, and replace the long-page `Home` flow with a slide-deck shell plus dedicated slide components. High-risk sections (`Current State`, `Future`, `Scenarios`, `Toolkit`) get slide-specific layout tightening instead of relying on global scaling.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, React Router, Vitest, Testing Library

***

## File Structure

**New workspace root:** `/Users/bytedance/Desktop/Trae/Ruochen-slide`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/data/slideDeck.ts`

  * Slide metadata, order, and navigation labels for the seven-slide deck.

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/SlideFrame.tsx`

  * Shared 16:9 presentation frame and safe-area padding wrapper.

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/SlideDeck.tsx`

  * Horizontal paging track, arrow controls, keyboard navigation, and slide indicators.

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/HeroSlide.tsx`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/CurrentStateSlide.tsx`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/FutureStateSlide.tsx`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/ProductStructureSlide.tsx`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/ScenarioFlywheelSlide.tsx`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/ScenariosSlide.tsx`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/ToolkitSlide.tsx`

  * One focused component per slide so layout changes stay local.

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/pages/SlideHome.tsx`

  * Composes the seven slides into the shared deck shell.

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.tsx`

  * Route `/` to the new slide deck.

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.test.tsx`

  * Replace long-page assertions with deck-shell and slide-navigation coverage.

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/index.css`

  * Lock the viewport to a deck-friendly presentation background and overflow behavior.

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ImportedOtherCurrentState.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ImportedOtherFutureState.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/MonitoringFlow.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ScenarioFlywheel.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ScenarioCard.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ToolkitMap.tsx`

  * Compact the existing visual components so each one fits inside a single 16:9 slide without post-fix tweaking.

***

### Task 1: Bootstrap the separate `Ruochen-slide` workspace

**Files:**

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/package.json`

* Test: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.test.tsx`

* [ ] **Step 1: Clone the current English site into a sibling workspace**

Run:

```bash
cd /Users/bytedance/Desktop/Trae
rsync -a --delete \
  --exclude node_modules \
  --exclude dist \
  --exclude .git \
  /Users/bytedance/Desktop/Trae/Ruochen-en/ \
  /Users/bytedance/Desktop/Trae/Ruochen-slide/
```

Expected: `/Users/bytedance/Desktop/Trae/Ruochen-slide` exists with the same source tree as `Ruochen-en`, but without copied install/build artifacts.

* [ ] **Step 2: Rename the package so the new site is clearly distinct**

Update `/Users/bytedance/Desktop/Trae/Ruochen-slide/package.json`:

```json
{
  "name": "ruochen-slide",
  "private": true,
  "version": "0.0.0",
  "type": "module"
}
```

* [ ] **Step 3: Install dependencies in the new workspace**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
npm install
```

Expected: `node_modules` is created without changing the source tree yet.

* [ ] **Step 4: Run the cloned baseline tests before any slide work**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
npm test -- --run src/App.test.tsx
```

Expected: PASS, proving the clone still matches the current `Ruochen-en` baseline before the deck conversion begins.

* [ ] **Step 5: Commit the isolated workspace bootstrap**

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
git init
git add .
git commit -m "chore: bootstrap horizontal slide workspace"
```

***

### Task 2: Build the slide-deck shell and lock navigation behavior with tests

**Files:**

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/data/slideDeck.ts`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/SlideFrame.tsx`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/SlideDeck.tsx`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/pages/SlideHome.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.test.tsx`

* [ ] **Step 1: Replace the homepage test with deck-shell expectations**

Overwrite `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.test.tsx` with:

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("slide deck routing", () => {
  it("renders a seven-slide horizontal deck on /", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    expect(screen.getByRole("button", { name: "Previous slide" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Next slide" })).toBeEnabled();
    expect(screen.getByText("1 / 7")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Intro" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Toolkit" })).toBeInTheDocument();
    expect(screen.getByText("From Tools to Solutions")).toBeInTheDocument();
  });

  it("moves horizontally with the next button and keyboard arrows", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Next slide" }));
    expect(screen.getByText("2 / 7")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Today" })).toHaveAttribute("aria-pressed", "true");

    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(screen.getByText("3 / 7")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Upgrade" })).toHaveAttribute("aria-pressed", "true");
  });
});
```

* [ ] **Step 2: Run the new test to verify it fails**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
npm test -- --run src/App.test.tsx
```

Expected: FAIL because the cloned app still renders the long-page `Home` instead of a slide deck.

* [ ] **Step 3: Add slide metadata and the shared 16:9 frame**

Create `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/data/slideDeck.ts`:

```ts
export const slideDeck = [
  { id: "hero", label: "Intro" },
  { id: "current-state", label: "Today" },
  { id: "future", label: "Upgrade" },
  { id: "product-structure", label: "Structure" },
  { id: "demo", label: "Flywheel" },
  { id: "scenarios", label: "Scenarios" },
  { id: "toolkits", label: "Toolkit" },
] as const;
```

Create `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/SlideFrame.tsx`:

```tsx
import type { ReactNode } from "react";

export default function SlideFrame({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative mx-auto flex aspect-[16/9] w-full max-w-[1440px] shrink-0 overflow-hidden rounded-[40px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 shadow-[0_48px_140px_rgba(0,0,0,0.34)] xl:p-10"
    >
      {children}
    </section>
  );
}
```

* [ ] **Step 4: Implement the deck shell, temporary slide page, and new route**

Create `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/SlideDeck.tsx`:

```tsx
import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slideDeck } from "@/data/slideDeck";

export default function SlideDeck({ slides }: { slides: ReactNode[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        setActiveIndex((value) => Math.max(0, value - 1));
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((value) => Math.min(slides.length - 1, value + 1));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060816] px-6 py-6 text-zinc-100 xl:px-10">
      <div className="mx-auto flex max-w-[1520px] items-center justify-between">
        <button
          type="button"
          aria-label="Previous slide"
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex((value) => Math.max(0, value - 1))}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] disabled:opacity-40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="text-sm uppercase tracking-[0.28em] text-zinc-400">
          {activeIndex + 1} / {slides.length}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          disabled={activeIndex === slides.length - 1}
          onClick={() => setActiveIndex((value) => Math.min(slides.length - 1, value + 1))}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] disabled:opacity-40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mx-auto mt-4 flex max-w-[1520px] justify-center gap-3">
        {slideDeck.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={item.label}
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            className="rounded-full border border-white/12 px-4 py-2 text-xs uppercase tracking-[0.22em] text-zinc-300"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-6 max-w-[1520px] overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(calc(${activeIndex * -100}% - ${activeIndex * 24}px))` }}
        >
          {slides}
        </div>
      </div>
    </div>
  );
}
```

Create `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/pages/SlideHome.tsx`:

```tsx
import SlideDeck from "@/components/slides/SlideDeck";
import SlideFrame from "@/components/slides/SlideFrame";
import { slideDeck } from "@/data/slideDeck";

export default function SlideHome() {
  const slides = slideDeck.map((slide) => (
    <SlideFrame key={slide.id} id={slide.id}>
      <div className="flex h-full w-full items-center justify-center rounded-[32px] border border-dashed border-white/15 text-3xl font-serif text-white">
        {slide.label}
      </div>
    </SlideFrame>
  ));

  return <SlideDeck slides={slides} />;
}
```

Update `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.tsx`:

```tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SlideHome from "@/pages/SlideHome";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<SlideHome />} />
      </Routes>
    </Router>
  );
}
```

* [ ] **Step 5: Replace the temporary first slide with the real cover copy and make the tests pass**

Update the first entry in `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/pages/SlideHome.tsx` so the user sees the approved cover story immediately:

```tsx
const slides = [
  <SlideFrame key="hero" id="hero">
    <div className="grid h-full w-full items-center gap-10 xl:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-6">
        <p className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-zinc-300">
          Workflow Product Roadmap
        </p>
        <p className="text-sm uppercase tracking-[0.34em] text-zinc-500">
          From Workflow Tools To Agentic Skills
        </p>
        <h1 className="max-w-4xl font-serif text-[76px] leading-[0.98] text-white">
          From Tools to Solutions
        </h1>
      </div>

      <div className="rounded-[36px] border border-white/15 bg-white/[0.045] p-8 shadow-[0_44px_120px_rgba(0,0,0,0.34)]">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Value Shift</p>
        <p className="mt-8 border-l border-cyan-300/50 pl-5 text-2xl leading-10 text-white">
          Users want outcomes, not the tool itself.
        </p>
      </div>
    </div>
  </SlideFrame>,
  ...slideDeck.slice(1).map((slide) => (
    <SlideFrame key={slide.id} id={slide.id}>
      <div className="flex h-full w-full items-center justify-center rounded-[32px] border border-dashed border-white/15 text-3xl font-serif text-white">
        {slide.label}
      </div>
    </SlideFrame>
  )),
];
```

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
npm test -- --run src/App.test.tsx
```

Expected: PASS.

* [ ] **Step 6: Commit the deck shell**

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
git add src/App.tsx src/App.test.tsx src/data/slideDeck.ts src/components/slides src/pages/SlideHome.tsx
git commit -m "feat: add horizontal slide deck shell"
```

***

### Task 3: Convert Hero, Current State, and Future into presentation slides

**Files:**

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/HeroSlide.tsx`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/CurrentStateSlide.tsx`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/FutureStateSlide.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/pages/SlideHome.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ImportedOtherCurrentState.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ImportedOtherFutureState.tsx`

* Test: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.test.tsx`

* [ ] **Step 1: Extend the deck test to cover the first three real slides**

Append to `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.test.tsx`:

```tsx
    fireEvent.click(screen.getByRole("button", { name: "Today" }));
    expect(screen.getByText("Today: Many Tools, Few Solutions")).toBeInTheDocument();
    expect(screen.getAllByText("Atom").length).toBeGreaterThan(0);

    fireEvent.click(screen.getByRole("button", { name: "Upgrade" }));
    expect(screen.getByText("Future: Agentic Iteration and Agentic Solutions")).toBeInTheDocument();
    expect(screen.getByText("Workflow Agent")).toBeInTheDocument();
```

* [ ] **Step 2: Run the test to verify the new slide expectations fail**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
npm test -- --run src/App.test.tsx
```

Expected: FAIL because the `Today` and `Upgrade` slides are still placeholders.

* [ ] **Step 3: Create slide-specific wrappers and swap them into** **`SlideHome.tsx`**

Create `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/HeroSlide.tsx`:

```tsx
export default function HeroSlide() {
  return (
    <div className="grid h-full w-full items-center gap-10 xl:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-6">
        <p className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-zinc-300">
          Workflow Product Roadmap
        </p>
        <p className="text-sm uppercase tracking-[0.34em] text-zinc-500">
          From Workflow Tools To Agentic Skills
        </p>
        <h1 className="max-w-4xl font-serif text-[76px] leading-[0.98] text-white">
          From Tools to Solutions
        </h1>
      </div>

      <div className="rounded-[36px] border border-white/15 bg-white/[0.045] p-8 shadow-[0_44px_120px_rgba(0,0,0,0.34)]">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Value Shift</p>
        <p className="mt-8 border-l border-cyan-300/50 pl-5 text-2xl leading-10 text-white">
          Users want outcomes, not the tool itself.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[24px] border border-cyan-300/30 bg-black/20 p-6">
            <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">Today</p>
            <p className="mt-3 text-lg text-zinc-100">Atom-&gt;Tools</p>
          </div>
          <div className="rounded-[24px] border border-violet-300/30 bg-black/20 p-6">
            <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">Tomorrow</p>
            <p className="mt-3 text-lg text-zinc-100">Atom-&gt;Skills-&gt;Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

Create `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/CurrentStateSlide.tsx`:

```tsx
import ImportedOtherCurrentState from "@/components/presentation/ImportedOtherCurrentState";
import SectionTitle from "@/components/presentation/SectionTitle";

export default function CurrentStateSlide() {
  return (
    <div className="grid h-full w-full grid-rows-[auto_minmax(0,1fr)] gap-6">
      <SectionTitle
        eyebrow="Part I / Current State & Friction"
        title="Today: Many Tools, Few Solutions"
        description=""
      />
      <div className="min-h-0">
        <ImportedOtherCurrentState />
      </div>
    </div>
  );
}
```

Create `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/FutureStateSlide.tsx`:

```tsx
import ImportedOtherFutureState from "@/components/presentation/ImportedOtherFutureState";
import SectionTitle from "@/components/presentation/SectionTitle";

export default function FutureStateSlide() {
  return (
    <div className="grid h-full w-full grid-rows-[auto_minmax(0,1fr)] gap-6">
      <SectionTitle
        eyebrow="Part II / Agentic Upgrade"
        title="Future: Agentic Iteration and Agentic Solutions"
        description=""
      />
      <div className="min-h-0">
        <ImportedOtherFutureState />
      </div>
    </div>
  );
}
```

Then replace the placeholder array in `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/pages/SlideHome.tsx`:

```tsx
import CurrentStateSlide from "@/components/slides/CurrentStateSlide";
import FutureStateSlide from "@/components/slides/FutureStateSlide";
import HeroSlide from "@/components/slides/HeroSlide";

const slides = [
  <SlideFrame key="hero" id="hero"><HeroSlide /></SlideFrame>,
  <SlideFrame key="current-state" id="current-state"><CurrentStateSlide /></SlideFrame>,
  <SlideFrame key="future" id="future"><FutureStateSlide /></SlideFrame>,
  ...slideDeck.slice(3).map((slide) => (
    <SlideFrame key={slide.id} id={slide.id}>
      <div className="flex h-full w-full items-center justify-center rounded-[32px] border border-dashed border-white/15 text-3xl font-serif text-white">
        {slide.label}
      </div>
    </SlideFrame>
  )),
];
```

* [ ] **Step 4: Tighten the two complex diagram components for slide-safe height**

In `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ImportedOtherCurrentState.tsx`, replace the outer layout lines with:

```tsx
    <section className="flex h-full w-full items-stretch gap-5">
      <div className="min-w-0 flex-1 rounded-[32px] border border-white/15 bg-white/[0.035] p-6 shadow-[0_36px_108px_rgba(0,0,0,0.34)] backdrop-blur-xl">
        <div className="grid h-full grid-cols-[76px_minmax(0,1fr)] grid-rows-[104px_248px_296px] gap-x-4 gap-y-4">
```

Also tighten the aside width in the same file:

```tsx
      <aside className="w-[308px] rounded-[28px] border border-white/15 bg-[linear-gradient(180deg,rgba(20,22,31,0.965),rgba(30,32,40,0.925))] p-6 shadow-[0_36px_108px_rgba(0,0,0,0.36)]">
```

In `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ImportedOtherFutureState.tsx`, replace the matching layout lines with:

```tsx
    <section className="flex h-full w-full items-stretch gap-5">
      <div className="min-w-0 flex-1 rounded-[32px] border border-white/15 bg-white/[0.035] p-6 shadow-[0_36px_108px_rgba(0,0,0,0.34)] backdrop-blur-xl">
        <div className="grid h-full grid-cols-[76px_minmax(0,1fr)] grid-rows-[122px_272px_minmax(0,1fr)] gap-x-4 gap-y-4">
```

And tighten the aside there too:

```tsx
      <aside className="w-[304px] rounded-[28px] border border-white/15 bg-[linear-gradient(180deg,rgba(20,22,31,0.965),rgba(30,32,40,0.925))] p-6 shadow-[0_36px_108px_rgba(0,0,0,0.36)]">
```

* [ ] **Step 5: Run the targeted tests**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
npm test -- --run src/App.test.tsx
```

Expected: PASS with the first three slides rendered from real content instead of placeholders.

* [ ] **Step 6: Commit the first three slides**

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
git add src/pages/SlideHome.tsx src/components/slides/HeroSlide.tsx src/components/slides/CurrentStateSlide.tsx src/components/slides/FutureStateSlide.tsx src/components/presentation/ImportedOtherCurrentState.tsx src/components/presentation/ImportedOtherFutureState.tsx
git commit -m "feat: convert hero current and future into slides"
```

***

### Task 4: Convert Product Structure and Scenario Flywheel into slide-native frames

**Files:**

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/ProductStructureSlide.tsx`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/ScenarioFlywheelSlide.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/pages/SlideHome.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/MonitoringFlow.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ScenarioFlywheel.tsx`

* Test: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.test.tsx`

* [ ] **Step 1: Add failing test coverage for slides 4 and 5**

Append to `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.test.tsx`:

```tsx
    fireEvent.click(screen.getByRole("button", { name: "Structure" }));
    expect(screen.getByText("Discover, Understand, Solve,")).toBeInTheDocument();
    expect(screen.getByText("Card->Insight->Action")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Flywheel" }));
    expect(screen.getByText("Part IV / Scenario Flywheel")).toBeInTheDocument();
    expect(screen.getByText("One loop. Four scenario domains. Continuous optimization.")).toBeInTheDocument();
```

* [ ] **Step 2: Run the test to verify the structure and flywheel slides still fail**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
npm test -- --run src/App.test.tsx
```

Expected: FAIL because these slides are still placeholders.

* [ ] **Step 3: Create the slide wrappers and use them in** **`SlideHome.tsx`**

Create `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/ProductStructureSlide.tsx`:

```tsx
import MonitoringFlow from "@/components/presentation/MonitoringFlow";
import { monitoringFlow } from "@/data/presentation";

export default function ProductStructureSlide() {
  return (
    <div className="h-full w-full">
      <MonitoringFlow items={monitoringFlow} />
    </div>
  );
}
```

Create `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/ScenarioFlywheelSlide.tsx`:

```tsx
import ScenarioFlywheel from "@/components/presentation/ScenarioFlywheel";
import SectionTitle from "@/components/presentation/SectionTitle";
import { scenarioFlywheelSection } from "@/data/presentation";

export default function ScenarioFlywheelSlide() {
  return (
    <div className="grid h-full w-full grid-rows-[auto_minmax(0,1fr)] gap-6">
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
  );
}
```

Then replace slide 4 and 5 placeholders in `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/pages/SlideHome.tsx`:

```tsx
import ProductStructureSlide from "@/components/slides/ProductStructureSlide";
import ScenarioFlywheelSlide from "@/components/slides/ScenarioFlywheelSlide";

const slides = [
  <SlideFrame key="hero" id="hero"><HeroSlide /></SlideFrame>,
  <SlideFrame key="current-state" id="current-state"><CurrentStateSlide /></SlideFrame>,
  <SlideFrame key="future" id="future"><FutureStateSlide /></SlideFrame>,
  <SlideFrame key="product-structure" id="product-structure"><ProductStructureSlide /></SlideFrame>,
  <SlideFrame key="demo" id="demo"><ScenarioFlywheelSlide /></SlideFrame>,
  ...slideDeck.slice(5).map((slide) => (
    <SlideFrame key={slide.id} id={slide.id}>
      <div className="flex h-full w-full items-center justify-center rounded-[32px] border border-dashed border-white/15 text-3xl font-serif text-white">
        {slide.label}
      </div>
    </SlideFrame>
  )),
];
```

* [ ] **Step 4: Compact the two reused presentation components for slide mode**

In `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/MonitoringFlow.tsx`, tighten the top-level spacing:

```tsx
    <div className="flex h-full flex-col justify-between space-y-6">
```

Replace the headline size:

```tsx
        <h2 className="max-w-6xl font-serif text-4xl leading-[1.02] text-white xl:text-[60px]">
```

And reduce the main card padding:

```tsx
      <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.014))] p-6 shadow-[0_40px_112px_rgba(0,0,0,0.26)]">
```

In `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ScenarioFlywheel.tsx`, reduce the top grid gap and card sizing:

```tsx
      <div className="relative grid h-full gap-5 xl:grid-cols-2">
```

```tsx
            className="relative overflow-hidden rounded-[24px] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
```

```tsx
                    <h3 className="mt-4 font-serif text-[30px] text-white">{domain.title}</h3>
```

* [ ] **Step 5: Run the tests again**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
npm test -- --run src/App.test.tsx
```

Expected: PASS with slides 1-5 now backed by real content.

* [ ] **Step 6: Commit the middle deck**

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
git add src/pages/SlideHome.tsx src/components/slides/ProductStructureSlide.tsx src/components/slides/ScenarioFlywheelSlide.tsx src/components/presentation/MonitoringFlow.tsx src/components/presentation/ScenarioFlywheel.tsx
git commit -m "feat: convert product structure and flywheel slides"
```

***

### Task 5: Convert Scenarios and Toolkit into the final two landscape slides

**Files:**

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/ScenariosSlide.tsx`

* Create: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/ToolkitSlide.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/pages/SlideHome.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ScenarioCard.tsx`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ToolkitMap.tsx`

* Test: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.test.tsx`

* [ ] **Step 1: Add failing test coverage for the last two slides**

Append to `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.test.tsx`:

```tsx
    fireEvent.click(screen.getByRole("button", { name: "Scenarios" }));
    expect(screen.getByText("Four High-Demand Scenarios")).toBeInTheDocument();
    expect(screen.getByText("Rejected Campaigns")).toBeInTheDocument();
    expect(screen.getByText("Meta Imported")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Toolkit" }));
    expect(screen.getByText("Toolkit × Agentic Hub")).toBeInTheDocument();
    expect(screen.getByText("Monitoring & Diagnosis")).toBeInTheDocument();
    expect(screen.getByText("Review & Finding")).toBeInTheDocument();
```

* [ ] **Step 2: Run the test to verify it fails before the last two slides are built**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
npm test -- --run src/App.test.tsx
```

Expected: FAIL because the last two slides are still placeholders.

* [ ] **Step 3: Create slide wrappers and replace the final placeholders**

Create `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/ScenariosSlide.tsx`:

```tsx
import ScenarioCard from "@/components/presentation/ScenarioCard";
import SectionTitle from "@/components/presentation/SectionTitle";
import { scenarioCards } from "@/data/presentation";

export default function ScenariosSlide() {
  return (
    <div className="grid h-full w-full grid-rows-[auto_minmax(0,1fr)] gap-6">
      <SectionTitle
        eyebrow="Part V / Four Scenarios"
        title="Four High-Demand Scenarios"
        description=""
      />
      <div className="grid min-h-0 gap-4 xl:grid-cols-2">
        {scenarioCards.map((scenario) => (
          <ScenarioCard key={scenario.id} scenario={scenario} />
        ))}
      </div>
    </div>
  );
}
```

Create `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/slides/ToolkitSlide.tsx`:

```tsx
import SectionTitle from "@/components/presentation/SectionTitle";
import ToolkitMap from "@/components/presentation/ToolkitMap";
import { toolkitColumns } from "@/data/presentation";

export default function ToolkitSlide() {
  return (
    <div className="grid h-full w-full grid-rows-[auto_minmax(0,1fr)] gap-6">
      <SectionTitle
        eyebrow="Part VI / Toolkit"
        title={
          <>
            Toolkit × Agentic Hub
            <br />
            Tools are no longer the start and the end of the story.
          </>
        }
        description=""
      />
      <ToolkitMap columns={toolkitColumns} />
    </div>
  );
}
```

Then update `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/pages/SlideHome.tsx`:

```tsx
import ScenariosSlide from "@/components/slides/ScenariosSlide";
import ToolkitSlide from "@/components/slides/ToolkitSlide";

const slides = [
  <SlideFrame key="hero" id="hero"><HeroSlide /></SlideFrame>,
  <SlideFrame key="current-state" id="current-state"><CurrentStateSlide /></SlideFrame>,
  <SlideFrame key="future" id="future"><FutureStateSlide /></SlideFrame>,
  <SlideFrame key="product-structure" id="product-structure"><ProductStructureSlide /></SlideFrame>,
  <SlideFrame key="demo" id="demo"><ScenarioFlywheelSlide /></SlideFrame>,
  <SlideFrame key="scenarios" id="scenarios"><ScenariosSlide /></SlideFrame>,
  <SlideFrame key="toolkits" id="toolkits"><ToolkitSlide /></SlideFrame>,
];
```

* [ ] **Step 4: Compact the cards and three-column map so they fit one frame**

In `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ScenarioCard.tsx`, tighten the card chrome:

```tsx
    <article className="relative overflow-hidden rounded-[26px] border border-white/30 bg-white/[0.045] p-5 shadow-[0_24px_64px_rgba(0,0,0,0.16)]">
```

```tsx
            <h3 className="mt-3 text-[26px] leading-8 text-white">{scenario.name}</h3>
```

```tsx
          <div className="rounded-[20px] border border-cyan-300/30 bg-black/20 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
```

In `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/components/presentation/ToolkitMap.tsx`, move from loose wrapping to denser columns:

```tsx
    <div className="grid h-full gap-4 xl:grid-cols-3">
```

```tsx
        <article key={column.title} className="flex h-full flex-col rounded-[26px] border border-white/30 bg-white/[0.045] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.14)]">
```

```tsx
          <div className="mt-6 flex flex-wrap gap-2.5">
```

* [ ] **Step 5: Run the last slide tests**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
npm test -- --run src/App.test.tsx
```

Expected: PASS with all seven slides mounted and reachable.

* [ ] **Step 6: Commit the final two slides**

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
git add src/pages/SlideHome.tsx src/components/slides/ScenariosSlide.tsx src/components/slides/ToolkitSlide.tsx src/components/presentation/ScenarioCard.tsx src/components/presentation/ToolkitMap.tsx
git commit -m "feat: convert scenarios and toolkit into slides"
```

***

### Task 6: Final presentation polish and full verification

**Files:**

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/index.css`

* Modify: `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.test.tsx`

* Test: `/Users/bytedance/Desktop/Trae/Ruochen-slide/package.json`

* [ ] **Step 1: Lock the viewport to deck-friendly overflow behavior**

Update `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/index.css`:

```css
html,
body,
#root {
  min-height: 100%;
}

body {
  min-width: 1280px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 18%),
    radial-gradient(circle at top, rgba(90, 164, 255, 0.14), transparent 34%),
    var(--page-bg);
}
```

* [ ] **Step 2: Add one end-to-end deck regression for direct jump navigation**

Append to `/Users/bytedance/Desktop/Trae/Ruochen-slide/src/App.test.tsx`:

```tsx
  it("jumps directly to a named slide from the nav pills", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Flywheel" }));

    expect(screen.getByText("From point tools to full-loop scenario coverage")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Flywheel" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("5 / 7")).toBeInTheDocument();
  });
```

* [ ] **Step 3: Run the full verification suite**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
npm test
npm run check
npm run build
```

Expected:

```text
All App tests pass
TypeScript reports no errors
Vite build completes successfully
```

* [ ] **Step 4: Start the dev server for manual visual review**

Run:

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
npm run dev -- --host 0.0.0.0 --port 5179
```

Expected: the deck is available at `http://localhost:5179/` for slide-by-slide visual review against the original `http://localhost:5178/`.

* [ ] **Step 5: Commit the polish pass**

```bash
cd /Users/bytedance/Desktop/Trae/Ruochen-slide
git add src/index.css src/App.test.tsx
git commit -m "test: verify horizontal slide deck presentation"
```

