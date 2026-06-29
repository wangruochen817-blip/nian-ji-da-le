import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ScenarioFlywheel from "@/components/presentation/ScenarioFlywheel";
import { scenarioFlywheelSection } from "@/data/presentation";

describe("ScenarioFlywheel", () => {
  it("switches the active domain details when a flywheel node is clicked", () => {
    render(
      <ScenarioFlywheel
        centerStatement={scenarioFlywheelSection.centerStatement}
        loopLabels={scenarioFlywheelSection.loopLabels}
        domains={scenarioFlywheelSection.domains}
      />,
    );

    const planningButton = screen.getByRole("button", { name: /01 \/ Planning/i });
    const monitoringButton = screen.getByRole("button", { name: /03 \/ Monitoring/i });

    expect(planningButton).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("heading", { name: "Set the strategy" })).toBeInTheDocument();
    expect(screen.getAllByText("Major promotion planning").length).toBeGreaterThan(0);

    fireEvent.click(monitoringButton);

    expect(planningButton).toHaveAttribute("aria-pressed", "false");
    expect(monitoringButton).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("heading", { name: "Find what matters" })).toBeInTheDocument();
    expect(screen.getAllByText("Opportunity discovery").length).toBeGreaterThan(0);
  });
});
