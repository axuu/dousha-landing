import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 改成你的正式域名即可(用于 canonical / OG / sitemap)。
// 部署到任意静态托管(Vercel / Netlify / GitHub Pages / Cloudflare Pages)都可。
const SITE = 'https://dousha.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: { zh: 'zh-CN', en: 'en' },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
