const path = require("path");
const APP_PATH = path.resolve(__dirname, '../src'); // 打包目录

module.exports = {
    entry:{
        main: "./src/index.js"
    },
    module:{ //解读css,js图片压缩等
        rules:[
            {
                test:/\.(js|jsx)?$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets: ['react']    //在react环境下,也可以进行打包
                    }
                },
                include:APP_PATH,
            },
            {
                test:/\.(css|scss)?$/,
                use:[ 'style-loader','css-loader','sass-loader'],
                include:APP_PATH,
            },
        ]
    },
    plugins:[ // 插件

    ],
    loader:{ //转换器

    },

}