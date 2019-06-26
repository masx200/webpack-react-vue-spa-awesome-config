# webpack-react-vue-spa-awesome-config

webpack-react-vue-spa-awesome-config

# 自学 webpack4.x,尝试写一个 同时支持 react 和 vue 的单页面应用 通用的 webpack 配置文件,提供开箱即用支持

# 极简的配置文件 

## 无需配置：您无需配置任何内容。为您处理开发和生产构建的相当好的配置，以便您可以专注于编写代码。

## 只使用 webpack.config.js 和 package.json 即可!
 
借鉴了Facebook开发的 [Create-react-app](https://github.com/facebook/create-react-app)的webpack配置的一部分

# 少学习

您无需学习和配置许多构建工具。即时重新加载可帮助您专注于开发。在部署时，您的捆绑包会自动优化。

## 默认关闭了eslint！

# 局部刷新：启用Webpack内置的HMR，配合react-hot-loader，增量更新css文件和js文件，修哪更哪，无需刷新页面即可实时看见修改结果

# 入口文件是"src/index.html"和'src/index.js'

# 使用 uglifyjs-webpack-plugin 删除注释和console.lig

# 生产环境自动关闭sourcemap，压缩混淆js和css和html代码

# 开发环境支持模块热更新，和sourcemap

## 使用的 loader

css-loader / babel-loader /worker-loader/vue-loader/url-loader/style-loader/css-loader/sass-loader/file-loader

# worker-loader可以加载webworker的文件，文件后缀名要写成.worker.js

### 修复了使用 webpack.HotModuleReplacementPlugin 和 worker-loader 不兼容的 bug

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

# 使用方法

## yarn install

## yarn start

## yarn build


# 注册 google 的 workbox 的 serviceworker

```javascript
 "serviceWorker" in navigator &&
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("service-worker.js");
```


