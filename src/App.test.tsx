import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App routing", () => {
  it("renders the English homepage on / without changing the main layout hooks", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    const sideTags = screen
      .getAllByText("Atom")
      .filter((element) => element.className.includes("rounded-[16px]"));
    const currentStateBox = screen.getByText("Operator Know-How, Stored Offline").closest("p")?.parentElement?.parentElement;
    const monitoringCard = screen.getByText("Workflow card").closest("article");
    const scenarioCard = screen.getByText("Rejected Campaigns").closest("article");
    const toolkitCard = screen.getByText("Campaign Import").closest("article");

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
    expect(screen.getByText("Workflow Product Roadmap")).toBeInTheDocument();
    expect(screen.getByText("From Tools to Solutions")).toBeInTheDocument();
    expect(screen.getByText("Part IV / Scenario Flywheel")).toBeInTheDocument();
    expect(screen.getByText("From point tools to full-loop scenario coverage")).toBeInTheDocument();
    expect(screen.getByText("One loop. Four scenario domains. Continuous optimization.")).toBeInTheDocument();
    expect(screen.getAllByText("Planning").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Creation").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Monitoring").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Review").length).toBeGreaterThan(0);
    expect(screen.queryByText("Part IV / Demo")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Campaign List UI demo")).not.toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/[\u4e00-\u9fff]/);
  });

  it("does not expose removed standalone routes", () => {
    window.history.pushState({}, "", "/other");

    render(<App />);

    expect(screen.queryByText("Workflow Agent")).not.toBeInTheDocument();
    expect(screen.queryByText("Peak-season flow: automated product and asset testing -> automated campaign setup -> monitoring alerts and control -> post-campaign review -> strategy retention")).not.toBeInTheDocument();
    expect(screen.queryByText("Scenario")).not.toBeInTheDocument();
  });

  it("keeps only the homepage route", () => {
    window.history.pushState({}, "", "/bilingual");

    render(<App />);

    expect(screen.queryByText("From Workflow Tools To Agentic Skills")).not.toBeInTheDocument();
    expect(screen.queryByText("Today: Many Tools, Few Solutions")).not.toBeInTheDocument();
    expect(screen.queryByText("From Tools to Solutions")).not.toBeInTheDocument();
  });
});
