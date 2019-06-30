"use strict";
const defaultport = 10080;
const port = defaultport + parseInt(10000 * Math.random());
/* 利用Node.js检测端口是否被占用的方法 */
// var net = require("net");

// // 检测端口是否被占用
// function portIsOccupied(port) {
//   // 创建服务并监听该端口
//   var server = net.createServer().listen(port);

//   server.on("listening", function() {
//     // 执行这块代码说明端口未被占用
//     server.close(); // 关闭服务
//     //  console.log('The port【' + port + '】 is available.') // 控制台输出信息
//   });

//   server.on("error", function(err) {
//     if (err.code === "EADDRINUSE") {
//       // 端口已经被使用
//       //   console.log('The port【' + port + '】 is occupied, please change other port.')
//     }
//   });
// }

// 执行
// portIsOccupied(1987)
console.log(`\nwebpack config filename : ${__filename}\n`);
console.log(`\nworking directory : ${process.cwd()}\n`);
var __dirname = process.cwd();
process.argv.includes("--mode=production")
  ? (process.env.NODE_ENV = "production")
  : (process.env.NODE_ENV = "development");
const webpack = require("webpack");
// var WatchIgnorePlugin = webpack.WatchIgnorePlugin;
console.log(`\nwebpack mode : ${process.env.NODE_ENV} \n`);
var CopyFilesPlugin = require("webpack-copyfiles-plugin");
// '）
// var WebpackCopyPlugin = require("webpack-copy-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin"),
  safePostCssParser = require("postcss-safe-parser"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
  TerserPlugin = require("terser-webpack-plugin"),
  VueLoaderPlugin = require("vue-loader/lib/plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  webpackEnv = process.env.NODE_ENV,
  isEnvDevelopment = "development" === webpackEnv,
  shouldUseSourceMap = isEnvDevelopment,
  isEnvProduction = "production" === webpackEnv,
  path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin");
// { CleanWebpackPlugin: CleanWebpackPlugin } = require("clean-webpack-plugin");
process.env.BABEL_ENV = process.env.NODE_ENV;

// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
// In development, we always serve from the root. This makes config easier.

// We inferred the "public path" (such as / or /my-project) from homepage.
// We use "/" in development.
/* 开发模式必须设置 publicPath 为 ""或者"/"

*/
const publicPath = isEnvProduction ? "./" : "/";
module.exports = {
  resolve: {
    extension: ["", ".js", ".jsx", ".vue"],
    alias: {
      "@": path.join(__dirname, "src")
      //   pages: path.join(__dirname, "src/pages"),
      //   router: path.join(__dirname, "src/router")
    }
  },

  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: !0,
    port,

    /* 改为随机端口了!,防止端口占用! */
    // port: 18080,
    inline: !0,
    open: !0,
    watchContentBase: !0
  },
  devtool: "inline-source-map",
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    //https://www.webpackjs.com/configuration/output/#output-publicpath
    publicPath,
    globalObject:
      '( (typeof window !== "undefined" ? window : false) ||\n    (typeof WorkerGlobalScope !== "undefined" ? WorkerGlobalScope : false) ||\n    this)',
    filename: "bundle.[name].[hash].js",
    path: path.join(__dirname, "dist"),
    chunkFilename: "chunk.[name].[hash].js"
  },
  module: {
    strictExportPresence: !0,
    rules: [
      {
        test: /\.(less)$/,
        use: [
          isEnvDevelopment
            ? {
                loader: "style-loader",
                options: { sourceMap: shouldUseSourceMap }
              }
            : { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: { sourceMap: shouldUseSourceMap }
          },
          "postcss-loader",
          {
            loader: "less-loader",
            options: { sourceMap: shouldUseSourceMap }
          }
        ]
      },
      { parser: { requireEnsure: !1 } },
      {
        test: /\.worker\.js$/,
        loader: "worker-loader",
        options: { name: "[name].[hash].worker.js", inline: !0 }
      },
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          isEnvDevelopment
            ? {
                loader: "style-loader",
                options: { sourceMap: shouldUseSourceMap }
              }
            : { loader: MiniCssExtractPlugin.loader },

          {
            loader: "css-loader",
            options: { sourceMap: shouldUseSourceMap }
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: { sourceMap: shouldUseSourceMap }
          }
        ]
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            loader: "url-loader",
            options: {
              limit: 1e4,
              name: isEnvDevelopment
                ? "[name].[hash].[ext]"
                : "[name].[contenthash].[ext]"
            }
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            loader: "babel-loader",
            options: {
              sourceMaps: shouldUseSourceMap,
              //   plugins: [
              //     [
              //       require.resolve("babel-plugin-named-asset-import")
              //       //   {
              //       //     loaderMap: {
              //       //       svg: {
              //       //         ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
              //       //       },
              //       //     },
              //       //   },
              //     ]
              //   ],
              presets: [require.resolve("babel-preset-react-app")],
              babelrc: false,
              configFile: false,
              //  presets: ["@babel/preset-env", "@babel/preset-react"],
              // plugins: ["@babel/plugin-syntax-dynamic-import"],
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
              ),
              cacheDirectory: !0,
              cacheCompression: isEnvProduction,
              compact: isEnvProduction
            },
            include: [path.resolve(__dirname, "src")],
            exclude: [path.resolve(__dirname, "node_modules")]
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: "babel-loader",
            options: {
              // plugins: ["@babel/plugin-syntax-dynamic-import"],
              babelrc: !1,
              configFile: !1,
              compact: !1,
              presets: [
                // "@babel/preset-env",
                // "@babel/preset-react",
                [
                  require.resolve("babel-preset-react-app/dependencies"),
                  { helpers: !0 }
                ]
              ],
              cacheDirectory: !0,
              cacheCompression: isEnvProduction,
              sourceMaps: shouldUseSourceMap
            }
          },
          {
            loader: require.resolve("file-loader"),
            exclude: [
              /\.vue$/,
              /\.(js|mjs|jsx|ts|tsx)$/,
              /\.html$/,
              /\.json$/,
              /\.(css|scss|sass|less)$/
            ],
            options: {
              name: isEnvDevelopment
                ? "[name].[hash].[ext]"
                : "[name].[contenthash].[ext]"
            }
          }
        ]
      }
      /* unicode-loader不需要了,因为在terserplugin中可以转换成unicode */
      //   {
      //     // convert code to unicode
      //     test: /\.js?$/,
      //     loader: "unicode-loader"
      //   }
    ]
  },
  plugins: [
    isEnvProduction &&
      new CopyFilesPlugin({
        sourceRoot: path.join(__dirname, "public"),
        targetRoot: path.join(__dirname, "dist"),
        files: ["favicon.ico"],
        // renameTargetDir: true,
        // dirHashVarName: '__dirhash__',
        cleanDirs: [path.join(__dirname, "dist")]
      }),
    // isEnvProduction &&
    // new WatchIgnorePlugin([path.join(__dirname, "public", "index.html")]),
    // isEnvProduction &&
    // new WebpackCopyPlugin({
    //   dirs: [
    //     {
    //       from: path.join(__dirname, "public"),
    //       to: path.join(__dirname, "dist")
    //     }
    //   ],
    //   options: {}
    // }),
    isEnvDevelopment && new webpack.NamedModulesPlugin(),
    // isEnvProduction && new CleanWebpackPlugin(),
    isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: !0,
      importWorkboxFrom: "cdn",
      runtimeCaching: [
        {
          urlPattern: /.*\.(?:js|html|\/)$/,
          handler: "NetworkFirst",
          options: {}
        },
        {
          urlPattern: /.*\.(?:xml|json|md|css)$/,
          handler: "StaleWhileRevalidate",
          options: {}
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "image-cache",
            expiration: { maxEntries: 10 }
          }
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[name].[hash].chunk.css"
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: " Progressive Web Application",
      inject: !0,
      minify: {
        removeComments: !0,
        collapseWhitespace: !0,
        removeRedundantAttributes: !0,
        useShortDoctype: !0,
        removeEmptyAttributes: !0,
        removeStyleLinkTypeAttributes: !0,
        keepClosingSlash: !0,
        minifyJS: !0,
        minifyCSS: !0,
        minifyURLs: !0,
        removeAttributeQuotes: !1
      },
      template: path.join(__dirname, "public", "index.html")
    })
  ].filter(Boolean),
  optimization: {
    usedExports: true,
    runtimeChunk: { name: e => `runtime~${e.name}` },
    splitChunks: {
      chunks: "all",
      minSize: 3e4,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 5,
      name: !0
    },
    minimize: isEnvProduction,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: { comments: !1 },
          mangle: !0,
          warnings: !1,
          compress: { drop_debugger: !0, drop_console: !0 }
        },
        cache: !0,
        parallel: !0,
        sourceMap: shouldUseSourceMap
      }),
      new TerserPlugin({
        terserOptions: {
          parse: { ecma: 8 },
          compress: { ecma: 5, warnings: !1, comparisons: !1, inline: 2 },
          mangle: { safari10: !0 },
          output: {
            ecma: 5,
            comments: !1,
            /* 在terserplugin中可以转换成unicode  */
            ascii_only: !0
          }
        },
        parallel: !0,
        cache: !0,
        sourceMap: shouldUseSourceMap
      }),

      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: !!shouldUseSourceMap && { inline: !1, annotation: !0 }
        }
      })
    ]
  }
};
