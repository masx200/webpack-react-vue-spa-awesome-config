"use strict";
const postcssNormalize = require("postcss-normalize");
const defaultport = 10000;
const port = defaultport + parseInt(String(10000 * Math.random()));
console.log(`\nwebpack config filename : ${__filename}\n`);
console.log(`\nworking directory : ${process.cwd()}\n`);
var __dirname = process.cwd();
process.argv.includes("--mode=production")
  ? (process.env.NODE_ENV = "production")
  : (process.env.NODE_ENV = "development");
const webpack = require("webpack");
console.log(`\nwebpack mode : ${process.env.NODE_ENV} \n`);
const CopyFilesPlugin = require("webpack-copyfiles-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const safePostCssParser = require("postcss-safe-parser");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackEnv = process.env.NODE_ENV;
const isEnvDevelopment = "development" === webpackEnv;
const shouldUseSourceMap = isEnvDevelopment;
const isEnvProduction = "production" === webpackEnv;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.BABEL_ENV = process.env.NODE_ENV;
let publicPath = isEnvProduction ? "./" : "/";
if ("production" === process.env.NODE_ENV) {
  if (
    process.argv.filter(t => String(t).startsWith("--output-public-path="))
      .length
  ) {
    const publicpath参数 = process.argv.filter(t =>
      String(t).startsWith("--output-public-path=")
    )[0];
    const 解析参数publicpath = publicpath参数.slice(
      publicpath参数.indexOf("--output-public-path=") +
        "--output-public-path=".length
    );
    if (解析参数publicpath.length) {
      console.log(`  output-public-path  :  ${解析参数publicpath}`);
      console.log("\n");
      publicPath = 解析参数publicpath;
    }
  }
}
module.exports = {
  resolve: { alias: { "@": path.join(__dirname, "src") } },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist"),
    hot: !0,
    port,
    inline: !0,
    open: !0,
    watchContentBase: !0
  },
  devtool: "inline-source-map",
  mode: process.env.NODE_ENV,
  entry: [
    isEnvDevelopment && "react-hot-loader/patch",

    path.join(__dirname, "src", "index.js")
  ].filter(Boolean),

  output: {
    publicPath,
    globalObject: `( Function('return this')())`,
    filename: isEnvDevelopment
      ? "bundle.[name].[hash].js"
      : "bundle.[name].[chunkhash].js",
    path: path.join(__dirname, "dist"),
    chunkFilename: isEnvDevelopment
      ? "chunk.[name].[hash].js"
      : "chunk.[name].[chunkhash].js"
  },
  module: {
    strictExportPresence: !0,
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
          sourceMaps: shouldUseSourceMap,
          plugins: [
            isEnvDevelopment && require.resolve("react-hot-loader/babel"),
            [
              require.resolve("@babel/plugin-proposal-decorators"),
              { legacy: true }
            ],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            [
              require.resolve("babel-plugin-htm"),
              {
                pragma: "h",
                tag: "html",
                useBuiltIns: true,
                useNativeSpread: true
              }
            ]
          ].filter(Boolean),
          presets: [require.resolve("babel-preset-react-app")],
          babelrc: false,
          configFile: false,
          cacheDirectory: !0,
          cacheCompression: isEnvProduction,
          compact: isEnvProduction
        },
        include: [path.resolve(__dirname, "src")]
      },
      {
        test: /\.(less)$/,
        use: [
          isEnvDevelopment
            ? {
                loader: require.resolve("style-loader"),
                options: { sourceMap: shouldUseSourceMap }
              }
            : { loader: MiniCssExtractPlugin.loader },
          {
            loader: require.resolve("css-loader"),
            options: { sourceMap: shouldUseSourceMap }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                require("postcss-preset-env")({
                  autoprefixer: { flexbox: "no-2009" },
                  stage: 3
                }),
                postcssNormalize()
              ],
              sourceMap: isEnvProduction && shouldUseSourceMap
            }
          },
          {
            loader: require.resolve("less-loader"),
            options: { sourceMap: shouldUseSourceMap }
          }
        ]
      },
      { parser: { requireEnsure: !1 } },
      {
        test: /\.worker\.js$/,
        loader: require.resolve("worker-loader"),
        options: {
          name: "[name].[hash].worker.js",
          inline: !0
        }
      },
      {
        test: /\.vue$/,
        loader: require.resolve("vue-loader")
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          isEnvDevelopment
            ? {
                loader: require.resolve("style-loader"),
                options: { sourceMap: shouldUseSourceMap }
              }
            : { loader: MiniCssExtractPlugin.loader },
          {
            loader: require.resolve("css-loader"),
            options: { sourceMap: shouldUseSourceMap }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                require("postcss-preset-env")({
                  autoprefixer: { flexbox: "no-2009" },
                  stage: 3
                }),
                postcssNormalize()
              ],
              sourceMap: isEnvProduction && shouldUseSourceMap
            }
          },
          {
            loader: require.resolve("fast-sass-loader"),
            options: {}
          }
        ]
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            loader: require.resolve("url-loader"),
            options: {
              limit: 10000,
              name: isEnvDevelopment
                ? "[name].[hash].[ext]"
                : "[name].[contenthash].[ext]"
            }
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
              sourceMaps: shouldUseSourceMap,
              presets: [require.resolve("babel-preset-react-app")],
              babelrc: false,
              configFile: false,
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
              ),
              cacheDirectory: !0,
              cacheCompression: isEnvProduction,
              compact: isEnvProduction
            },
            include: [path.resolve(__dirname, "src")]
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve("babel-loader"),
            options: {
              babelrc: !1,
              configFile: !1,
              compact: !1,
              presets: [
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
    ]
  },
  plugins: [
    isEnvProduction &&
      new CopyFilesPlugin({
        sourceRoot: path.join(__dirname, "public"),
        targetRoot: path.join(__dirname, "dist"),
        files: ["favicon.ico"],
        cleanDirs: [path.join(__dirname, "dist")]
      }),
    isEnvDevelopment && new webpack.NamedModulesPlugin(),
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
      filename: "[name].[chunkhash].css",
      chunkFilename: "[name].[chunkhash].css"
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
      minSize: 30000,
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
          compress: {
            drop_debugger: !0,
            drop_console: !0,
            pure_funcs: ["console.log"]
          }
        },
        cache: !0,
        parallel: !0,
        sourceMap: shouldUseSourceMap
      }),
      new TerserPlugin({
        terserOptions: {
          ecma: 5,
          parse: { ecma: 8 },
          compress: {
            warnings: !1,
            comparisons: !1,
            inline: 2,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ["console.log"]
          },
          mangle: { safari10: !0 },
          output: {
            ecma: 5,
            comments: !1,
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
          map: !!shouldUseSourceMap && {
            inline: !1,
            annotation: !0
          }
        }
      })
    ]
  }
};
