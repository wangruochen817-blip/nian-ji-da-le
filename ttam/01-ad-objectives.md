# 🎯 TTAM 广告目标 (Ad Objectives) — 学习笔记

**产品**：TikTok Ads Manager (TTAM)
**来源**：TikTok for Business Help Center + 产品实际界面浏览
**整理日期**：2026-06-04
**版本**：v1.0

---

## 一、广告目标三大分类概述

TTAM 将所有广告目标按营销漏斗分为三大类：

| 分类（中文） | 英文分类 | 漏斗阶段 | 核心目的 |
|---|---|---|---|
| 品牌认知 | Awareness | 上层（Top of Funnel） | 最大化曝光，让更多用户看到品牌 |
| 受众意向 | Consideration | 中层（Mid of Funnel） | 推动互动：点击、观看、关注、下载、留资 |
| 行为转化 | Conversion | 下层（Bottom of Funnel） | 推动购买或产生收入 |

---

## 二、所有广告目标完整列表（中英文对照）

| 序号 | 中文名称 | 英文名称 | 所属分类 |
|---|---|---|---|
| 1 | 覆盖人数 | Reach | 品牌认知 (Awareness) |
| 2 | 访问量 | Traffic | 受众意向 (Consideration) |
| 3 | 视频播放量 | Video Views | 受众意向 (Consideration) |
| 4 | 社区互动 | Community Interaction | 受众意向 (Consideration) |
| 5 | 品牌考虑度 | Brand Consideration | 受众意向 (Consideration) |
| 6 | 应用推广（含应用安装量） | App Promotion (incl. App Installs) | 受众意向 (Consideration) |
| 7 | 线索收集 | Lead Generation | 受众意向 (Consideration) |
| 8 | 销量（含网站转化量、商品销量） | Sales (incl. Website Conversions, Catalog Sales) | 行为转化 (Conversion) |

> **注意**：TikTok 近期做了目标合并——"应用安装"与"应用转化"已合并到 **应用推广 (App Promotion)**；"网站转化量"与"商品销量"已合并到 **销量 (Sales)**。新目标正在分阶段推出。

---

## 三、每个目标的定义、适用场景、关键优化事件与版位

### 1. 覆盖人数 (Reach)

**核心定义**：以最低成本将广告展示给尽可能多的定向受众，最大化唯一触达人数（unique users）。系统会自动设置频次上限，避免同一用户反复看到。

**适用场景**：
- 新品发布/品牌上线
- 进入新市场
- 季节性品牌活动
- 大规模创意测试
- 品牌记忆度/知名度提升

**关键优化事件**：
- Impressions（曝光次数）/ Reach（覆盖人数）
- Frequency（频次）

**支持版位**：
- TikTok For You 信息流
- 支持「竞价购买」和「覆盖与频次 (Reach & Frequency)」两种购买方式
- Spark Ads 支持此目标

---

### 2. 访问量 (Traffic)

**核心定义**：优化用户最可能点击广告并跳转到你的网站、落地页、应用商店页面或其他外部链接，按点击付费。2026 年新增「考虑度信号 (Consideration Signals)」开关，可切换为按「深度互动用户」或「新买家」优化，流量质量更高但 CPC 也更高。

**适用场景**：
- 为独立站/官网引流
- 推送促销活动落地页
- 有 Pixel 但尚未积累到足够转化数据、暂不适合跑转化目标
- 应用商店页面引流（替代 App Installs 的轻量方式）

**关键优化事件**：Clicks（点击次数）、Cost Per Consideration / Cost Per New Buyer（需开启考虑度信号）

**支持版位**：TikTok 信息流、Pangle（穿山甲联盟）、Spark Ads

---

### 3. 视频播放量 (Video Views)

**核心定义**：优化视频观看时长，算法会将广告投放给最可能看完视频的用户。付费模式为 CPV（每千次观看成本）。可选择按 2 秒观看或 6 秒观看作为优化事件。

**适用场景**：
- 产品演示视频/品牌故事
- 教程/教育类内容
- 以完播率和品牌关注度为核心 KPI 的活动
- 种草型内容传播

**关键优化事件**：2s View / 6s View、Video Completion Rate（视频完播率）

**支持版位**：TikTok 信息流、Spark Ads、覆盖与频次购买方式

---

### 4. 社区互动 (Community Interaction)

**核心定义**：通过 Spark Ads 推广真实账号的自然流量帖子，优化 TikTok 社区内的互动行为。此目标仅支持 Spark Ads 样式（使用真实账号帖子投放）。

**包含两个子优化目标**：
- **关注量 (Follower Growth)**：推动粉丝数增长
- **页面访问量 (Page Visit)**：增加主页、话题页、播放列表页、音乐页的访问量（后三者处于 Beta 阶段，需白名单）

**适用场景**：
- TikTok 新商家建立品牌权威
- 希望获得自有流量、后续做企业号受众再营销
- 提升后续直播表现（粉丝观看直播时长可高出 5.4 倍）
- 将 TikTok 主页作为漏斗下层转化的附加通道

**关键优化事件**：新增粉丝数 / Follows、主页访问次数 / Page Visits、CPE（Cost Per Engagement）

**支持版位**：**仅支持 Spark Ads**

---

### 5. 品牌考虑度 (Brand Consideration)

