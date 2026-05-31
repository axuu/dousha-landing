# Design

视觉系统锚定在 app 的真实图标:一颗咧嘴笑的**深豆沙红**豆子,从**奶油色"包子皮"**里探出头。配色不是从中性默认推导,而是直接继承这个品牌身份(identity-preservation)。

## Theme

暖、亮、有食物气。策略 = **Committed,偏 Drenched**:深豆沙红是主导品牌色,承担页面的温度与冲击;奶油色是品牌真实的"包子皮",作为内容承载面,与红色成对、刻意地交替出现——页面结构本身在讲"馅(红)/ 皮(奶油)"的故事,而不是把暖意稀释成 AI 默认的奶油底。深棕墨色做正文,腮红粉做点缀。

## Color (OKLCH)

### 豆沙红 Bean(主品牌色)
- `--bean-900: oklch(0.30 0.10 27)` — 最深,hero / footer 浸染底
- `--bean-700: oklch(0.40 0.13 27)` — 浸染中间调、深色区块
- `--bean-600: oklch(0.48 0.155 28)` — 链接 / 小字红、按钮 hover
- `--bean-500: oklch(0.55 0.17 30)` — 主品牌红、按钮、红色大标题
- `--bean-400: oklch(0.62 0.16 30)` — 豆子高光、明亮强调
- `--bean-300: oklch(0.74 0.10 25)` — 红底上的柔和高光

### 奶油 Dough(包子皮 / 承载面)
- `--dough-50:  oklch(0.985 0.008 80)` — 最浅暖白(谨慎使用)
- `--dough-100: oklch(0.962 0.018 78)` — 主奶油面
- `--dough-200: oklch(0.928 0.028 76)` — 深一档、卡片 / 描边
- `--dough-300: oklch(0.885 0.036 74)` — 分隔线、最深奶油

### 墨 Ink(奶油上的文字)
- `--ink:    oklch(0.27 0.035 40)` — 浓缩咖啡棕,正文(对奶油 ~11:1)
- `--ink-70: oklch(0.40 0.035 38)` — 次级文字(~6:1)
- `--ink-50: oklch(0.50 0.030 38)` — 仅用于大字 / 装饰性弱文字

### 红底上的文字 On-bean
- `--on-bean:    oklch(0.965 0.014 80)` — 红底主文字(对 bean-900 ~9:1)
- `--on-bean-70: oklch(0.86 0.045 45)` — 红底次级文字

### 点缀 Accent
- `--blush: oklch(0.85 0.06 22)` — 豆子腮红粉,小面积点缀 / 高亮

调色板纪律:全站只有 **红 + 奶油 + 棕墨 + 腮红**。不引入第四个色相。

## Typography

品牌语气词:**友好 · 轻巧 · 有巧思**。

- **Display / 标题(拉丁)**:`Bricolage Grotesque`(variable,600–800)。当代有性格的 grotesque,圆润里带巧思,贴合"有质感的可爱"。字距收紧 `-0.02em ~ -0.03em`(下限 -0.04em)。
- **正文 / UI(拉丁)**:`Hanken Grotesk`(variable,400/500/600)。温暖、易读的人文 sans,与 Bricolage 在"性格 display vs 中性正文"轴上形成对比。
- **中文(CJK)**:系统字体栈 `"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei"`。目标用户是 mac 用户,PingFang SC 原生即在、零下载、显示精致。
- **等宽 Mono**:系统栈 `ui-monospace, "SF Mono", Menlo`。仅用于真实代码(`brew install`)与键帽——功能性使用,非"技术感"装饰。

拉丁字体经 `@fontsource` 自托管(latin 子集),无外部请求。字号用 `clamp()` 流式,步进比 ≥1.25。Hero 上限 `clamp(2.4rem, 6.2vw, 4.4rem)`(≤96px)。`text-wrap: balance` 用于 h1–h3,`pretty` 用于长正文。

## Components

- **按钮**:主按钮 = 实心豆沙红 + 奶油字,圆角 `--radius-pill`;次按钮 = 奶油描边 / 幽灵态。hover 用 ease-out 微缩放 + 加深。
- **键帽 Keycap**:模拟物理按键的 `⇧ Right Shift`,顶面高光 + 底部厚边阴影,按下态下移 1px。
- **可复制命令块**:`brew install ...` 单行 mono,右侧复制按钮 + 复制成功反馈。
- **波形 Waveform**:SVG/CSS 动画的语音波形,演示"说话→文字"。
- **概念等式**:`🥟 豆包 − 外壳 = 🔴 豆沙` 的图形化插画(SVG),签名记忆点。
- **FAQ**:`<details>`/手风琴,语义化、键盘可达。
- 卡片只在确属最佳载体时使用;特性区用错落布局而非等大图标卡网格。

## Layout

- 内容最大宽 `--maxw: 72rem`;正文行宽 ≤ 70ch。
- 间距用 `clamp()` 流式呼吸,节奏有疏密对比。
- 红 / 奶油区块交替,形成"馅/皮"的纵向节奏;区块衔接处可做柔和的"包子皮"曲线分隔(SVG)。
- 响应式:移动端单列、加大点击区(≥44px)、键帽与命令块自适应换行;`repeat(auto-fit, minmax(...))` 做无断点网格。

## Motion

- 入场:hero 标题分行错落浮现、副文与 CTA 渐起;豆子角色轻微浮动(bob)。
- 交互:复制反馈、键帽按下、波形循环、CTA hover。
- 滚动揭示:克制且按内容定制(非每个区块统一 fade);默认内容即可见,动效只做增强,不靠 class 门控可见性。
- 缓动:ease-out 指数曲线(quart/expo),无 bounce / elastic。
- `prefers-reduced-motion: reduce` 下全部降级为淡入或瞬切,豆子停止浮动。

## SEO

- 完整 `<title>` / description / canonical / OpenGraph / Twitter card,中英各自 `lang` 与 `hreflang` 互链。
- JSON-LD:`SoftwareApplication`(macOS、免费、开源)+ `FAQPage`。
- `@astrojs/sitemap` 生成 sitemap,`robots.txt`,自绘 OG 图。
- 语义化标题层级、有意义 alt、Astro 默认零运行时 JS(仅复制/滚动揭示等少量内联脚本)。
