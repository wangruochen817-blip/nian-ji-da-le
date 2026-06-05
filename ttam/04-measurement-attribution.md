# 📊 TTAM 测量与归因体系 (Measurement & Attribution) — 学习笔记

**产品**：TikTok Ads Manager (TTAM)
**来源**：TikTok for Business Help Center + 产品实际界面浏览
**整理日期**：2026-06-04
**版本**：v1.0

---

## 一、TikTok 事件追踪方案总览

TikTok Ads Manager 的事件上报覆盖三个渠道（网站 / App / 线下）。核心产品是 **Events Manager**，你可以在 **Assets → Events** 找到。

### 1.1 三层事件来源

| 场景 | 推荐方案 | 代码/集成方式 | 支持的目标 |
|-----|---------|-------------|-----------|
| **网站** (Website) | **TikTok Pixel (JS)** 或 **Events API (S2S)** | Pixel 代码嵌入 HTML header / 服务端事件 API | Website Conversions、Catalog Sales |
| **应用** (App) | **TikTok SDK** 或 **MMP（Adjust/AppsFlyer/Singular 等）** | iOS/Android SDK 集成 / MMP 后台配置回调 | App Installs、App Events |
| **线下 / 其他** | **Offline Conversions / Partner Integrations** | CSV 上传 / CRM API / 数据提供商接入 | Offline Sales |

> **核心原则**：网站转化（Pixel / Events API）和应用转化（SDK / MMP）是两套独立的数据管道，分别对应不同的优化事件和归因模型。

### 1.2 数据上报优先级

对于同一事件，TikTok 推荐**多重校验（Deduplication）**：

```
Pixel (Client-side) → 负责基础事件 + 用户行为分析
Events API (Server-side) → 负责高精度转化（支付、注册）
└→ 两者通过 event_id + event_timestamp 做去重
```

> **最佳实践**：Pixel + Events API 并行上报，Pixel 抓行为，Events API 抓关键转化。2025 年起 TikTok 已把"Events API 覆盖率 ≥ 70%" 列为 Pixel 健康度评分指标之一。

---

## 二、TikTok Pixel 详解

### 2.1 位置与基础概念

- **入口**：Assets → Events → Web Events → Manage → Create Pixel
- **Pixel ID**：创建后生成的 16 位数字 ID，每个广告账户一个（或多个）
- **代码格式**：`ttq.load('YOUR_PIXEL_ID'); ttq.track('event_name', {params});`

### 2.2 标准事件 (Standard Events) 列表

TikTok Pixel 预定义 10+ 个标准事件。**必须使用标准事件名称**，否则系统无法做优化。

| 事件名 | 中文 | 触发时机 | 推荐参数 |
|-------|------|---------|---------|
| **View Content** | 浏览内容 | 商品详情页 / 文章页加载 | `content_id`, `value`, `currency` |
| **Click Button** | 按钮点击 | 用户点击 CTA 按钮 / 加入购物车按钮前 | `content_name` |
| **Add to Cart** | 加入购物车 | 商品加入购物车 | `content_id`, `value`, `currency`, `quantity` |
| **Initiate Checkout** | 开始结算 | 进入结账页 / 点击结算按钮 | `value`, `num_items` |
| **Add Payment Info** | 添加支付信息 | 用户输入银行卡/支付方式 | `value` |
| **Complete Payment / Purchase** | 完成支付 | 支付成功页面 / 支付回调 | `value`, `currency`, `contents`, `order_id` |
| **Search** | 搜索 | 用户在站内搜索 | `search_string` |
| **Add to Wishlist** | 加入收藏 | 商品加入收藏夹 | `content_id` |
| **Complete Registration** | 完成注册 | 用户注册成功 | `method` |
| **Contact** | 联系 | 用户提交联系表单 / 点击 WhatsApp 按钮 | `contact_method` |
| **Submit Form** | 提交表单 | 表单提交成功 | `form_name` |

### 2.3 自定义事件 (Custom Events)

标准事件不够用时，可以发送自定义事件：
```javascript
ttq.track('add_to_wishlist_diy', {
  product_id: 'SKU-123',
  product_name: 'TikTok Mug',
  value: 19.99,
  currency: 'USD'
});
```

