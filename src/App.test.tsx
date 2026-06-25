import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App routing", () => {
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
    expect(campaignAttributeTitle).toHaveClass("text-[14px]");
    expect(campaignMetricTitle).toHaveClass("text-[14px]");
    expect(campaignAttributeTitle).not.toHaveClass("text-[11px]");
    expect(campaignMetricTitle).not.toHaveClass("text-[11px]");
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

    expect(screen.getByText("Workflow Agent")).toBeInTheDocument();
    expect(screen.getByText("输出平台主张")).toBeInTheDocument();
    expect(screen.getByText("Campaign 属性")).toBeInTheDocument();
    expect(screen.getByText("释放人力")).toBeInTheDocument();
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
