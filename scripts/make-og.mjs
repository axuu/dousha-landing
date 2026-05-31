import puppeteer from 'puppeteer-core';
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const CHROME = execSync(
  'ls -d ~/.cache/puppeteer/chrome/mac_arm-*/chrome-mac-arm64/*.app/Contents/MacOS/* 2>/dev/null | head -1'
)
  .toString()
  .trim();

const iconB64 = readFileSync('public/dousha-icon.png').toString('base64');
const icon = `data:image/png;base64,${iconB64}`;

const html = `<!doctype html><html lang="zh"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&display=swap" rel="stylesheet">
<style>
  * { margin:0; box-sizing:border-box; }
  html,body { width:1200px; height:630px; }
  body {
    display:flex; align-items:center; gap:48px;
    padding:0 90px;
    font-family:'Bricolage Grotesque','PingFang SC',sans-serif;
    color:oklch(0.965 0.014 80);
    background:radial-gradient(120% 130% at 78% 0%, oklch(0.50 0.16 30), oklch(0.40 0.13 27) 48%, oklch(0.30 0.10 27) 100%);
    overflow:hidden; position:relative;
  }
  .glow { position:absolute; right:60px; top:120px; width:520px; height:520px;
    background:radial-gradient(circle, oklch(0.72 0.15 35 / 0.55), transparent 68%); }
  .copy { flex:1; position:relative; z-index:1; }
  .kicker { display:inline-flex; align-items:center; gap:12px; font-weight:600; font-size:25px;
    color:oklch(0.865 0.055 23); margin-bottom:26px; letter-spacing:-0.01em; }
  .dot { width:13px; height:13px; border-radius:50%; background:oklch(0.865 0.055 23);
    box-shadow:0 0 0 6px oklch(0.865 0.055 23 / 0.25); }
  h1 { font-weight:780; font-size:78px; line-height:1.04; letter-spacing:-0.02em; margin-bottom:26px; }
  h1 .accent { color:oklch(0.865 0.055 23); }
  .sub { font-size:30px; line-height:1.45; color:oklch(0.90 0.04 55); font-weight:500; max-width:620px; }
  .foot { margin-top:40px; display:flex; align-items:center; gap:16px; font-size:23px;
    color:oklch(0.90 0.04 55); font-weight:500; }
  .pill { padding:9px 20px; border-radius:999px; background:oklch(0.965 0.014 80 / 0.12);
    font-family:ui-monospace,'SF Mono',monospace; font-size:21px; }
  .art { position:relative; z-index:1; flex-shrink:0; }
  .art img { width:340px; height:340px; filter:drop-shadow(0 30px 50px oklch(0.2 0.08 27 / 0.6)); border-radius:64px; }
</style></head>
<body>
  <div class="glow"></div>
  <div class="copy">
    <div class="kicker"><span class="dot"></span>macOS 菜单栏语音听写 · Voice dictation</div>
    <h1>按住、说话、松手,<br><span class="accent">文字就落进光标里。</span></h1>
    <div class="sub">豆包减去外壳,剩下那口馅。不用装整套豆包输入法。</div>
    <div class="foot"><span class="pill">brew install --cask giraphant/tap/dousha</span></div>
  </div>
  <div class="art"><img src="${icon}" alt=""></div>
</body></html>`;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--force-color-profile=srgb'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: 'public/og.png', type: 'png' });
console.log('og.png written -> public/og.png (1200x630)');
await browser.close();
