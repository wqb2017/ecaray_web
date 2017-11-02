# spa-vue-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 目录结构

```javascript
|-build......................................//项目构建(webpack)相关代码
   |-build.js................................// 生产环境构建代码
   |-check-versions.js.......................//检查node、npm等版本
   |-dev-client.js...........................// 热重载相关
   |-dev-server.js...........................//构建本地服务器
   |-utils.js................................// 构建工具相关
   |-vue-loader.conf.js......................//vue-loader环境配置
   |-webpack.base.conf.js....................//webpack基础配置
   |-webpack.dev.conf.js.....................//webpack开发环境配置
    |-webpack.prod.conf.js...................//webpack生产环境配置
|-config.....................................//项目开发环境配置
   |-dev.env.js..............................//开发环境变量
   |-index.js................................//项目一些配置变量
   |-prod.env.js.............................//生产环境变量
|-dist.......................................//项目打包生成目录
|-src........................................// 源代码目录
  |-App.vue..................................//页面入口文件
  |-main.js..................................//程序入口文件，加载各种公共组件
  |-assets...................................//静态文件
  |-static...................................//第三方不打包文件
  |-components..............................//公共组件
  |-router..................................//路由配置
  |-view....................................//业务代码
```


## 使用sass时注意
>要安装一下个loader
* npm install sass-loader --save-dev
* npm install node-loader --save-dev
* npm install node-sass --save-dev
