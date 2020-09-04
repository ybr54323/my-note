module.exports = {
  title: '合伙人文档中心',  // 设置网站标题
  description: '合伙人文档中心',
  themeConfig: {
    nav: [
      {text: 'c', link: '/c/'},
      {text: 'linux', link: '/linux/'}
    ],
    sidebar: {
      '/c/': [
        ['', '介绍'],
        ['问题汇总', '问题汇总']
      ],
      '/linux': [
        ['', '记录']
      ]
    },
    sidebarDepth: 3
  }
}
