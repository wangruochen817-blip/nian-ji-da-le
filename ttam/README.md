# 📚 TTAM (TikTok Ads Manager) 产品知识库 — 索引

> **产品**：TikTok Ads Manager (TTAM)
> **知识来源**：TikTok for Business Help Center 公开文档 + TTAM 产品实际界面浏览
> **整理日期**：2026-06-04
> **版本**：v1.0

---

## 📁 文件结构

```
/ttam/
├── README.md                    ← 本文件（索引）
├── 01-ad-objectives.md          ← 广告目标（8 大目标 + 漏斗分类）
├── 02-ad-creation-flow.md       ← 广告创建流程（三层结构 + Smart+ + Bulk）
├── 03-bidding-optimization.md   ← 出价与优化体系（4 种竞价策略 + 学习期）
└── 04-measurement-attribution.md ← 测量与归因（Pixel / Events API / SKAN / MMP）
```

---

## 一、快速参考（Cheatsheet）

### 1.1 关键决策框架

| 问题 | 快速答案 | 详细文件 |
|-----|---------|---------|
| 新账户第一次做广告，选什么目标？ | **销量 (Sales)** / **应用推广 (App Promotion)** —— 直接优化购买/安装 | [01-ad-objectives.md](01-ad-objectives.md) |
| 新账户冷启动选什么出价策略？ | **Lowest Cost** —— 让系统自由探索，等有 50+ 转化后再切 Cost Cap | [03-bidding-optimization.md](03-bidding-optimization.md) |
| 日预算多少合适？ | **Ad Group ≥ $20**；**CBO Campaign ≥ $50**；建议 ≥ 目标 CPA × 20 | [03-bidding-optimization.md](03-bidding-optimization.md) |
| 优化事件选哪个？ | 新 Pixel → **View Content / Add to Cart**；数据充足 → **Complete Payment** | [03-bidding-optimization.md](03-bidding-optimization.md) |
| 新广告前 72 小时能改设置吗？ | **尽量不要**（学习期 Learning Phase），等 50+ 转化后再动 | [03-bidding-optimization.md](03-bidding-optimization.md) |
| Smart+ 什么时候上？ | 素材 ≥ 10 条 + 有明确 CPA 目标时直接上；或作为新账户基线 | [02-ad-creation-flow.md](02-ad-creation-flow.md) |
| Pixel 怎么装最靠谱？ | **Shopify/TikTok App 一键装**（电商）；或 **HTML head + GTM**，配合 Events API 去重 | [04-measurement-attribution.md](04-measurement-attribution.md) |
| iOS 归因怎么搞？ | **Pixel/Events API + SKAdNetwork 两套并行**，报表看 time_attr + skan 之和 | [04-measurement-attribution.md](04-measurement-attribution.md) |
| 归因窗口怎么设？ | **Click 7 天 + View 1 天**（电商）；长决策周期 Click 调 14-28 天 | [04-measurement-attribution.md](04-measurement-attribution.md) |
| 怎么批量创建/修改广告？ | **Bulk Export / Import** —— 导出 Excel → 修改 → 重新上传；ID 列不能动 | [02-ad-creation-flow.md](02-ad-creation-flow.md) |
| A/B 测试怎么做？ | **单变量 + 7 天 + 统计显著性 ≥ 90% + Power ≥ 80%**；不要中途改设置 | [03-bidding-optimization.md](03-bidding-optimization.md) |

---

## 二、各文件内容速览

### 📄 01-ad-objectives.md — 广告目标体系
**核心内容**：8 大广告目标（覆盖人数、访问量、视频播放量、社区互动、品牌考虑度、应用推广、线索收集、销量）的定义、适用场景、关键优化事件、版位支持。
**关键信息**：
- 3 大漏斗分类（Awareness / Consideration / Conversion）
- 每个目标的 **适用行业 / 关键 KPI / 版位支持矩阵**
- **目标选择决策框架**（你的目标 → 应选广告目标 → 核心优化方向）
- **避坑原则**：新 Pixel 无数据先用 Traffic、小预算优先 Lead Gen、创意与目标匹配

