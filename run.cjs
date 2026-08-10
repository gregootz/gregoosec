const { chromium } = require('playwright');

async function runOnce(i) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSd2vG2FVJVtEC-_GdkgJn5j8XIRZa0F_PdH-Ws56xkuywh89A/viewform', { timeout: 60000 });
    await page.locator('div').filter({ hasText: /^PACOME$/ }).nth(1).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    console.log(`✅ Run ${i}/100 done`);
  } catch (err) {
    console.log(`⚠️  Run ${i} failed, skipping... (${err.message.split('\n')[0]})`);
  } finally {
    await browser.close();
  }
}

async function main() {
  for (let i = 1; i <= 100; i++) {
    await runOnce(i);
    await new Promise(r => setTimeout(r, 5000));
  }
  console.log('🎉 All 100 runs complete!');
}

main();
