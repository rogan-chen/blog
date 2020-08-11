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

    // 后端
    '/node/': require('./back-end/node'), // Node.js
    '/java/': require('./back-end/java'), // Java

    // 数据库
    '/mysql/': require('./database/mysql'), // MySQL
    '/redis/': require('./database/redis'), // Redis
    '/mongodb/': require('./database/mongodb'), // MongoDB

    // 软件工程化
    '/build-tools/': require('./engineering/build-tools'), // 构建工具
    '/cicd/': require('./engineering/cicd'), // 持续集成
    '/debug/': require('./engineering/debug'), // 调试工具
    '/dependency/': require('./engineering/dependency'), // 依赖管理
    '/deploy/': require('./engineering/deploy'), // 部署运维
    '/deposit/': require('./engineering/deposit'), // 代码托管与版本管理
    '/monitor/': require('./engineering/monitor'), // 监控体系
    '/standard/': require('./engineering/standard'), // 规范化
};