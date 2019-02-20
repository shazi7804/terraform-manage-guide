module.exports = {
  title: 'Terraform 的一百零一種姿勢',
  description: 'Terraform manage guide',
  base: '/terraform-manage-guide/',
  repo: 'https://github.com/shazi7804/terraform-manage-guide',
  themeConfig: {
    sidebar: [
      {
        title: '簡介',
        collapsable: false,
        children: [
          '/intro/what-terraform',
          '/intro/why-terraform',
        ]
      },
      {
        title: '基礎',
        collapsable: false,
        children: [
          '/basic/component',
          '/basic/command',
        ]
      },
      {
        title: '已知問題',
        collapsable: false,
        children: [
          '/questions/use-module-not-support-count',
          '/questions/count-not-calculate',
        ]
      },
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/shazi7804/terraform-manage-guide' }
    ]
  }
}
