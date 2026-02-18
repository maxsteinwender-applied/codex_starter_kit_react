import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home", () => {
  it("renders the primary heading", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /productized onboarding with explicit agent handoffs/i,
      })
    ).toBeInTheDocument();
  });

  it("shows the golden path card", () => {
    render(<Home />);

    expect(screen.getAllByText(/\/start -> \/prod -> \/ux -> \/copy -> \/fe -> \/qa -> \/prod/i).length).toBeGreaterThan(0);
  });
});
