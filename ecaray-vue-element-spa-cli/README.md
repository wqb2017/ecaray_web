# public_platform_by_vue

> ecaray

## 技术栈

- [x] vue  (2.3)
- [x] vue-router  (2.6)
- [x] Element UI  (1.3.7)

## 实现功能

- [x] 左侧边栏导航
- [x] 表头
- [x] 表单
- [x] 树形图
- [x] 三级联动选择框
- [x] 分页

## 目录结构

```javascript
├─build                                           // 项目构建(webpack)相关代码
│      build.js                                   // 生产环境构建代码
│      check-versions.js                          // 检查node、npm等版本
│      dev-client.js                              // 热重载相关
│      dev-server.js                              // 构建本地服务器
│      utils.js                                   // 构建工具相关
│      vue-loader.conf.js                         // vue-loader环境配置
│      webpack.base.conf.js                       // webpack基础配置
│      webpack.dev.conf.js                        // webpack开发环境配置
│      webpack.prod.conf.js                       // webpack生产环境配置
├─config                                          // 项目开发环境配置
│      dev.env.js                                 // 开发环境变量
│      index.js                                   // 项目一些配置变量
│      prod.env.js                                // 生产环境变量
├─dist                                            // 项目打包生成目录
├─src                                             // 源代码目录
│  │  App.vue                                     // 页面入口文件
│  │  main.js                                     // 程序入口文件，加载各种公共组件
│  ├─common                                       // 公共文件目录（如js、css、font）
│  ├─components                                   // 公共组件
│  ├─views                                        // 页面级组件
│  │      ├─developmentSupport
│  │      ├─per
│  │      ├─role
│  │      └─system
│  └─router                                       // 路由配置目录
│          index.js                               // 路由配置入口文件
├─static                                          // 静态资源文件
├─ .babelrc                                       // ES6语法编译配置
├─ .editorconfig                                  // 定义代码格式
├─ .eslintrc                                      // eslin代码检查
├─ .postcssrc                                     // postcss配置相关
├─ .gitignore                                     // git上传需要忽略的文件格式
├─ README.md                                      // 项目说明
├─ index.html                                     // 入口页面
├─ package.json                                   // 项目基本信息
```



## 构建开发

``` bash
# 安装node.js环境
nodejs下载：https://nodejs.org/download/release/v6.10.0/

#安装依赖
npm install

# 开启开发环境服务，监听本地端口 localhost:8080
npm run dev

# 打包项目文件
npm run build

# 打包项目文件，并分析依赖关系
npm run build --report
```
