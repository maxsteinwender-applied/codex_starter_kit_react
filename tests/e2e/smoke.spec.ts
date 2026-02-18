import { expect, test } from "@playwright/test";

test("home page smoke test", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /productized onboarding with explicit agent handoffs/i,
    })
  ).toBeVisible();

  await expect(page.getByText("/start -> /prod -> /ux -> /copy -> /fe -> /qa -> /prod")).toBeVisible();
});
