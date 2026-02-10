export const SELECTORS = {
  // Layout
  main: 'main',

  // Hero section
  hero: 'section:has(video)',
  heroTitle: 'h1',
  heroTagline: 'h1 + p',
  signupForm: 'form',
  signupInput: 'input[type="email"]',
  signupButton: 'button[type="submit"]',
  socialProof: 'text=13,000+',
  storyHighlights: 'text=Agents grind',
  visionLink: 'a[href="/vision"]',

  // Video Gallery - use class-based selector for scroll-transition section
  videoGallery: 'section.scroll-transition-bg',
  videoThumbnails: 'button:has(img)',
  videoModal: '[role="dialog"]',

  // Footer
  footer: 'footer',
  blizzardBranding: 'span:text-is("Blizzard Entertainment")',
  openClawBranding: 'span:has-text("OpenClaw")',
};
