const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://dashboard-test.kommunicate.io/login
  await page.goto('https://dashboard-test.kommunicate.io/login');

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
  await page.waitForURL('https://dashboard-test.kommunicate.io/');

  // Go to https://dashboard-test.kommunicate.io/dashboard
  await page.goto('https://dashboard-test.kommunicate.io/dashboard');

  // Go to https://dashboard-test.kommunicate.io/dashboard/agent-analytics
  await page.goto('https://dashboard-test.kommunicate.io/dashboard/agent-analytics');

  // Click text=Bots
  await page.locator('text=Bots').click();
  await page.waitForURL('https://dashboard-test.kommunicate.io/dashboard/bot-analytics');

  // Click svg > g > path:nth-child(2) >> nth=0
  await page.locator('svg > g > path:nth-child(2)').first().click();
  await page.waitForURL('https://dashboard-test.kommunicate.io/conversations');

  // Click #km-li-as-group-437113 >> text=Vipin Pandey
  await page.locator('#km-li-as-group-437113 >> text=Vipin Pandey').click();
  await page.waitForURL('https://dashboard-test.kommunicate.io/conversations/437113');

  // Click text=Assign To: Vipin sup >> button
  await page.locator('text=Assign To: Vipin sup >> button').click();

  // Click text=Bots(45)
  await page.locator('text=Bots(45)').click();

  // Click #react-select-conversation-assign-to-dropdown-instance-option-1-14 >> text=New language km
  await page.locator('#react-select-conversation-assign-to-dropdown-instance-option-1-14 >> text=New language km').click();
  await page.waitForURL('https://dashboard-test.kommunicate.io/conversations/532440');

  // ---------------------
  await context.close();
  await browser.close();
})();