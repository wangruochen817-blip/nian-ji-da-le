# Agentic Paged Bilingual Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current long scrolling homepage with a bilingual, full-screen horizontal presentation site that preserves the existing visual quality and backs up the old long-page implementation.

**Architecture:** Introduce a dedicated slide-deck shell that owns horizontal navigation, section state, and persistent chrome. Recompose the existing presentation content into seven full-screen slide components backed by a bilingual content data module, while backing up the current long-page route and legacy presentation pages before switching the main route.

**Tech Stack:** React 18, TypeScript, React Router, Tailwind CSS, Vitest, Testing Library

---

## File Structure

### Existing files to modify

- Modify: `src/App.tsx`
- Modify: `src/App.test.tsx`
- Modify: `src/pages/Home.tsx`

### Existing files to back up

- Copy to backup: `src/pages/Home.tsx`
- Copy to backup: `src/pages/Other.tsx`
- Copy to backup: `src/pages/Other2.tsx`
- Copy to backup: `src/pages/Other3.tsx`
- Copy to backup: `src/components/presentation/ImportedOtherCurrentState.tsx`
- Copy to backup: `src/components/presentation/ImportedOtherFutureState.tsx`
- Copy to backup: `src/components/presentation/MonitoringFlow.tsx`
- Copy to backup: `src/components/presentation/ScenarioCard.tsx`
- Copy to backup: `src/components/presentation/ToolkitMap.tsx`
- Copy to backup: `src/components/presentation/SectionTitle.tsx`
- Copy to backup: `src/App.test.tsx`

### New files to create

- Create: `src/data/presentationSlides.ts`
- Create: `src/hooks/useHorizontalSlideDeck.ts`
- Create: `src/components/presentation-deck/DeckShell.tsx`
- Create: `src/components/presentation-deck/DeckViewport.tsx`
- Create: `src/components/presentation-deck/DeckNavigation.tsx`
- Create: `src/components/presentation-deck/SlideFrame.tsx`
- Create: `src/components/presentation-deck/slides/OpeningSlide.tsx`
- Create: `src/components/presentation-deck/slides/CurrentStateSlide.tsx`
- Create: `src/components/presentation-deck/slides/FutureStateSlide.tsx`
- Create: `src/components/presentation-deck/slides/ProductStructureSlide.tsx`
- Create: `src/components/presentation-deck/slides/DemoSlide.tsx`
- Create: `src/components/presentation-deck/slides/ScenariosSlide.tsx`
- Create: `src/components/presentation-deck/slides/ToolkitSlide.tsx`

### Responsibility split

- `presentationSlides.ts` holds the bilingual labels, section ids, and slide metadata so English does not get scattered through JSX.
- `useHorizontalSlideDeck.ts` owns current index, keyboard navigation, wheel navigation, and jump-to-section behavior.
- `DeckShell.tsx`, `DeckViewport.tsx`, `DeckNavigation.tsx`, and `SlideFrame.tsx` provide shared layout and controls for all slides.
- `slides/*` compose the seven sections using existing diagram components and updated bilingual headers.
- `Home.tsx` becomes the new paged presentation entry.
- `App.tsx` keeps `/` mapped to `Home` and leaves the other routes available during migration unless the final cleanup task removes them.

### Test strategy

- Route-level rendering stays in `src/App.test.tsx`.
- Add assertions for the new default deck route, visible bilingual content, keyboard navigation, and the single-page four-card scenarios slide.
- Keep one legacy route smoke test until cleanup is complete so the backup source remains verifiable during refactor.

## Tasks

### Task 1: Back up the current long-page implementation

**Files:**
- Create: `src/_backups/paged-site-20260626/README.md`
- Copy: `src/pages/Home.tsx`
- Copy: `src/pages/Other.tsx`
- Copy: `src/pages/Other2.tsx`
- Copy: `src/pages/Other3.tsx`
- Copy: `src/components/presentation/ImportedOtherCurrentState.tsx`
- Copy: `src/components/presentation/ImportedOtherFutureState.tsx`
- Copy: `src/components/presentation/MonitoringFlow.tsx`
- Copy: `src/components/presentation/ScenarioCard.tsx`
- Copy: `src/components/presentation/ToolkitMap.tsx`
- Copy: `src/components/presentation/SectionTitle.tsx`
- Copy: `src/App.test.tsx`

