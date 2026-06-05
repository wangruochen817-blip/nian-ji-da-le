# 🛠 TTAM 广告创建流程 (Ad Creation Flow) — 学习笔记

**产品**：TikTok Ads Manager (TTAM)
**来源**：TikTok for Business Help Center + 产品实际界面浏览
**整理日期**：2026-06-04
**版本**：v1.0

---

## 一、三层广告结构：Campaign → Ad Group → Ad

TikTok Ads Manager 采用标准的三层架构（与 Meta 一致），每层配置不同维度的设置。

### 1.1 Campaign 层（推广系列）

| 配置项 | 说明 |
|--------|------|
| **推广目标 (Objective)** | 8 大目标之一，决定后续优化事件和竞价策略。一旦选定不可更改 |
| **推广系列名称** | 建议命名规范：品牌_目标_渠道_日期 |
| **推广系列预算优化 (CBO)** | 系统自动在 Ad Group 间动态分配预算 |
| **日预算/总预算** | 推广系列层级最低 $50 |

### 1.2 Ad Group 层（广告组）

| 配置项 | 说明 |
|--------|------|
| **受众定向 (Targeting)** | 地域、年龄、性别、兴趣/行为、自定义受众、相似受众、排除受众 |
| **广告版位 (Placement)** | Automatic Placements（推荐）或手动选择 |
| **预算与排期** | Ad Group 独立日预算 ≥ $20；投放开始/结束时间 |
| **出价策略 (Bidding)** | Lowest Cost / Cost Cap / Bid Cap / Smart+ 自动化 |
| **优化事件 (Optimization Goal)** | 与 Pixel/SDK 事件匹配（View Content → Add to Cart → Complete Payment） |

### 1.3 Ad 层（广告）

| 配置项 | 说明 |
|--------|------|
| **素材 (Creative)** | 竖版视频 9:16（推荐），≥ 720×1280，5-60 秒 |
| **程序化创意 (ACO)** | Automated Creative Optimization，系统自动组合多份素材/文案/CTA |
| **广告文案 (Ad Text)** | 主文案 + 标题 |
| **CTA 按钮** | Shop Now / Learn More / Install / Sign Up 等 |
| **目标 URL** | 落地页链接 + UTM 参数 |
| **Display Name & 头像** | 广告展示名称和品牌头像 |

> **核心原则**：一个 Campaign 下可放 1-N 个 Ad Group；一个 Ad Group 下可放 1-N 个 Ad。

---

## 二、创建模式：Simplified Mode vs Custom Mode

在 Ads Manager 点击 **Create** 后，系统提供两条路径：

| 维度 | **Simplified Mode（快速创建）** | **Custom Mode（自定义模式）** |
|-----|---------|------------|
| 设计目标 | 快速上线、简化流程、减少决策点 | 完整控制、精细运营、支持所有高级功能 |
| 广告类型 | 有限的广告格式 | In-Feed、Spark Ads、TopView、Lead Gen、Catalog Sales、DPA 等全部 |
| 定向选项 | 简化版（基础人口统计 + 兴趣大类） | 完整选项（自定义受众、相似受众、细粒度行为标签） |
| 出价与预算 | 推荐最低成本 + 日预算 | 全部竞价策略可选、支持 CBO/ABO 切换 |
| 创意工具 | 基本视频上传 + 少量模板 | ACO、Spark Ads、创意库、Symphony AI 工具全套 |
| 适合人群 | 新广告主、一次性活动、快速试水 | 专业投放师、长期优化、规模化运营 |
| 可扩展性 | 低，调整范围有限 | 高，所有高级工具开放 |

> **经验法则**：第一次登录 Ads Manager 时系统会让你选择默认模式。选 **Custom Mode** 后可随时切换回简化模式，但反向不一定可行 — 推荐默认 **Custom Mode**。

---

## 三、Smart+ 模式：AI 驱动的自动化推广系列

Smart+ 是 TikTok 对标 Meta Advantage+ 和 Google Performance Max 的全自动化产品，2024-2025 起成为 TTAM 主推的新功能。

### 3.1 Smart+ 工作方式

**广告主只需提供 3 个输入**：
1. **预算**（日预算或总预算）
2. **优化目标**（目标 CPA / 目标 ROAS / 安装等）
3. **素材**（视频 + 文案 + CTA 组合，建议 10-15 条起，理想 30+）

