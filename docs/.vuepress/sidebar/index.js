module.exports = {
    // 计算机基础
    '/network-protocol/': require('./network-protocol'), // 网络协议
    '/design-patterns/': require('./design-patterns'), // 设计模式
    '/algorithm-data-structure/': require('./algorithm-data-structure'), // 算法数据结构

    // 数据库
    '/mysql/': require('./mysql'), // MySQL
    '/redis/': require('./redis'), // Redis
    '/mongodb/': require('./mongodb'), // MongoDB

    // 软件工程化
    '/build/': require('./build-tools'), // 构建工具
    '/cicd/': require('./cicd'), // 持续集成
};