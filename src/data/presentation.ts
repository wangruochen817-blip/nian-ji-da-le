export const navItems = [
  { href: "#hero", label: "开场" },
  { href: "#current-state", label: "现状" },
  { href: "#future", label: "升级" },
  { href: "#product-structure", label: "产品结构" },
  { href: "#demo", label: "Demo" },
  { href: "#scenarios", label: "场景" },
  { href: "#toolkits", label: "Toolkit" },
];

export const painPoints = [
  {
    index: "01",
    title: "原子能力一变，工具就要重新适配",
    description: "能力升级一来，工具就得跟着补。",
  },
  {
    index: "02",
    title: "平台提供的是工具，不是场景解法",
    description: "会用工具的人少，遇到场景的人多。",
  },
  {
    index: "03",
    title: "复杂 workflow 仍停留在个人经验里",
    description: "复杂解法在脑子里，下次还得重装一遍。",
  },
];

export const currentToolGroups = [
  {
    title: "批量操作",
    items: ["批量编辑", "批量导入/导出", "批量复制"],
  },
  {
    title: "分析 / 辅助",
    items: ["Reporting", "Status", "Filter", "Columns"],
  },
];

export const atomicCapabilityGroups = [
  {
    title: "Campaign 创建",
    items: ["Objective", "Budget", "Bid", "Targeting", "Placement", "Creative"],
  },
  {
    title: "Campaign 属性",
    items: ["Status", "Objectives", "Signal", "Placement", "Attribution", "Label"],
  },
  {
    title: "Campaign 指标",
    items: ["Reach", "Engagement", "Conversion"],
  },
];

export const managedScenarioBars = [
  "全托管投放优化",
  "全托管 Campaign Setup",
  "智能监控与调优",
];

export const skillGroups = [
  "一键迁移优化升级",
  "智能托管调控",
  "一键化投放",
  "智能排期与汇报",
];

export const opportunityItems = [
  {
    index: "01",
    title: "Agent 接管工具创造与更新",
    description: "工具更新不再靠人排队提需求。",
  },
  {
    index: "02",
    title: "从工具升级为技能",
    description: "把工具 + workflow 封成 skill，用户对着场景就能用。",
  },
  {
    index: "03",
    title: "复杂场景走向全托管",
    description: "平台交付结果，不只交付按钮。",
  },
];

export const monitoringFlow = [
  {
    name: "盯盘卡",
    tag: "Quick Filter",
    summary: "先把该处理的业务场景筛出来。",
    bullets: ["分场景过滤", "挂在 Campaign List", "只放用户关注的事"],
  },
  {
    name: "Insight",
    tag: "Auto Insight",
    summary: "再解释为什么要处理这件事。",
    bullets: ["问题摘要", "影响范围", "根因拆解"],
  },
  {
    name: "Action",
    tag: "Actionable Skill",
    summary: "最后直接推动动作发生。",
    bullets: ["推荐动作", "调用工具", "执行反馈"],
  },
];

export const demoFilters = [
  "Rejected Campaigns",
  "Creative Tests",
  "AOS Opportunities",
  "Meta Imported",
];

export const demoCampaigns = [
  { name: "Spring Launch - US", spend: "$124K", status: "Rejected risk", signal: "High" },
  { name: "Creative Test Wave 5", spend: "$88K", status: "Winner emerging", signal: "Medium" },
  { name: "GMV Max AOS Pack", spend: "$166K", status: "Under delivery", signal: "High" },
  { name: "Meta Import Batch", spend: "$43K", status: "Migration insight", signal: "Low" },
];

export const scenarioCards = [
  {
    id: "rejected",
    name: "Rejected Campaigns",
    insight: ["汇总受影响数量与预算。", "按拒审原因分组。"],
    action: ["调用Smart Fix", "批量修复文字 / 视觉违规"],
    accent: "from-rose-400/20 to-amber-200/10",
  },
  {
    id: "creative-test",
    name: "Creative Test Campaigns",
    insight: ["汇总测试结果：winner/loser creative", "发现待测试素材"],
    action: ["调用Bulk Edit调整Winner组预算", "调用测试工具创建测试组"],
    accent: "from-violet-400/20 to-sky-300/10",
  },
  {
    id: "aos",
    name: "Opportunities (AOS)",
    insight: ["诊断问题计划，发现潜力计划", "root cause归因汇总。"],
    action: ["触发AIGC创意生成", "调用Bulk Edit/Automation Rule，执行建议"],
    accent: "from-cyan-400/20 to-emerald-300/10",
  },
  {
    id: "meta-imported",
    name: "Meta Imported",
    insight: ["汇总 imported campaign 表现", "识别被导入潜力素材"],
    action: ["调用Bulk Edit，扩大优质投放", "导入更多，增强储备"],
    accent: "from-amber-300/20 to-fuchsia-300/10",
  },
];

export const toolkitColumns = [
  {
    title: "Campaign Setup",
    items: [
      "Campaign Import",
      "Bulk CSV",
      "Meta Campaign Import",
      "Google Campaign Import",
      "Meta Creative Import",
      "Google Creative Import",
    ],
  },
  {
    title: "Production & Editing",
    items: [
      "AIGC Creative",
      "Duplicate",
      "Creative Test Tool",
      "Bulk Edit",
      "AI Mapping",
    ],
  },
  {
    title: "Monitoring & Diagnosis",
    items: [
      "BI Smart Fix",
      "AOS Diagnosis",
      "Automation Rule",
      "AI Summary",
      "Custom Report",
    ],
  },
];
