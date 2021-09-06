"use strict";

function e(e) {
    return function(e) {
        if (Array.isArray(e)) return r(e);
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function(e, o) {
        if (!e) return;
        if ("string" == typeof e) return r(e, o);
        var s = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === s && e.constructor && (s = e.constructor.name);
        if ("Map" === s || "Set" === s) return Array.from(e);
        if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return r(e, o);
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function r(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var o = 0, s = new Array(r); o < r; o++) s[o] = e[o];
    return s;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createconfig = function(r, o) {
    function s() {
        var e;
        try {
            e = require("vue").version;
        } catch (e) {
            if ("MODULE_NOT_FOUND" === (null == e ? void 0 : e.code)) return require.resolve("vue-loader");
            throw e;
        }
        return "3" === e.split(".")[0] ? require.resolve("vue-loader-16") : require.resolve("vue-loader");
    }
    console.log("env:", r, "\n", "argv:", o);
    var t = require("fork-ts-checker-webpack-plugin"), n = require("fs"), i = require("copy-webpack-plugin"), l = require("workbox-webpack-plugin"), a = require("postcss-safe-parser"), c = require("optimize-css-assets-webpack-plugin"), p = require("terser-webpack-plugin"), u = require(s()).VueLoaderPlugin, d = require("mini-css-extract-plugin"), m = require("path"), f = require("html-webpack-plugin"), b = require("webpack"), v = require("postcss-normalize"), g = require("@vue/preload-webpack-plugin"), h = require("clean-webpack-plugin").CleanWebpackPlugin, y = o, j = y["output-public-path"], x = y.mode;
    process.env.NODE_ENV = "production" === y.mode ? "production" : "development" === y.mode ? "development" : process.env.NODE_ENV;
    var w = Number(y.port) || 1e4 + parseInt(String(1e4 * Math.random()));
    console.log("\nwebpack config filename : ".concat(__filename, "\n")), console.log("\nworking directory : ".concat(process.cwd(), "\n"));
    var q = process.cwd();
    console.log("\nwebpack mode : ".concat(process.env.NODE_ENV, " \n"));
    var k = process.env.NODE_ENV, S = "development" === k, O = S, _ = "production" === k;
    process.env.BABEL_ENV = process.env.NODE_ENV;
    var E = _ ? "./" : "/";
    "production" === process.env.NODE_ENV && j && j.length && (console.log("  output-public-path  :  ".concat(j)), 
    console.log("\n"), E = j);
    var N = !!r.WEBPACK_SERVE;
    S && N && console.log("open in browser: http://localhost:" + w);
    var C = m.join(q), A = {
        stats: {
            children: !0
        },
        target: S ? "web" : "browserslist:" + [ ">0.2%", "not dead", "not op_mini all" ].join(","),
        resolve: {
            extensions: [ ".ts", ".js", ".tsx", ".jsx", ".cjs", ".mjs" ],
            alias: {
                "@": m.join(q, "src"),
                "~": m.join(q)
            }
        },
        devServer: {
            static: {
                directory: m.join(q, "public"),
                watch: !0
            },
            client: {
                overlay: !0
            },
            host: "0.0.0.0",
            compress: !0,
            historyApiFallback: !0,
            // contentBase: m.resolve(q, "./public"),
            hot: !0,
            port: w
        },
        devtool: !!S && "eval-cheap-module-source-map",
        mode: x,
        entry: [ n.existsSync(m.join(q, "src", "index.tsx")) ? m.join(q, "src", "index.tsx") : n.existsSync(m.join(q, "src", "index.ts")) ? m.join(q, "src", "index.ts") : n.existsSync(m.join(q, "src", "index.jsx")) ? m.join(q, "src", "index.jsx") : m.join(q, "src", "index.js") ].filter(Boolean),
        output: {
            publicPath: E,
            globalObject: '(typeof WorkerGlobalScope !== "undefined"?\n\nWorkerGlobalScope:\n\ntypeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : ( Function(\'return this\')()))',
            filename: S ? "[name].[fullhash].js" : "[name].[contenthash].js",
            path: m.join(q, "dist"),
            chunkFilename: S ? "[name].[fullhash].js" : "[name].[contenthash].js"
        },
        module: {
            strictExportPresence: !0,
            rules: [ {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                type: "javascript/auto",
                loader: require.resolve("babel-loader"),
                options: {
                    sourceMaps: O,
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
                    } ], require.resolve("@babel/preset-typescript"), _ && [ require.resolve("babel-preset-react-app"), {} ] ].filter(Boolean),
                    customize: require.resolve("babel-preset-react-app/webpack-overrides"),
                    babelrc: !1,
                    configFile: !!n.existsSync(m.resolve(q, "babel.config.js")) && m.resolve(q, "babel.config.js"),
                    cacheDirectory: !0,
                    cacheCompression: _,
                    compact: _
                },
                include: [ C ],
                exclude: [ /node_modules/ ]
            }, {
                test: /\.(less)$/,
                use: [ S ? {
                    loader: require.resolve("style-loader"),
                    options: {}
                } : {
                    loader: d.loader
                }, {
                    loader: require.resolve("css-loader"),
                    options: {
                        importLoaders: 2,
                        sourceMap: O
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: P(),
                        sourceMap: O
                    }
                }, {
                    loader: require.resolve("less-loader"),
                    options: {
                        sourceMap: O
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
                loader: require.resolve(s())
            }, {
                test: /\.(css|sass|scss)$/,
                use: [ S ? {
                    loader: require.resolve("style-loader"),
                    options: {}
                } : {
                    loader: d.loader
                }, {
                    loader: require.resolve("css-loader"),
                    options: {
                        importLoaders: 2,
                        sourceMap: O
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: P(),
                        sourceMap: O
                    }
                }, {
                    loader: require.resolve("fast-sass-loader"),
                    options: {}
                } ]
            }, {
                test: /\.(js|mjs)$/,
                exclude: [ /@babel(?:\/|\\{1,2})runtime/, m.resolve(q, "src") ],
                type: "javascript/auto",
                loader: require.resolve("babel-loader"),
                options: {
                    babelrc: !1,
                    configFile: !1,
                    compact: !1,
                    presets: [ _ && [ require.resolve("babel-preset-react-app"), {} ], [ require.resolve("babel-preset-react-app/dependencies"), {
                        helpers: !0
                    } ] ].filter(Boolean),
                    cacheDirectory: !0,
                    cacheCompression: _,
                    sourceMaps: O
                },
                include: [ /node_modules/ ]
            }, {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                type: "javascript/auto",
                loader: require.resolve("babel-loader"),
                options: {
                    sourceMaps: O,
                    plugins: [].filter(Boolean),
                    presets: [ [ "@babel/preset-react", {
                        runtime: "automatic"
                    } ] ].filter(Boolean),
                    babelrc: !1,
                    configFile: !!n.existsSync(m.resolve(q, "babel.config.js")) && m.resolve(q, "babel.config.js"),
                    cacheDirectory: !0,
                    cacheCompression: _,
                    compact: _
                },
                include: [ C ],
                exclude: [ /node_modules/ ]
            }, {
                include: [ C ],
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [ {
                    loader: require.resolve("ts-loader"),
                    options: {
                        configFile: !!n.existsSync(m.resolve(q, "tsconfig.json")) && m.resolve(q, "tsconfig.json"),
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
                configFile: !!n.existsSync(m.resolve(q, "tsconfig.json")) && m.resolve(q, "tsconfig.json")
            }
        }), _ && new h({
            verbose: !0
        }), new i({
            patterns: [ {
                globOptions: {
                    ignore: [ "**/index.html" ]
                },
                from: m.join(q, "public"),
                toType: "dir",
                to: m.join(q, "dist"),
                filter: function(e) {
                    return console.log("copy-webpack-plugin", e), !0;
                }
            } ]
        }), S && new b.HotModuleReplacementPlugin, _ && new l.GenerateSW({
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
        }), new d({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        }), new u, new f({
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
            template: m.join(q, "public", "index.html")
        }), new g({
            rel: "preload",
            include: "asyncChunks"
        }) ].filter(Boolean),
        optimization: {
            moduleIds: S ? "named" : "natural",
            chunkIds: S ? "named" : "natural",
            usedExports: !0,
            runtimeChunk: "single",
            splitChunks: _ ? {
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
            minimize: _,
            minimizer: [ new p({
                terserOptions: {
                    ecma: 5,
                    parse: {
                        ecma: 8
                    },
                    compress: {
                        warnings: !1,
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
            }), new c({
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
                    parser: a,
                    map: !!O && {
                        inline: !1,
                        annotation: !0
                    }
                }
            }) ]
        }
    };
    function P() {
        return {
            config: !!n.existsSync(m.resolve(q, "postcss.config.js")) && m.resolve(q, "postcss.config.js"),
            plugins: [ require("postcss-flexbugs-fixes"), require("postcss-preset-env")({
                autoprefixer: {
                    flexbox: "no-2009"
                },
                stage: 3
            }), v() ]
        };
    }
    return function(r) {
        if (S) {
            try {
                require("react");
            } catch (e) {
                if ("MODULE_NOT_FOUND" === (null == e ? void 0 : e.code)) return;
                throw e;
            }
            !function(r) {
                var o = require("@next/react-refresh-utils/ReactRefreshWebpackPlugin").default;
                r.entry = [ require.resolve("@next/react-refresh-utils/runtime") ].concat(e(r.entry)), 
                r.plugins = [ new o ].concat(e(r.plugins)), r.module.rules = [ {
                    test: /\.(tsx|ts|js|mjs|jsx)$/,
                    include: [ C ],
                    exclude: [ /node_modules/ ],
                    use: [ require.resolve("@next/react-refresh-utils/loader") ]
                } ].concat(e(r.module.rules));
            }(r);
        }
    }(A), A;
};
//# sourceMappingURL=config.js.map