**TikTok AI 自动完成**：
- 🎯 **受众**：宽受众 + 算法探索 → 自动寻找最可能转化的用户
- 💰 **出价**：基于转化预估动态调整竞价，不设定 bid cap
- 📺 **版位**：自动选择 TikTok、Pangle、搜索等所有可投放位
- 🎬 **创意**：从素材库中自动组合/轮换最佳变体
- 📊 **预算分配**：CBO 级别在多个广告组间动态分配

### 3.2 Smart+ 支持的推广目标

| 目标 | 说明 |
|-----|-----|
| **Smart+ Web Conversion** | 网站转化，需要 Pixel / Events API |
| **Smart+ App Install** | App 下载 + 深层事件优化，需要 MMP |
| **Smart+ Lead Generation** | 内置表单收集线索 |
| **Smart+ Shopping / Catalog Sales** | 基于商品 Feed 的全自动化投放 |

> TikTok 官方公开数据：Smart+ Web Campaign 相较标准系列 **ROAS 提升 52%**。第三方测试中 App Install 目标 **CPI 下降 10-30%**。

### 3.3 Smart+ 升级版的灵活控制（关键变化）

从 2025 起，Smart+ 已不再是"全黑盒"——你可以按需在**全自动化、部分自动化、全手动**三档之间切换，这就是"升级版 Smart+ 体验"（Upgraded Smart+ Experience）：

- **全自动化**：所有受众/出价/版位交给 AI
- **部分自动化**：保留自动化，但可覆盖特定模块（例如"保留指定版位"）
- **手动模式**：在 Smart+ 框架下使用常规手动设置

> **这意味着 Smart+ 现在变成默认的创建流程**——你不再需要在"Smart+ vs 标准"二选一，而是在 Smart+ 统一流程里决定让 AI 介入的深度。

### 3.4 Smart+ vs 手动 — 选型参考

| 场景 | 推荐 Smart+ | 推荐 手动/自定义 |
|-----|-----|-----|
| 新账户冷启动、预算测试期 | ✅ 先跑 Smart+ 找基线 | ❌ 容易因缺乏数据学不到东西 |
| 明确的 CPA 目标 + 大量素材 | ✅ 让系统最大化转化效率 | ❌ 人工出价调整速度跟不上算法 |
| 需要严格控制受众（如 B2B 特定行业） | ⚠️ 谨慎（系统可能探索不相关人群） | ✅ 精细控制定向 |
| 需要严格品牌安全（特定版位黑名单） | ⚠️ 可能需要在 Smart+ 中覆盖设置 | ✅ 手动版位选择更直接 |
| A/B 测试素材变量 | ✅ Smart+ 也能并行测试，配合 ACO 更高效 | ✅ 需要严格控制变量的测试用手动 |
| 创意生产效率是瓶颈 | ✅ Smart+ 会自动帮你轮换 | ❌ 手动管理大量素材很吃力 |

> **最佳实践**：Smart+ 与手动系列 **并行投放** —— Smart+ 负责"走量"和"探索"，手动系列负责"精细测试"和"特定受众"。两者共享的素材库是核心资产。

### 3.5 Smart+ 使用贴士

- **素材量要够**：至少 10-15 条不同创意，理想 30+
- **前 72 小时不做频繁修改**：给系统学习期（Learning Phase）
- **素材是唯一可控杠杆**：创意质量决定 70% 以上的 Smart+ 表现
- **关注信号指标**：CTR、CVR、完播率比 CPA 更能预判长期趋势

---

## 四、Bulk Export / Import（批量导入导出）

### 4.1 位置与入口

- 路径：**Campaigns 选项卡 → 顶部「批量导出/导入」按钮**（Create 按钮旁）
- 两个子功能：**Export Ads（导出）** 和 **Import Ads（导入）**
- Smart+ 体验下同样可以使用 Bulk

### 4.2 两种使用模式

**模式 A：从现有广告导出 → 编辑 → 重新导入**（推荐新手）
1. 选中想克隆/修改的 Campaign / Ad Group / Ad
2. 点击 **Export Ads**，下载 Excel / CSV 文件
3. 修改需要调整的列（预算、素材、URL 等）
4. **⚠️ 不要删除/移动列，不要编辑 Campaign ID / Ad Group ID / Ad ID 列**
5. 点击 **Import Ads** 上传修改后的文件
6. 系统逐行校验，有错会给出行号+原因

