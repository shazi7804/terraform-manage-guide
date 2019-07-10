module.exports = {
  title: 'Terraform 的一百零一種姿勢',
  description: 'Terraform manage guide',
  base: '/terraform-manage-guide/',
  repo: 'https://github.com/shazi7804/terraform-manage-guide',
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      ['/', '前言'],
      {
        title: '簡介',
        collapsable: false,
        children: [
          '/intro/what-terraform',
          '/intro/why-terraform',
          '/intro/terraform-vs-cloudformation',
        ]
      },
      {
        title: '主要元件',
        collapsable: false,
        children: [
          '/component/provider',
          '/component/state-storage-and-locking',
          '/component/backends',
        ]
      },
      {
        title: '指令',
        collapsable: false,
        children: [
          '/command/help',
          '/command/plan',
          '/command/apply',
          '/command/import',
        ]
      },
      {
        title: '基礎',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/basic/install',
          '/basic/resource',
          '/basic/data',
          '/basic/output',
          '/basic/locals',
        ]
      },
      {
        title: 'AWS 使用案例',
        collapsable: false,
        children: [

        ]
      },
      {
        title: 'OpenStack 使用案例',
        collapsable: false,
        children: [

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
