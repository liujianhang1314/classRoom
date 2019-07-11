const path = require("path")
const merge = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base.conf")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const PUB_PATH = path.resolve(__dirname, '../public'); // 生产目录

module.exports = merge(baseWebpackConfig, {
    mode: "development", // 两个参数: production 和 development
    output: {
        // 配置输出文件
        filename: "js/[name].[hash:8].js",
        path: PUB_PATH
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: "body", // script 标签位于 body 底部
            minify: {
                html5: true
            },
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: "8080",
        contentBase: path.resolve(__dirname, "../public"),
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: true,
        open: true,
        proxy: {}
    }
})