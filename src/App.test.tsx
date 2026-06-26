import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App routing", () => {
  it("renders clearer framed boxes on /", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    const sideTags = screen.getAllByText("原子能力");
    const currentStateBox = screen.getByText("操盘手线下沉淀").closest("p")?.parentElement?.parentElement;
    const monitoringCard = screen.getByText("盯盘卡").closest("article");
    const scenarioCard = screen.getByText("Rejected Campaigns").closest("article");
    const toolkitCard = screen.getByText("Campaign Setup").closest("article");

    expect(sideTags).toHaveLength(2);
    sideTags.forEach((tag) => {
      expect(tag).toHaveClass("border-white/30");
    });
    expect(currentStateBox).toHaveClass("rounded-[24px]");
    expect(currentStateBox).toHaveClass("border-white/30");
    expect(currentStateBox).not.toHaveClass("rounded-[20px]");
    expect(monitoringCard).toHaveClass("border-cyan-300/30");
    expect(scenarioCard).toHaveClass("border-white/30");
    expect(scenarioCard).toHaveClass("bg-white/[0.045]");
    expect(scenarioCard).not.toHaveClass("bg-white/[0.04]");
    expect(toolkitCard).toHaveClass("border-white/30");
    expect(toolkitCard).toHaveClass("bg-white/[0.045]");
  });

  it("renders the diagram recreation page on /other", () => {
    window.history.pushState({}, "", "/other");

    render(<App />);

    const toolTag = screen.getByText("工具");
    const atomicCapabilityTag = screen.getByText("原子能力");
    const firstPainCard = screen.getByText("难复用").closest("article");
    const objectivesCell = screen.getByText("Objectives");
    const campaignAttributeTitle = screen.getByText("Campaign 属性");
    const campaignMetricTitle = screen.getByText("Campaign 指标");

    expect(screen.getByText("场景")).toBeInTheDocument();
    expect(screen.getByText("难复用")).toBeInTheDocument();
    expect(screen.queryByText("Development")).not.toBeInTheDocument();
    expect(screen.getByText("Bid")).toBeInTheDocument();
    expect(screen.getByText("Targeting")).toBeInTheDocument();
    expect(screen.getAllByText("Placement").length).toBeGreaterThan(0);
    expect(toolTag).toHaveClass("mt-1");
    expect(toolTag).toHaveClass("h-[calc(100%+10px)]");
    expect(toolTag).not.toHaveClass("h-full");
    expect(atomicCapabilityTag).toHaveClass("mt-4");
    expect(atomicCapabilityTag).toHaveClass("h-[372px]");
    expect(atomicCapabilityTag).not.toHaveClass("h-[371px]");
    expect(atomicCapabilityTag).not.toHaveClass("h-[calc(100%-8px)]");
    expect(objectivesCell).toHaveClass("text-[10px]");
    expect(objectivesCell).not.toHaveClass("text-[8px]");
    expect(campaignAttributeTitle).toBeInTheDocument();
    expect(campaignMetricTitle).toBeInTheDocument();
    expect(firstPainCard).toHaveClass("border-white/10");
    expect(firstPainCard).toHaveClass("bg-[linear-gradient(180deg,rgba(64,72,92,0.72),rgba(24,29,41,0.94))]");
    expect(firstPainCard).toHaveClass("backdrop-blur-[2px]");
    expect(firstPainCard).not.toHaveClass("border-white/8");
    expect(screen.queryByText("Bid 设定/编辑")).not.toBeInTheDocument();
    expect(screen.queryByText("Targeting 设定/编辑")).not.toBeInTheDocument();
    expect(screen.queryByText("Placement 编辑")).not.toBeInTheDocument();
  });

  it("renders the workflow agent recreation page on /other-2", () => {
    window.history.pushState({}, "", "/other-2");

    render(<App />);

    const workflowTitle = screen.getByText("Workflow Agent");
    const sideLabel = screen.getByText("场景");
    const scenarioStrip = screen
      .getByText("深度复盘洞察：月/季/年趋势复盘 -> Media/人群/素材/转化场景复盘 -> 一键汇报产生PPT/HTML")
      .closest("div");
    const objectiveCell = screen.getByText("Objective");

    expect(workflowTitle).toBeInTheDocument();
    expect(screen.getByText("输出平台主张")).toBeInTheDocument();
    expect(screen.getByText("Campaign 属性")).toBeInTheDocument();
    expect(screen.getByText("释放人力")).toBeInTheDocument();
    expect(sideLabel).toHaveClass("text-[20px]");
    expect(sideLabel).not.toHaveClass("text-[18px]");
    expect(scenarioStrip).toHaveClass("min-h-[48px]");
    expect(scenarioStrip).toHaveClass("text-[15px]");
    expect(scenarioStrip).not.toHaveClass("min-h-[40px]");
    expect(objectiveCell).toHaveClass("text-[12px]");
    expect(objectiveCell).not.toHaveClass("text-[11px]");
    expect(workflowTitle).toHaveClass("text-[24px]");
    expect(workflowTitle).toHaveClass("py-3");
    expect(workflowTitle).not.toHaveClass("text-[20px]");
  });

  it("renders the new workflow agent recreation page on /other-3", () => {
    window.history.pushState({}, "", "/other-3");

    render(<App />);

    expect(screen.getByText("Workflow Agent")).toBeInTheDocument();
    expect(screen.getByText("大促全流程： 自动化测品/素材 -> 自动化Campaign Setup -> 盯盘预警调控 -> 投后复盘 -> 策略沉淀")).toBeInTheDocument();
    expect(screen.getByText("输出平台主张")).toBeInTheDocument();
    expect(screen.getByText("Campaign 指标")).toBeInTheDocument();
    expect(screen.getByText("Conversion")).toBeInTheDocument();
  });
});
