# classRoom
想实现一个有白板，视频和聊天的桌面应用；(后续功能在逐步添加)
技术栈： react，redux，redux-router， electron, websocket

##2019年7月11号
##npm init -y
## npm i webpack webpack-cli -D

##新建build文件夹及子文件 webpack.base.conf.js(公共配置) webpack.prod.conf.js(生产配置) webpack.dev.conf.js(开发配置)

## npm install --save-dev webpack-merge  因为分成3个配置文件所以需要webpack-merge来进行合并，当然也可以不使用同一放到一个配置里。

##npm i -S react react-dom

npm install --save-dev babel-loader babel-core babel-preset-env babel-preset-react react使用的是es6，这里需要将代码转成es5，所以需要安装babel。

##新建文件 .babelrc

##报错： Cannot find module '@babel/core' babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.

原来是babel-loader被我更新了babel-loader@8不支持原来的配置了，官方默认babel-loader | babel 对应的版本需要一致: 即babel-loader需要搭配最新版本babel
两种解决方案:

回退低版本
npm install -D babel-loader@7 babel-core babel-preset-env

更新到最高版本:
npm install -D babel-loader @babel/core @babel/preset-env webpack

npm install --save-dev html-webpack-plugin