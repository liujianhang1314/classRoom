const path = require("path");
const APP_PATH = path.resolve(__dirname, '../src'); // 打包目录

module.exports = {
    entry:{
        main: "./src/index.js"
    },
    module:{ //解读css,js图片压缩等
        rules:[
            {
                test:/\.js?$/,
                use:"babel-loader",
                include:APP_PATH
            }
        ]
    },
    plugins:[ // 插件

    ],
    loader:{ //转换器

    },

}