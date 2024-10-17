"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("fs"), r = require("path"), t = require("terser-webpack-plugin"), o = require("postcss-normalize"), s = require("merge");

function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var i = n(e), l = n(r), a = n(t), c = n(o), u = n(s);

function p(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
    return o;
}

function d(e, r, t) {
    return (r = function(e) {
        var r = function(e, r) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
                var o = t.call(e, r || "default");
                if ("object" != typeof o) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(e);
        }(e, "string");
        return "symbol" == typeof r ? r : r + "";
    }(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function f(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter((function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        }))), t.push.apply(t, o);
    }
    return t;
}

function m(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? f(Object(t), !0).forEach((function(r) {
            d(e, r, t[r]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach((function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        }));
    }
    return e;
}

function b(e) {
    return function(e) {
        if (Array.isArray(e)) return p(e);
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function(e, r) {
        if (e) {
            if ("string" == typeof e) return p(e, r);
            var t = {}.toString.call(e).slice(8, -1);
            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? p(e, r) : void 0;
        }
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function v() {
    var e;
    try {
        e = require("vue").version;
    } catch (e) {
        if ("MODULE_NOT_FOUND" === (null == e ? void 0 : e.code)) return require.resolve("vue-loader");
        throw e;
    }
    return e.split(".")[0], require.resolve("vue-loader");
}

function g() {
    var e = {
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
    if (i.default.existsSync(l.default.resolve(__dirname, "terser.config.js"))) {
        var r = u.default.recursive(!0, e, require(l.default.resolve(__dirname, "terser.config.js")));
        return new a.default(r);
    }
    return new a.default(e);
}

function h(e, r) {
    return {
        sourceMaps: e,
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
        configFile: !!i.default.existsSync(l.default.resolve(__dirname, "babel.config.js")) && l.default.resolve(__dirname, "babel.config.js"),
        cacheDirectory: !0,
        cacheCompression: r,
        compact: r
    };
}

function y() {
    return {
        config: !!i.default.existsSync(l.default.resolve(__dirname, "postcss.config.js")) && l.default.resolve(__dirname, "postcss.config.js"),
        plugins: [ require("postcss-flexbugs-fixes"), require("postcss-preset-env")({
            autoprefixer: {
                flexbox: "no-2009"
            },
            stage: 3
        }), c.default() ]
    };
}

exports.createconfig = function(e, r) {
    console.log("env:", e, "\n", "argv:", r);
    var t = require("fork-ts-checker-webpack-plugin"), o = require("copy-webpack-plugin"), s = require("workbox-webpack-plugin"), n = require("postcss-safe-parser"), a = require("optimize-css-assets-webpack-plugin"), c = require(v()).VueLoaderPlugin, u = require("mini-css-extract-plugin"), p = require("html-webpack-plugin"), d = require("webpack"), f = require("@vue/preload-webpack-plugin"), j = require("clean-webpack-plugin").CleanWebpackPlugin, x = r, w = x["output-public-path"], q = x.mode;
    process.env.NODE_ENV = "production" === x.mode ? "production" : "development" === x.mode ? "development" : process.env.NODE_ENV;
    var k = Number(x.port) || 1e4 + parseInt(String(1e4 * Math.random()));
    console.log("\nwebpack config filename : ".concat(__filename, "\n")), console.log("\nworking directory : ".concat(process.cwd(), "\n"));
    var O = process.cwd();
    console.log("\nwebpack mode : ".concat(process.env.NODE_ENV, " \n"));
    var _ = process.env.NODE_ENV, S = "development" === _, E = S, P = "production" === _;
    process.env.BABEL_ENV = process.env.NODE_ENV;
    var C = P ? "./" : "/";
    "production" === process.env.NODE_ENV && w && w.length && (console.log("  output-public-path  :  ".concat(w)), 
    console.log("\n"), C = w);
    var N = !!e.WEBPACK_SERVE;
    S && N && console.log("open in browser: http://localhost:" + k);
    var D, A = l.default.join(O), M = {
        stats: {
            children: !0
        },
        target: S ? "web" : "browserslist:" + [ ">0.2%", "not dead", "not op_mini all" ].join(","),
        resolve: {
            extensions: [ ".ts", ".js", ".tsx", ".jsx", ".cjs", ".mjs" ],
            alias: {
                "@": l.default.join(O, "src"),
                "~": l.default.join(O)
            }
        },
        devServer: {
            static: {
                directory: l.default.join(O, "public"),
                watch: !0
            },
            client: {
                overlay: !0
            },
            host: "0.0.0.0",
            compress: !0,
            historyApiFallback: !0,
            hot: !0,
            port: k
        },
        devtool: !!S && "eval-cheap-module-source-map",
        mode: q,
        entry: [ i.default.existsSync(l.default.join(O, "src", "index.tsx")) ? l.default.join(O, "src", "index.tsx") : i.default.existsSync(l.default.join(O, "src", "index.ts")) ? l.default.join(O, "src", "index.ts") : i.default.existsSync(l.default.join(O, "src", "index.jsx")) ? l.default.join(O, "src", "index.jsx") : l.default.join(O, "src", "index.js") ].filter(Boolean),
        output: {
            publicPath: C,
            globalObject: '(typeof WorkerGlobalScope !== "undefined"?\n\nWorkerGlobalScope:\n\ntypeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : ( Function(\'return this\')()))',
            filename: S ? "[name].[fullhash].js" : "[name].[contenthash].js",
            path: l.default.join(O, "dist"),
            chunkFilename: S ? "[name].[fullhash].js" : "[name].[contenthash].js"
        },
        module: {
            strictExportPresence: !0,
            rules: [ {
                test: /\.(cjs|js|mjs|jsx|ts|tsx)$/,
                type: "javascript/auto",
                loader: require.resolve("babel-loader"),
                options: h(E, P),
                include: [ A ],
                exclude: [ /node_modules/ ]
            }, {
                test: /\.(less)$/,
                use: [ S ? {
                    loader: require.resolve("style-loader"),
                    options: {}
                } : {
                    loader: u.loader
                }, {
                    loader: require.resolve("css-loader"),
                    options: {
                        importLoaders: 2,
                        sourceMap: E
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: y(),
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
                loader: require.resolve(v())
            }, {
                test: /\.(css)$/,
                use: [ S ? {
                    loader: require.resolve("style-loader"),
                    options: {}
                } : {
                    loader: u.loader
                }, {
                    loader: require.resolve("css-loader"),
                    options: {
                        importLoaders: 1,
                        sourceMap: E
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: y(),
                        sourceMap: E
                    }
                } ]
            }, {
                test: /\.(sass|scss)$/,
                use: [ S ? {
                    loader: require.resolve("style-loader"),
                    options: {}
                } : {
                    loader: u.loader
                }, {
                    loader: require.resolve("css-loader"),
                    options: {
                        importLoaders: 2,
                        sourceMap: E
                    }
                }, {
                    loader: require.resolve("postcss-loader"),
                    options: {
                        postcssOptions: y(),
                        sourceMap: E
                    }
                }, {
                    loader: require.resolve("fast-sass-loader"),
                    options: {}
                } ]
            }, {
                test: /\.(js|mjs)$/,
                exclude: [ /@babel(?:\/|\\{1,2})runtime/, l.default.resolve(O, "src") ],
                type: "javascript/auto",
                loader: require.resolve("babel-loader"),
                options: {
                    babelrc: !1,
                    configFile: !1,
                    compact: !1,
                    presets: [ P && [ require.resolve("babel-preset-react-app"), {} ], [ require.resolve("babel-preset-react-app/dependencies"), {
                        helpers: !0
                    } ] ].filter(Boolean),
                    cacheDirectory: !0,
                    cacheCompression: P,
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
                    configFile: !!i.default.existsSync(l.default.resolve(O, "babel.config.js")) && l.default.resolve(O, "babel.config.js"),
                    cacheDirectory: !0,
                    cacheCompression: P,
                    compact: P
                },
                include: [ A ],
                exclude: [ /node_modules/ ]
            }, {
                include: [ A ],
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [ {
                    loader: require.resolve("ts-loader"),
                    options: {
                        configFile: !!i.default.existsSync(l.default.resolve(O, "tsconfig.json")) && l.default.resolve(O, "tsconfig.json"),
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
                configFile: !!i.default.existsSync(l.default.resolve(O, "tsconfig.json")) && l.default.resolve(O, "tsconfig.json")
            }
        }), P && new j({
            verbose: !0
        }), new o({
            patterns: [ {
                globOptions: {
                    ignore: [ "**/index.html" ]
                },
                from: l.default.join(O, "public"),
                toType: "dir",
                to: l.default.join(O, "dist"),
                filter: function(e) {
                    return console.log("copy-webpack-plugin", e), !0;
                }
            } ]
        }), S && new d.HotModuleReplacementPlugin, P && new s.GenerateSW({
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
        }), new u({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        }), new c, new p({
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
            template: l.default.join(O, "public", "index.html")
        }), new f({
            rel: "preload",
            include: "asyncChunks"
        }) ].filter(Boolean),
        optimization: {
            moduleIds: S ? "named" : "natural",
            chunkIds: S ? "named" : "natural",
            usedExports: !0,
            runtimeChunk: "single",
            splitChunks: P ? {
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
            minimize: P,
            minimizer: [ g(), new a({
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
                    parser: n,
                    map: !!E && {
                        inline: !1,
                        annotation: !0
                    }
                }
            }) ]
        }
    };
    return function(e, r, t) {
        if (r) {
            try {
                require("react");
            } catch (e) {
                if ("MODULE_NOT_FOUND" === (null == e ? void 0 : e.code)) return;
                throw e;
            }
            !function(e, r) {
                var t = require("@next/react-refresh-utils/dist/ReactRefreshWebpackPlugin").default;
                e.entry = [ require.resolve("@next/react-refresh-utils/dist/runtime") ].concat(b(e.entry)), 
                e.plugins = [ new t ].concat(b(e.plugins)), e.module.rules = [ {
                    test: /\.(tsx|ts|js|mjs|jsx)$/,
                    include: [ r ],
                    exclude: [ /node_modules/ ],
                    use: [ require.resolve("@next/react-refresh-utils/dist/loader") ]
                } ].concat(b(e.module.rules));
            }(e, t);
        }
    }(M, S, A), M.optimization.splitChunks ? M.optimization.splitChunks.cacheGroups = m(m({}, null === (D = M.optimization.splitChunks) || void 0 === D ? void 0 : D.cacheGroups), {}, {
        commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "initial"
        }
    }) : M.optimization.splitChunks = {}, M;
};
//# sourceMappingURL=config.js.map
