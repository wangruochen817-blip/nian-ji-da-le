export const navItems = [
  { href: "#hero", label: "Intro" },
  { href: "#current-state", label: "Today" },
  { href: "#future", label: "Upgrade" },
  { href: "#product-structure", label: "Structure" },
  { href: "#demo", label: "Flywheel" },
  { href: "#scenarios", label: "Scenarios" },
  { href: "#toolkits", label: "Toolkit" },
];

export const painPoints = [
  {
    index: "01",
    title: "Every capability change forces tool rework",
    description: "Whenever the core layer shifts, the tools need another patch.",
  },
  {
    index: "02",
    title: "The platform ships tools, not scenario outcomes",
    description: "Most users face scenarios, not tool menus.",
  },
  {
    index: "03",
    title: "Complex workflows still live in personal know-how",
    description: "The next time around, people rebuild the same solution from memory.",
  },
];

export const currentToolGroups = [
  {
    title: "Bulk Ops",
    items: ["Bulk Edit", "Bulk Import / Export", "Bulk Duplicate"],
  },
  {
    title: "Analysis / Assist",
    items: ["Reporting", "Status", "Filter", "Columns"],
  },
];

export const atomicCapabilityGroups = [
  {
    title: "Campaign Creation",
    items: ["Objective", "Budget", "Bid", "Targeting", "Placement", "Creative"],
  },
  {
    title: "Campaign Attributes",
    items: ["Status", "Objectives", "Signal", "Placement", "Attribution", "Label"],
  },
  {
    title: "Campaign Metrics",
    items: ["Reach", "Engagement", "Conversion"],
  },
];

export const managedScenarioBars = [
  "Managed Delivery Optimization",
  "Managed Campaign Setup",
  "Intelligent Monitoring & Tuning",
];

export const skillGroups = [
  "One-Click Migration Upgrade",
  "Managed Optimization Control",
  "Launch in One Flow",
  "Smart Scheduling & Reporting",
];

export const opportunityItems = [
  {
    index: "01",
    title: "Agents take over tool creation and updates",
    description: "Tool maintenance no longer depends on waiting in a queue.",
  },
  {
    index: "02",
    title: "Move from tools to skills",
    description: "Package tools plus workflows into skills users can run by scenario.",
  },
  {
    index: "03",
    title: "Complex scenarios become managed services",
    description: "The platform delivers outcomes, not just buttons.",
  },
];

export const monitoringFlow = [
  {
    name: "Workflow card",
    tag: "Navigation",
    summary: "Surface the scenarios that need action first.",
    bullets: ["Scenario guide", "Attached to Campaign List", "Only what users care about"],
  },
  {
    name: "Insight",
    tag: "Auto Insight",
    summary: "Explain why this scenario needs attention",
    bullets: ["Scenario summary", "Impact scope", "Root-cause breakdown"],
  },
  {
    name: "Action",
    tag: "Actionable Skill",
    summary: "Drive the next action directly.",
    bullets: ["Recommended action", "Invoke tools", "Execution feedback"],
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
    insight: ["Summarize impacted volume and budget.", "Group by rejection reason."],
    action: ["Run Smart Fix", "Bulk-fix copy and visual policy issues"],
    accent: "from-rose-400/20 to-amber-200/10",
  },
  {
    id: "creative-test",
    name: "Creative Test Campaigns",
    insight: ["Summarize test results: winner vs. loser creatives", "Find assets still waiting for testing"],
    action: ["Use Bulk Edit to shift winner budgets", "Create new test groups with the testing tool"],
    accent: "from-violet-400/20 to-sky-300/10",
  },
  {
    id: "aos",
    name: "Opportunities (AOS)",
    insight: ["Diagnose weak campaigns and spot growth oppotunities", "Aggregate root-cause attribution"],
    action: ["Trigger AIGC creative generation", "Apply recommendations via Bulk Edit or Automation Rules"],
    accent: "from-cyan-400/20 to-emerald-300/10",
  },
  {
    id: "meta-imported",
    name: "Meta Imported",
    insight: ["Summarize imported campaign performance", "Identify promising imported assets"],
    action: ["Scale strong delivery with Bulk Edit", "Import more winners to expand the bench"],
    accent: "from-amber-300/20 to-fuchsia-300/10",
  },
];

export const toolkitColumns = [
  {
    title: "Creation",
    items: [
      "Campaign Import",
      "Bulk CSV",
      "Meta Campaign Import",
      "Google Campaign Import",
      "AIGC Creative",
      "Creative Test Tool",
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
  {
    title: "Review & Finding",
    items: [
      "Post campaign review",
      "Brand insight",
      "Reporting to Presentation",
    ],
  },
];

export const scenarioFlywheelSection = {
  eyebrow: "Part IV / Scenario Flywheel",
  title: "From point tools to full-loop scenario coverage",
  centerStatement: "One loop. Four scenario domains. Continuous optimization.",
  loopLabels: ["Planning", "Creation", "Monitoring", "Review", "Planning"],
  domains: [
    {
      id: "planning",
      index: "01 / Planning",
      title: "Set the strategy",
      items: ["Major promotion planning", "Budget strategy", "Pacing setup"],
      accent: "from-cyan-300/18 to-sky-300/8",
    },
    {
      id: "creation",
      index: "02 / Creation",
      title: "Launch faster",
      items: ["Bulk campaign setup", "Pre-launch testing", "Creative setup"],
      accent: "from-violet-300/18 to-fuchsia-300/8",
    },
    {
      id: "monitoring",
      index: "03 / Monitoring",
      title: "Find what matters",
      items: ["Opportunity discovery", "Automated optimization", "Alert-driven action"],
      accent: "from-emerald-300/18 to-cyan-300/8",
    },
    {
      id: "review",
      index: "04 / Review",
      title: "Feed the next loop",
      items: ["Performance diagnosis", "Insight synthesis", "Presentation-ready review"],
      accent: "from-amber-300/18 to-rose-300/8",
    },
  ],
} as const;
