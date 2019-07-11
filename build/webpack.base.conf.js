const path = require("path");
const DIST_PATH = path.resolve(__dirname, '../dist'); // 生产目录
const APP_PATH = path.resolve(__dirname, '../src'); // 打包目录

module.exports = {
    entry:{
        main: "./src/index.js"
    },
    output:{
        filename: "js/[name].[hash].js",
        path: DIST_PATH
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                use:"babel-loader",
                include:APP_PATH
            }
        ]
    }
}