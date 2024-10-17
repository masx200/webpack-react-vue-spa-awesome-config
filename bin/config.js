"use strict";

var e = require("fs"), s = require("path"), o = require("terser-webpack-plugin"), r = require("postcss-normalize"), t = require("merge");

function i() {
    var e;
    try {
        e = require("vue").version;
    } catch (e) {
        if ("MODULE_NOT_FOUND" === e?.code) return require.resolve("vue-loader");
        throw e;
    }
    return e.split(".")[0], require.resolve("vue-loader");
}

function n() {
    const r = {
        terserOptions: {
            ecma: 5,
            parse: {
                ecma: 2015
            },
            compress: {
                comparisons: !1,
                inline: 2,
                drop_console: !0,
                drop_debugger: !0,
                pure_funcs: [ "console.log" ]
            },
            mangle: {
                safari10: !0
            },
            output: {
                ecma: 5,
                comments: !1,
                ascii_only: !0
            }
        },
        parallel: !0
    };
    if (e.existsSync(s.resolve(__dirname, "terser.config.js"))) {
        const e = t.recursive(!0, r, require(s.resolve(__dirname, "terser.config.js")));
        return new o(e);
    }
    return new o(r);
}

function l(o, r) {
    return {
        sourceMaps: o,
        plugins: [ [ require.resolve("babel-plugin-htm"), {
            pragma: "h",
            tag: "html",
            useBuiltIns: !0,
            useNativeSpread: !0
        } ], [ "@babel/plugin-proposal-private-methods", {
            loose: !0
        } ], [ require.resolve("@babel/plugin-proposal-decorators"), {
            legacy: !0
        } ], [ "@babel/plugin-proposal-class-properties", {
            loose: !0
        } ] ].filter(Boolean),
        presets: [ [ "@babel/preset-react", {
            runtime: "automatic"
        } ], require.resolve("@babel/preset-typescript"), r && [ require.resolve("babel-preset-react-app"), {} ] ].filter(Boolean),
        customize: require.resolve("babel-preset-react-app/webpack-overrides"),
        babelrc: !1,
        configFile: !!e.existsSync(s.resolve(__dirname, "babel.config.js")) && s.resolve(__dirname, "babel.config.js"),
        cacheDirectory: !0,
        cacheCompression: r,
        compact: r
    };
}

function a() {
    return {
        config: !!e.existsSync(s.resolve(__dirname, "postcss.config.js")) && s.resolve(__dirname, "postcss.config.js"),
        plugins: [ require("postcss-flexbugs-fixes"), require("postcss-preset-env")({
            autoprefixer: {
                flexbox: "no-2009"
            },
            stage: 3
        }), r() ]
    };
}

