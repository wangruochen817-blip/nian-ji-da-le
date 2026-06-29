# Part IV 场景飞轮页设计

## 背景

当前 `Home.tsx` 的 `Part IV / Demo` 页面仍然以静态 UI 截图作为主体。这一页已经不再适合当前叙事目标，因为我们现在想表达的不是某个 demo，而是产品未来要覆盖的中长期场景版图。

根据飞书文档《Q7yYdMil5oCrqhxLlS6mFWKwy9d》中列出的场景表格，核心场景可以被压缩为四个高层场域：

1. `Planning`
2. `Creation`
3. `Monitoring`
4. `Review`

这些场域可以构成一个闭环，表达“我们未来覆盖的是完整场景飞轮，而不是单点工具集合”。

## 页面目标

这一页需要让听众快速记住三件事：

1. 我们未来覆盖的是完整闭环，不是单点能力演示。
2. 闭环由四个核心场域组成：`Planning / Creation / Monitoring / Review`。
3. 每个场域下有代表性的子场景，但这一页不需要穷举全部子场景，只需要用最少的信息建立认知。

## 核心表达

推荐主旨文案：

`From point tools to full-loop scenario coverage`

辅助表达：

`One loop. Four scenario domains. Continuous optimization.`

这两句话分别承担两个作用：

1. 主标题负责定义页面主张。
2. 中心短句负责强化记忆点，让听众理解这是一张“未来覆盖飞轮图”，不是能力清单。

## 信息架构

页面保留 `Part IV` 的章节位置，但完全替换内部内容。

结构分为三层：

1. 章节引导
2. 四象限飞轮主体
3. 闭环说明

### 1. 章节引导

- eyebrow：`Part IV / Scenario Flywheel`
- title：`From point tools to full-loop scenario coverage`
- description：为空或极短，不增加解释负担

### 2. 四象限飞轮主体

主体区域使用四块卡片构成一个强对称结构，视觉上形成“飞轮四象限”而不是线性流程图。

四个象限分别为：

#### Planning

定位：定义投放方向与资源分配。

代表子场景：

- Major promotion planning
- Budget strategy
- Pacing setup

#### Creation

定位：让投放与创意准备更快落地。

代表子场景：

- Bulk campaign setup
- Pre-launch testing
- Creative setup

#### Monitoring

定位：发现机会、问题与可执行动作。

代表子场景：

- Opportunity discovery
- Automated optimization
- Alert-driven action

#### Review

定位：把结果沉淀为下一轮输入。

代表子场景：

- Performance diagnosis
- Insight synthesis
- Presentation-ready review

### 3. 闭环说明

在四象限中间或下方放置一句总括短句：

`One loop. Four scenario domains. Continuous optimization.`

同时配一条极简链路提示：

`Planning -> Creation -> Monitoring -> Review -> Planning`

它的作用不是解释流程细节，而是把“闭环”显性化。

## 视觉设计原则

### 1. 大气、简洁、可一眼理解

这一页不应该长得像产品功能表，也不应该变成复杂流程图。它应该更接近“战略版图页”：

- 信息量克制
- 排版对称
- 文字极短
- 强调结构关系

### 2. 四象限优先于表格

虽然源文档是表格，但页面不应该延续表格视觉。表格适合收集信息，不适合高层表达。网页里应该转译为四象限卡片结构。

### 3. 维持现有站点风格

需要沿用当前站点已经建立的视觉语言：

- 深色科技感背景
- 发光渐变与半透明边框
- serif 标题 + sans 正文
- 强调层级而不是装饰堆积

### 4. 避免“工具中心叙事”

这一页的主角必须是场景域，不是具体工具。子场景只能作为例子出现，不能喧宾夺主。

## 推荐版式

推荐使用“中心主张 + 四象限卡片 + 极简闭环提示”的版式。

理由：

1. 它最符合“完整闭环”的主旨。
2. 它比线性流程图更有“飞轮感”。
3. 它比平台能力架构图更聚焦场景，而不是重新回到能力中心。
4. 它适合当前页面宽度，也更容易与前后章节形成节奏区分。

## 不采用的方向

### 1. 继续用 Demo 截图

不采用原因：

- 叙事重心错误
- 无法表达中长期覆盖范围
- 容易让听众误以为这是单一功能展示

### 2. 全量场景表格

不采用原因：

- 信息密度过高
- 读者无法快速抓住主旨
- 视觉上会显得过重

### 3. 以 Agent Core 为中心的能力图

不采用原因：

- 容易把重心带回能力平台
- 弱化“场景闭环覆盖”的核心叙事

## 文案原则

文案需要遵守以下规则：

1. 标题负责表达战略，不写细节。
2. 子场景每个象限保留 2 到 3 个代表项即可。
3. 所有短语使用简洁英文，避免长句。
4. 不追求术语完整覆盖，追求认知建立。

## 实现范围

本次实现仅替换 `Home.tsx` 中原 `Demo` 页内容，不扩展到其他章节。

预期涉及：

- `src/pages/Home.tsx`
- 如有必要，可新增一个专用展示组件，例如 `ScenarioFlywheel.tsx`
- 如有必要，可把文案抽到 `src/data/presentation.ts`

## 错误处理与风险

### 风险 1：信息过多

如果把文档中的所有子场景都放进来，这一页会失去“战略页”的清晰度。

应对：

- 每个场域只保留 2 到 3 个代表子场景

### 风险 2：飞轮不够直观

如果视觉结构过于抽象，听众可能看不出闭环关系。

应对：

- 显式放置 `Planning -> Creation -> Monitoring -> Review -> Planning`

### 风险 3：过度强调装饰

如果视觉效果太强，页面会像概念海报而不是产品规划页。

应对：

- 保持卡片结构清晰，降低装饰复杂度

## 测试与验证

实现后需要验证：

1. 页面在当前站点宽度下视觉层级清晰。
2. 四个场域一眼可辨认。
3. 页面主旨从 “Demo” 成功切换为 “Scenario Flywheel”。
4. 不出现英文溢出、卡片高度错位或内容拥挤。
5. 与前后章节的视觉节奏保持协调。

## 结论

`Part IV` 应从“Demo 展示页”改为“Scenario Flywheel 战略页”。

页面重点不是列完所有子场景，而是让听众记住：

- 我们未来覆盖的是完整闭环
- 闭环由四个核心场域构成
- 这些场域会持续驱动下一轮优化

这将使整套叙事从“能力展示”推进到“场景覆盖规划”。
