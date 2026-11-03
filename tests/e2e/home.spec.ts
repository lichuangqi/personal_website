import { expect, test } from "@playwright/test";

test("presents the core recruiter journey", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: "Charlie Li" })).toBeVisible();
  await expect(page.getByText("Software Engineer", { exact: true }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /download résumé/i })).toHaveAttribute(
    "href",
    /Chuangqi-Li-Software-Engineer-Resume\.pdf$/,
  );
  await expect(page.getByRole("heading", { name: "Where I have delivered impact" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Let's connect" })).toBeVisible();

  await page.getByRole("link", { name: "View experience", exact: true }).first().click();
  await expect(page).toHaveURL(/#experience$/);
  await expect(page.locator("#experience")).toBeInViewport();

  await page.goto("/#about");
  await page.getByRole("link", { name: "View experience →", exact: true }).click();
  await expect(page).toHaveURL(/#experience$/);
  await expect(page.locator("#experience")).toBeInViewport();
});

test("publishes search-engine metadata routes", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  const sitemap = await request.get("/sitemap.xml");

  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain("Sitemap:");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain("https://chuangqili.com");
});
