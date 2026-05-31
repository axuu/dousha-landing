export type Lang = 'zh' | 'en';

export const LANGS: Lang[] = ['zh', 'en'];

/** 两种语言的页面 URL */
export const langPath: Record<Lang, string> = {
  zh: '/',
  en: '/en/',
};

export const htmlLang: Record<Lang, string> = {
  zh: 'zh-CN',
  en: 'en',
};

export interface FaqItem {
  q: string;
  a: string;
}

export interface Strings {
  htmlLang: string;
  dir: string;
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    links: { href: string; label: string }[];
    github: string;
    cta: string;
    toggleLabel: string;
    toggleTo: string;
  };
  hero: {
    eyebrow: string;
    titleLines: string[];
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    brewLabel: string;
    chips: string[];
    iconAlt: string;
    demo: {
      hint: string;
      keycap: string;
      listening: string;
      transcript: string;
      caption: string;
    };
  };
  concept: {
    eyebrow: string;
    title: string;
    body: string;
    bun: string;
    minus: string;
    filling: string;
    bunSub: string;
    fillingSub: string;
  };
  how: {
    eyebrow: string;
    title: string;
    steps: { k: string; title: string; body: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  install: {
    eyebrow: string;
    title: string;
    subtitle: string;
    methods: {
      tag: string;
      title: string;
      body: string;
      command?: string;
      cta?: { label: string; href: string };
    }[];
    permsTitle: string;
    perms: string;
    copy: string;
    copied: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  footer: {
    tagline: string;
    nav: { href: string; label: string }[];
    credits: string;
    builtBy: string;
    backToTop: string;
  };
}

export const t: Record<Lang, Strings> = {
  zh: {
    htmlLang: 'zh-CN',
    dir: 'ltr',
    meta: {
      title: '豆沙 Dousha · macOS 菜单栏语音听写，不用装豆包输入法',
      description:
        'Dousha（豆沙）是一个 macOS 菜单栏小工具：按住一个键说话，松手就把豆包语音识别转写的文字粘贴到当前应用。免费开源，支持 macOS 14+，无需安装整套豆包输入法。',
      ogAlt: '豆沙 Dousha 的 app 图标：一颗咧嘴笑的豆沙红豆子，从奶油色的包子皮里探出头。',
    },
    nav: {
      links: [
        { href: '#how', label: '怎么用' },
        { href: '#features', label: '功能' },
        { href: '#install', label: '安装' },
        { href: '#faq', label: '常见问题' },
      ],
      github: 'GitHub',
      cta: '安装',
      toggleLabel: '切换到 English',
      toggleTo: 'EN',
    },
    hero: {
      eyebrow: 'macOS 菜单栏语音听写',
      titleLines: ['按住、说话、松手，', '文字就落进光标里。'],
      subtitle:
        'Dousha（豆沙）把豆包的语音听写单独剥出来，常驻菜单栏。不用装整套豆包输入法，按住一个键说话，转写好的文字直接粘贴到你正在打字的地方。',
      primaryCta: '用 Homebrew 安装',
      secondaryCta: '下载 DMG',
      brewLabel: '最省事的装法：',
      chips: ['免费开源 · MIT', 'macOS 14+', '无需豆包输入法'],
      iconAlt: '豆沙的笑脸豆子图标',
      demo: {
        hint: '按住说话',
        keycap: '右 Shift',
        listening: '正在听…',
        transcript: '帮我把这段话直接转成文字',
        caption: '松手的瞬间，文字就粘好了。',
      },
    },
    concept: {
      eyebrow: '名字就是说明书',
      title: '豆包减去外壳，剩下的那口馅。',
      body: '豆包（Doubao）是带壳的包子：一整套输入法，连着它的界面和习惯一起装进系统。你真正想要的，其实只是里面那口语音识别。豆沙（Dousha）把馅留下、把皮扔掉：同一套识别能力，变成一个安静待在菜单栏的小工具。',
      bun: '豆包',
      minus: '减去外壳',
      filling: '豆沙',
      bunSub: '一整套输入法',
      fillingSub: '只留语音识别',
    },
    how: {
      eyebrow: '怎么用',
      title: '三步，没有第四步。',
      steps: [
        {
          k: '01',
          title: '按住',
          body: '默认热键是右 Shift。不顺手？在设置里换成任何一个键。',
        },
        {
          k: '02',
          title: '说话',
          body: '对着麦克风说你想打的字，屏幕上的波形会提示它正在听。',
        },
        {
          k: '03',
          title: '松手',
          body: '松开键，转写好的文字立刻粘到当前光标处，和你手打的一样。',
        },
      ],
    },
    features: {
      eyebrow: '功能',
      title: '可以按你的习惯调。',
      items: [
        { title: '自定义热键', body: '右 Shift 不顺手？任何键都能设成触发键。' },
        {
          title: '按住 / 切换两种模式',
          body: '短句用按住；长段用切换：按一下开始，再按一下结束。',
        },
        { title: '多语言识别', body: '中文、英文等多种语言，在设置里随时切换。' },
        { title: '多识别引擎', body: '可选不同的语音识别引擎，挑准确度和速度都合适的那个。' },
        { title: '菜单栏常驻', body: '不抢 Dock、不占窗口，要用的时候它就在最上面。' },
        { title: '不碰你的输入法', body: '不替换系统输入法，不改你原来的打字习惯。' },
      ],
    },
    install: {
      eyebrow: '安装',
      title: '装上它，大概一分钟。',
      subtitle: '三种装法，任选一种。代码全部开源，你能看见它做了什么、没做什么。',
      methods: [
        {
          tag: '推荐',
          title: 'Homebrew',
          body: '一行命令搞定。以后 brew upgrade 会帮你自动保持最新。',
          command: 'brew install --cask giraphant/tap/dousha',
        },
        {
          tag: '',
          title: '下载 DMG',
          body: '从 GitHub Releases 下载，拖进「应用程序」，首次打开按提示授权。',
          cta: { label: '前往 Releases', href: 'https://github.com/giraphant/dousha/releases/latest' },
        },
        {
          tag: '',
          title: '自己构建',
          body: 'macOS 14 及以上，克隆仓库后跑一行 make install。',
          command: 'make install',
        },
      ],
      permsTitle: '关于权限',
      perms:
        '首次使用会请求「麦克风」和「辅助功能」两项权限：前者用来听你说话，后者用来把转写好的文字粘贴进当前应用。',
      copy: '复制',
      copied: '已复制',
    },
    faq: {
      eyebrow: '常见问题',
      title: '你可能想先问问。',
      items: [
        {
          q: '用 Dousha 需要先装豆包吗？',
          a: '不需要。Dousha 直接调用豆包的语音识别能力，你不用安装豆包 App，也不用装它的输入法。',
        },
        {
          q: '它和豆包输入法有什么区别？',
          a: '豆包输入法会替换你的系统输入法、带进自己的一套界面。Dousha 只是个菜单栏小工具，不碰你的输入法，只在你按住热键时帮你把语音转成文字。',
        },
        {
          q: '支持哪些 Mac？',
          a: 'macOS 14（Sonoma）及以上版本，通过 Homebrew、DMG 或源码安装都可以。',
        },
        {
          q: '要花钱吗？',
          a: '完全免费。开源，采用 MIT 协议，代码在 GitHub 上公开。',
        },
        {
          q: '我的录音会被怎么处理？',
          a: '你的语音会发送到所选的识别引擎转写成文字。Dousha 是开源的，你可以在代码里确认它只做录音、转写、粘贴这三件事。',
        },
        {
          q: '怎么改触发键？',
          a: '从菜单栏图标打开「设置」，就能把默认的右 Shift 换成别的键，或切换到「按一下开始、再按一下结束」的模式。',
        },
        {
          q: '可以识别英文吗？',
          a: '可以。支持中文、英文等多种语言，在设置里切换。',
        },
      ],
    },
    footer: {
      tagline: '豆包减去外壳，剩下那口馅。',
      nav: [
        { href: 'https://github.com/giraphant/dousha', label: 'GitHub 仓库' },
        { href: 'https://github.com/giraphant/dousha/releases/latest', label: '下载 Releases' },
        { href: 'https://github.com/giraphant/dousha/blob/main/README.md', label: '说明文档' },
      ],
      credits: 'SpeechMore 与 DoubaoASR（作者 @gfreezy）的精神续作。',
      builtBy: '开源 · MIT 协议',
      backToTop: '回到顶部',
    },
  },

  en: {
    htmlLang: 'en',
    dir: 'ltr',
    meta: {
      title: 'Dousha · macOS menu-bar voice dictation without the Doubao IME',
      description:
        "Dousha is a tiny macOS menu-bar app. Hold a key, talk, release, and Doubao's voice recognition pastes the transcript into whatever you're typing in. Free, open source, macOS 14+, no full IME to install.",
      ogAlt: "Dousha's app icon: a grinning red-bean character peeking out of a cream-colored bun wrapper.",
    },
    nav: {
      links: [
        { href: '#how', label: 'How it works' },
        { href: '#features', label: 'Features' },
        { href: '#install', label: 'Install' },
        { href: '#faq', label: 'FAQ' },
      ],
      github: 'GitHub',
      cta: 'Install',
      toggleLabel: '切换到中文',
      toggleTo: '中',
    },
    hero: {
      eyebrow: 'Voice dictation for the macOS menu bar',
      titleLines: ['Hold, talk, release.', 'The words land where you type.'],
      subtitle:
        "Dousha pulls Doubao's voice dictation out on its own and parks it in your menu bar. No full Doubao IME to install. Hold one key, speak, and the transcript pastes straight into whatever app you're in.",
      primaryCta: 'Install with Homebrew',
      secondaryCta: 'Download the DMG',
      brewLabel: 'The easy way:',
      chips: ['Free & open source · MIT', 'macOS 14+', 'No Doubao IME'],
      iconAlt: "Dousha's grinning red-bean icon",
      demo: {
        hint: 'Hold to talk',
        keycap: 'Right Shift',
        listening: 'Listening…',
        transcript: 'turn this into text right where my cursor is',
        caption: 'The moment you let go, the text is already pasted.',
      },
    },
    concept: {
      eyebrow: 'The name is the spec',
      title: 'Doubao, minus the bun. Just the filling.',
      body: "Doubao comes wrapped: a whole input method that brings its own UI and habits into your system. The part you actually wanted was the voice recognition inside. Dousha keeps the filling and drops the wrapper: the same recognition, turned into one quiet tool that lives in your menu bar.",
      bun: 'Doubao',
      minus: 'drop the wrapper',
      filling: 'Dousha',
      bunSub: 'a whole input method',
      fillingSub: 'just the recognition',
    },
    how: {
      eyebrow: 'How it works',
      title: 'Three steps. There is no fourth.',
      steps: [
        {
          k: '01',
          title: 'Hold',
          body: 'Right Shift is the default. Not for you? Make any key the trigger in Settings.',
        },
        {
          k: '02',
          title: 'Talk',
          body: "Speak into the mic. A waveform shows you it's listening.",
        },
        {
          k: '03',
          title: 'Release',
          body: "Let go, and the transcript pastes at your cursor, same as if you'd typed it.",
        },
      ],
    },
    features: {
      eyebrow: 'Features',
      title: 'Tune it to your habits.',
      items: [
        { title: 'Remap the hotkey', body: 'Right Shift not for you? Any key can be the trigger.' },
        {
          title: 'Hold or toggle',
          body: 'Hold for a sentence; toggle for a paragraph: press once to start, again to stop.',
        },
        { title: 'Multiple languages', body: 'Chinese, English and more, switchable in Settings.' },
        { title: 'Pick the engine', body: 'Choose between recognition engines to balance accuracy and speed.' },
        { title: 'Lives in the menu bar', body: "No Dock icon, no window in the way. It's up top when you need it." },
        { title: 'Leaves your IME alone', body: "It doesn't replace your input method or change how you type." },
      ],
    },
    install: {
      eyebrow: 'Install',
      title: 'Up and running in about a minute.',
      subtitle: "Three ways in, pick one. It's all open source, so you can see what it does and what it doesn't.",
      methods: [
        {
          tag: 'recommended',
          title: 'Homebrew',
          body: 'One command. From then on, brew upgrade keeps it current for you.',
          command: 'brew install --cask giraphant/tap/dousha',
        },
        {
          tag: '',
          title: 'Download the DMG',
          body: 'Grab it from GitHub Releases, drag it to Applications, then grant access on first launch.',
          cta: { label: 'Open Releases', href: 'https://github.com/giraphant/dousha/releases/latest' },
        },
        {
          tag: '',
          title: 'Build it yourself',
          body: 'macOS 14 or later. Clone the repo and run a single make install.',
          command: 'make install',
        },
      ],
      permsTitle: 'About permissions',
      perms:
        'On first run it asks for two permissions, Microphone and Accessibility: one to hear you, the other to paste the transcript into your current app.',
      copy: 'Copy',
      copied: 'Copied',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'You might want to ask first.',
      items: [
        {
          q: 'Do I need to install Doubao first?',
          a: "No. Dousha uses Doubao's voice recognition directly. You don't install the Doubao app or its input method.",
        },
        {
          q: 'How is it different from the Doubao IME?',
          a: 'The Doubao IME replaces your system input method and brings its own interface. Dousha is just a menu-bar tool: it leaves your input method alone and only turns speech into text while you hold the hotkey.',
        },
        {
          q: 'Which Macs are supported?',
          a: 'macOS 14 (Sonoma) and later, installed via Homebrew, the DMG, or from source.',
        },
        {
          q: 'How much does it cost?',
          a: "Nothing. It's free and open source under the MIT license, with the code public on GitHub.",
        },
        {
          q: 'What happens to my audio?',
          a: 'Your speech is sent to the chosen recognition engine to be transcribed. Dousha is open source, so you can confirm in the code that it only records, transcribes, and pastes.',
        },
        {
          q: 'How do I change the trigger key?',
          a: 'Open Settings from the menu-bar icon. You can swap Right Shift for another key, or switch to toggle mode (press once to start, again to stop).',
        },
        {
          q: 'Can it recognize English?',
          a: 'Yes. It supports Chinese, English and more, switchable in Settings.',
        },
      ],
    },
    footer: {
      tagline: 'Doubao minus the bun. Just the filling.',
      nav: [
        { href: 'https://github.com/giraphant/dousha', label: 'GitHub repo' },
        { href: 'https://github.com/giraphant/dousha/releases/latest', label: 'Download releases' },
        { href: 'https://github.com/giraphant/dousha/blob/main/README.md', label: 'Read the docs' },
      ],
      credits: 'A spiritual fork of SpeechMore and DoubaoASR by @gfreezy.',
      builtBy: 'Open source · MIT',
      backToTop: 'Back to top',
    },
  },
};
