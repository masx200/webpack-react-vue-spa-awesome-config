"use strict";

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
/**
 * @param {string[]} args
 * @returns{Record<string,string>}
 */
function parseargs(args) {
    /**@type{Record<string,string>} */
    const 参数obj = {};
    args.filter((s) => s.startsWith("--"))
        .map((s) => /--(?<key>.+?)=(?<value>.+)/g.exec(s))
        .forEach((execArray) => {
            var _a, _b, _c;
            const groups =
                (_a = execArray) === null || _a === void 0 ? void 0 : _a.groups;
            const key =
                (_b = groups) === null || _b === void 0 ? void 0 : _b.key;
            const value =
                (_c = groups) === null || _c === void 0 ? void 0 : _c.value;
            if (key && value) {
                参数obj[key] = value;
            }
        });
    return 参数obj;
}
console.log("输入的参数:");
console.log(JSON.stringify(process.argv, null, 4));
const 参数object = parseargs(process.argv);
console.log("解析的参数:");
console.log(JSON.stringify(参数object, null, 4));
const 解析参数publicpath = 参数object["output-public-path"];
const 参数reacthotreload = !!参数object["react-hot-loader"];
process.env.NODE_ENV = process.argv.includes("--mode=production")
    ? "production"
    : "development";

const postcssNormalize = require("postcss-normalize");
const defaultport = 10000;
const port = defaultport + parseInt(String(10000 * Math.random()));
console.log(`\nwebpack config filename : ${__filename}\n`);
console.log(`\nworking directory : ${process.cwd()}\n`);
var __dirname = process.cwd();
const webpack = require("webpack");
console.log(`\nwebpack mode : ${process.env.NODE_ENV} \n`);
//const CopyFilesPlugin = require("webpack-copyfiles-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const safePostCssParser = require("postcss-safe-parser");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
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
    if (解析参数publicpath) {
        if (解析参数publicpath.length) {
            console.log(`  output-public-path  :  ${解析参数publicpath}`);
            console.log("\n");
            publicPath = 解析参数publicpath;
        }
    }
}
/**
 * @type{import('webpack').Configuration}
 */