> **注意**：自定义事件可以用于受众（Custom Audience），但**不保证**能被系统用于竞价优化——TikTok 对标准事件的模型是预训练的，对自定义事件需要足够样本。

### 2.4 Pixel 代码安装方法

| 方法 | 说明 | 推荐度 |
|-----|------|--------|
| **直接粘贴到 HTML** | 在 `<head>` 内粘贴 Pixel base code | ⭐⭐⭐⭐⭐ |
| **Google Tag Manager** | 通过 GTM 模板安装 | ⭐⭐⭐⭐ |
| **Shopify 等电商平台** | TikTok 官方 App 一键安装 | ⭐⭐⭐⭐⭐ |
| **WordPress 插件** | 官方或第三方插件 | ⭐⭐⭐ |

### 2.5 Pixel 健康度检查

Events Manager 会给出评分（Red / Yellow / Green）：

- 🟢 **Green**：事件设置良好，可用于竞价优化
- 🟡 **Yellow**：有改进空间，建议补齐关键事件（如 Add to Cart / Complete Payment）
- 🔴 **Red**：严重问题（如未触发 Complete Payment、事件参数缺失）

**常见 Red 原因**：
- 缺少 Complete Payment（最影响转化目标投放）
- 事件参数格式错误（currency 不是 3 位 ISO 代码）
- Events API 覆盖率 < 50%
- 归因设置问题（如 Click window 与行业差距过大）

---

## 三、Events API（Server-to-Server）

### 3.1 作用

TikTok Pixel 是**客户端上报**（JS 在浏览器运行），可能被 AdBlock 拦截 / iOS 隐私保护影响。Events API 是**服务端上报**（你的后端直接发请求到 TikTok），数据更完整、更可靠。

### 3.2 接入要点

| 项目 | 说明 |
|-----|------|
| **Access Token** | 在 Events Manager 生成，用于 API 鉴权 |
| **Pixel ID** | 与 Pixel 共用同一 ID |
| **事件去重** | 同一转化事件在 Pixel 和 Events API 都上报时，需要用 `event_id + event_name` 做去重 |
| **推荐上报的事件** | Complete Payment、Add to Cart、Initiate Checkout（漏斗中段以上事件） |

### 3.3 典型接入架构

```
用户浏览器 → 落地页（Pixel 前端事件：PageView / View Content）
            ↓
后端服务 → 数据库（订单/注册）
            ↓
Events API → TikTok（Complete Payment / Register，带 user_data: email_hash, phone_hash）
```

---

## 四、归因模型 (Attribution)

### 4.1 Click Attribution vs View Attribution

| 维度 | **Click Attribution（点击归因）** | **View Attribution（浏览归因）** |
|-----|-----|-----|
| 触发条件 | 用户点击广告后在归因窗口内完成转化 | 用户观看广告 ≥ 2 秒/6 秒后在归因窗口内完成转化（未点击） |
| 归因优先级 | **优先** —— 点击归因优先于浏览归因 | 次优先 —— 仅在无点击时触发 |
| 默认窗口 | 7 天 Click (1d / 7d / 14d / 28d 可选) | 1 天 View (0 / 1d / 7d 可选，0 = 关闭) |
| 数据量占比 | 通常 60-80% | 通常 20-40%（补充价值） |
| 对出价优化 | 主要信号（系统核心优化依据） | 补充信号（辅助发现增量用户） |

### 4.2 Attribution Window（归因窗口）

TikTok 提供以下归因窗口选项，在 Events Manager 设置：

| 类型 | 可选窗口 | 建议 |
|-----|---------|------|
| Click Attribution | 1 天 / 7 天 / 14 天 / 28 天 | 7 天（推荐默认）；28 天（长决策周期行业：B2B、教育、汽车） |
| View Attribution | 0 天（关闭）/ 1 天 / 7 天 | 1 天（大多数品牌）；0 天（只认点击，追求强归因） |

> **行业参考**：
> - **D2C 电商**：Click 7 天 + View 1 天（转化周期短，冲动购买）
> - **SaaS / B2B**：Click 14-28 天 + View 7 天（决策周期长）
> - **App 下载**：Click 7 天 + View 1 天（广告后即时下载为主）

### 4.3 time_attr vs skan 双归因体系

这是 TikTok 报表数据中两个不同的归因数据管道：