**模式 B：使用空白模板从头创建**（适合规模化）
1. 点击 Bulk 菜单里的 **Download Blank Template**
2. 用模板填好所有 Campaign / Ad Group / Ad 行
3. **⚠️ 新建行的 ID 列必须留空**（如果填了会被当作"编辑已有"处理）
4. 上传，系统一次性批量创建所有对象

### 4.3 文件格式与限制

| 限制项 | 数值 |
|-------|------|
| 支持文件格式 | `.xlsx`、`.csv` |
| 最大文件行数 | 500 行（超出请拆分多个文件） |
| 最大文件体积 | 2 MB |
| 必填字段 | Campaign 名称、Objective、Ad Group 名称、定向、版位、出价、素材文件名、目标 URL |
| 可选字段 | UTM 参数、Label（标签）、排期、投放时段 |

### 4.4 典型使用场景

| 场景 | 操作 |
|-----|-----|
| **快速复制广告组到新市场** | 导出一行 Ad Group，复制 10 行，修改 Location 列 |
| **批量替换创意素材** | 上传新素材到 Assets → Creatives，在表格中替换素材名称列 |
| **批量修改广告预算** | 导出后修改广告组预算金额，重新上传 |
| **批量 A/B 测试多个 CTA / URL** | 复制 Ad 行，只修改 CTA 按钮文本和目标 URL |
| **程序化创意 (ACO) 批量调整** | 在 ACO 素材列增删素材 |
| **替换自定义受众** | 在 Audiences 列表工作表找到受众 ID，填到 `包含受众ID`/`排除受众ID` 列 |

### 4.5 常见坑 & 经验

1. **ID 列是禁区**：编辑已有广告时 ID 列绝不能改；新建广告时 ID 列必须留空
2. **不要删列 / 不要改表头**：系统依赖固定列顺序和名称
3. **素材文件必须先上传到 Creative Library**：表格中的"视频名称"必须与库中文件名匹配
4. **错误报告会告诉你哪一行失败**：Import 结束后先下载错误报告

---

## 五、完整创建流程 Checklist（新手参考）

```
✅ 准备阶段
  ├─ 开通 TikTok Ads Manager 账户
  ├─ 配置时区/货币/付款方式
  ├─ 安装 TikTok Pixel / Events API 并验证事件上报
  └─ 准备素材（建议 3-5 条不同创意的竖版视频）

✅ 第 1 步：Campaign 层
  ├─ 选择 Custom Mode（或从 Smart+ 开始）
  ├─ 选择推广目标（推荐 Website Conversions / App Installs）
  ├─ 设置 Campaign 名称
  └─ 开启 CBO + 日预算（或留到 Ad Group 控制）

✅ 第 2 步：Ad Group 层
  ├─ 优化事件（Complete Payment / Install 等）
  ├─ 受众：地域 + 年龄/性别 + 兴趣/行为（冷启动从 Broad 开始）
  ├─ 版位：Automatic Placements（推荐）
  ├─ 预算：Ad Group 日预算 ≥ $20-50
  ├─ 出价策略：Lowest Cost（新账户首选）
  └─ 投放排期：立即开始 / 指定时间段

✅ 第 3 步：Ad 层
  ├─ 上传视频 / 选择素材（开启 ACO 可一次上传多份）
  ├─ 填写广告文案 + 标题 + CTA
  ├─ 设置目标 URL 与 UTM 参数
  ├─ 配置 Display Name + 头像
  └─ 广告预览检查 → 提交审核

✅ 上线后 72 小时
  ├─ 观察 Learning Phase 学习期（不要频繁改设置）
  ├─ 监控 CTR、CVR、完播率、CPA
  ├─ 关停明显差的创意，补充新素材
  └─ 数据足够后尝试 Smart+ 或扩大预算
```

---

## 六、在 TTAM 界面中的位置

- **Create 按钮**：位于 Campaigns 页面顶部左上角，绿色 "+ Create" 按钮
- **Split test**：顶部工具栏，Create 按钮右侧
- **Bulk export/import**：Split test 按钮右侧
- **Automated rules**：Bulk 按钮右侧
- **View report**：Automated rules 按钮右侧（标注 New）
- **Custom Columns 列自定义**：右上侧工具栏
- **Breakdown 维度拆分**：Custom Columns 右侧
- **日期选择器**：页面右上角，可选择固定日期范围
