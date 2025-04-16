// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  reporter: 'list',
  
  use: {
    retries: 2,
    trace: 'on-first-retry',
    screenshot: 'on-first-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure',
        viewport: {width:390, height:844},
        ignoreHTTPSErrors: true,
        permissions: ['geolocation'],
        ...devices['Desktop Chrome'], 
        Worker: 5
    },
    },
    {
      name: 'webkit',
      use: {
        // browserName: 'webkit',
        headless: true,
        screenshot: 'on',
        ...devices['Desktop Safari']
      }
    }
    // {
    //   name: 'firefox',
    //   use: {...devices['Desktop Firefox'] },
    // },
  ],
});

