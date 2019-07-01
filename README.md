# 极速、零配置的 web 应用打包工具, 同时支持 react 和 vue 的单页面应用,提供开箱即用支持 ,基于 webpack4.x

# webpack-react-vue-spa-awesome-config

https://github.com/masx200/webpack-react-vue-spa-awesome-config

## webpack-react-vue-spa-awesome-config 是一个命令行工具，也可以下载本软件包，自定义 webpack 配置，启动示例

### 极速、零配置的 web 应用打包工具, 同时支持 react 和 vue 的单页面应用,提供开箱即用支持

### Fast, zero-configuration web application packaging tool that supports both single-page applications for react and vue, out-of-the-box support

# 基于 webpack4.x, 同时支持 react 和 vue 的单页面应用 通用的 webpack 配置文件,提供开箱即用支持

## 无需配置：您无需配置任何内容。为您处理开发和生产构建的相当好的配置，以便您可以专注于编写代码。

# 少学习 您无需学习和配置许多构建工具。即时重新加载可帮助您专注于开发。在部署时，您的捆绑包会自动优化。

[查看源代码 ./bin/index.js](https://github.com/masx200/webpack-react-vue-spa-awesome-config/blob/master/bin/index.js)

[查看源代码 ./release/config/webpack.config.js](https://github.com/masx200/webpack-react-vue-spa-awesome-config/blob/master/release/config/webpack.config.js)

![](https://camo.githubusercontent.com/743bed5b5f374e4d10666b96a39a808b0f14089e/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031392f362f33302f313662613737646434386435633031373f773d31323826683d31323826663d706e6726733d37373037)

![](https://camo.githubusercontent.com/e142ef7e29012ba7eb4e483621c53e2c8ee98aa1/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031392f362f33302f313662613737653137353165363531663f773d32323526683d32323526663d706e6726733d32363338)

![](https://camo.githubusercontent.com/53b510c8236e20ad20417ceebf1b4246c2475473/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031392f362f33302f313662613737643562346234333930653f773d38373026683d32353226663d706e6726733d3330393638)

# 新版本! 可以通过 npm 或者 yarn 安装 github 仓库的模块了!

# 使用方法

### 初始化 package.json

如果没有初始化 package.json，请先初始化

运行

```
yarn init
```

或者

```
npm init
```

### 解决安装 node-sass 太慢的问题的方法

```
 cnpm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```

## 局部安装

```
cnpm install https://github.com/masx200/webpack-react-vue-spa-awesome-config.git --save
```

或者

```
yarn add https://github.com/masx200/webpack-react-vue-spa-awesome-config.git

```

设置`package.json`

```json
{
  "scripts": {
    "start": "webpack-react-vue-spa-awesome-config start",
    "build": "webpack-react-vue-spa-awesome-config build"
  }
}
```

## 安装依赖

```
yarn install
```

或者

```
npm install
```

## 开发模式

启动 webpack-dev-server

```
yarn start
```

或者

```
npm start
```

## 生产模式

启动 webpack

```
yarn build
```

或者

```
npm run build
```

## 全局安装

```
npm install https://github.com/masx200/webpack-react-vue-spa-awesome-config.git -g
```

或者

```
yarn global add https://github.com/masx200/webpack-react-vue-spa-awesome-config.git

```

## 开发模式

启动 webpack-dev-server

```
webpack-react-vue-spa-awesome-config start
```

## 生产模式

启动 webpack

```
webpack-react-vue-spa-awesome-config build
```

# 入口文件是"public/index.html"和'src/index.js'

如果入口文件不存在,则会自动生成入口文件

# 修改自定义的 webpack 配置文件

下载软件包

```

git clone https://github.com/masx200/webpack-react-vue-spa-awesome-config.git

```

修改文件`./release/config/webpack.config.js`即可

启动 webpack-dev-server

```
yarn start
```

启动 webpack

```
yarn build
```

# 内部极简的配置文件

## 内部 只使用 webpack.config.js 和 package.json

### 内部实现原理 仅仅使用一个 webpack.config.js 文件即可同时处理开发模式和生产模式

webpack 使用配置文件启动的时候,默认不支持通过`--mode=development`或者`--mode=production`来设置 webpack 的模式,

在 `webpack.config.js`文件中通过如下方式来判断 webpack 的模式,即读取`process.argv`变量来获得传入的参数设置的模式

```javascript
process.argv.includes("--mode=production")
  ? (process.env.NODE_ENV = "production")
  : (process.env.NODE_ENV = "development");
```

## 默认关闭了 eslint！

# 集成 postcss,自动增加前缀

# webpack 中 alias 别名配置,

可以使用`@`代替`src`目录

# 局部刷新：

启用 Webpack 内置的 HMR，配合 react-hot-loader，增量更新 css 文件和 js 文件，修哪更哪，无需刷新页面即可实时看见修改结果

# 动态导入：

可使用动态导入的语法

```javascript
(import().then())
```

，处理代码时会单独分离此模块，执行页面对应操作时才加载此模块，使用才加载不使用则不加载(代码懒加载)，减少首屏加载代码大小和渲染时间

# 代码编译

使用 style-loader 和 css-loader 处理 CSS，把 CSS 从 JS 中单独抽离出来

使用 sass-loader 处理 Sass，通过 node-sass 编译 sass 文件为 css 文件

使用 less-loader 处理 Less，通过 less 编译 less 文件为 css 文件

使用 babel-loader 根据预设环境和 browserslist 处理编写的 ES6 代码和 TS 代码，并生成浏览器可识别的 ES5 代码

使用 vue-loader 把`*.vue` 文件编译成 vue 组件转成 js 代码

# 代码分割：

对业务代码进行打包，分割成 WebpackRuntime 代码块、第三方依赖代码块、公共业务代码块、单个业务代码块

# 代码合并：

通过对相同模块、相同功能或复用多次的代码进行整体合并，起到减包作用

# 压缩合并：

CSS 压缩：内置 MiniCssExtractPlugin 和 OptimizeCSSAssetsPlugin，对抽离出来的 CSS 进行压缩去重

JS 压缩：内置 uglifyjs 和 terser，对抽离出来的 JS 进行压缩去重，uglifyjs 用于压缩 ES5，terser 用于压缩 ES6

# 摇树优化：

启用 Webpack 内置的 Tree Shaking，禁止 babel 把代码转换成 Commonjs 规范，使用 ESM 规范的静态声明特点来去除不被引用或不被执行的代码块，起到减包作用

# 使用 uglifyjs-webpack-plugin 删除注释和 console.log

# 生产环境自动关闭 sourcemap，压缩混淆 js 和 css 和 html 代码

# 开发环境支持模块热更新，和 sourcemap

## 使用的 loader

css-loader / babel-loader /worker-loader/vue-loader/url-loader/style-loader/css-loader/sass-loader/file-loader

# worker-loader 可以加载 webworker 的文件，文件后缀名要写成.worker.js

https://www.webpackjs.com/loaders/worker-loader/

### 修复了使用 webpack.HotModuleReplacementPlugin 和 worker-loader 不兼容的 bug

https://github.com/webpack/webpack-dev-server/issues/1595

https://github.com/webpack/webpack/issues/6642

https://github.com/webpack-contrib/worker-loader/issues/174

该错误来自 Web 工作者，因为 Web worker window 上不可用。

webpack.config.js

```javascript
module.exports = {
  output: {
    globalObject: `( (typeof window !== "undefined" ? window : false) ||
    (typeof WorkerGlobalScope !== "undefined" ? WorkerGlobalScope : false) ||
    this)`
  }
};
```

## 使用的 plugin

WorkboxWebpackPlugin.GenerateSW/MiniCssExtractPlugin/VueLoaderPlugin/HtmlWebpackPlugin/TerserPlugin/OptimizeCSSAssetsPlugin/webpack.HotModuleReplacementPlugin/WebpackDeepScopeAnalysisPlugin/UglifyJsPlugin

# workbox

https://developers.google.cn/web/tools/workbox/

JavaScript Libraries for adding offline support to web apps

Workbox is a set of libraries and Node modules that make it easy to cache assets and take full advantage of features used to build Progressive Web Apps.

## 性能

停止在网络上等待！您可以通过缓存和提供文件来提高 Web 应用程序的性能，这些文件由服务工作人员提供支持。

## 弹性

即使在不可靠的连接上，您的 Web 应用程序仍然可以使用正确的运行时缓存策略。

## 增强

想要构建一个渐进的 Web 应用程序？Workbox 可以轻松创建离线初次体验。

# 注册 google 的 workbox 的 serviceworker

```javascript
try {
  "serviceWorker" in navigator &&
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("service-worker.js");
    });
} catch (error) {}
```

### 借鉴了 Facebook 开发的 [Create-react-app](https://github.com/facebook/create-react-app)的 webpack 配置的一部分，并进行了大量魔改

https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js

https://github.com/facebook/create-react-app

https://npm.taobao.org/package/react-scripts
