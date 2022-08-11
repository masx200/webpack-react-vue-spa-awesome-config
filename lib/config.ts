("use strict");
import type {
    WebpackPluginInstance,
    ModuleOptions,
    RuleSetRule,
} from "webpack";
export type Configuration = import("webpack").Configuration & {
    entry: string[];
    plugins: WebpackPluginInstance[];
    module: ModuleOptions & { rules: RuleSetRule[] };
} & { devServer: import("webpack-dev-server").Configuration } & {
    optimization: NonNullable<
        import("webpack").Configuration["optimization"]
    > & {
        splitChunks: Nonfalseable<
            NonNullable<
                import("webpack").Configuration["optimization"]
            >["splitChunks"]
        >;
    };
};
type Nonfalseable<T> = T extends false ? never : T;

export function createconfig(
    env: Record<string, any>,
    argv: Record<string, any>
): Configuration {
    console.log("env:", env, "\n", "argv:", argv);

    function resolvevueloadermodulepath() {
        var vueversion;

        try {
            //@ts-ignore
            vueversion = require("vue").version;
        } catch (e: any) {
            if (e?.code === "MODULE_NOT_FOUND") {
                return require.resolve("vue-loader");
            } else {
                throw e;
            }
        }

        if ("3" === vueversion.split(".")[0]) {
            return require.resolve("vue-loader");
        } else {
            return require.resolve("vue-loader");
        }
    }

    // const ReactRefreshTypeScript = require("react-refresh-typescript");
    const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
    // const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
    const fs = require("fs");
    const CopyPlugin = require("copy-webpack-plugin");
    const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
    const safePostCssParser = require("postcss-safe-parser");
    const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
    const TerserPlugin = require("terser-webpack-plugin");
    const { VueLoaderPlugin } = require(resolvevueloadermodulepath());
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const path = require("path");
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    const webpack = require("webpack");
    const postcssNormalize = require("postcss-normalize");

    const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");

    const { CleanWebpackPlugin } = require("clean-webpack-plugin");

    const 参数object = argv;

    const 解析参数publicpath = 参数object["output-public-path"];
    const mode = 参数object["mode"];
    process.env.NODE_ENV =
        参数object["mode"] === "production"
            ? "production"
            : 参数object["mode"] === "development"
            ? "development"
            : process.env.NODE_ENV;
    // const isDevelopment = process.env.NODE_ENV !== "production";
    const defaultport = 10000;
    const port =
        Number(参数object["port"]) ||
        defaultport + parseInt(String(10000 * Math.random()));
    console.log(`\nwebpack config filename : ${__filename}\n`);
    console.log(`\nworking directory : ${process.cwd()}\n`);
    var __dirname = process.cwd();
    console.log(`\nwebpack mode : ${process.env.NODE_ENV} \n`);
    const webpackEnv = process.env.NODE_ENV;
    const isEnvDevelopment = "development" === webpackEnv;
    const shouldUseSourceMap = isEnvDevelopment;
    const isEnvProduction = "production" === webpackEnv;
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
    const isservemode = !!env.WEBPACK_SERVE;
    if (isEnvDevelopment && isservemode) {
        console.log("open in browser: http://localhost:" + port);
    }
    const srcfoldepath = path.join(__dirname);
    const config: Configuration = {
        stats: {
            children: true,
        },
        target: isEnvDevelopment
            ? "web"
            : "browserslist:" +
              [">0.2%", "not dead", "not op_mini all"].join(","),
        resolve: {
            extensions: [".ts", ".js", ".tsx", ".jsx", ".cjs", ".mjs"],

            alias: {
                "@": path.join(__dirname, "src"),
                "~": path.join(__dirname),
            },
        },
        devServer: {
            //@ts-ignore
            static: {
                directory: path.join(__dirname, "public"),
                watch: true,
            },
            client: {
                overlay: true,
            },

            host: "0.0.0.0",
            compress: true,
            historyApiFallback: true,
            //@ts-ignore
            // contentBase: path.resolve(__dirname, "./public"),
            hot: !0,
            port,
            // inline: !0,
            // watchContentBase: !0,
        },
        devtool: isEnvDevelopment ? "eval-cheap-module-source-map" : false,
        mode: mode,
        entry: [
            fs.existsSync(path.join(__dirname, "src", "index.tsx"))
                ? path.join(__dirname, "src", "index.tsx")
                : fs.existsSync(path.join(__dirname, "src", "index.ts"))
                ? path.join(__dirname, "src", "index.ts")
                : fs.existsSync(path.join(__dirname, "src", "index.jsx"))
                ? path.join(__dirname, "src", "index.jsx")
                : path.join(__dirname, "src", "index.js"),
        ].filter(Boolean),
        output: {
            publicPath,
            globalObject: `(typeof WorkerGlobalScope !== "undefined"?

WorkerGlobalScope:

typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : ( Function('return this')()))`,
            filename: isEnvDevelopment
                ? "[name].[fullhash].js"
                : "[name].[contenthash].js",
            path: path.join(__dirname, "dist"),
            chunkFilename: isEnvDevelopment
                ? "[name].[fullhash].js"
                : "[name].[contenthash].js",
        },
        module: {
            strictExportPresence: !0,
            rules: [
                {
                    test: /\.(cjs|js|mjs|jsx|ts|tsx)$/,
                    type: "javascript/auto",
                    loader: require.resolve("babel-loader"),
                    options: getbabelconfig(),
                    include: [srcfoldepath],
                    exclude: [/node_modules/],
                },

                {
                    test: /\.(less)$/,
                    use: [
                        isEnvDevelopment
                            ? {
                                  loader: require.resolve("style-loader"),
                                  options: {},
                              }
                            : {
                                  loader: MiniCssExtractPlugin.loader,
                              },
                        {
                            loader: require.resolve("css-loader"),
                            options: {
                                importLoaders: 2,
                                sourceMap: shouldUseSourceMap,
                            },
                        },
                        {
                            loader: require.resolve("postcss-loader"),
                            options: {
                                postcssOptions: getpostcssoptions(),
                                sourceMap: shouldUseSourceMap,
                            },
                        },
                        {
                            loader: require.resolve("less-loader"),
                            options: {
                                sourceMap: shouldUseSourceMap,
                            },
                        },
                    ],
                },
                {
                    test: /\.worker\.(js|ts)$/,
                    loader: require.resolve("worker-loader"),
                    options: {
                        inline: "no-fallback",
                    },
                },
                {
                    test: /\.vue$/,
                    loader: require.resolve(resolvevueloadermodulepath()),
                },
                {
                    test: /\.(css)$/,
                    use: [
                        isEnvDevelopment
                            ? {
                                  loader: require.resolve("style-loader"),
                                  options: {},
                              }
                            : {
                                  loader: MiniCssExtractPlugin.loader,
                              },
                        {
                            loader: require.resolve("css-loader"),
                            options: {
                                importLoaders: 1,
                                sourceMap: shouldUseSourceMap,
                            },
                        },
                        {
                            loader: require.resolve("postcss-loader"),
                            options: {
                                postcssOptions: getpostcssoptions(),
                                sourceMap: shouldUseSourceMap,
                            },
                        },
                        // {
                        //     loader: require.resolve("fast-sass-loader"),
                        //     options: {},
                        // },
                    ],
                },
                {
                    test: /\.(sass|scss)$/,
                    use: [
                        isEnvDevelopment
                            ? {
                                  loader: require.resolve("style-loader"),
                                  options: {},
                              }
                            : {
                                  loader: MiniCssExtractPlugin.loader,
                              },
                        {
                            loader: require.resolve("css-loader"),
                            options: {
                                importLoaders: 2,
                                sourceMap: shouldUseSourceMap,
                            },
                        },
                        {
                            loader: require.resolve("postcss-loader"),
                            options: {
                                postcssOptions: getpostcssoptions(),
                                sourceMap: shouldUseSourceMap,
                            },
                        },
                        {
                            loader: require.resolve("fast-sass-loader"),
                            options: {},
                        },
                    ],
                },
                // {
                //     oneOf: [
                //         {
                //             test: [
                //                 /\.(png|jpg|jpeg|gif|webp|ico|bmp|svg)$/i,
                //                 /\.bmp$/,
                //                 /\.gif$/,
                //                 /\.jpe?g$/,
                //                 /\.png$/,
                //                 /\.svg$/,
                //             ],
                //             loader: require.resolve("url-loader"),
                //             options: {
                //                 limit: 10000,
                //                 name: isEnvDevelopment
                //                     ? "[path][name].[ext]"
                //                     : "[name].[contenthash].[ext]",
                //             },
                //         },

                //         {
                //             loader: require.resolve("file-loader"),
                //             exclude: [
                //                 /\.vue$/,
                //                 /\.(js|mjs|jsx|ts|tsx|cjs)$/,
                //                 /\.html$/,
                //                 /\.json$/,
                //                 /\.(css|scss|sass|less)$/,
                //             ],
                //             options: {
                //                 name: isEnvDevelopment
                //                     ? "[path][name].[ext]"
                //                     : "[name].[contenthash].[ext]",
                //             },
                //         },
                //     ],
                // },

                {
                    test: /\.(js|mjs)$/,
                    exclude: [
                        /@babel(?:\/|\\{1,2})runtime/,
                        path.resolve(__dirname, "src"),
                    ],
                    type: "javascript/auto",
                    loader: require.resolve("babel-loader"),
                    options: {
                        babelrc: !1,
                        configFile: !1,
                        compact: !1,
                        presets: [
                            isEnvProduction && [
                                require.resolve("babel-preset-react-app"),
                                {},
                            ],
                            [
                                require.resolve(
                                    "babel-preset-react-app/dependencies"
                                ),
                                {
                                    helpers: !0,
                                },
                            ],
                        ].filter(Boolean),
                        cacheDirectory: !0,
                        cacheCompression: isEnvProduction,
                        sourceMaps: shouldUseSourceMap,
                    },
                    include: [/node_modules/],
                },

                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    type: "javascript/auto",
                    loader: require.resolve("babel-loader"),
                    options: {
                        sourceMaps: shouldUseSourceMap,
                        plugins: [].filter(Boolean),
                        presets: [
                            ["@babel/preset-react", { runtime: "automatic" }],
                        ].filter(Boolean),

                        babelrc: false,
                        configFile: fs.existsSync(
                            path.resolve(__dirname, "babel.config.js")
                        )
                            ? path.resolve(__dirname, "babel.config.js")
                            : false,

                        cacheDirectory: !0,
                        cacheCompression: isEnvProduction,
                        compact: isEnvProduction,
                    },
                    include: [srcfoldepath],
                    exclude: [/node_modules/],
                },

                {
                    include: [srcfoldepath],
                    test: /\.tsx?$/,
                    //  type: "javascript/auto",
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: require.resolve("ts-loader"),
                            options: {
                                configFile: fs.existsSync(
                                    path.resolve(__dirname, "tsconfig.json")
                                )
                                    ? path.resolve(__dirname, "tsconfig.json")
                                    : false,

                                compilerOptions: {
                                    /*   jsx: isEnvProduction
                                        ? "react-jsx"
                                        : "react-jsxdev",*/
                                    sourceMap: true,
                                    strict: true,
                                },
                                // getCustomTransformers: () => ({
                                //     before: isDevelopment
                                //         ? [ReactRefreshTypeScript()]
                                //         : [],
                                // }),
                                transpileOnly: true,
                                appendTsSuffixTo: [/\.vue$/],
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|webp|ico|bmp|gif|svg|eot|ttf|woff|woff2)$/i,
                    // More information here https://webpack.js.org/guides/asset-modules/
                    type: "asset",
                },
            ],
        },
        plugins: [
            // isDevelopment && new ReactRefreshWebpackPlugin(),
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    configOverwrite: {
                        compilerOptions: { skipLibCheck: true, strict: true },
                        include: ["src"],
                    },
                    configFile: fs.existsSync(
                        path.resolve(__dirname, "tsconfig.json")
                    )
                        ? path.resolve(__dirname, "tsconfig.json")
                        : false,
                },
            }),
            isEnvProduction &&
                new CleanWebpackPlugin({
                    verbose: true,
                }),
            new CopyPlugin({
                patterns: [
                    {
                        globOptions: {
                            ignore: ["**/index.html"],
                        },
                        from: path.join(__dirname, "public"),
                        toType: "dir",
                        to: path.join(__dirname, "dist"),
                        filter: (resourcePath: string) => {
                            console.log("copy-webpack-plugin", resourcePath);
                            return true;
                        },
                    },
                ],
            }),
            isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
            isEnvProduction &&
                new WorkboxWebpackPlugin.GenerateSW({
                    skipWaiting: true,
                    clientsClaim: !0,
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
                                expiration: {
                                    maxEntries: 10,
                                },
                            },
                        },
                    ],
                }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
                chunkFilename: "[name].[contenthash].css",
            }),
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                hash: false,
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
            new PreloadWebpackPlugin({
                rel: "preload",
                include: "asyncChunks",
            }),
        ].filter(Boolean),
        optimization: {
            moduleIds: isEnvDevelopment ? "named" : "natural",
            chunkIds: isEnvDevelopment ? "named" : "natural",
            usedExports: true,
            runtimeChunk: "single",
            splitChunks: isEnvProduction
                ? {
                      chunks: "all",
                      minSize: 30000,
                      maxSize: 70 * 1000,
                      minChunks: 1,
                      maxAsyncRequests: 5,
                      maxInitialRequests: 5,
                      name: false,
                      usedExports: true,
                      cacheGroups: {
                          styles: {
                              name: "styles",
                              type: "css/mini-extract",

                              // For webpack@4
                              // test: /\.css$/,

                              chunks: "all",
                              enforce: true,
                          },
                      },
                  }
                : {
                      chunks: "all",
                      maxSize: 20 * 1000,
                  },
            minimize: isEnvProduction,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        ecma: 5,
                        parse: {
                            ecma: 8,
                        },
                        compress: {
                            warnings: !1,
                            comparisons: !1,
                            inline: 2,
                            drop_console: true,
                            drop_debugger: true,
                            pure_funcs: ["console.log"],
                        },
                        mangle: {
                            safari10: !0,
                        },
                        output: {
                            ecma: 5,
                            comments: !1,
                            ascii_only: !0,
                        },
                    },
                    parallel: !0,
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorPluginOptions: {
                        preset: [
                            "default",
                            {
                                discardComments: {
                                    removeAll: true,
                                },
                                normalizeUnicode: false,
                            },
                        ],
                    },
                    canPrint: true,
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

    function afterconfig(config: Configuration) {
        if (isEnvDevelopment) {
            try {
                require("react");
            } catch (error: any) {
                if (error?.code === "MODULE_NOT_FOUND") {
                    return;
                } else {
                    throw error;
                }
            }
            addreactfresh(config);
        }
    }

    function getpostcssoptions() {
        return {
            config: fs.existsSync(path.resolve(__dirname, "postcss.config.js"))
                ? path.resolve(__dirname, "postcss.config.js")
                : false,

            plugins: [
                require("postcss-flexbugs-fixes"),
                require("postcss-preset-env")({
                    autoprefixer: {
                        flexbox: "no-2009",
                    },
                    stage: 3,
                }),
                postcssNormalize(),
            ],
        };
    }

    function getbabelconfig() {
        return {
            sourceMaps: shouldUseSourceMap,
            plugins: [
                [
                    require.resolve("babel-plugin-htm"),
                    {
                        pragma: "h",
                        tag: "html",
                        useBuiltIns: true,
                        useNativeSpread: true,
                    },
                ],
                [
                    "@babel/plugin-proposal-private-methods",
                    {
                        loose: true,
                    },
                ],
                [
                    require.resolve("@babel/plugin-proposal-decorators"),
                    {
                        legacy: true,
                    },
                ],
                [
                    "@babel/plugin-proposal-class-properties",
                    {
                        loose: true,
                    },
                ],
            ].filter(Boolean),
            presets: [
                ["@babel/preset-react", { runtime: "automatic" }],

                require.resolve("@babel/preset-typescript"),
                isEnvProduction && [
                    require.resolve("babel-preset-react-app"),
                    {},
                ],
            ].filter(Boolean),
            customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
            ),
            babelrc: false,
            configFile: fs.existsSync(
                path.resolve(__dirname, "babel.config.js")
            )
                ? path.resolve(__dirname, "babel.config.js")
                : false,

            cacheDirectory: !0,
            cacheCompression: isEnvProduction,
            compact: isEnvProduction,
        };
    }

    function addreactfresh(config: Configuration) {
        const ReactRefreshWebpackPlugin =
            require("@next/react-refresh-utils/ReactRefreshWebpackPlugin").default;
        config.entry = [
            require.resolve("@next/react-refresh-utils/runtime"),
            ...config.entry,
        ];
        config.plugins = [new ReactRefreshWebpackPlugin(), ...config.plugins];
        config.module.rules = [
            {
                test: /\.(tsx|ts|js|mjs|jsx)$/,
                include: [srcfoldepath],
                exclude: [/node_modules/],
                use: [require.resolve("@next/react-refresh-utils/loader")],
            },
            ...config.module.rules,
        ];
    }
    afterconfig(config);
    if (config.optimization.splitChunks) {
        config.optimization.splitChunks.cacheGroups = {
            ...config.optimization.splitChunks?.cacheGroups,

            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "initial",
            },
        };
    } else {
        config.optimization.splitChunks = {};
    }
    return config;
}
