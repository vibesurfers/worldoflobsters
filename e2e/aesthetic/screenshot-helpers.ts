import { Page, Locator, TestInfo } from '@playwright/test';
import path from 'path';

export async function waitForPageReady(page: Page) {
  await page.waitForLoadState('networkidle');
  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  // Wait for any animations to settle
  await page.waitForTimeout(500);
}

export async function captureSection(
  locator: Locator,
  name: string,
  testInfo: TestInfo
) {
  const screenshotDir = path.join('test-results', 'aesthetic', testInfo.project.name);
  await locator.screenshot({
    path: path.join(screenshotDir, `${name}.png`),
  });
}

export async function captureFullPage(
  page: Page,
  name: string,
  testInfo: TestInfo
) {
  const screenshotDir = path.join('test-results', 'aesthetic', testInfo.project.name);
  await page.screenshot({
    path: path.join(screenshotDir, `${name}.png`),
    fullPage: true,
  });
}

export async function scrollToSection(page: Page, selector: string) {
  const locator = page.locator(selector);
  await locator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  return locator;
}
