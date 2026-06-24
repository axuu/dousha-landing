# Dousha 落地页 / Landing Page

[豆沙 (Dousha)](https://github.com/giraphant/dousha) 的产品落地页:一个 macOS 菜单栏语音听写小工具。中英双语、纯静态、做了 SEO、移动端适配。

## 技术栈

- **[Astro 5](https://astro.build)** —— 默认零运行时 JS,产出纯静态 HTML,落地页与 SEO 的最佳选择。
- **OKLCH** 设计 token + 自托管可变字体(Bricolage Grotesque / Hanken Grotesk),CJK 用系统字体(PingFang SC)。
- 仅少量内联脚本(滚动揭示、复制命令、导航底色),无前端框架运行时。

## 开发

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # 产出到 dist/(纯静态)
npm run preview    # 本地预览构建产物
```

## 部署

`dist/` 是纯静态文件，可托管到任意平台：Vercel、Netlify、Cloudflare Pages、GitHub Pages 等。

**Coolify 推荐使用 Dockerfile：**

1. Build Pack 选择 **Dockerfile**。
2. Exposed Port 填 `80`。
3. Health Check Path 可填 `/health`。
4. 绑定正式域名，并确认 `astro.config.mjs` 里的 `SITE` 就是该域名。

Docker 镜像会先用 Node 构建 Astro，再用 nginx 服务 `dist/`，线上容器不需要 Node 运行时。

**部署前请改一处：** 把 `astro.config.mjs` 里的 `SITE` 改成你的正式域名 —— 它用于 canonical、OpenGraph、hreflang 和 sitemap。改完后 `npm run build` 重新生成。

## 结构

```
src/
  i18n/strings.ts        所有中英文案集中在此(两条路由共用一个数据源)
  layouts/Base.astro     <head>、SEO、JSON-LD、揭示/复制脚本
  components/            Nav · Hero · Concept · HowItWorks · Features · Install · Faq · Footer
  pages/index.astro      中文 (/)
  pages/en/index.astro   英文 (/en/)
public/
  dousha-icon.png        真实 app 图标(品牌色锚点)
  og.png                 分享图(1200×630)
  robots.txt
```

设计依据见根目录的 [`PRODUCT.md`](./PRODUCT.md)(策略)与 [`DESIGN.md`](./DESIGN.md)(视觉系统)。

## SEO

- 中英各自 `<title>` / description / canonical,`hreflang`(zh-CN / en / x-default)互链。
- JSON-LD:`SoftwareApplication` + `FAQPage`。
- `@astrojs/sitemap` 自动生成 sitemap,`robots.txt`,自绘 OG 图。

## 重新生成分享图

改了文案或视觉后,重新生成 `public/og.png`:

```sh
npm run og
```

(依赖 `puppeteer-core` 与本机已安装的 Chrome;`scripts/` 下另有 `shot.mjs`、`audit.mjs` 用于截图与跨断点溢出检测。)