**核心定义**：专门设计用于扩大高意向受众池的中层漏斗目标。通过高级模型评估历史行为，自动对最可能从认知进入积极考虑阶段的用户出价。跟踪 12+ 种平台内行为（评论、搜索、分享、关注、商品卡点击等），同时兼顾「考虑成本」与「6 秒观看率」。

> 目前仅限美国上线，需要加入 TikTok Market Scope，联系销售/合作伙伴开通，非自助可用。

**适用场景**：已完成基础曝光，希望筛选高意向人群进入后续转化漏斗；品牌心智建设 + 效率兼顾的中等预算投放

**关键优化事件**：Cost Per Consideration（每考虑成本）、6s View-through Rate（6 秒观看率）

---

### 6. 应用推广 (App Promotion，含应用安装量 App Installs)

**核心定义**：优化移动应用的安装或应用内事件。TikTok 已将旧版「应用安装」和「应用转化（再营销）」合并到统一的「应用推广」目标下，一个目标同时支持拉新和激活老用户。需集成 TikTok SDK 或连接 Adjust / AppsFlyer 等 MMP（移动测量伙伴）。

**适用场景**：游戏下载推广、工具/社交/电商类 App 拉新、再营销（推动已安装用户完成注册、首次下单等）、重新激活流失用户

**关键优化事件**：Installs（安装，CPI 计费）、In-app events（应用内事件，CPA/oCPA 计费）

**支持版位**：TikTok 信息流、Pangle、Spark Ads

---

### 7. 线索收集 (Lead Generation)

**核心定义**：用户点击广告 CTA 后在 TikTok 内打开即时表单（Instant Form），无需离开 App 即可提交联系方式。系统会预填用户公开的资料（如姓名、邮箱），大幅降低摩擦。

**适用场景**：B2B 广告、金融/教育/房地产/汽车等高考虑度行业、服务型商家（SaaS 试用预约、课程咨询）、WhatsApp 私域运营前置获客

**关键优化事件**：Leads（线索数量）、Cost Per Lead (CPL)、表单提交率

**支持版位**：TikTok 信息流、Spark Ads

---

### 8. 销量 (Sales，含网站转化量 Website Conversions & 商品销量 Catalog Sales)

**核心定义**：TikTok 最底层的转化目标，覆盖三个购买目的地（网站 / 应用 / TikTok Shop）。旧版「网站转化量」和「商品销量」已合并到此新目标下。

**三种落地页模式**：
- **网站 (Website)**：需要部署并验证 TikTok Pixel，优化 View Content / Add to Cart / Complete Payment 等标准事件
- **应用 (App)**：需要 SDK 或 MMP 接入，优化应用内购买事件
- **TikTok Shop**：无需 Pixel 或商品库，直接对接 TikTok Shop 电商生态；支持视频购物广告、直播购物广告、商品购物广告（DPA 风格）

**可运行的系列类型**：手动系列 / Smart+ 系列（AI 自动化）/ 搜索系列（搜索结果页关键词定向）

**适用场景**：电商品牌推动网站购买、有内购流的 App 业务、TikTok Shop 卖家、再营销（弃购用户/历史访客/加购用户召回）

**关键优化事件**：View Content、Add to Cart、Complete Payment / Purchase、Initiate Checkout、Add Payment Info、Complete Registration、Search、Contact

**支持版位**：TikTok 信息流、Pangle、TikTok Shop 专属视频/直播/商品购物广告、Spark Ads（竞价模式）

---

## 四、目标选择决策框架（总结）

| 你的目标 | 应选广告目标 | 核心优化方向 |
|---|---|---|
| 让更多人看到品牌 | 覆盖人数 (Reach) | CPM / 最大曝光 |
| 引流到网站/落地页 | 访问量 (Traffic) | CPC / 考虑度信号 |
| 让用户认真看完视频 | 视频播放量 (Video Views) | CPV / 6s 观看 |
| 涨粉 / 运营 TikTok 社区 | 社区互动 (Community Interaction) | Spark Ads + 关注/主页访问 |
| 培养高意向中层受众 | 品牌考虑度 (Brand Consideration) | 12+ 行为信号 + 6s VTR |
| 推 App 下载/应用内转化 | 应用推广 (App Promotion) | CPI / oCPA |
| 在平台内收集线索 | 线索收集 (Lead Generation) | CPL / 即时表单 |
| 网站/应用/TikTok Shop 卖货 | 销量 (Sales) | oCPC / CPA / Pixel 事件 |

### 三个避坑原则

1. **新 Pixel 无数据**：先用 Traffic 跑 1–2 周累积事件，再切 Sales（TikTok 算法通常需要 25+ 次转化才能走出学习期）
2. **小预算（日预算 < $50）**：优先 Traffic 或 Lead Generation，Sales 目标因数据不足会持续低效
3. **创意与目标要匹配**：品牌故事视频不要投到 Sales 目标下，否则创意意图与算法信号冲突导致浪费预算

---

## 五、在 TTAM 界面中的位置

在 TTAM 创建 Campaign 时，**第一步就是选择广告目标**。左侧二级菜单中 Campaign 列表也会显示每个 Campaign 对应的目标类型。

从侧边栏中也可以看到每个目标对应已有 Campaign 的示例：
- Reach 系列、Traffic 系列、Video Views 系列、Brand Consideration 系列、Lead Generation 系列、Sales 系列等都有测试 Campaign
