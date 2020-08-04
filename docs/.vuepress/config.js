module.exports = {
    title: '海狗的博客',
    description: '海狗写博客的地方~',
    head: [
        // 移动端优化
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',
    themeConfig: {
        // 顶部导航栏
        nav: require('./nav/index.js'),
        // 侧边栏
        sidebar: require('./sidebar/index.js'),
        // 博客配置
        type: 'blog',
        mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
        // 评论功能
        valineConfig: {
            appId: 'XpGcIFnuK4AQEVaqzIJwiVwb-gzGzoHsz',// your appId
            appKey: 'plznf5VWdbPcGTgi4myFiDwx', // your appKey
        },
        // 备案
        record: 'ICP 备案文案',
        recordLink: 'ICP 备案指向链接',
        cyberSecurityRecord: '公安部备案文案',
        cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2020',
        // 作者
        author: '海狗',
        authorAvatar: '/avatar.png',
    }
};