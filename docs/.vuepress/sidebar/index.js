module.exports = {
    // 计算机基础
    '/network-protocol/': require('./program-basic/network-protocol'), // 网络协议
    '/design-patterns/': require('./program-basic/design-patterns'), // 设计模式
    '/algorithm-data-structure/': require('./program-basic/algorithm-data-structure'), // 算法数据结构

    // 前端
    '/javascript/': require('./front-end/javascript'), // JavaScript
    '/react/': require('./front-end/react'), // React
    '/vue/': require('./front-end/vue'), // Vue
    '/front-end-optimize/': require('./front-end/front-end-optimize'), // 优化
    '/cross-platform/': require('./front-end/cross-platform'), // 跨平台
    '/front-end-High/': require('./front-end/front-end-High'), // 前沿技术

    // 数据库
    '/mysql/': require('./mysql'), // MySQL
    '/redis/': require('./redis'), // Redis
    '/mongodb/': require('./mongodb'), // MongoDB

    // 软件工程化
    '/build/': require('./build-tools'), // 构建工具
    '/cicd/': require('./cicd'), // 持续集成
};