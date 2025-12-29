import { test, expect } from "@playwright/test";

test("homepage has title and loads correctly", async ({ page }) => {
  await page.goto("/");

  // Expect the page to have the app bar with EXHIBIT.IO title
  await expect(page.locator("text=EXHIBIT.IO")).toBeVisible();

  // Check that the main navigation is present (AppBar)
  await expect(page.locator('[role="banner"]')).toBeVisible();

  // Check that some basic text is present
  await expect(page.locator("text=Featured")).toBeVisible();
});

test("navigation to explore page works", async ({ page }) => {
  await page.goto("/");

  // Click on the Explore link - may need to be more specific
  await page.locator('a[href="/explore"]').click();

  // Wait for navigation
  await page.waitForURL("**/explore");

  // Check that we're on the explore page
  await expect(page).toHaveURL(/.*explore/);
});

test("can navigate to create exhibit page", async ({ page }) => {
  await page.goto("/");

  // Click on Create link - may need to be more specific
  await page.locator('a[href="/create-exhibit"]').click();

  // Wait for navigation
  await page.waitForURL("**/create-exhibit");

  // Check that we're on the create page
  await expect(page).toHaveURL(/.*create-exhibit/);
});

test("responsive design works on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE size

  await page.goto("/");

  // Check that navigation is still accessible on mobile (AppBar)
  await expect(page.locator('[role="banner"]')).toBeVisible();

  // Check that EXHIBIT.IO logo is visible
  await expect(page.locator("text=EXHIBIT.IO")).toBeVisible();
});
