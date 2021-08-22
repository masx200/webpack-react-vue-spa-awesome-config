"use strict";

function e(e) {
    return function(e) {
        if (Array.isArray(e)) return r(e);
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function(e, s) {
        if (!e) return;
        if ("string" == typeof e) return r(e, s);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === o && e.constructor && (o = e.constructor.name);
        if ("Map" === o || "Set" === o) return Array.from(e);
        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return r(e, s);
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function r(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var s = 0, o = new Array(r); s < r; s++) o[s] = e[s];
    return o;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createconfig = function(r, s) {
    function o() {
        var e;
        try {
            e = require("vue").version;
        } catch (e) {
            if ("MODULE_NOT_FOUND" === (null == e ? void 0 : e.code)) return require.resolve("vue-loader");
            throw e;
        }
        return "3" === e.split(".")[0] ? require.resolve("vue-loader-16") : require.resolve("vue-loader");
    }
    console.log("env:", r, "\n", "argv:", s);
    var t = require("fork-ts-checker-webpack-plugin"), n = require("fs"), i = require("copy-webpack-plugin"), l = require("workbox-webpack-plugin"), a = require("postcss-safe-parser"), c = require("optimize-css-assets-webpack-plugin"), p = require("terser-webpack-plugin"), u = require(o()).VueLoaderPlugin, d = require("mini-css-extract-plugin"), m = require("path"), b = require("html-webpack-plugin"), f = require("webpack"), v = require("postcss-normalize"), g = require("@vue/preload-webpack-plugin"), h = require("clean-webpack-plugin").CleanWebpackPlugin, j = s, x = j["output-public-path"], y = j.mode;
    process.env.NODE_ENV = "production" === j.mode ? "production" : "development" === j.mode ? "development" : process.env.NODE_ENV;
    var q = Number(j.port) || 1e4 + parseInt(String(1e4 * Math.random()));
    console.log("\nwebpack config filename : ".concat(__filename, "\n")), console.log("\nworking directory : ".concat(process.cwd(), "\n"));
    var w = process.cwd();
    console.log("\nwebpack mode : ".concat(process.env.NODE_ENV, " \n"));
    var k = process.env.NODE_ENV, S = "development" === k, O = S, _ = "production" === k;
    process.env.BABEL_ENV = process.env.NODE_ENV;
    var E = _ ? "./" : "/";
    "production" === process.env.NODE_ENV && x && x.length && (console.log("  output-public-path  :  ".concat(x)), 
    console.log("\n"), E = x);
    var $ = !!r.WEBPACK_SERVE;
    S && $ && console.log("open in browser: http://localhost:" + q);
    var N = m.join(w, "src"), C = {
        stats: {
            children: !0
        },
        target: S ? "web" : "browserslist:" + [ ">0.2%", "not dead", "not op_mini all" ].join(","),
        resolve: {
            extensions: [ ".ts", ".js", ".tsx", ".jsx", ".cjs", ".mjs" ],
            alias: {
                "@": m.join(w, "src")
            }
        },
        devServer: {
            overlay: !0,
            host: "0.0.0.0",
            compress: !0,
            historyApiFallback: !0,
            contentBase: m.resolve(w, "./public"),
            hot: !0,
            port: q,
            inline: !0,
            watchContentBase: !0
        },
        devtool: !!S && "eval-cheap-module-source-map",
        mode: y,
        entry: [ n.existsSync(m.join(w, "src", "index.tsx")) ? m.join(w, "src", "index.tsx") : n.existsSync(m.join(w, "src", "index.ts")) ? m.join(w, "src", "index.ts") : n.existsSync(m.join(w, "src", "index.jsx")) ? m.join(w, "src", "index.jsx") : m.join(w, "src", "index.js") ].filter(Boolean),
        output: {
            publicPath: E,
            globalObject: '(typeof WorkerGlobalScope !== "undefined"?\n\nWorkerGlobalScope:\n\ntypeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : ( Function(\'return this\')()))',
            filename: S ? "[name].[fullhash].js" : "[name].[contenthash].js",
            path: m.join(w, "dist"),
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
                    configFile: !!n.existsSync(m.resolve(w, "babel.config.js")) && m.resolve(w, "babel.config.js"),
                    cacheDirectory: !0,
                    cacheCompression: _,
                    compact: _
                },
                include: [ N ],
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
                        sourceMap: O
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: A(),
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
                loader: require.resolve(o())
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
                        sourceMap: O
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: A(),
                        sourceMap: O
                    }
                }, {
                    loader: require.resolve("fast-sass-loader"),
                    options: {}
                } ]
            }, {
                oneOf: [ {
                    test: [ /\.(png|jpg|jpeg|gif|webp|ico|bmp|svg)$/i, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/ ],
                    loader: require.resolve("url-loader"),
                    options: {
                        limit: 1e4,
                        name: S ? "[path][name].[ext]" : "[name].[contenthash].[ext]"
                    }
                }, {
                    loader: require.resolve("file-loader"),
                    exclude: [ /\.vue$/, /\.(js|mjs|jsx|ts|tsx|cjs)$/, /\.html$/, /\.json$/, /\.(css|scss|sass|less)$/ ],
                    options: {
                        name: S ? "[path][name].[ext]" : "[name].[contenthash].[ext]"
                    }
                } ]
            }, {
                test: /\.(js|mjs)$/,
                exclude: [ /@babel(?:\/|\\{1,2})runtime/, m.resolve(w, "src") ],
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
                    configFile: !!n.existsSync(m.resolve(w, "babel.config.js")) && m.resolve(w, "babel.config.js"),
                    cacheDirectory: !0,
                    cacheCompression: _,
                    compact: _
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
                        configFile: !!n.existsSync(m.resolve(w, "tsconfig.json")) && m.resolve(w, "tsconfig.json"),
                        compilerOptions: {
                            sourceMap: !0,
                            strict: !0
                        },
                        transpileOnly: !0,
                        appendTsSuffixTo: [ /\.vue$/ ]
                    }
                } ]
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
                configFile: !!n.existsSync(m.resolve(w, "tsconfig.json")) && m.resolve(w, "tsconfig.json")
            }
        }), _ && new h({
            verbose: !0
        }), new i({
            patterns: [ {
                globOptions: {
                    ignore: [ "**/index.html" ]
                },
                from: m.join(w, "public"),
                toType: "dir",
                to: m.join(w, "dist"),
                filter: function(e) {
                    return console.log("copy-webpack-plugin", e), !0;
                }
            } ]
        }), S && new f.HotModuleReplacementPlugin, _ && new l.GenerateSW({
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
        }), new u, new b({
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
            template: m.join(w, "public", "index.html")
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
    function A() {
        return {
            config: !!n.existsSync(m.resolve(w, "postcss.config.js")) && m.resolve(w, "postcss.config.js"),
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
                var s = require("@next/react-refresh-utils/ReactRefreshWebpackPlugin").default;
                r.entry = [ require.resolve("@next/react-refresh-utils/runtime") ].concat(e(r.entry)), 
                r.plugins = [ new s ].concat(e(r.plugins)), r.module.rules = [ {
                    test: /\.(tsx|ts|js|mjs|jsx)$/,
                    include: [ N ],
                    exclude: [ /node_modules/ ],
                    use: [ require.resolve("@next/react-refresh-utils/loader") ]
                } ].concat(e(r.module.rules));
            }(r);
        }
    }(C), C;
};
//# sourceMappingURL=config.js.map
