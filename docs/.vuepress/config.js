module.exports = {
    base: '/xx-simple-ui/',
    title: 'xx-simple-ui',
    description: '一个简单的UI框架',
    themeConfig: {
        nav: [
            { text: 'Github', link: 'https://github.com/xiaoxinwan/xx-ui' },
        ],
        sidebar: [
            {
                title: '开始',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-start/'
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/icon.md',
                    '/components/button.md',
                    '/components/button-group.md',
                    '/components/grid.md',
                    '/components/layout.md',
                    '/components/collapse.md',
                    '/components/tabs.md',
                    '/components/toast.md',
                    '/components/popover.md',
                ]
            },
        ]
    }
}
