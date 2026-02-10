import { test, expect } from '@playwright/test';
import { SELECTORS } from './selectors';
import {
  captureSection,
  captureFullPage,
  waitForPageReady,
  scrollToSection,
} from './screenshot-helpers';

test.describe('Landing Page Aesthetic Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForPageReady(page);
  });

  test('full page screenshot', async ({ page }, testInfo) => {
    await captureFullPage(page, 'landing-full', testInfo);
  });

  test('hero section - structure and visuals', async ({ page }, testInfo) => {
    const hero = page.locator(SELECTORS.hero);
    await expect(hero).toBeVisible();

    // Structural assertions
    await expect(page.locator(SELECTORS.heroTitle)).toContainText('WORLD OF');
    await expect(page.locator(SELECTORS.heroTitle)).toContainText('LOBSTERS');
    await expect(page.locator(SELECTORS.signupInput)).toBeVisible();
    await expect(page.locator(SELECTORS.signupButton)).toContainText('JOIN THE HORDE');
    await expect(page.locator(SELECTORS.socialProof)).toBeVisible();

    await captureSection(hero, 'hero-default', testInfo);
  });

  test('video gallery section', async ({ page }, testInfo) => {
    const gallery = await scrollToSection(page, SELECTORS.videoGallery);
    await expect(gallery).toBeVisible();

    // Check all 4 thumbnails
    const thumbnails = gallery.locator(SELECTORS.videoThumbnails);
    await expect(thumbnails).toHaveCount(4);

    await captureSection(gallery, 'video-gallery', testInfo);
  });

  test('video modal opens on click', async ({ page }, testInfo) => {
    const gallery = await scrollToSection(page, SELECTORS.videoGallery);
    const firstThumbnail = gallery.locator(SELECTORS.videoThumbnails).first();

    await firstThumbnail.click();
    await page.waitForTimeout(500);

    const modal = page.locator(SELECTORS.videoModal);
    await expect(modal).toBeVisible();

    await captureFullPage(page, 'video-modal-open', testInfo);
  });

  test('footer section', async ({ page }, testInfo) => {
    const footer = await scrollToSection(page, SELECTORS.footer);
    await expect(footer).toBeVisible();

    await expect(page.locator(SELECTORS.blizzardBranding)).toBeVisible();
    await expect(page.locator(SELECTORS.openClawBranding)).toBeVisible();

    await captureSection(footer, 'footer', testInfo);
  });
});