- [ ] **Step 1: Create the backup directory and README**

```markdown
# 2026-06-26 Paged Site Backup

This directory stores the pre-refactor long-page presentation source.

Backed up before switching the main experience from a scrolling page to a paged deck.

Primary restore targets:

- `src/pages/Home.tsx`
- `src/pages/Other.tsx`
- `src/pages/Other2.tsx`
- `src/pages/Other3.tsx`
- `src/components/presentation/*`
- `src/App.test.tsx`
```

- [ ] **Step 2: Copy the current source files into the backup directory**

Run:

```bash
mkdir -p src/_backups/paged-site-20260626/pages
mkdir -p src/_backups/paged-site-20260626/components/presentation
cp src/pages/Home.tsx src/_backups/paged-site-20260626/pages/Home.tsx
cp src/pages/Other.tsx src/_backups/paged-site-20260626/pages/Other.tsx
cp src/pages/Other2.tsx src/_backups/paged-site-20260626/pages/Other2.tsx
cp src/pages/Other3.tsx src/_backups/paged-site-20260626/pages/Other3.tsx
cp src/components/presentation/ImportedOtherCurrentState.tsx src/_backups/paged-site-20260626/components/presentation/ImportedOtherCurrentState.tsx
cp src/components/presentation/ImportedOtherFutureState.tsx src/_backups/paged-site-20260626/components/presentation/ImportedOtherFutureState.tsx
cp src/components/presentation/MonitoringFlow.tsx src/_backups/paged-site-20260626/components/presentation/MonitoringFlow.tsx
cp src/components/presentation/ScenarioCard.tsx src/_backups/paged-site-20260626/components/presentation/ScenarioCard.tsx
cp src/components/presentation/ToolkitMap.tsx src/_backups/paged-site-20260626/components/presentation/ToolkitMap.tsx
cp src/components/presentation/SectionTitle.tsx src/_backups/paged-site-20260626/components/presentation/SectionTitle.tsx
cp src/App.test.tsx src/_backups/paged-site-20260626/App.test.tsx
```

Expected: the backup tree contains the original long-page entry and the presentation components used to rebuild it.

- [ ] **Step 3: Verify the backup exists**

Run:

```bash
find src/_backups/paged-site-20260626 -maxdepth 3 -type f | sort
```

Expected: file list includes `pages/Home.tsx`, `pages/Other.tsx`, `pages/Other2.tsx`, `pages/Other3.tsx`, `components/presentation/ImportedOtherCurrentState.tsx`, and `App.test.tsx`.

- [ ] **Step 4: Commit the backup snapshot**

```bash
git add src/_backups/paged-site-20260626
git commit -m "chore: back up long-page presentation before deck refactor"
```

### Task 2: Define the bilingual slide data and the failing deck tests

**Files:**
- Create: `src/data/presentationSlides.ts`
- Modify: `src/App.test.tsx`

- [ ] **Step 1: Write the failing route and navigation tests**

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App routing", () => {
  it("renders the paged deck on / with bilingual opening copy", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    expect(screen.getByText("从效率工具，到场景解决方案")).toBeInTheDocument();
    expect(screen.getByText("From Workflow Tools To Agentic Skills")).toBeInTheDocument();
    expect(screen.getByText("01 / 07")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next section" })).toBeInTheDocument();
  });

  it("moves to the next section on ArrowRight", () => {
    window.history.pushState({}, "", "/");

    render(<App />);
    fireEvent.keyDown(window, { key: "ArrowRight" });

    expect(screen.getByText("现状：工具很多，场景缺席")).toBeInTheDocument();
    expect(screen.getByText("Current State")).toBeInTheDocument();
    expect(screen.getByText("02 / 07")).toBeInTheDocument();
  });

  it("keeps four scenario cards in one slide", () => {
    window.history.pushState({}, "", "/");

    render(<App />);
    for (let i = 0; i < 5; i += 1) {
      fireEvent.keyDown(window, { key: "ArrowRight" });
    }

    expect(screen.getByText("落地：一期4类热门场景")).toBeInTheDocument();
    expect(screen.getByText("Rejected Campaigns")).toBeInTheDocument();
    expect(screen.getByText("Creative Test Campaigns")).toBeInTheDocument();
    expect(screen.getByText("Opportunities (AOS)")).toBeInTheDocument();
    expect(screen.getByText("Meta Imported")).toBeInTheDocument();
    expect(screen.getByText("Scenarios")).toBeInTheDocument();
    expect(screen.getByText("06 / 07")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run:

```bash
npm test -- src/App.test.tsx
```

Expected: FAIL because the deck page, navigation buttons, and `01 / 07` pager do not exist yet.

- [ ] **Step 3: Create the bilingual slide metadata module**

```ts
export type SlideId =
  | "opening"
  | "current-state"
  | "future-state"
  | "product-structure"
  | "demo"
  | "scenarios"
  | "toolkit";

export type SlideMeta = {
  id: SlideId;
  order: number;
  eyebrowZh: string;
  eyebrowEn: string;
  titleZh: string;
  titleEn: string;
  descriptionZh?: string;
  descriptionEn?: string;
};

export const slideMetas: SlideMeta[] = [
  {
    id: "opening",
    order: 1,
    eyebrowZh: "开场",
    eyebrowEn: "Opening",
    titleZh: "从效率工具，到场景解决方案",
    titleEn: "From Workflow Tools To Agentic Skills",
    descriptionZh: "用户想要的是结果，而不是工具本身。",
    descriptionEn: "Users want outcomes, not standalone tools.",
  },
  {
    id: "current-state",
    order: 2,
    eyebrowZh: "第一部分 / 现状与痛点",
    eyebrowEn: "Current State",
    titleZh: "现状：工具很多，场景缺席",
    titleEn: "Current State",
  },
  {
    id: "future-state",
    order: 3,
    eyebrowZh: "第二部分 / Agentic 升级",
    eyebrowEn: "Future State",
    titleZh: "未来：让 Agent 站在能力层上创造工具，服务场景",
    titleEn: "Future State",
  },
  {
    id: "product-structure",
    order: 4,
    eyebrowZh: "第三部分 / 产品结构",
    eyebrowEn: "Product Structure",
    titleZh: "产品结构：从发现、理解到解决",
    titleEn: "Product Structure",
  },
  {
    id: "demo",
    order: 5,
    eyebrowZh: "第四部分 / Demo",
    eyebrowEn: "Demo",
    titleZh: "Demo：把洞察与动作放到同一舞台",
    titleEn: "Demo",
  },
  {
    id: "scenarios",
    order: 6,
    eyebrowZh: "第五部分 / 四类场景",
    eyebrowEn: "Scenarios",
    titleZh: "落地：一期4类热门场景",
    titleEn: "Scenarios",
  },
  {
    id: "toolkit",
    order: 7,
    eyebrowZh: "第六部分 / Toolkit",
    eyebrowEn: "Toolkit",
    titleZh: "Toolkit × Agentic Hub",
    titleEn: "Toolkit × Agentic Hub",
    descriptionZh: "技能的集合地，但不再是叙事的重点",
    descriptionEn: "A hub for skills, no longer the end of the story.",
  },
];
```

- [ ] **Step 4: Run the tests again to confirm they still fail only on missing UI**

Run:

```bash
npm test -- src/App.test.tsx
```

Expected: FAIL with messages about missing deck UI, while TypeScript imports from `presentationSlides.ts` resolve cleanly.

- [ ] **Step 5: Commit the data and failing tests**

```bash
git add src/App.test.tsx src/data/presentationSlides.ts
git commit -m "test: define paged deck expectations"
```

### Task 3: Build the horizontal deck shell and make the first tests pass

**Files:**
- Create: `src/hooks/useHorizontalSlideDeck.ts`
- Create: `src/components/presentation-deck/DeckShell.tsx`
- Create: `src/components/presentation-deck/DeckViewport.tsx`
- Create: `src/components/presentation-deck/DeckNavigation.tsx`
- Create: `src/components/presentation-deck/SlideFrame.tsx`
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Create the failing interaction hook test inside the route test file**

```tsx
it("jumps to a section from the right-side navigation", () => {
  window.history.pushState({}, "", "/");

  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Go to Toolkit" }));

  expect(screen.getByText("Toolkit × Agentic Hub")).toBeInTheDocument();
  expect(screen.getByText("07 / 07")).toBeInTheDocument();
});
```

- [ ] **Step 2: Implement the deck state hook**

```ts
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SlideId, SlideMeta } from "@/data/presentationSlides";

export function useHorizontalSlideDeck(slides: SlideMeta[]) {
  const [activeIndex, setActiveIndex] = useState(0);
  const wheelLockRef = useRef(false);

  const total = slides.length;
  const activeSlide = slides[activeIndex];
  const pageLabel = useMemo(
    () => `${String(activeIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`,
    [activeIndex, total],
  );

  const goTo = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, total - 1)));
  }, [total]);

  const goToId = useCallback((id: SlideId) => {
    const nextIndex = slides.findIndex((slide) => slide.id === id);
    if (nextIndex >= 0) {
      setActiveIndex(nextIndex);
    }
  }, [slides]);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const previous = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, previous]);

  const onWheel = useCallback((event: React.WheelEvent<HTMLElement>) => {
    if (wheelLockRef.current) return;
    if (Math.abs(event.deltaY) < 24) return;

    wheelLockRef.current = true;
    if (event.deltaY > 0) next();
    if (event.deltaY < 0) previous();

    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 520);
  }, [next, previous]);

  return { activeIndex, activeSlide, pageLabel, total, goTo, goToId, next, previous, onWheel };
}
```

- [ ] **Step 3: Implement the shared deck shell components**

```tsx
// src/components/presentation-deck/DeckNavigation.tsx
import type { SlideMeta } from "@/data/presentationSlides";

type DeckNavigationProps = {
  slides: SlideMeta[];
  activeIndex: number;
  pageLabel: string;
  onSelect: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function DeckNavigation({
  slides,
  activeIndex,
  pageLabel,
  onSelect,
  onNext,
  onPrevious,
}: DeckNavigationProps) {
  return (
    <>
      <div className="absolute left-8 top-8 z-20 rounded-full border border-white/12 bg-black/25 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
        {pageLabel}
      </div>
      <div className="absolute bottom-8 left-8 z-20 flex gap-3">
        <button type="button" aria-label="Previous section" onClick={onPrevious} className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-zinc-100">
          Prev
        </button>
        <button type="button" aria-label="Next section" onClick={onNext} className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-zinc-100">
          Next
        </button>
      </div>
      <div className="absolute right-8 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to ${slide.titleEn}`}
            onClick={() => onSelect(index)}
            className={index === activeIndex ? "h-10 w-3 rounded-full bg-cyan-300" : "h-8 w-3 rounded-full bg-white/20"}
          />
        ))}
      </div>
    </>
  );
}
```

```tsx
// src/components/presentation-deck/DeckViewport.tsx
import type { ReactNode } from "react";

type DeckViewportProps = {
  activeIndex: number;
  children: ReactNode;
};

export default function DeckViewport({ activeIndex, children }: DeckViewportProps) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex min-h-screen w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}vw)` }}
      >
        {children}
      </div>
    </div>
  );
}
```

```tsx
// src/components/presentation-deck/SlideFrame.tsx
import type { ReactNode } from "react";

type SlideFrameProps = {
  eyebrowZh: string;
  eyebrowEn: string;
  titleZh: string;
  titleEn: string;
  descriptionZh?: string;
  descriptionEn?: string;
  children: ReactNode;
};

export default function SlideFrame(props: SlideFrameProps) {
  return (
    <section className="relative flex min-h-screen w-screen shrink-0 items-center px-8 py-10 lg:px-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-8 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2">
            <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-300">{props.eyebrowZh}</span>
            <span className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">{props.eyebrowEn}</span>
          </div>
          <h1 className="font-serif text-5xl leading-tight text-white lg:text-7xl">{props.titleZh}</h1>
          <div className="space-y-2">
            <p className="text-base uppercase tracking-[0.28em] text-zinc-500">{props.titleEn}</p>
            {props.descriptionZh ? <p className="text-xl text-zinc-100">{props.descriptionZh}</p> : null}
            {props.descriptionEn ? <p className="max-w-3xl text-sm uppercase tracking-[0.16em] text-zinc-400">{props.descriptionEn}</p> : null}
          </div>
        </div>
        {props.children}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Turn `Home.tsx` into the paged deck shell with placeholder slides**

```tsx
import DeckNavigation from "@/components/presentation-deck/DeckNavigation";
import DeckViewport from "@/components/presentation-deck/DeckViewport";
import SlideFrame from "@/components/presentation-deck/SlideFrame";
import { slideMetas } from "@/data/presentationSlides";
import { useHorizontalSlideDeck } from "@/hooks/useHorizontalSlideDeck";

export default function Home() {
  const deck = useHorizontalSlideDeck(slideMetas);

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#060816] text-zinc-100 selection:bg-cyan-300/30"
      onWheel={deck.onWheel}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[-8%] top-[-6%] h-[520px] w-[520px] rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="absolute right-[-12%] top-[18%] h-[560px] w-[560px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-14%] left-[18%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <DeckNavigation
        slides={slideMetas}
        activeIndex={deck.activeIndex}
        pageLabel={deck.pageLabel}
        onSelect={deck.goTo}
        onNext={deck.next}
        onPrevious={deck.previous}
      />

      <DeckViewport activeIndex={deck.activeIndex}>
        {slideMetas.map((slide) => (
          <SlideFrame
            key={slide.id}
            eyebrowZh={slide.eyebrowZh}
            eyebrowEn={slide.eyebrowEn}
            titleZh={slide.titleZh}
            titleEn={slide.titleEn}
            descriptionZh={slide.descriptionZh}
            descriptionEn={slide.descriptionEn}
          >
            <div className="rounded-[36px] border border-white/12 bg-white/[0.045] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.38)]">
              <p className="text-xl text-zinc-200">{slide.titleZh}</p>
            </div>
          </SlideFrame>
        ))}
      </DeckViewport>
    </div>
  );
}
```

- [ ] **Step 5: Run tests to verify the first deck tests pass**

Run:

```bash
npm test -- src/App.test.tsx
```

Expected: PASS for the new `/` route rendering, ArrowRight navigation, and right-rail jump to Toolkit, while the deck still uses placeholder slide bodies.

- [ ] **Step 6: Commit the deck shell**

```bash
git add src/hooks/useHorizontalSlideDeck.ts src/components/presentation-deck src/pages/Home.tsx src/App.test.tsx
git commit -m "feat: add horizontal presentation deck shell"
```

### Task 4: Rebuild the opening, current, future, product, and demo slides

**Files:**
- Create: `src/components/presentation-deck/slides/OpeningSlide.tsx`
- Create: `src/components/presentation-deck/slides/CurrentStateSlide.tsx`
- Create: `src/components/presentation-deck/slides/FutureStateSlide.tsx`
- Create: `src/components/presentation-deck/slides/ProductStructureSlide.tsx`
- Create: `src/components/presentation-deck/slides/DemoSlide.tsx`
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Add the failing content tests for the first five slides**

```tsx
it("renders the current-state and future-state slides with reused diagrams", () => {
  window.history.pushState({}, "", "/");

  render(<App />);
  fireEvent.keyDown(window, { key: "ArrowRight" });

  expect(screen.getByText("操盘手线下沉淀")).toBeInTheDocument();
  expect(screen.getByText("Current State")).toBeInTheDocument();

  fireEvent.keyDown(window, { key: "ArrowRight" });

  expect(screen.getByText("未来：让 Agent 站在能力层上创造工具，服务场景")).toBeInTheDocument();
  expect(screen.getByText("Future State")).toBeInTheDocument();
});

it("renders the demo slide image inside the deck", () => {
  window.history.pushState({}, "", "/");

  render(<App />);
  for (let i = 0; i < 4; i += 1) {
    fireEvent.keyDown(window, { key: "ArrowRight" });
  }

  expect(screen.getByAltText("Campaign List UI demo")).toBeInTheDocument();
  expect(screen.getByText("Demo")).toBeInTheDocument();
});
```

- [ ] **Step 2: Implement the opening slide**

```tsx
import { Sparkles } from "lucide-react";
import SlideFrame from "@/components/presentation-deck/SlideFrame";
import type { SlideMeta } from "@/data/presentationSlides";

export default function OpeningSlide({ slide }: { slide: SlideMeta }) {
  return (
    <SlideFrame
      eyebrowZh={slide.eyebrowZh}
      eyebrowEn={slide.eyebrowEn}
      titleZh={slide.titleZh}
      titleEn={slide.titleEn}
      descriptionZh={slide.descriptionZh}
      descriptionEn={slide.descriptionEn}
    >
      <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[36px] border border-white/12 bg-white/[0.045] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.38)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            Workflow 系列产品规划
          </div>
          <p className="mt-8 text-3xl leading-relaxed text-white">用户想要的是结果，而不是工具本身。</p>
        </div>
        <div className="rounded-[36px] border border-white/12 bg-white/[0.045] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.38)]">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Value Shift</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-cyan-300/30 bg-black/20 p-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">Today</p>
              <p className="mt-3 text-lg text-zinc-100">原子能力 -&gt; 工具</p>
            </div>
            <div className="rounded-[24px] border border-violet-300/30 bg-black/20 p-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">Tomorrow</p>
              <p className="mt-3 text-lg text-zinc-100">原子能力 -&gt; Agent -&gt; 完成任务</p>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
```

- [ ] **Step 3: Implement the middle slides by reusing existing diagram components**

```tsx
// src/components/presentation-deck/slides/CurrentStateSlide.tsx
import ImportedOtherCurrentState from "@/components/presentation/ImportedOtherCurrentState";
import SlideFrame from "@/components/presentation-deck/SlideFrame";
import type { SlideMeta } from "@/data/presentationSlides";

export default function CurrentStateSlide({ slide }: { slide: SlideMeta }) {
  return (
    <SlideFrame
      eyebrowZh={slide.eyebrowZh}
      eyebrowEn={slide.eyebrowEn}
      titleZh={slide.titleZh}
      titleEn={slide.titleEn}
    >
      <ImportedOtherCurrentState />
    </SlideFrame>
  );
}
```

```tsx
// src/components/presentation-deck/slides/FutureStateSlide.tsx
import ImportedOtherFutureState from "@/components/presentation/ImportedOtherFutureState";
import SlideFrame from "@/components/presentation-deck/SlideFrame";
import type { SlideMeta } from "@/data/presentationSlides";

export default function FutureStateSlide({ slide }: { slide: SlideMeta }) {
  return (
    <SlideFrame
      eyebrowZh={slide.eyebrowZh}
      eyebrowEn={slide.eyebrowEn}
      titleZh={slide.titleZh}
      titleEn={slide.titleEn}
    >
      <ImportedOtherFutureState />
    </SlideFrame>
  );
}
```

```tsx
// src/components/presentation-deck/slides/ProductStructureSlide.tsx
import MonitoringFlow from "@/components/presentation/MonitoringFlow";
import SlideFrame from "@/components/presentation-deck/SlideFrame";
import { monitoringFlow } from "@/data/presentation";
import type { SlideMeta } from "@/data/presentationSlides";

export default function ProductStructureSlide({ slide }: { slide: SlideMeta }) {
  return (
    <SlideFrame
      eyebrowZh={slide.eyebrowZh}
      eyebrowEn={slide.eyebrowEn}
      titleZh={slide.titleZh}
      titleEn={slide.titleEn}
    >
      <MonitoringFlow items={monitoringFlow} />
    </SlideFrame>
  );
}
```

```tsx
// src/components/presentation-deck/slides/DemoSlide.tsx
import SlideFrame from "@/components/presentation-deck/SlideFrame";
import type { SlideMeta } from "@/data/presentationSlides";

export default function DemoSlide({ slide }: { slide: SlideMeta }) {
  return (
    <SlideFrame
      eyebrowZh={slide.eyebrowZh}
      eyebrowEn={slide.eyebrowEn}
      titleZh={slide.titleZh}
      titleEn={slide.titleEn}
    >
      <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.042),rgba(255,255,255,0.014))] p-5 shadow-[0_44px_148px_rgba(0,0,0,0.34)] md:p-7">
        <div className="relative overflow-hidden rounded-[28px] border border-white/30 bg-white shadow-[0_36px_88px_rgba(0,0,0,0.26)]">
          <img src="/20260625-210857.jpeg" alt="Campaign List UI demo" className="block w-full" />
        </div>
      </div>
    </SlideFrame>
  );
}
```

- [ ] **Step 4: Mount the new slide components inside `Home.tsx`**

```tsx
import CurrentStateSlide from "@/components/presentation-deck/slides/CurrentStateSlide";
import DemoSlide from "@/components/presentation-deck/slides/DemoSlide";
import FutureStateSlide from "@/components/presentation-deck/slides/FutureStateSlide";
import OpeningSlide from "@/components/presentation-deck/slides/OpeningSlide";
import ProductStructureSlide from "@/components/presentation-deck/slides/ProductStructureSlide";

const slideBodyMap = {
  opening: OpeningSlide,
  "current-state": CurrentStateSlide,
  "future-state": FutureStateSlide,
  "product-structure": ProductStructureSlide,
  demo: DemoSlide,
};
```

```tsx
<DeckViewport activeIndex={deck.activeIndex}>
  {slideMetas.map((slide) => {
    const SlideComponent = slideBodyMap[slide.id];
    return SlideComponent ? <SlideComponent key={slide.id} slide={slide} /> : null;
  })}
</DeckViewport>
```

- [ ] **Step 5: Run tests to verify the first five slides render**

Run:

```bash
npm test -- src/App.test.tsx
```

Expected: PASS for opening, current state, future state, and demo slide content assertions; FAIL only for missing scenarios and toolkit slides.

- [ ] **Step 6: Commit the first five slides**

```bash
git add src/components/presentation-deck/slides src/pages/Home.tsx src/App.test.tsx
git commit -m "feat: rebuild core presentation slides in deck"
```

### Task 5: Implement the single-page scenarios slide and the toolkit finale

**Files:**
- Create: `src/components/presentation-deck/slides/ScenariosSlide.tsx`
- Create: `src/components/presentation-deck/slides/ToolkitSlide.tsx`
- Modify: `src/pages/Home.tsx`
- Modify: `src/App.test.tsx`

- [ ] **Step 1: Add the failing tests for scenarios and toolkit bilingual framing**

```tsx
it("shows english helper labels on the scenarios and toolkit slides", () => {
  window.history.pushState({}, "", "/");

  render(<App />);

  for (let i = 0; i < 5; i += 1) {
    fireEvent.keyDown(window, { key: "ArrowRight" });
  }

  expect(screen.getByText("Scenarios")).toBeInTheDocument();
  expect(screen.getByText("落地：一期4类热门场景")).toBeInTheDocument();

  fireEvent.keyDown(window, { key: "ArrowRight" });

  expect(screen.getByText("Toolkit × Agentic Hub")).toBeInTheDocument();
  expect(screen.getByText("技能的集合地，但不再是叙事的重点")).toBeInTheDocument();
  expect(screen.getByText("A hub for skills, no longer the end of the story.")).toBeInTheDocument();
});
```

- [ ] **Step 2: Implement the scenarios slide as one four-card wall**

```tsx
import ScenarioCard from "@/components/presentation/ScenarioCard";
import SlideFrame from "@/components/presentation-deck/SlideFrame";
import { scenarioCards } from "@/data/presentation";
import type { SlideMeta } from "@/data/presentationSlides";

export default function ScenariosSlide({ slide }: { slide: SlideMeta }) {
  return (
    <SlideFrame
      eyebrowZh={slide.eyebrowZh}
      eyebrowEn={slide.eyebrowEn}
      titleZh={slide.titleZh}
      titleEn={slide.titleEn}
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {scenarioCards.map((scenario) => (
          <div key={scenario.id} className="space-y-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-zinc-300">
              <span>Scene</span>
              <span className="text-cyan-200">{scenario.name}</span>
            </div>
            <ScenarioCard scenario={scenario} />
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
```

- [ ] **Step 3: Implement the toolkit finale slide**

```tsx
import ToolkitMap from "@/components/presentation/ToolkitMap";
import SlideFrame from "@/components/presentation-deck/SlideFrame";
import { toolkitColumns } from "@/data/presentation";
import type { SlideMeta } from "@/data/presentationSlides";

export default function ToolkitSlide({ slide }: { slide: SlideMeta }) {
  return (
    <SlideFrame
      eyebrowZh={slide.eyebrowZh}
      eyebrowEn={slide.eyebrowEn}
      titleZh={slide.titleZh}
      titleEn={slide.titleEn}
      descriptionZh={slide.descriptionZh}
      descriptionEn={slide.descriptionEn}
    >
      <ToolkitMap columns={toolkitColumns} />
    </SlideFrame>
  );
}
```

- [ ] **Step 4: Mount the final two slides in `Home.tsx`**

```tsx
import ScenariosSlide from "@/components/presentation-deck/slides/ScenariosSlide";
import ToolkitSlide from "@/components/presentation-deck/slides/ToolkitSlide";

const slideBodyMap = {
  opening: OpeningSlide,
  "current-state": CurrentStateSlide,
  "future-state": FutureStateSlide,
  "product-structure": ProductStructureSlide,
  demo: DemoSlide,
  scenarios: ScenariosSlide,
  toolkit: ToolkitSlide,
} as const;
```

- [ ] **Step 5: Run tests to verify all slides render**

Run:

```bash
npm test -- src/App.test.tsx
```

Expected: PASS for `/` deck rendering, keyboard navigation, single-page four-card scenarios slide, and the Toolkit closing slide with bilingual framing.

- [ ] **Step 6: Commit the last two slides**

```bash
git add src/components/presentation-deck/slides/ScenariosSlide.tsx src/components/presentation-deck/slides/ToolkitSlide.tsx src/pages/Home.tsx src/App.test.tsx
git commit -m "feat: finish deck scenarios and toolkit slides"
```

### Task 6: Switch the app entry fully to the deck and tighten the route tests

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/App.test.tsx`

- [ ] **Step 1: Replace the legacy route assertions with a deck-first routing suite**

```tsx
describe("App routing", () => {
  it("renders the paged deck on /", () => {
    window.history.pushState({}, "", "/");
    render(<App />);

    expect(screen.getByText("从效率工具，到场景解决方案")).toBeInTheDocument();
    expect(screen.getByText("01 / 07")).toBeInTheDocument();
  });

  it("does not render the legacy long-page anchors anymore", () => {
    window.history.pushState({}, "", "/");
    render(<App />);

    expect(screen.queryByText("Workflow 系列产品规划")).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "开场" })).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Simplify `App.tsx` to keep the deck as the primary app surface**

```tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
```

- [ ] **Step 3: Run route tests**

Run:

```bash
npm test -- src/App.test.tsx
```

Expected: PASS with only the deck route under test.

- [ ] **Step 4: Run the production build**

Run:

```bash
npm run build
```

Expected: PASS with `vite build` output and no TypeScript errors.

- [ ] **Step 5: Commit the route cleanup**

```bash
git add src/App.tsx src/App.test.tsx
git commit -m "refactor: make paged deck the only app route"
```

### Task 7: Manual deck verification and finish

**Files:**
- Modify: none

- [ ] **Step 1: Start the local dev server**

Run:

```bash
npm run dev -- --host 127.0.0.1 --port 5175
```

Expected: Vite serves the deck at `http://127.0.0.1:5175/`.

- [ ] **Step 2: Verify the manual acceptance checklist**

Check:

```text
1. Landing page opens on slide 01 with bilingual opening copy.
2. ArrowRight and ArrowLeft switch sections cleanly.
3. Mouse wheel advances one section at a time instead of free scrolling.
4. Right-side navigation jumps to all seven sections.
5. The scenarios section stays on one slide with four cards visible.
6. Toolkit slide closes with "Toolkit × Agentic Hub" and bilingual support copy.
7. Backup files remain present in src/_backups/paged-site-20260626.
```

Expected: all seven checks pass.

- [ ] **Step 3: Inspect the final git diff**

Run:

```bash
git status --short
git diff --stat
```

Expected: changes are limited to the deck files, route updates, tests, and the backup directory.

- [ ] **Step 4: Commit the verified delivery**

```bash
git add src/App.tsx src/App.test.tsx src/pages/Home.tsx src/data/presentationSlides.ts src/hooks/useHorizontalSlideDeck.ts src/components/presentation-deck src/_backups/paged-site-20260626
git commit -m "feat: ship bilingual paged presentation site"
```

## Self-Review

### Spec coverage

- Pure horizontal paged site: covered by Task 3 and Task 6.
- Chinese-primary, English-supporting copy model: covered by Task 2, Task 4, and Task 5.
- Seven-section structure: covered by Task 2, Task 4, and Task 5.
- Single-page four-card scenarios slide: covered by Task 5.
- Replace long page as formal entry: covered by Task 6.
- Preserve old site in a clear backup path: covered by Task 1.
- Verification through tests, build, and manual review: covered by Task 6 and Task 7.

### Placeholder scan

- No `TODO`, `TBD`, or “implement later” markers remain.
- Each task names exact files and exact commands.
- Test cases specify concrete expected strings and controls.

### Type consistency

- `SlideId` and `SlideMeta` are defined once in `src/data/presentationSlides.ts`.
- `useHorizontalSlideDeck` uses the same `SlideId` and `SlideMeta` types consumed by `Home.tsx`.
- Slide components all accept `{ slide: SlideMeta }`.

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-06-26-agentic-paged-bilingual-site.md`.

Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
