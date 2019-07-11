const merge = require("webpack-merge"); // 合并配置
const baseWebpackConfig = require("./webpack.base.conf");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const DIST_PATH = path.resolve(__dirname, '../dist'); // 生产目录

module.exports = merge(baseWebpackConfig, {
    mode: "production", //mode是webpack4新增的模式
    output:{
        filename: "js/[name].[hash].js",
        path: DIST_PATH
    },
    plugins:[ // 插件
        new htmlWebpackPlugin({
            template: 'public/index.html',
            title: 'PresByter', //更改HTML的title的内容
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
            },
        })
    ]
})