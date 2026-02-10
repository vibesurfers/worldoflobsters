import { test, expect } from '@playwright/test';
import {
  captureFullPage,
  waitForPageReady,
} from './screenshot-helpers';

test.describe('Vision Page Aesthetic Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/vision');
    await waitForPageReady(page);
  });

  test('full page screenshot', async ({ page }, testInfo) => {
    await captureFullPage(page, 'vision-full', testInfo);
  });

  test('lore sections visible', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('The Vision');
    await expect(page.locator('h2:text("The Awakening")')).toBeVisible();
    await expect(page.locator('h2:text("The Alliance Reforged")')).toBeVisible();
    await expect(page.locator('h2:text("The Open Economy")')).toBeVisible();
    await expect(page.locator('h2:text("The Road to Level 60")')).toBeVisible();
    await expect(page.locator('h2:text("Beyond Azeroth")')).toBeVisible();
  });

  test('CTA visible', async ({ page }) => {
    await expect(page.locator('a:text("Join Now")')).toBeVisible();
  });
});
