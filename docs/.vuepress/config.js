module.exports = {
  title: 'ybr-note',  // 设置网站标题
  description: 'ybr-note',
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
