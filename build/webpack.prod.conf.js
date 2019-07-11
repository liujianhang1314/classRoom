const merge = require("webpack-merge"); // 合并配置
const baseWebpackConfig = require("./webpack.base.conf");

module.exports = merge(baseWebpackConfig, {
    mode: "production", //mode是webpack4新增的模式
})