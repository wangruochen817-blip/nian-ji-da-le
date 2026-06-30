# Horizontal Slide Deck Design

**Project:** `Ruochen-slide` (new website cloned from the current `Ruochen-en` content base)  
**Date:** 2026-06-30  
**Status:** Approved for planning

## Goal

Create a new website that preserves the current site's content, visual language, and information hierarchy, but converts the experience from a vertical long-form page into a horizontal slide deck. The new site must behave like a presentation: each major section becomes a single 16:9 horizontal slide, users move left and right between slides, and each slide is visually complete without requiring follow-up manual layout fixes.

## Why A New Site

This work should not overwrite `Ruochen-en`.

Reasons:

1. The current site remains the visual/content baseline.
2. Slide conversion requires structural layout changes across every section, not just container swaps.
3. A separate site reduces regression risk and makes side-by-side review possible.

## Product Definition

The new site is a presentation-style website with these properties:

- Full-screen or near-full-screen horizontal deck
- One major idea per slide
- Every slide designed to fit a 16:9 landscape frame
- Horizontal paging is the primary interaction
- Vertical scrolling inside a slide is allowed only as a last-resort overflow fallback, not as the normal reading mode
- Content and formatting intent from the current site are inherited, but each slide is manually re-composed for landscape presentation

## Content Mapping

The current site's sections map directly into seven slides:

1. `Hero`
2. `Current State`
3. `Future`
4. `Product Structure`
5. `Scenario Flywheel`
6. `Scenarios`
7. `Toolkit`

The target deck keeps this order.

## Architecture

The new site should introduce a slide-deck shell rather than trying to retrofit the current vertical sections directly.

Core structure:

- `SlideDeck`: owns horizontal paging, active slide state, keyboard navigation, and any nav indicators
- `SlideFrame`: shared 16:9 landscape container used by every slide
- `SlidePage`-style composition per section: each current section becomes a dedicated landscape page layout

Key principle:

The deck shell and the page content layout are separate responsibilities. Navigation logic should not be mixed into the inner layout code of each page.

## Interaction Model

Primary interactions:

- click or tap navigation controls
- keyboard left/right navigation
- optional trackpad or wheel interception only if it is stable and does not create gesture conflict

Rules:

- horizontal navigation is first-class
- no infinite scroll behavior
- no long vertical reading as the main experience
- each slide must feel like a presentation frame, not a web section inside a page

## Visual System

The new site must inherit the current visual language:

- dark deep-blue / black background
- glassmorphism cards
- serif display headings
- sans-serif body copy
- cyan / violet / amber accent logic
- existing component identity where possible

What changes:

- spacing system becomes slide-oriented
- containers are normalized around a 16:9 safe area
- each section is rebalanced for horizontal storytelling

## Slide-By-Slide Design

### 1. Hero

Keep the current headline and right-side value card, but convert the page into a stable presentation cover.

Target composition:

- left: eyebrow + main title
- right: value shift card
- both blocks vertically centered in a 16:9 frame

The current tall-page breathing room should be removed in favor of a deliberate cover-slide balance.

### 2. Current State

Keep the current title and friction narrative, but rebuild the internals for landscape density.

Target composition:

- top: section title row
- main body: horizontal graphic and pain-point balance
- no long vertical stacking

`ImportedOtherCurrentState` should be treated as a landscape diagram page, not a webpage section. Heights, box proportions, and title spacing must be recalibrated for a single-frame read.

### 3. Future

This slide should mirror the logic of `Current State`, but represent the upgraded future-state architecture.

Target composition:

- same overall framing discipline as slide 2
- future-state diagrams and narrative aligned for comparison
- right-side supporting cards visually consistent with the new 16:9 frame

`ImportedOtherFutureState` requires manual layout rework. Previous per-box manual tuning for the long page should not be treated as final constraints.

### 4. Product Structure

`MonitoringFlow` becomes a true horizontal pipeline slide.

Target composition:

- title row at top
- main three-stage structure centered
- supporting summary compressed into the same frame

The goal is to read like a product-structure slide in a deck, not an expanded web section.

### 5. Scenario Flywheel

Keep the currently approved static version rather than the interactive flywheel.

Target composition:

- title row
- four-domain landscape flywheel interpretation
- center statement clearly anchored
- loop labels integrated without consuming unnecessary height

This page should read like a strategic coverage map.

### 6. Scenarios

All four scenarios must remain on one slide.

Target composition:

- title row
- balanced 2x2 card grid
- each card trimmed for projector-friendly reading

No scenario should be pushed onto another slide.

### 7. Toolkit

Keep the three-column domain structure:

- `Creation`
- `Monitoring & Diagnosis`
- `Review & Finding`

But rework the page into a landscape overview slide with more deliberate column rhythm, chip density, and header alignment.

## Constraints

Hard constraints:

- New site must be separate from the current site
- Every major section must become a 16:9 landscape slide
- Horizontal paging must define the experience
- `Scenarios` must remain a single-slide four-card layout
- Existing content meaning and current formatting intent should be inherited, not reinvented arbitrarily

Soft constraints:

- Avoid adding ornamental animations that weaken clarity
- Prefer stable presentational polish over novel interaction experiments

## Implementation Strategy

Recommended order:

1. Clone current site into a new site workspace
2. Build slide shell (`SlideDeck`, `SlideFrame`, navigation, page state)
3. Convert `Hero`, `Current State`, and `Future` first to establish the landscape system
4. Convert `Product Structure` and `Scenario Flywheel`
5. Convert `Scenarios` and `Toolkit`
6. Run a final consistency pass across all slides

## Validation Criteria

The work is done when all of the following are true:

- every page fits a 16:9 landscape frame at desktop presentation size
- left/right navigation is stable and intuitive
- each slide is visually complete without manual post-fix adjustments
- users can understand the deck slide by slide without relying on long-page scrolling
- typography, spacing, and card proportions feel consistent across the deck

## Risks

Primary risks:

- `Current State` and `Future` may become overcrowded when collapsed into a single landscape frame
- `Scenarios` can lose readability if card content is not rewritten for horizontal density
- `Toolkit` can feel sparse or uneven without careful column balancing

Mitigation:

- do not use simple global scaling
- redesign each section as a dedicated slide
- perform a final full-deck visual normalization pass

## Non-Goals

This phase does not aim to:

- redesign the product story from scratch
- introduce a new content hierarchy unrelated to the current site
- build a highly animated 3D presentation system
- preserve the vertical page structure in parallel within the same site

