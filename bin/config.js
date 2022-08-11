"use strict";

function e(e, r) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        r && (s = s.filter((function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        }))), o.push.apply(o, s);
    }
    return o;
}

function r(r) {
    for (var s = 1; s < arguments.length; s++) {
        var t = null != arguments[s] ? arguments[s] : {};
        s % 2 ? e(Object(t), !0).forEach((function(e) {
            o(r, e, t[e]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : e(Object(t)).forEach((function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        }));
    }
    return r;
}

function o(e, r, o) {
    return r in e ? Object.defineProperty(e, r, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = o, e;
}

function s(e) {
    return function(e) {
        if (Array.isArray(e)) return t(e);
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function(e, r) {
        if (!e) return;
        if ("string" == typeof e) return t(e, r);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === o && e.constructor && (o = e.constructor.name);
        if ("Map" === o || "Set" === o) return Array.from(e);
        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return t(e, r);
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function t(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var o = 0, s = new Array(r); o < r; o++) s[o] = e[o];
    return s;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createconfig = function(e, o) {
    function t() {
        var e;
        try {
            e = require("vue").version;
        } catch (e) {
            if ("MODULE_NOT_FOUND" === (null == e ? void 0 : e.code)) return require.resolve("vue-loader");
            throw e;
        }
        return e.split(".")[0], require.resolve("vue-loader");
    }
    console.log("env:", e, "\n", "argv:", o);
    var n = require("fork-ts-checker-webpack-plugin"), i = require("fs"), l = require("copy-webpack-plugin"), a = require("workbox-webpack-plugin"), c = require("postcss-safe-parser"), p = require("optimize-css-assets-webpack-plugin"), u = require("terser-webpack-plugin"), d = require(t()).VueLoaderPlugin, m = require("mini-css-extract-plugin"), b = require("path"), f = require("html-webpack-plugin"), v = require("webpack"), g = require("postcss-normalize"), h = require("@vue/preload-webpack-plugin"), y = require("clean-webpack-plugin").CleanWebpackPlugin, j = o, x = j["output-public-path"], w = j.mode;
    process.env.NODE_ENV = "production" === j.mode ? "production" : "development" === j.mode ? "development" : process.env.NODE_ENV;
    var q = Number(j.port) || 1e4 + parseInt(String(1e4 * Math.random()));
    console.log("\nwebpack config filename : ".concat(__filename, "\n")), console.log("\nworking directory : ".concat(process.cwd(), "\n"));
    var k = process.cwd();
    console.log("\nwebpack mode : ".concat(process.env.NODE_ENV, " \n"));
    var O = process.env.NODE_ENV, S = "development" === O, E = S, _ = "production" === O;
    process.env.BABEL_ENV = process.env.NODE_ENV;
    var P = _ ? "./" : "/";
    "production" === process.env.NODE_ENV && x && x.length && (console.log("  output-public-path  :  ".concat(x)), 
    console.log("\n"), P = x);
    var C = !!e.WEBPACK_SERVE;
    S && C && console.log("open in browser: http://localhost:" + q);
    var N, D = b.join(k), A = {
        stats: {
            children: !0
        },
        target: S ? "web" : "browserslist:" + [ ">0.2%", "not dead", "not op_mini all" ].join(","),
        resolve: {
            extensions: [ ".ts", ".js", ".tsx", ".jsx", ".cjs", ".mjs" ],
            alias: {
                "@": b.join(k, "src"),
                "~": b.join(k)
            }
        },
        devServer: {
            static: {
                directory: b.join(k, "public"),
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
        devtool: !!S && "eval-cheap-module-source-map",
        mode: w,
        entry: [ i.existsSync(b.join(k, "src", "index.tsx")) ? b.join(k, "src", "index.tsx") : i.existsSync(b.join(k, "src", "index.ts")) ? b.join(k, "src", "index.ts") : i.existsSync(b.join(k, "src", "index.jsx")) ? b.join(k, "src", "index.jsx") : b.join(k, "src", "index.js") ].filter(Boolean),
        output: {
            publicPath: P,
            globalObject: '(typeof WorkerGlobalScope !== "undefined"?\n\nWorkerGlobalScope:\n\ntypeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : ( Function(\'return this\')()))',
            filename: S ? "[name].[fullhash].js" : "[name].[contenthash].js",
            path: b.join(k, "dist"),
            chunkFilename: S ? "[name].[fullhash].js" : "[name].[contenthash].js"
        },
        module: {
            strictExportPresence: !0,
            rules: [ {
                test: /\.(cjs|js|mjs|jsx|ts|tsx)$/,
                type: "javascript/auto",
                loader: require.resolve("babel-loader"),
                options: {
                    sourceMaps: E,
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
                    configFile: !!i.existsSync(b.resolve(k, "babel.config.js")) && b.resolve(k, "babel.config.js"),
                    cacheDirectory: !0,
                    cacheCompression: _,
                    compact: _
                },
                include: [ D ],
                exclude: [ /node_modules/ ]
            }, {
                test: /\.(less)$/,
                use: [ S ? {
                    loader: require.resolve("style-loader"),
                    options: {}
                } : {
                    loader: m.loader
                }, {
                    loader: require.resolve("css-loader"),
                    options: {
                        importLoaders: 2,
                        sourceMap: E
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: M(),
                        sourceMap: E
                    }
                }, {
                    loader: require.resolve("less-loader"),
                    options: {
                        sourceMap: E
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
                loader: require.resolve(t())
            }, {
                test: /\.(css)$/,
                use: [ S ? {
                    loader: require.resolve("style-loader"),
                    options: {}
                } : {
                    loader: m.loader
                }, {
                    loader: require.resolve("css-loader"),
                    options: {
                        importLoaders: 1,
                        sourceMap: E
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: M(),
                        sourceMap: E
                    }
                } ]
            }, {
                test: /\.(sass|scss)$/,
                use: [ S ? {
                    loader: require.resolve("style-loader"),
                    options: {}
                } : {
                    loader: m.loader
                }, {
                    loader: require.resolve("css-loader"),
                    options: {
                        importLoaders: 2,
                        sourceMap: E
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: M(),
                        sourceMap: E
                    }
                }, {
                    loader: require.resolve("fast-sass-loader"),
                    options: {}
                } ]
            }, {
                test: /\.(js|mjs)$/,
                exclude: [ /@babel(?:\/|\\{1,2})runtime/, b.resolve(k, "src") ],
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
                    sourceMaps: E
                },
                include: [ /node_modules/ ]
            }, {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                type: "javascript/auto",
                loader: require.resolve("babel-loader"),
                options: {
                    sourceMaps: E,
                    plugins: [].filter(Boolean),
                    presets: [ [ "@babel/preset-react", {
                        runtime: "automatic"
                    } ] ].filter(Boolean),
                    babelrc: !1,
                    configFile: !!i.existsSync(b.resolve(k, "babel.config.js")) && b.resolve(k, "babel.config.js"),
                    cacheDirectory: !0,
                    cacheCompression: _,
                    compact: _
                },
                include: [ D ],
                exclude: [ /node_modules/ ]
            }, {
                include: [ D ],
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [ {
                    loader: require.resolve("ts-loader"),
                    options: {
                        configFile: !!i.existsSync(b.resolve(k, "tsconfig.json")) && b.resolve(k, "tsconfig.json"),
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
        plugins: [ new n({
            typescript: {
                configOverwrite: {
                    compilerOptions: {
                        skipLibCheck: !0,
                        strict: !0
                    },
                    include: [ "src" ]
                },
                configFile: !!i.existsSync(b.resolve(k, "tsconfig.json")) && b.resolve(k, "tsconfig.json")
            }
        }), _ && new y({
            verbose: !0
        }), new l({
            patterns: [ {
                globOptions: {
                    ignore: [ "**/index.html" ]
                },
                from: b.join(k, "public"),
                toType: "dir",
                to: b.join(k, "dist"),
                filter: function(e) {
                    return console.log("copy-webpack-plugin", e), !0;
                }
            } ]
        }), S && new v.HotModuleReplacementPlugin, _ && new a.GenerateSW({
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
        }), new m({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        }), new d, new f({
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
            template: b.join(k, "public", "index.html")
        }), new h({
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
            minimizer: [ new u({
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
            }), new p({
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
                    parser: c,
                    map: !!E && {
                        inline: !1,
                        annotation: !0
                    }
                }
            }) ]
        }
    };
    function M() {
        return {
            config: !!i.existsSync(b.resolve(k, "postcss.config.js")) && b.resolve(k, "postcss.config.js"),
            plugins: [ require("postcss-flexbugs-fixes"), require("postcss-preset-env")({
                autoprefixer: {
                    flexbox: "no-2009"
                },
                stage: 3
            }), g() ]
        };
    }
    return function(e) {
        if (S) {
            try {
                require("react");
            } catch (e) {
                if ("MODULE_NOT_FOUND" === (null == e ? void 0 : e.code)) return;
                throw e;
            }
            !function(e) {
                var r = require("@next/react-refresh-utils/ReactRefreshWebpackPlugin").default;
                e.entry = [ require.resolve("@next/react-refresh-utils/runtime") ].concat(s(e.entry)), 
                e.plugins = [ new r ].concat(s(e.plugins)), e.module.rules = [ {
                    test: /\.(tsx|ts|js|mjs|jsx)$/,
                    include: [ D ],
                    exclude: [ /node_modules/ ],
                    use: [ require.resolve("@next/react-refresh-utils/loader") ]
                } ].concat(s(e.module.rules));
            }(e);
        }
    }(A), A.optimization.splitChunks ? A.optimization.splitChunks.cacheGroups = r(r({}, null === (N = A.optimization.splitChunks) || void 0 === N ? void 0 : N.cacheGroups), {}, {
        commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "initial"
        }
    }) : A.optimization.splitChunks = {}, A;
};
//# sourceMappingURL=config.js.map
