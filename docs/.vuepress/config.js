module.exports = {
  title: '合伙人文档中心',  // 设置网站标题
  description: '合伙人文档中心',
  themeConfig: {
    nav: [
      {text: 'c', link: '/c/'},
      {text: 'linux', link: '/linux/'},
      {text: 'vim', link: '/vim/'},
      {text: 'windows', link: '/windows/'}
    ],
    sidebar: {
      '/c/': [
      ],
      '/linux/': [
      ],
      '/vim/': [
      ],
      '/windows/': [
      ]
    },
    sidebarDepth: 3
  }
}
