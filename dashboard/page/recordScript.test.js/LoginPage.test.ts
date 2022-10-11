import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://dashboard-test.kommunicate.io/
  await page.goto('https://dashboard-test.kommunicate.io/');

  // Go to https://dashboard-test.kommunicate.io/login?referrer=/
  await page.goto('https://dashboard-test.kommunicate.io/login?referrer=/');

  // Click text=EmailPlease enter user name to login >> [placeholder=" "]
  await page.locator('text=EmailPlease enter user name to login >> [placeholder=" "]').click();

  // Fill text=EmailPlease enter user name to login >> [placeholder=" "]
  await page.locator('text=EmailPlease enter user name to login >> [placeholder=" "]').fill('vipin+testkm14042021@kommunicate.io');

  // Click input[type="password"]
  await page.locator('input[type="password"]').click();

  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('Vipin1234');

  // Click #login-button
  await page.locator('#login-button').click();
  await expect(page).toHaveURL('https://dashboard-test.kommunicate.io/');

  // Go to https://dashboard-test.kommunicate.io/dashboard
  await page.goto('https://dashboard-test.kommunicate.io/dashboard');

  // Go to https://dashboard-test.kommunicate.io/dashboard/agent-analytics
  await page.goto('https://dashboard-test.kommunicate.io/dashboard/agent-analytics');

  // Click #ac-integrations
  await page.locator('#ac-integrations').click();
  await expect(page).toHaveURL('https://dashboard-test.kommunicate.io/integrations');

  // Click #ac-bot-integrations svg
  await page.locator('#ac-bot-integrations svg').click();
  await expect(page).toHaveURL('https://dashboard-test.kommunicate.io/bots/bot-integrations');

  // Click text=Kompose - Bot Builder
  await page.locator('text=Kompose - Bot Builder').click();
  await expect(page).toHaveURL('https://dashboard-test.kommunicate.io/bots/bot-builder-list');

  // Click .BotListStyles__BotItem-sc-126wg9x-4 > img >> nth=0
  await page.locator('.BotListStyles__BotItem-sc-126wg9x-4 > img').first().click();
  await expect(page).toHaveURL('https://dashboard-test.kommunicate.io/bots/bot-builder/-nm-mn-j8neo');

});