### 📄 02-ad-creation-flow.md — 广告创建流程
**核心内容**：三层结构（Campaign → Ad Group → Ad）每层的配置字段与作用、Simplified vs Custom Mode 对比、Smart+ 自动化系列工作原理与升级变化、Bulk Export/Import 的两种模式与常见坑、完整创建流程 Checklist、TTAM 界面中各功能按钮的位置。
**关键信息**：
- **Campaign 层**：目标 + CBO + 预算
- **Ad Group 层**：受众 + 版位 + 预算排期 + 出价 + 优化事件
- **Ad 层**：素材 + ACO + 文案 + CTA + URL + Display Name
- **Smart+ 升级版**：从"全黑盒"进化到"自动化框架内可覆盖设置"
- **Bulk Import 规则**：500 行上限 / ID 列禁区 / 素材先上库
- **TTAM 界面位置**：Create / Split Test / Bulk / Automated Rules / View Report / Custom Columns / Breakdown / 日期选择器

### 📄 03-bidding-optimization.md — 出价与优化体系
**核心内容**：4 种竞价策略（Lowest Cost / Bid Cap / Cost Cap / Smart+）的原理与对比、优化事件完整列表（转化类 / 互动类 / 应用类）、预算策略（日预算 vs 总预算 / CBO vs Ad Group Budget）、Split Test A/B 测试 5 步流程与统计显著性要求、学习期（Learning Phase）机制与处理方式。
**关键信息**：
- **Lowest Cost**：系统无上限探索 → 新账户首选 → 预算需 ≥ 目标 CPA × 20
- **Cost Cap / oCPA**：设置目标平均 CPA → 需 7 天累计 ≥ 50 次转化
- **Bid Cap**：设置每次竞价最高价格 → 完全可控但转化量偏少
- **优化事件**：View Content → Add to Cart → Complete Payment 递进
- **CBO 推荐默认**：Ad Group Budget 仅在精细测试时使用
- **A/B 测试**：单变量 / 7 天 / 每组 ≥ $50/天 / 统计显著性 ≥ 90%
- **学习期 72 小时规则**：上线前 3 天不要频繁改设置

### 📄 04-measurement-attribution.md — 测量与归因体系
**核心内容**：TikTok 事件追踪三层结构（网站 / App / 线下）、Pixel 10+ 标准事件与安装方法、Events API Server-to-Server 接入、time_attr vs skan 双归因体系、Click vs View 归因窗口、MMP 与 SAN 集成、iOS SKAdNetwork 与 Conversion Value、核心 KPI 定义（CPM / CPC / CPA / CTR / CVR / ROAS / Reach / Frequency / 6s VTR / Hold Rate / Thumbstop Rate）。
**关键信息**：
- **Pixel 健康度 Red/Yellow/Green**：Red 意味着关键事件（Complete Payment）缺失
- **Events API 覆盖率 ≥ 70%** 是 TikTok 推荐指标
- **time_attr（主要数据 + 出价依据）** vs **skan（iOS 补充 + 仅展示）**
- **Click 7 天 + View 1 天** 是电商行业默认归因窗口
- **SKAN Conversion Value = 0-63**，需在 App 内自定义映射
- **MMP（Adjust/AppsFlyer/Singular/Kochava）** 做全渠道增量对比

---

## 三、TTAM 功能模块速览（基于实际界面浏览）

### Campaigns（推广系列 / 广告活动）Tab
- **核心**：Campaign / Ad Group / Ad 三层切换（左侧过滤器）
- **顶部工具栏**：Create / Split Test / Bulk Export·Import / Automated Rules / View Report
- **右侧工具栏**：Custom Columns / Breakdown / 日期选择器
- **列表默认列**：Name / Status / Objective / Budget / Bid / Results / Spend / Reach / Frequency / Impressions / Clicks / CPC / CTR / CVR / CPA / ROAS / AOV 等

### 其他导航模块（从左侧/顶部导航栏可见）
- **Reporting**：自定义报表
- **Assets → Events**：Events Manager（Pixel / Events API 管理）
- **Assets → Creatives / Creative Library**：素材库管理
- **Tools → Keyword Planner / Brand Search Hub**：搜索广告工具
- **Audience Manager**：自定义受众 / 相似受众 / 排除受众管理
- **TikTok Symphony**：TikTok 创意/内容创作工具
- **Account Settings / Billing**：账户与付款

