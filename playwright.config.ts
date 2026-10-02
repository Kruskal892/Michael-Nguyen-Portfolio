import { defineConfig } from '@playwright/test';
const port = process.env.PORTFOLIO_TEST_PORT || '3107';
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  use: { baseURL: `http://127.0.0.1:${port}`, browserName: 'chromium' },
  webServer: {
    command: `npm run start -- --hostname 127.0.0.1 --port ${port}`,
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: false,
  },
  reporter: 'list',
});
