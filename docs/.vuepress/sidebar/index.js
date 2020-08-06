module.exports = {
    // 计算机基础
    '/algorithm/': require('./algorithm'), // 算法

    // 数据库
    '/mysql/': require('./mysql'), // MySQL
    '/redis/': require('./redis'), // Redis
    '/mongodb/': require('./mongodb'), // MongoDB

    // Java
    '/javase/': require('./javase'), // JavaSE

    // 软件工程化
    '/build/': require('./build-tools'), // 构建工具
    '/cicd/': require('./cicd'), // 持续集成
};