### 典型 Campaign 命名（从示例测试广告推断）
- **Reach**（品牌认知测试）
- **Traffic**（网站引流测试）
- **Video Views**（视频内容测试）
- **Brand Consideration**（中漏斗意向测试）
- **Lead Generation**（线索收集）
- **Sales / Website Conversions**（电商转化）
- **Smart+** 前缀的自动化系列
- **A/B Test** 前缀的对比测试系列

---

## 四、已覆盖 vs 待深入的主题

### ✅ 已覆盖（本知识库）

- 8 大广告目标的定义与适用场景
- Campaign → Ad Group → Ad 三层结构与配置
- Simplified / Custom / Smart+ 创建模式
- 4 种竞价策略与优化事件
- 预算策略（日/总、CBO/ABO）
- A/B 测试流程与统计原则
- 学习期机制
- Pixel / Events API 安装与事件
- time_attr vs skan 双归因管道
- Click / View 归因窗口
- MMP / SAN / SKAN
- 核心 KPI 指标定义
- Bulk 批量导入导出

### ❌ 待深入（建议后续补充）

| 主题 | 说明 |
|-----|------|
| **受众定向 (Targeting)** | 兴趣 / 行为 / 人口统计 / 自定义受众 / 相似受众 / Lookalike 的详细配置与推荐策略 |
| **版位 (Placement) 详解** | TikTok For You / TikTok Search Results / Pangle / 视频贴 / 搜索广告 / 商品搜索广告 等各版位特性 |
| **创意策略与最佳实践** | 竖版视频 9:16 标准规格 / 前 3 秒钩子 / TikTok 原生感 / 常见创意模板 |
| **自动化创意 (ACO) 深入** | ACO 素材数量建议 / 文案变体策略 / CTA 测试 |
| **广告审核政策 (Ad Review)** | TikTok 审核规则、常见驳回原因、申诉流程 |
| **Brand Safety & 品牌安全** | 内容分级 / 不适宜内容排除 / 版位黑名单 |
| **关键词规划 (Keyword Planner)** | TikTok 搜索广告的关键词选择与出价策略 |
| **Catalog Sales / 商品广告** | Product Catalog 设置 / 商品 Feed 格式 / 动态商品广告 (DPA) |
| **TikTok Shop 电商广告** | 视频购物 / 直播购物 / 商品购物广告设置 |
| **品牌广告 (Brand Solutions)** | TopView / Brand Takeover / Branded Hashtag Challenge / Branded Effect（非自助投放） |
| **再营销 / Retargeting** | 弃购召回 / 历史访客召回 / 加购未购用户召回的受众配置 |
| **账户结构 (Account Structure)** | Business Center / Ad Account / Pixel / App ID 的层级关系 |
| **计费与付款 (Billing)** | 付款方式 / 货币 / 时区 / 账单周期 |
| **高级报表与洞察** | Funnel 漏斗分析 / Audience 洞察 / Creative 洞察 / 竞品分析 |
| **API 接入** | TikTok Marketing API（程序化创建 / 批量操作 / 数据拉取） |

---

## 五、版本更新提示（2024-2026 期间的重要变化）

| 变化 | 影响 |
|-----|------|
| **Smart+ 全面推广** | 从"可选功能"升级为"默认创建流程"，新增"升级版体验"（部分自动化 + 部分手动） |
| **目标合并：应用安装 → 应用推广** | App Installs 与 App Events 统一到 App Promotion 目标下 |
| **目标合并：网站转化 → 销量** | Website Conversions 与 Catalog Sales 统一到 Sales 目标下 |
| **考虑度信号 (Consideration Signals)** | Traffic 目标新增开关，可按"深度互动用户 / 新买家"优化 |
| **Cost Cap 规则升级** | 从"强制贴近目标 CPA"变更为"先拿低价转化再拓展" |
| **Events API 健康度要求** | 覆盖率 ≥ 70% 成为推荐指标，Pixel 健康度评分纳入考量 |
| **SKAN 4.0 / 5.0 升级** | Conversion Value 多事件支持、分层归因、Crowd anonymity 阈值调整 |
| **搜索广告 / 搜索系列** | TikTok 搜索结果页广告从 Beta 升级到正式版，Sales 目标可运行搜索系列 |

> **⚠️ 注意**：Help Center 的文档更新可能滞后于实际产品功能。本知识库中的信息截止 2026-06-04，建议实际操作时以 **TTAM 界面提示**为准。