| **time_attr（Time-based / Pixel-based Attribution）** | **skan（SKAdNetwork Attribution）** |
|---|---|
| 基于 Pixel / Events API 上报的事件时间戳 | 基于 Apple SKAdNetwork 的归因回调（仅 iOS） |
| 支持所有平台：Web + Android + iOS（非隐私流量） | **仅覆盖 iOS 14.5+** 中限制了 IDFA 的流量 |
| 精度高：可区分点击 vs 浏览、可设置归因窗口 | 精度受限：只支持 0-2 天 / 3-7 天 / 8-35 天三个粗粒度窗口 |
| 支持标准事件和完整参数 | 只支持预设 Conversion Value 映射（0-63） |
| **主要用于竞价优化**（TikTok 出价系统依据） | 用于补全 iOS 缺失部分的转化（否则会低估） |

> **解读报表的关键**：总转化数 = time_attr 转化 + skan 转化。**skan 转化不会被用于出价优化**，但会出现在报表中用于核算整体效果。如果你的目标用户大量是 iOS 用户，建议同时关注两个数据管道。

---

## 五、核心指标 (KPIs) 定义

### 5.1 效果指标（Performance）

| 指标 | 公式 / 说明 | 目标值参考（电商行业） |
|-----|------------|----------------------|
| **Spend（花费）** | 总广告花费 | — |
| **CPM（Cost Per 1,000 Impressions）** | Spend / Impressions × 1,000 | $8-20（不同品类差异大） |
| **CPC（Cost Per Click）** | Spend / Clicks | $0.5-3 |
| **CPA（Cost Per Action/Acquisition）** | Spend / Conversions | 依毛利而定，建议 < 客户生命周期价值 (LTV) × 0.3 |
| **CTR（Click-Through Rate）** | Clicks / Impressions | 1-3%（信息流广告） |
| **CVR（Conversion Rate）** | Conversions / Clicks | 1-5% |
| **ROAS（Return On Ad Spend）** | Revenue / Spend | ≥ 2.5x 可盈利（取决于利润率） |
| **AOV（Average Order Value）** | Revenue / Conversions | 客单价 |

### 5.2 触达与频次指标

| 指标 | 说明 | 健康值 |
|-----|------|--------|
| **Reach（覆盖人数）** | 唯一看到广告的用户数 | — |
| **Frequency（频次）** | Impressions / Reach，平均每个用户看到几次 | 1-3 次（冷启动）；过高会导致创意疲劳 |
| **Impressions（展示次数）** | 广告被加载的总次数 | — |
| **Clicks（点击次数）** | 广告被点击的次数 | — |

### 5.3 创意相关指标（Creative-Specific）

| 指标 | 说明 | 健康值 |
|-----|------|--------|
| **6s VTR（6 秒播放率）** | 播放 ≥ 6 秒的视频数 / 总展示数 | ≥ 20% 为健康 |
| **Hold Rate / Retention（完播率）** | 完整看完视频的用户数 / 观看数 | 30-50%（取决于视频长度） |
| **Thumbstop Rate（拇指停止率）** | 3 秒停留数 / 展示数（仅部分版位可用） | — |
| **Engagement Rate（互动率）** | (Like + Comment + Share + Click) / Impressions | 2-5% 为良好 |

---

## 六、MMP（移动测量合作伙伴）与 SAN（自归因网络）

### 6.1 MMP 列表

TikTok 与以下主流 MMP 深度集成，App 类广告主推荐使用：

| MMP | 说明 |
|-----|------|
| **Adjust** | 全球头部 MMP，TikTok 官方认证 partner |
| **AppsFlyer** | 全球头部 MMP，功能全面 |
| **Singular** | 成本+归因一体化平台 |
| **Kochava** | 北美主流 MMP |
| **Branch** | 深度链接 + 归因 |
| **AppMetrica / Tenjin** | 其他可选 |

### 6.2 SAN (Self-Attributing Network)

TikTok 是 **SAN**（自归因网络）之一。在 MMP 后台，SAN 的工作方式是：

1. MMP 收到一个转化事件
2. 同步发送给所有 SAN（TikTok、Meta、Google Ads 等）
3. 每个 SAN 返回"Yes/No + 时间戳"是否匹配到曝光/点击
4. MMP 根据归因规则（通常是 last-click wins）决定归因归属

