# /other-2 Workflow Agent Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 新增一个独立的 `/other-2` 页面，复刻参考图中的 Workflow Agent 框图布局，同时不影响现有 `/other` 页面。

**Architecture:** 保持现有 `React + Vite + Tailwind` 页面实现模式，新增单独页面组件承载布局，在 `App.tsx` 接入路由，在 `App.test.tsx` 增加回归测试。页面使用静态数据和纯布局组件，不引入新的共享状态或额外依赖。

**Tech Stack:** React 18, React Router, Tailwind CSS, Vitest, Testing Library

---

### Task 1: 写出失败的路由回归测试

**Files:**
- Modify: `src/App.test.tsx`

- [ ] **Step 1: 新增 `/other-2` 路由测试**

```tsx
it("renders the workflow agent recreation page on /other-2", () => {
  window.history.pushState({}, "", "/other-2");

  render(<App />);

  expect(screen.getByText("Workflow Agent")).toBeInTheDocument();
  expect(screen.getByText("输出平台主张")).toBeInTheDocument();
  expect(screen.getByText("Campaign 属性")).toBeInTheDocument();
  expect(screen.getByText("释放人力")).toBeInTheDocument();
});
```

- [ ] **Step 2: 运行单测确认当前失败**

Run: `npm test -- src/App.test.tsx`
Expected: FAIL，提示 `/other-2` 页面或对应文案不存在

### Task 2: 实现独立页面和路由

**Files:**
- Create: `src/pages/Other2.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: 新增页面组件骨架和静态数据**

```tsx
const scenarioRows = [
  "大促全流程：自动化测品/素材 -> 自动化Campaign Setup -> 盯盘预算调控 -> 投后复盘 -> 策略沉淀",
  "TikTok 投放策略沉淀：A/B 测试Set up -> 素材测试Set up -> 度量 Set up -> 测试复盘 -> Media Plan建议",
  "深度复盘洞察：月/季/年趋势复盘 -> Media/人群/素材/转化场景复盘 -> 一键汇报产生PPT/HTML",
];
```

- [ ] **Step 2: 实现左侧主框图布局**

```tsx
<section className="grid grid-cols-[88px_minmax(0,1fr)] grid-rows-[136px_232px_294px] gap-x-4 gap-y-4">
  {/* 场景 / 技能 / 工具 / 原子能力 */}
</section>
```

- [ ] **Step 3: 实现右侧 Workflow Agent 说明栏**

```tsx
<aside className="w-[392px] rounded-[28px] border border-[#ef8c8c] bg-[#f6d7d7]/80 p-6">
  <h2 className="text-center text-[22px] font-semibold text-zinc-800">Workflow Agent</h2>
</aside>
```

- [ ] **Step 4: 接入新路由**

```tsx
<Route path="/other-2" element={<Other2Page />} />
```

### Task 3: 验证页面未破坏现有行为

**Files:**
- Modify: `src/App.test.tsx` (reuse tests above)

- [ ] **Step 1: 运行路由测试确认新页面通过**

Run: `npm test -- src/App.test.tsx`
Expected: PASS，已有 `/other` 与新增 `/other-2` 测试均通过

- [ ] **Step 2: 运行完整测试**

Run: `npm test`
Expected: PASS，Vitest 无失败用例

- [ ] **Step 3: 运行构建验证**

Run: `npm run build`
Expected: PASS，TypeScript 与 Vite 构建成功
