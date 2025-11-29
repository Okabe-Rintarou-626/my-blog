import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MY BLOG",
  description: "Simple Try",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '学习日记', link: '/diary/' },
      { text: '资源推荐', link: '/resources/' }
    ],

    sidebar: [
      {
        text: '学习日记',
        items: [
          { text: 'Blender', link: '/diary/blender/' },
          { text: 'Unity', link: '/diary/unity/' },
          { text: 'Web', link: '/diary/web/' }
        ]
      },
      {
        text: '资源推荐',
        items: [
          { text: 'Blender', link: '/resources/blender/' },
          { text: 'Unity', link: '/resources/unity/' },
          { text: 'Web', link: '/resources/web/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Okabe-Rintarou-626' }
    ]
  }
})