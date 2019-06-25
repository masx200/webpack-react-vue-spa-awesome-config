"use strict";
// console.log(process.argv);
/* 从命令行输入 的参数判断模式 */
if (process.argv.includes("--mode=production")) {
  process.env.NODE_ENV = "production";
  console.log("webpack mode is production !");
} else {
  process.env.NODE_ENV = "development";
  console.log("webpack mode is development !");
}
// const WebpackDeepScopeAnalysisPlugin = require("webpack-deep-scope-plugin")
//   .default;
// const PurifyCSSPlugin = require("purifycss-webpack");
// process.env.NODE_ENV = process.env.NODE_ENV || "development";
// const PrepackWebpackPlugin = require("prepack-webpack-plugin").default;
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const safePostCssParser = require("postcss-safe-parser");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackEnv = process.env.NODE_ENV;
const isEnvDevelopment = webpackEnv === "development";
const shouldUseSourceMap = isEnvDevelopment;
const webpack = require("webpack");
const isEnvProduction = webpackEnv === "production";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// console.log("process.env.NODE_ENV", process.env.NODE_ENV);
process.env.BABEL_ENV = process.env.NODE_ENV;
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
    port: 18080,
    inline: true, //do not use iframe for the page, true is default
    open: true, //open browser after dev server starts,
    watchContentBase: true
  },
  devtool: "inline-source-map",
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    /*worker-loader与webpack-dev-server HMR的兼容性 
      该错误来自Web工作者，因为Web worker window上不可用。

关闭HMR将修复错误但我希望能够将HMR用于其他内容。装载机可以做些什么吗？ */

    globalObject: `( (typeof window !== "undefined" ? window : false) ||
    (typeof WorkerGlobalScope !== "undefined" ? WorkerGlobalScope : false) ||
    this)`,
    filename: isEnvDevelopment
      ? "bundle.[name].[hash].js"
      : "bundle.[name].[hash].js",
    path: path.join(__dirname, "dist"),
    chunkFilename: isEnvDevelopment
      ? "chunk.[name].[hash].js"
      : "chunk.[name].[hash].js"
    /* ERROR in chunk main [entry]
bundle.[name].[contenthash].js
Cannot use [chunkhash] or [contenthash] for chunk in 'bundle.[name].[contenthash].js' (use [hash] instead) */
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      { parser: { requireEnsure: false } },
      {
        test: /\.worker\.js$/,
        loader: "worker-loader",
        options: {
          name: "[name].[hash].worker.js",
          inline: true
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(css|sass|scss|less)$/,
        use: [
          isEnvDevelopment
            ? {
                loader: "style-loader",
                options: {
                  sourceMap: shouldUseSourceMap
                }
              }
            : {
                loader: MiniCssExtractPlugin.loader
                //   options: shouldUseRelativeAssetPaths ? { publicPath: "../../" } : {}
              },
          //   {
          //     loader: MiniCssExtractPlugin.loader,
          //     options: {
          //       sourceMap: shouldUseSourceMap,
          //       // you can specify a publicPath here
          //       // by default it uses publicPath in webpackOptions.output
          //       //   publicPath: "../",
          //       hmr: process.env.NODE_ENV === "development"
          //     }
          //   },

          /* 这里是从后往前执行的 */

          //   {
          //     loader: MiniCssExtractPlugin.loader,
          //     options: {
          //       reloadAll: true,
          //       // you can specify a publicPath here
          //       // by default it uses publicPath in webpackOptions.output
          //       //   publicPath: '../',
          //       hmr: process.env.NODE_ENV === "development"
          //     }
          //   },
          //   {
          //     loader: "style-loader",
          //     options: {
          //       sourceMap: shouldUseSourceMap
          //     }
          //   },

          {
            loader: "css-loader",
            options: {
              sourceMap: shouldUseSourceMap
            }
          },
          //   "vue-style-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: shouldUseSourceMap
            }
          }
          //   {
          //     loader: "less-loader",
          //     options: {
          //       sourceMap: true
          //     }
          //   }
        ]
      },
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          {
            // "url" loader works like "file" loader except that it embeds assets
            // smaller than specified limit in bytes as data URLs to avoid requests.
            // A missing `test` is equivalent to a match.
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            loader: "url-loader",
            options: {
              limit: 10000,
              name: isEnvDevelopment
                ? "[name].[hash].[ext]"
                : "[name].[contenthash].[ext]"
            }
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            loader: "babel-loader",
            options: {
              //   plugins: [
              //     [
              //       require.resolve("babel-plugin-named-asset-import")
              //       //   {
              //       //     loaderMap: {
              //       //       svg: {
              //       //         ReactComponent: "@svgr/webpack?-svgo,+ref![path]"
              //       //       }
              //       //     }
              //       //   }
              //     ]
              //   ],
              //   presets: [
              //     // "@babel/preset-env",
              //     // "@babel/preset-react"
              //     // [
              //     //   "@babel/preset-env",
              //     //     {
              //     //       targets: {
              //     //         edge: "18",
              //     //         firefox: "66",
              //     //         chrome: "75"
              //     //       }
              //     //     }
              //     // ]
              //   ],
              //   plugins: ["babel-plugin-transform-runtime"],
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
              ),
              cacheDirectory: true,
              cacheCompression: isEnvProduction,
              compact: isEnvProduction
            },
            include: [path.resolve(__dirname, "src")],
            exclude: [path.resolve(__dirname, "node_modules")]
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve("babel-loader"),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  require.resolve("babel-preset-react-app/dependencies"),
                  { helpers: true }
                ]
              ],
              cacheDirectory: true,
              cacheCompression: isEnvProduction,

              // If an error happens in a package, it's possible to be
              // because it was compiled. Thus, we don't want the browser
              // debugger to show the original code. Instead, the code
              // being evaluated would be much more helpful.
              sourceMaps: shouldUseSourceMap
            }
          },

          /* 为什么生产环境加载不出*.less文件? */
          //   {
          //     test: /\.(less)$/,
          //     use: [
          //       {
          //         loader: "style-loader",
          //         options: {
          //           sourceMap: shouldUseSourceMap
          //         }
          //       },
          //       //   isEnvDevelopment
          //       //     ? {
          //       //         loader: "style-loader",
          //       //         options: {
          //       //           sourceMap: shouldUseSourceMap
          //       //         }
          //       //       }
          //       //     : {
          //       //         loader: MiniCssExtractPlugin.loader
          //       //         //   options: shouldUseRelativeAssetPaths ? { publicPath: "../../" } : {}
          //       //       },
          //       //   isEnvProduction && {
          //       //     loader: MiniCssExtractPlugin.loader
          //       //     //   options: shouldUseRelativeAssetPaths ? { publicPath: "../../" } : {}
          //       //   },
          //       //   {
          //       //     loader: MiniCssExtractPlugin.loader,
          //       //     options: {
          //       //       sourceMap: shouldUseSourceMap,
          //       //       // you can specify a publicPath here
          //       //       // by default it uses publicPath in webpackOptions.output
          //       //       //   publicPath: "../",
          //       //       hmr: process.env.NODE_ENV === "development"
          //       //     }
          //       //   },
          //       //   {
          //       //     loader: MiniCssExtractPlugin.loader,
          //       //     options: {
          //       //       reloadAll: true,
          //       //       // you can specify a publicPath here
          //       //       // by default it uses publicPath in webpackOptions.output
          //       //       //   publicPath: '../',
          //       //       hmr: process.env.NODE_ENV === "development"
          //       //     }
          //       //   },
          //       //   {
          //       //     loader: "style-loader",
          //       //     options: {
          //       //       sourceMap: shouldUseSourceMap
          //       //     }
          //       //   },
          //       {
          //         loader: "css-loader",
          //         options: {
          //           sourceMap: shouldUseSourceMap
          //         }
          //       },
          //       //   {
          //       //     loader: "sass-loader",
          //       //     options: {
          //       //       sourceMap: true
          //       //     }
          //       //   },
          //       {
          //         loader: "less-loader",
          //         options: {
          //           sourceMap: shouldUseSourceMap
          //         }
          //       }
          //     ]
          //   },

          {
            loader: require.resolve("file-loader"),
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise be processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
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
      // Process any JS outside of the app with Babel.
      // Unlike the application JS, we only compile the standard ES features.

      //   {
      //     test: /\.js$/,
      //     loader: "babel-loader"
      //   }
      //   {
      //     test: /\.json$/,
      //     loader: "json-loader"
      //   }
    ]
  },
  plugins: [
    /*  WebpackDeepScopeAnalysisPlugin,使用后会出现bug,暂不用*/
    // new WebpackDeepScopeAnalysisPlugin(),
    /* PurifyCSSPlugin不适用于react或者vue! */
    // new PurifyCSSPlugin({
    //   paths: [path.join(__dirname, "src/index.html")]
    // }),
    /* 依赖项目 安装失败 !  v8-profiler-node8  */
    // new PrepackWebpackPlugin(),
    /* 
    Prepack是JavaScript的部分评估程序。Prepack重写了一个JavaScript包，从而使JavaScript代码更有效地执行。对于初始化繁重的代码，Prepack在有效缓存JavaScript解析的环境中工作得最好。
prepack-webpack-plugin
Travis build status Coveralls NPM version Canonical Code Style

A webpack plugin for prepack.
    https://github.com/gajus/prepack-webpack-plugin
    https://prepack.io/
    预包装
一种使JavaScript代码运行得更快的工具。
* Prepack仍处于早期开发阶段，尚未准备好用于生产。请尝试一下，提供反馈，并帮助修复错误。 */
    // new HtmlWebpackPlugin({
    //   title: " Progressive Web Application"
    // }),
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),

    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      // exclude: [/\.map$/, /asset-manifest\.json$/],
      importWorkboxFrom: "cdn"
      // navigateFallback: publicUrl + "/index.html",
      // navigateFallbackBlacklist: [
      //   // Exclude URLs starting with /_, as they're likely an API call
      //   new RegExp("^/_"),
      //   // Exclude URLs containing a dot, as they're likely a resource in
      //   // public/ and not a SPA route
      //   new RegExp("/[^/]+\\.[^/]+$")
      // ]
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: isEnvDevelopment ? "[name].[hash].css" : "[name].[hash].css",
      chunkFilename: isEnvDevelopment
        ? "[name].[hash].chunk.css"
        : "[name].[hash].chunk.css"
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: " Progressive Web Application",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        removeAttributeQuotes: false
      },
      template: path.resolve(__dirname, "./src/index.html")
    })
  ].filter(Boolean),
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      //   automaticNameDelimiter: "~",
      //   automaticNameMaxLength: 30,
      name: true
      //   cacheGroups: {
      //     vendors: {
      //       test: /[\\/]node_modules[\\/]/,
      //       priority: -10
      //     }
      //   }
    },
    minimize: isEnvProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            // we want terser to parse ecma 8 code. However, we don't want it
            // to apply any minfication steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending futher investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true
          }
        },
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        // Disabled on WSL (Windows Subsystem for Linux) due to an issue with Terser
        // https://github.com/webpack-contrib/terser-webpack-plugin/issues/21
        parallel: true,
        // Enable file caching
        cache: true,
        sourceMap: shouldUseSourceMap
      }),

      /* vue  webpack打包时如何去掉console.log？ */
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          },
          mangle: true,
          warnings: false,
          compress: {
            // warnings: false,
            drop_debugger: true,
            drop_console: true
          }
        },
        cache: true,
        parallel: true,
        sourceMap: shouldUseSourceMap
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: shouldUseSourceMap
            ? {
                // `inline: false` forces the sourcemap to be output into a
                // separate file
                inline: false,
                // `annotation: true` appends the sourceMappingURL to the end of
                // the css file, helping the browser find the sourcemap
                annotation: true
              }
            : false
        }
      })
    ]
  }
};