module.exports = {
    target: "browserslist",
    resolve: { alias: { "@": path.join(__dirname, "src") } },
    devServer: {
        compress: true,

        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "./dist"),
        hot: !0,
        port,
        inline: !0,
        open: !0,
        watchContentBase: !0,
    },
    devtool: "inline-source-map",
    mode: process.env.NODE_ENV,
    entry: [
        isEnvDevelopment && 参数reacthotreload && "react-hot-loader/patch",
        path.join(__dirname, "src", "index.js"),
    ].filter(Boolean),
    output: {
        publicPath,
        globalObject: `( Function('return this')())`,
        filename: isEnvDevelopment
            ? "bundle.[name].[fullhash].js"
            : "bundle.[name].[chunkhash].js",
        path: path.join(__dirname, "dist"),
        chunkFilename: isEnvDevelopment
            ? "chunk.[name].[fullhash].js"
            : "chunk.[name].[chunkhash].js",
    },
    module: {
        strictExportPresence: !0,
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                type: "javascript/auto",
                loader: require.resolve("babel-loader"),
                options: {
                    sourceMaps: shouldUseSourceMap,
                    plugins: [
                        isEnvDevelopment &&
                            参数reacthotreload &&
                            require.resolve("react-hot-loader/babel"),
                        [
                            require.resolve(
                                "@babel/plugin-proposal-decorators"
                            ),
                            { legacy: true },
                        ],
                        [
                            "@babel/plugin-proposal-class-properties",
                            { loose: true },
                        ],
                        [
                            require.resolve("babel-plugin-htm"),
                            {
                                pragma: "h",
                                tag: "html",
                                useBuiltIns: true,
                                useNativeSpread: true,
                            },
                        ],
                    ].filter(Boolean),
                    presets: [require.resolve("babel-preset-react-app")],
                    babelrc: false,
                    configFile: false,
                    cacheDirectory: !0,
                    cacheCompression: isEnvProduction,
                    compact: isEnvProduction,
                },
                include: [path.resolve(__dirname, "src")],
            },
            {
                test: /\.(less)$/,
                use: [
                    isEnvDevelopment
                        ? {
                              loader: require.resolve("style-loader"),
                              options: {
                                  /* sourceMap: shouldUseSourceMap */
                              },
                          }
                        : { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: require.resolve("css-loader"),
                        options: { sourceMap: shouldUseSourceMap },
                    },
                    {
                        loader: require.resolve("postcss-loader"),
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("postcss-flexbugs-fixes"),
                                    require("postcss-preset-env")({
                                        autoprefixer: { flexbox: "no-2009" },
                                        stage: 3,
                                    }),
                                    postcssNormalize(),
                                ],
                            },

                            //   ident: "postcss",
                            /*
                            plugins: () => [
                                require("postcss-flexbugs-fixes"),
                                require("postcss-preset-env")({
                                    autoprefixer: { flexbox: "no-2009" },
                                    stage: 3
                                }),
                                postcssNormalize()
                            ],*/
                            sourceMap: isEnvProduction && shouldUseSourceMap,
                        },
                    },
                    {
                        loader: require.resolve("less-loader"),
                        options: { sourceMap: shouldUseSourceMap },
                    },
                ],
            },
            // { parser: { requireEnsure: !1 } },
            {
                test: /\.worker\.js$/,
                loader: require.resolve("worker-loader"),

                /*

ValidationError: Invalid options object. Worker Loader has been initialized using an options object that does not match the API schema.
11:12:59.041  	 - options has an unknown property 'name'. These properties are valid:
11:12:59.041  	   object { worker?, publicPath?, filename?, chunkFilename?, inline?, esModule? }
11:12:59.041  	 - options.inline should be one of these:
11:12:59.041  	   "no-fallback" | "fallback"


*/
                /*
filename

Type: String|Function Default: based on output.filename, adding worker suffix, for example - output.filename: '[name].js' value of this option will be [name].worker.js

The filename of entry chunks for web workers.


*/
                /*
inline

Type: 'fallback' | 'no-fallback' Default: undefined

Allow to inline the worker as a BLOB.

Inline mode with the fallback value will create file for browsers without support web workers, to disable this behavior just use no-fallback value


*/
                options: {
                    filename: "[name].[fullhash].worker.js",
                    inline: "no-fallback",
                },
            },
            {
                test: /\.vue$/,
                loader: require.resolve("vue-loader"),
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    isEnvDevelopment
                        ? {
                              loader: require.resolve("style-loader"),
                              /* ValidationError: Invalid options object. Style Loader has been initialized using an options object that does not match the API schema.
 - options has an unknown property 'sourceMap'. These properties are valid:
   object { injectType?, attributes?, insert?, base?, esModule? } */
                              options: {
                                  /* sourceMap: shouldUseSourceMap */
                              },
                          }
                        : { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: require.resolve("css-loader"),
                        options: { sourceMap: shouldUseSourceMap },
                    },
                    {
                        loader: require.resolve("postcss-loader"),

                        /*  
      ValidationError: Invalid options object. PostCSS Loader has been initialized using an options object that does not match the API schema.
11:12:59.047  	     - options has an unknown property 'plugins'. These properties are valid:
11:12:59.047  	       object { postcssOptions?, execute?, sourceMap? }

*/
                        options: {
                            //   ident: "postcss",
                            //          plugins: () => [
                            postcssOptions: {
                                plugins: [
                                    require("postcss-flexbugs-fixes"),
                                    require("postcss-preset-env")({
                                        autoprefixer: { flexbox: "no-2009" },
                                        stage: 3,
                                    }),
                                    postcssNormalize(),
                                ],
                            },
                            sourceMap: isEnvProduction && shouldUseSourceMap,
                        },
                    },
                    {
                        loader: require.resolve("fast-sass-loader"),
                        options: {},
                    },
                ],
            },
            {
                oneOf: [
                    {
                        test: [
                            /\.bmp$/,
                            /\.gif$/,
                            /\.jpe?g$/,
                            /\.png$/,
                            /\.svg$/,
                        ],
                        loader: require.resolve("url-loader"),
                        options: {
                            limit: 10000,
                            name: isEnvDevelopment
                                ? "[name].[fullhash].[ext]"
                                : "[name].[contenthash].[ext]",
                        },
                    },
                    {
                        test: /\.(js|mjs|jsx|ts|tsx)$/,
                        loader: require.resolve("babel-loader"),
                        options: {
                            sourceMaps: shouldUseSourceMap,
                            presets: [
                                require.resolve("babel-preset-react-app"),
                            ],
                            babelrc: false,
                            configFile: false,
                            customize: require.resolve(
                                "babel-preset-react-app/webpack-overrides"
                            ),
                            cacheDirectory: !0,
                            cacheCompression: isEnvProduction,
                            compact: isEnvProduction,
                        },
                        include: [path.resolve(__dirname, "src")],
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
                                    require.resolve(
                                        "babel-preset-react-app/dependencies"
                                    ),
                                    { helpers: !0 },
                                ],
                            ],
                            cacheDirectory: !0,
                            cacheCompression: isEnvProduction,
                            sourceMaps: shouldUseSourceMap,
                        },
                    },
                    {
                        loader: require.resolve("file-loader"),
                        exclude: [
                            /\.vue$/,
                            /\.(js|mjs|jsx|ts|tsx)$/,
                            /\.html$/,
                            /\.json$/,
                            /\.(css|scss|sass|less)$/,
                        ],
                        options: {
                            name: isEnvDevelopment
                                ? "[name].[fullhash].[ext]"
                                : "[name].[contenthash].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),

        isEnvProduction && new CleanWebpackPlugin({ verbose: true }),

        //    isEnvProduction &&
        new CopyPlugin({
            patterns: [
                {
                    globOptions: {
                        ignore: ["**/index.html"],
                    },
                    from: path.join(__dirname, "public"),
                    toType: "dir",
                    to: path.join(__dirname, "dist"),
                    filter: (resourcePath) => {
                        console.log(
                            "copy-webpack-plugin",

                            resourcePath
                        );
                        return true;
                    },
                },
                //  { from: "other", to: "public" },
            ],
        }),
        /*
   new CopyFilesPlugin({
                sourceRoot: path.join(__dirname, "public"),
                targetRoot: path.join(__dirname, "dist"),
                files: ["favicon.ico"],
                cleanDirs: [path.join(__dirname, "dist")],
            }),
*/
        //      isEnvDevelopment && new webpack.NamedModulesPlugin(),
        isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
        isEnvProduction &&
            new WorkboxWebpackPlugin.GenerateSW({
                clientsClaim: !0,
                /* Please check your GenerateSW plugin configuration:
"importWorkboxFrom" is not a supported parameter. */
                // importWorkboxFrom: "cdn",
                runtimeCaching: [
                    {
                        urlPattern: /.*\.(?:js|html|\/)$/,
                        handler: "NetworkFirst",
                        options: {},
                    },
                    {
                        urlPattern: /.*\.(?:xml|json|md|css)$/,
                        handler: "StaleWhileRevalidate",
                        options: {},
                    },
                    {
                        urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
                        handler: "CacheFirst",
                        options: {
                            cacheName: "image-cache",
                            expiration: { maxEntries: 10 },
                        },
                    },
                ],
            }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[name].[chunkhash].css",
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
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
                removeAttributeQuotes: !1,
            },
            template: path.join(__dirname, "public", "index.html"),
        }),
    ].filter(Boolean),
    optimization: {
        //将NamedModulesPlugin 替换为 optimization.moduleIds: 'named'
        moduleIds: isEnvDevelopment ? "named" : "deterministic",

        chunkIds: isEnvDevelopment ? "named" : "total-size",
        //namedchunksplugin
        usedExports: true,
        runtimeChunk: { name: (e) => `runtime~${e.name}` },
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            maxSize: 100 * 1000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 5,
            //
            name(module, chunks, cacheGroupKey) {
                const moduleFileName = module
                    .identifier()
                    .split("/")
                    .reduceRight((item) => item);
                const allChunksNames = chunks
                    .map((item) => item.name)
                    .join("~");
                return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
            },
            /*configuration.optimization.splitChunks.name should be one of these:
      false | string | function
      -> Give chunks created a name (chunks with equal name are merged).
      Details:
       * configuration.optimization.splitChunks.name should be false.
       * configuration.optimization.splitChunks.name should be a string.
       * configuration.optimization.splitChunks.name should be an instance of function.*/
            //   name: !0,
        },
        minimize: isEnvProduction,
        minimizer: [
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
                        pure_funcs: ["console.log"],
                    },
                    mangle: { safari10: !0 },
                    output: {
                        ecma: 5,
                        comments: !1,
                        ascii_only: !0,
                    },
                },
                parallel: !0,
                //   cache: !0,
                //    sourceMap: shouldUseSourceMap,
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    parser: safePostCssParser,
                    map: !!shouldUseSourceMap && {
                        inline: !1,
                        annotation: !0,
                    },
                },
            }),
        ],
    },
};
