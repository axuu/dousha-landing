import puppeteer from 'puppeteer-core';
import { execSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';

const CHROME = execSync(
  'ls -d ~/.cache/puppeteer/chrome/mac_arm-*/chrome-mac-arm64/*.app/Contents/MacOS/* 2>/dev/null | head -1'
)
  .toString()
  .trim();

const BASE = process.env.BASE || 'http://localhost:4321';
const OUT = '/tmp/shots';
mkdirSync(OUT, { recursive: true });

// shots: [name, path, width, height, fullPage]
const shots = [
  ['zh-desktop', '/', 1440, 900, true],
  ['en-desktop', '/en/', 1440, 900, true],
  ['zh-mobile', '/', 390, 844, true],
  ['en-mobile', '/en/', 390, 844, true],
  ['zh-hero', '/', 1440, 900, false],
  ['zh-mobile-hero', '/', 390, 844, false],
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--font-render-hinting=none', '--force-color-profile=srgb'],
});

for (const [name, path, w, h, full] of shots) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 2 });
  await page.goto(BASE + path, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  if (full) {
    // 滚动全程触发滚动揭示,再回到顶部,保证整页截图内容完整
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.6;
      for (let y = 0; y <= document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
  }
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: full });
  console.log('shot', name, '->', `${OUT}/${name}.png`);
  await page.close();
}

await browser.close();
console.log('done');
