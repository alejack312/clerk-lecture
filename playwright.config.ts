import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  // ...
  projects: [
    {
      name: "auth",
      testMatch: /global\.setup\.ts/,
    },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      dependencies: ["auth"],
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
      dependencies: ["auth"],
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
      dependencies: ["auth"],
    },
  ],
});
