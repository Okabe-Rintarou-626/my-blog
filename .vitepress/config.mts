import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MY BLOG",
  description: "Simple Try",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '学习日记', link: '/web/diary/' },
      { text: '资源推荐', link: '/web/resources/' }
    ],

    sidebar: [
      {
        text: '学习日记',
        items: [
          { text: 'Blender', link: '/web/diary/blender/' },
          { text: 'Unity', link: '/web/diary/unity/' },
          { text: 'Web', link: '/web/diary/web/' }
        ]
      },
      {
        text: '资源推荐',
        items: [
          { text: 'Blender', link: '/web/resources/blender/' },
          { text: 'Unity', link: '/web/resources/unity/' },
          { text: 'Web', link: '/web/resources/web/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Okabe-Rintarou-626' }
    ]
  }
})