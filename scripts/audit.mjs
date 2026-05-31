import puppeteer from 'puppeteer-core';
import { execSync } from 'node:child_process';
const CHROME = execSync(
  'ls -d ~/.cache/puppeteer/chrome/mac_arm-*/chrome-mac-arm64/*.app/Contents/MacOS/* 2>/dev/null | head -1'
)
  .toString()
  .trim();
const BASE = process.env.BASE || 'http://localhost:4321';
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--force-color-profile=srgb'],
});

const widths = [360, 390, 414, 768, 1024, 1280, 1440];
const urls = ['/', '/en/'];

for (const url of urls) {
  for (const w of widths) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: 900, deviceScaleFactor: 1 });
    await page.goto(BASE + url, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => document.querySelectorAll('.reveal').forEach((e) => e.classList.add('is-in')));
    await new Promise((r) => setTimeout(r, 300));
    const report = await page.evaluate((vw) => {
      const docW = document.documentElement.scrollWidth;
      const overflowing = [];
      const all = document.querySelectorAll('body *');
      for (const el of all) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.right > vw + 1) {
          const cs = getComputedStyle(el);
          // 只报告真正超出且非脚本性溢出的可见元素
          if (cs.position !== 'fixed' && cs.overflow !== 'hidden' && cs.overflowX !== 'auto' && cs.overflowX !== 'scroll') {
            overflowing.push(
              `${el.tagName.toLowerCase()}.${(el.className || '').toString().split(' ')[0]} right=${Math.round(r.right)}`
            );
          }
        }
      }
      return { docW, hasScroll: docW > vw + 1, overflowing: [...new Set(overflowing)].slice(0, 8) };
    }, w);
    const flag = report.hasScroll ? '⚠️ H-SCROLL' : 'ok';
    console.log(`${url} @${w}  docW=${report.docW}  ${flag}`);
    if (report.overflowing.length) console.log('   overflow:', report.overflowing.join(' | '));
    await page.close();
  }
}
await browser.close();
console.log('audit done');