exports.createconfig = function(o, r) {
    console.log("env:", o, "\n", "argv:", r);
    const t = require("fork-ts-checker-webpack-plugin"), c = require("copy-webpack-plugin"), p = require("workbox-webpack-plugin"), u = require("postcss-safe-parser"), d = require("optimize-css-assets-webpack-plugin"), {VueLoaderPlugin: m} = require(i()), b = require("mini-css-extract-plugin"), f = require("html-webpack-plugin"), g = require("webpack"), v = require("@vue/preload-webpack-plugin"), {CleanWebpackPlugin: h} = require("clean-webpack-plugin"), j = r, x = j["output-public-path"], y = j.mode;
    process.env.NODE_ENV = "production" === j.mode ? "production" : "development" === j.mode ? "development" : process.env.NODE_ENV;
    const q = Number(j.port) || 1e4 + parseInt(String(1e4 * Math.random()));
    console.log(`\nwebpack config filename : ${__filename}\n`), console.log(`\nworking directory : ${process.cwd()}\n`);
    var w = process.cwd();
    console.log(`\nwebpack mode : ${process.env.NODE_ENV} \n`);
    const k = process.env.NODE_ENV, _ = "development" === k, S = _, E = "production" === k;
    process.env.BABEL_ENV = process.env.NODE_ENV;
    let O = E ? "./" : "/";
    "production" === process.env.NODE_ENV && x && x.length && (console.log(`  output-public-path  :  ${x}`), 
    console.log("\n"), O = x);
    const C = !!o.WEBPACK_SERVE;
    _ && C && console.log("open in browser: http://localhost:" + q);
    const N = s.join(w), $ = {
        stats: {
            children: !0
        },
        target: _ ? "web" : "browserslist:" + [ ">0.2%", "not dead", "not op_mini all" ].join(","),
        resolve: {
            extensions: [ ".ts", ".js", ".tsx", ".jsx", ".cjs", ".mjs" ],
            alias: {
                "@": s.join(w, "src"),
                "~": s.join(w)
            }
        },
        devServer: {
            static: {
                directory: s.join(w, "public"),
                watch: !0
            },
            client: {
                overlay: !0
            },
            host: "0.0.0.0",
            compress: !0,
            historyApiFallback: !0,
            hot: !0,
            port: q
        },
        devtool: !!_ && "eval-cheap-module-source-map",
        mode: y,
        entry: [ e.existsSync(s.join(w, "src", "index.tsx")) ? s.join(w, "src", "index.tsx") : e.existsSync(s.join(w, "src", "index.ts")) ? s.join(w, "src", "index.ts") : e.existsSync(s.join(w, "src", "index.jsx")) ? s.join(w, "src", "index.jsx") : s.join(w, "src", "index.js") ].filter(Boolean),
        output: {
            publicPath: O,
            globalObject: '(typeof WorkerGlobalScope !== "undefined"?\n\nWorkerGlobalScope:\n\ntypeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : ( Function(\'return this\')()))',
            filename: _ ? "[name].[fullhash].js" : "[name].[contenthash].js",
            path: s.join(w, "dist"),
            chunkFilename: _ ? "[name].[fullhash].js" : "[name].[contenthash].js"
        },
        module: {
            strictExportPresence: !0,
            rules: [ {
                test: /\.(cjs|js|mjs|jsx|ts|tsx)$/,
                type: "javascript/auto",
                loader: require.resolve("babel-loader"),
                options: l(S, E),
                include: [ N ],
                exclude: [ /node_modules/ ]
            }, {
                test: /\.(less)$/,
                use: [ _ ? {
                    loader: require.resolve("style-loader"),
                    options: {}
                } : {
                    loader: b.loader
                }, {
                    loader: require.resolve("css-loader"),
                    options: {
                        importLoaders: 2,
                        sourceMap: S
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: a(),
                        sourceMap: S
                    }
                }, {
                    loader: require.resolve("less-loader"),
                    options: {
                        sourceMap: S
                    }
                } ]
            }, {
                test: /\.worker\.(js|ts)$/,
                loader: require.resolve("worker-loader"),
                options: {
                    inline: "no-fallback"
                }
            }, {
                test: /\.vue$/,
                loader: require.resolve(i())
            }, {
                test: /\.(css)$/,
                use: [ _ ? {
                    loader: require.resolve("style-loader"),
                    options: {}
                } : {
                    loader: b.loader
                }, {
                    loader: require.resolve("css-loader"),
                    options: {
                        importLoaders: 1,
                        sourceMap: S
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: a(),
                        sourceMap: S
                    }
                } ]
            }, {
                test: /\.(sass|scss)$/,
                use: [ _ ? {
                    loader: require.resolve("style-loader"),
                    options: {}
                } : {
                    loader: b.loader
                }, {
                    loader: require.resolve("css-loader"),
                    options: {
                        importLoaders: 2,
                        sourceMap: S
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: a(),
                        sourceMap: S
                    }
                }, {
                    loader: require.resolve("fast-sass-loader"),
                    options: {}
                } ]
            }, {
                test: /\.(js|mjs)$/,
                exclude: [ /@babel(?:\/|\\{1,2})runtime/, s.resolve(w, "src") ],
                type: "javascript/auto",
                loader: require.resolve("babel-loader"),
                options: {
                    babelrc: !1,
                    configFile: !1,
                    compact: !1,
                    presets: [ E && [ require.resolve("babel-preset-react-app"), {} ], [ require.resolve("babel-preset-react-app/dependencies"), {
                        helpers: !0
                    } ] ].filter(Boolean),
                    cacheDirectory: !0,
                    cacheCompression: E,
                    sourceMaps: S
                },
                include: [ /node_modules/ ]
            }, {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                type: "javascript/auto",
                loader: require.resolve("babel-loader"),
                options: {
                    sourceMaps: S,
                    plugins: [].filter(Boolean),
                    presets: [ [ "@babel/preset-react", {
                        runtime: "automatic"
                    } ] ].filter(Boolean),
                    babelrc: !1,
                    configFile: !!e.existsSync(s.resolve(w, "babel.config.js")) && s.resolve(w, "babel.config.js"),
                    cacheDirectory: !0,
                    cacheCompression: E,
                    compact: E
                },
                include: [ N ],
                exclude: [ /node_modules/ ]
            }, {
                include: [ N ],
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [ {
                    loader: require.resolve("ts-loader"),
                    options: {
                        configFile: !!e.existsSync(s.resolve(w, "tsconfig.json")) && s.resolve(w, "tsconfig.json"),
                        compilerOptions: {
                            sourceMap: !0,
                            strict: !0
                        },
                        transpileOnly: !0,
                        appendTsSuffixTo: [ /\.vue$/ ]
                    }
                } ]
            }, {
                test: /\.(png|jpe?g|webp|ico|bmp|gif|svg|eot|ttf|woff|woff2)$/i,
                type: "asset"
            } ]
        },
        plugins: [ new t({
            typescript: {
                configOverwrite: {
                    compilerOptions: {
                        skipLibCheck: !0,
                        strict: !0
                    },
                    include: [ "src" ]
                },
                configFile: !!e.existsSync(s.resolve(w, "tsconfig.json")) && s.resolve(w, "tsconfig.json")
            }
        }), E && new h({
            verbose: !0
        }), new c({
            patterns: [ {
                globOptions: {
                    ignore: [ "**/index.html" ]
                },
                from: s.join(w, "public"),
                toType: "dir",
                to: s.join(w, "dist"),
                filter: e => (console.log("copy-webpack-plugin", e), !0)
            } ]
        }), _ && new g.HotModuleReplacementPlugin, E && new p.GenerateSW({
            skipWaiting: !0,
            clientsClaim: !0,
            runtimeCaching: [ {
                urlPattern: /.*\.(?:js|html|\/)$/,
                handler: "NetworkFirst",
                options: {}
            }, {
                urlPattern: /.*\.(?:xml|json|md|css)$/,
                handler: "StaleWhileRevalidate",
                options: {}
            }, {
                urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
                handler: "CacheFirst",
                options: {
                    cacheName: "image-cache",
                    expiration: {
                        maxEntries: 10
                    }
                }
            } ]
        }), new b({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        }), new m, new f({
            hash: !1,
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
                removeAttributeQuotes: !1
            },
            template: s.join(w, "public", "index.html")
        }), new v({
            rel: "preload",
            include: "asyncChunks"
        }) ].filter(Boolean),
        optimization: {
            moduleIds: _ ? "named" : "natural",
            chunkIds: _ ? "named" : "natural",
            usedExports: !0,
            runtimeChunk: "single",
            splitChunks: E ? {
                chunks: "all",
                minSize: 3e4,
                maxSize: 7e4,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 5,
                name: !1,
                usedExports: !0,
                cacheGroups: {
                    styles: {
                        name: "styles",
                        type: "css/mini-extract",
                        chunks: "all",
                        enforce: !0
                    }
                }
            } : {
                chunks: "all",
                maxSize: 2e4
            },
            minimize: E,
            minimizer: [ n(), new d({
                cssProcessorPluginOptions: {
                    preset: [ "default", {
                        discardComments: {
                            removeAll: !0
                        },
                        normalizeUnicode: !1
                    } ]
                },
                canPrint: !0,
                cssProcessorOptions: {
                    parser: u,
                    map: !!S && {
                        inline: !1,
                        annotation: !0
                    }
                }
            }) ]
        }
    };
    return function(e, s, o) {
        if (s) {
            try {
                require("react");
            } catch (e) {
                if ("MODULE_NOT_FOUND" === e?.code) return;
                throw e;
            }
            !function(e, s) {
                const o = require("@next/react-refresh-utils/dist/ReactRefreshWebpackPlugin").default;
                e.entry = [ require.resolve("@next/react-refresh-utils/dist/runtime"), ...e.entry ], 
                e.plugins = [ new o, ...e.plugins ], e.module.rules = [ {
                    test: /\.(tsx|ts|js|mjs|jsx)$/,
                    include: [ s ],
                    exclude: [ /node_modules/ ],
                    use: [ require.resolve("@next/react-refresh-utils/dist/loader") ]
                }, ...e.module.rules ];
            }(e, o);
        }
    }($, _, N), $.optimization.splitChunks ? $.optimization.splitChunks.cacheGroups = {
        ...$.optimization.splitChunks?.cacheGroups,
        commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "initial"
        }
    } : $.optimization.splitChunks = {}, $;
};
//# sourceMappingURL=config.js.map