> **对广告主的价值**：你在 MMP 后台可以看到 TikTok 在全渠道中的真实增量贡献，而不只是 TikTok 自报的数字。

---

## 七、iOS SKAdNetwork (SKAN) 归因

### 7.1 背景

iOS 14.5+ 之后 Apple 强制要求 App Tracking Transparency（ATT）。用户选择"不允许跟踪"后，IDFA 不可用。**SKAdNetwork 是 Apple 提供的隐私安全归因框架**，用于在不获取用户身份的情况下完成转化归因。

### 7.2 工作原理

```
Step 1：TikTok 展示广告 → 广告位携带 SKAdNetwork signature
Step 2：用户安装/打开 App → App 触发 SKAdNetwork registerAppInstall
Step 3：Apple 在 0-6 天随机延迟后发送 postback 回调到 TikTok
Step 4：TikTok 收到回调 → 匹配广告曝光 → 计入 skan 转化
Step 5：TikTok 在报表展示 skan 转化（不用于出价优化，仅展示）
```

### 7.3 Conversion Value（转化值）

**Conversion Value = 0 到 63（6 位二进制）**。你需要定义每个值的含义：

| 推荐映射示例 | Conversion Value |
|-------------|------------------|
| 仅安装（无深层事件） | 0 |
| 打开 App ≥ 3 次 | 1 |
| 完成注册 | 2 |
| 加入购物车 | 3 |
| 完成购买（< $20） | 4 |
| 完成购买（$20-50） | 5 |
| 完成购买（$50-100） | 6 |
| 完成购买（> $100） | 7 |
| ... | ... 63 |

> **产品设计要点**：0 = 最低价值事件（仅安装），63 = 最高价值事件。TikTok 只取最高值一次。你需要在 App 内部按规则更新 Conversion Value。

### 7.4 对 TTAM 的影响

- skan 转化**不计入出价优化**，只在报表展示为"补充的 iOS 转化"
- skan 转化的归因窗口**只能是 Apple 允许的三档**（0-2 / 3-7 / 8-35 天）
- skan 转化**没有用户级别的参数**，无法做受众细分

---

## 八、数据报表 (Reports)

### 8.1 入口

- **Campaigns → View Report 按钮**（页面顶部，标注 New）
- 或 **Reporting** 模块（侧边导航）

### 8.2 报表支持的维度与指标

| 功能 | 说明 |
|-----|------|
| **Custom Columns（自定义列）** | 选择/排序/创建计算列（含自定义公式） |
| **Breakdown（维度拆分）** | 按时间 / 版位 / 设备 / 地域 / 创意 / 受众拆分 |
| **Time-based (time_attr) vs SKAdNetwork (skan)** | 两个数据管道可分别查看（关键指标都支持） |
| **Filters（筛选）** | 按 Campaign / Ad Group / Ad / Objective / Status 等筛选 |
| **Export（导出）** | CSV / Excel / PDF |

### 8.3 报表典型使用场景

| 场景 | 操作 |
|-----|------|
| 按天看 CPA 趋势 | Breakdown → Day，查看 CPA（time_attr）列 |
| 找最有效的版位 | Breakdown → Placement，按 Spend 降序 + CPA 升序 |
| 创意 A/B 测试分析 | Breakdown → Creative，对比 2 条素材的 CTR / CVR / CPA |
| iOS 补全效果检查 | Custom Columns → 开启 skan 列，对比 time_attr + skan 总量 |
| 月度/季度复盘 | 设置时间范围 → Export to Excel |

---

## 九、在 TTAM 界面中的位置

- **Events Manager**：顶部导航栏 → Assets → Events
- **Pixel 设置**：Events → Web Events → Manage → 选中 Pixel → Settings
- **Attribution 归因设置**：Pixel Settings → Attribution
- **Reports**：顶部导航栏 → Reporting（或 Campaigns → View Report 按钮）
- **Custom Columns**：Campaigns 列表页右上角工具栏
- **Breakdown 维度拆分**：Custom Columns 按钮右侧
- **列配置中可看到的全部指标**：Spend, CPA (time_attr & skan), CPC, CPM, CTR, CVR, ROAS, AOV, Reach, Frequency, Impressions, Clicks, Conversions, 6s VTR, Hold Rate, Thumbstop Rate, Engagement Rate, Video Completion Rate 等
