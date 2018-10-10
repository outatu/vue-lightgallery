module.exports = {
  title: 'vue-lightgallery',
  description: '基于vue开发的零依赖的lightgallery组件',
  base: '/vue-lightgallery/',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: '示例', link: '/examples/' }
    ],
    sidebar: 'auto',
    lastUpdated: '最后更新',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'nashaofu/vue-lightgallery',
    // 以下为可选的编辑链接选项
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  },
  serviceWorker: true
}
