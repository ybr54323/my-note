module.exports = {
  title: 'ybr-note',  // 设置网站标题
  description: 'ybr-note',
  themeConfig: {
    nav: [
      {text: 'c', link: '/c/'},
      {text: 'linux', link: '/linux/'},
      {text: 'vim', link: '/vim/'},
      {text: 'windows', link: '/windows/'},
      {text: 'JavaScript', link: '/JavaScript/'},
      {text: 'plugin', link: '/plugin/'},
      {text: '小程序', link: '/小程序/'}
    ],
    sidebar: {
      '/c/': [],
      '/linux/': [],
      '/vim/': [],
      '/windows/': [],
      '/JavaScript/': [
        ['', 'JavaScript'],
        ['npm', 'npm']
      ],
      '/plugin/': [],
      '/小程序/': []
    },
    sidebarDepth: 3
  }
}
