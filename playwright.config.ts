import { defineConfig, devices } from "@playwright/test";

const PORT = 3000;
const DESKTOP_VIEWPORT = { width: 1440, height: 900 };
const MOBILE_VIEWPORT = { width: 390, height: 844 };

export default defineConfig({
  testDir: "tests/e2e",
  workers: 1,
  reporter: "list",
  use: { baseURL: `http://127.0.0.1:${PORT}` },
  webServer: {
    command: `pnpm build && pnpm preview --ignore-lock --host 127.0.0.1 --port ${PORT}`,
    url: `http://127.0.0.1:${PORT}`,
    reuseExistingServer: false,
    timeout: 120_000,
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: DESKTOP_VIEWPORT } },
    { name: "mobile", use: { ...devices["Desktop Chrome"], viewport: MOBILE_VIEWPORT } },
  ],
});
