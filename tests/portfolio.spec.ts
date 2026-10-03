import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { certifications, projects } from '../src/data/portfolio';
test('portrait loads and interactive depth respects reduced motion', async ({ page }) => {
  await page.goto('/');
  const portrait = page.getByRole('img', { name: 'Portrait of Nguyen Duc Anh Minh' });
  await expect(portrait).toBeVisible();
  expect(
    await portrait.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0),
  ).toBeTruthy();
  await page.getByRole('button', { name: 'Pause scene animation' }).click();
  await expect(page.locator('.cube-spin')).toHaveCSS('animation-play-state', 'paused');
  await expect(page.locator('.section-scene .ambient-sphere').first()).toHaveCSS('animation-play-state', 'paused');
  await page.getByRole('button', { name: 'Resume scene animation' }).click();
  await expect(page.locator('.cube-spin')).toHaveCSS('animation-play-state', 'running');
  await page.locator('.hero-portrait .depth-card').hover({ position: { x: 30, y: 30 } });
  await expect(page.locator('.hero-portrait .depth-card')).not.toHaveCSS('transform', 'none');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('.hero-portrait .depth-card')).toHaveCSS('transform', 'none');
  await expect(page.locator('.cube-spin')).toHaveCSS('animation-name', 'none');
  await page.locator('#skills').scrollIntoViewIfNeeded();
  await expect(page.locator('.skills-grid article').first()).toHaveCSS('opacity', '1');
});
test('desktop content, project routes, keyboard access, and SEO assets', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page).toHaveTitle(/Nguyen Duc Anh Minh/);
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main-content/);
  await expect(page.getByRole('link', { name: 'Download CV' })).toHaveAttribute('href', '/cv.pdf');
  await expect(page.locator('.recognition-layout > .degree')).toHaveCount(1);
  await expect(page.locator('.certification-card')).toHaveCount(certifications.length);
  await expect(page.locator('.section-scene')).toHaveCount(5);
  await expect(page.locator('.space-field')).toHaveCount(0);
  const cv = await page.request.get('/cv.pdf');
  expect(cv.ok()).toBeTruthy();
  expect((await cv.body()).subarray(0, 1024).toString()).toContain('%PDF-');
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.screenshot({ path: 'artifacts/desktop.png', fullPage: true });
  await page.screenshot({ path: 'artifacts/desktop-viewport.png' });
  await expect(page.getByRole('link', { name: 'Read more' })).toHaveCount(6);
  for (const project of projects) {
    const slug = project.slug;
    await page.goto(`/projects/${slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(project.name);
    await expect(page.locator('.detail-meta')).toContainText(project.role);
    if (project.team)
      await expect(page.locator('.detail-meta')).toContainText(`${project.team} people`);
    if (project.company) await expect(page.locator('#overview')).toContainText(project.company);
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    await page.screenshot({ path: `artifacts/${slug}.png`, fullPage: true });
  }
  expect((await page.request.get('/projects/missing')).status()).toBe(404);
  for (const asset of ['/icon.svg', '/robots.txt', '/sitemap.xml', '/opengraph-image'])
    expect((await page.request.get(asset)).ok()).toBeTruthy();
});
test('themes follow the system, persist across routes, and remain accessible', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  const toggle = page.getByRole('button', { name: 'Toggle light and dark mode' });
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await toggle.click();
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    ).toBeTruthy();
  }
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.screenshot({ path: 'artifacts/desktop-dark.png', fullPage: true });
  await page.screenshot({ path: 'artifacts/desktop-dark-viewport.png' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'artifacts/mobile-dark-viewport.png' });
  await expect(page.getByRole('heading', { name: 'Projects', exact: true })).toBeVisible();
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(0, 0, 0)');
  for (const slug of ['homieplace', 'porta']) {
    await page.goto(`/projects/${slug}`);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  }
  expect(errors).toEqual([]);
});
test('section shortcuts, anchors, reduced motion, and viewport overflow', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/');
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    ).toBeTruthy();
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.locator('.site-header')).toHaveCount(0);
  await page
    .getByRole('navigation', { name: 'Section shortcuts' })
    .getByRole('link', { name: 'Contact' })
    .click();
  await expect(page).toHaveURL(/#contact/);
  await expect(page.getByRole('navigation', { name: 'Section shortcuts' })).toBeVisible();
  await expect(page.locator('.email-link')).toHaveAttribute(
    'href',
    'mailto:minhnguyenfe892@gmail.com',
  );
  await expect(page.locator('.contact-card .brand-icon')).toHaveCount(3);
  await expect(page.locator('.contact-card').filter({ hasText: 'GitHub' })).toHaveAttribute('href', 'https://github.com/Kruskal892');
  await expect(page.locator('.contact-card').filter({ hasText: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/minhnguyenfe892/');
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.goto('/');
  await page.screenshot({ path: 'artifacts/mobile.png', fullPage: true });
  await page.screenshot({ path: 'artifacts/mobile-viewport.png' });
  for (const slug of ['homieplace', 'porta']) {
    await page.goto(`/projects/${slug}`);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    ).toBeTruthy();
  }
});
