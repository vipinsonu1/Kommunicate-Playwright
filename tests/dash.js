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

  // Go to https://dashboard-test.kommunicate.io/
  await page.goto('https://dashboard-test.kommunicate.io/');

  // Go to https://dashboard-test.kommunicate.io/dashboard
  await page.goto('https://dashboard-test.kommunicate.io/dashboard');

  // Go to https://dashboard-test.kommunicate.io/dashboard/agent-analytics
  await page.goto('https://dashboard-test.kommunicate.io/dashboard/agent-analytics');

  // 0× click
  await page.locator('text=DashboardFeature Request').click();

  // Click li:nth-child(3) > .nav-link > svg
  await page.locator('li:nth-child(3) > .nav-link > svg').click();
  await page.waitForURL('https://dashboard-test.kommunicate.io/conversations');

  // Click #km-li-as-group-532440 >> text=Hi
  await page.locator('#km-li-as-group-532440 >> text=Hi').click();
  await page.waitForURL('https://dashboard-test.kommunicate.io/conversations');

  // Click button:has-text("Select")
  await page.locator('button:has-text("Select")').click();

  // Click #react-select-conversation-assign-to-dropdown-instance-option-0-0 >> text=Vipin sup
  await page.locator('#react-select-conversation-assign-to-dropdown-instance-option-0-0 >> text=Vipin sup').click();
  await page.waitForURL('https://dashboard-test.kommunicate.io/conversations/532440');

  // ---------------------
  await context.close();
  await browser.close();
})();