#!/usr/bin/env node
"use strict";

var e = require("process"),
    o = require("fs"),
    n = require("path"),
    t = require("child_process");

function l(e) {
    return e && "object" == typeof e && "default" in e
        ? e
        : {
              default: e,
          };
}

var c = l(e),
    r = l(o),
    i = l(n);

function u() {
    u = function (e, o) {
        return new n(e, void 0, o);
    };
    var e = RegExp.prototype,
        o = new WeakMap();
    function n(e, t, l) {
        var c = new RegExp(e, t);
        return o.set(c, l || o.get(e)), s(c, n.prototype);
    }
    function t(e, n) {
        var t = o.get(n);
        return Object.keys(t).reduce(function (o, n) {
            return (o[n] = e[t[n]]), o;
        }, Object.create(null));
    }
    return (
        a(n, RegExp),
        (n.prototype.exec = function (o) {
            var n = e.exec.call(this, o);
            return n && (n.groups = t(n, this)), n;
        }),
        (n.prototype[Symbol.replace] = function (n, l) {
            if ("string" == typeof l) {
                var c = o.get(this);
                return e[Symbol.replace].call(
                    this,
                    n,
                    l.replace(/\$<([^>]+)>/g, function (e, o) {
                        return "$" + c[o];
                    })
                );
            }
            if ("function" == typeof l) {
                var r = this;
                return e[Symbol.replace].call(this, n, function () {
                    var e = arguments;
                    return (
                        "object" != typeof e[e.length - 1] &&
                            (e = [].slice.call(e)).push(t(e, r)),
                        l.apply(this, e)
                    );
                });
            }
            return e[Symbol.replace].call(this, n, l);
        }),
        u.apply(this, arguments)
    );
}

function a(e, o) {
    if ("function" != typeof o && null !== o)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(o && o.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0,
        },
    })),
        o && s(e, o);
}

function s(e, o) {
    return (s =
        Object.setPrototypeOf ||
        function (e, o) {
            return (e.__proto__ = o), e;
        })(e, o);
}

var p = c.default.cwd();

function f(e, o) {
    o.forEach(function (o, n) {
        r.default.existsSync(o) ||
            (console.log("inputfile  not exsited! ".concat(o, "\n")),
            console.log("initialize inputfile from ".concat(e[n], "\n")),
            ["public", "src"]
                .map(function (e) {
                    return i.default.resolve(p, e);
                })
                .forEach(function (e) {
                    return (function (e) {
                        r.default.existsSync(e) ||
                            (console.log(
                                "\u6240\u9700\u7684\u76ee\u5f55\u4e0d\u5b58\u5728,\u521b\u5efa\u76ee\u5f55",
                                e
                            ),
                            console.log("\n"),
                            r.default.mkdirSync(e));
                    })(e);
                }),
            r.default.copyFileSync(e[n], o));
    });
}

function d(e) {
    return i.default.join(
        __dirname,
        "../",
        "node_modules",
        ".bin",
        e.trim() + ("win32" === c.default.platform ? ".cmd" : "")
    );
}

function g(e, o) {
    console.log("\n");
    var n = t.spawn(e, o, {
        stdio: ["pipe", "pipe", "pipe"],
    });
    n.stdout.on("data", function (e) {
        console.log(
            " "
                .concat(e)
                .split("\n")
                .filter(function (e) {
                    return "" !== e;
                })
                .join("\n\n")
        ),
            console.log("\n");
    }),
        n.stderr.on("data", function (e) {
            console.error(
                " "
                    .concat(e)
                    .split("\n")
                    .filter(function (e) {
                        return "" !== e;
                    })
                    .join("\n\n")
            ),
                console.log("\n");
        }),
        n.on("close", function (e) {
            console.log("child process exited with code ".concat(e)),
                process.exit(e);
        });
}

var v = require("path"),
    b = process.cwd(),
    m = ["public/index.html", "src/index.js", "public/favicon.ico"],
    h = m.map(function (e) {
        return v.resolve(__dirname, "../", "release", e);
    }),
    y = m.map(function (e) {
        return v.resolve(b, e);
    });

console.log("\n"),
    console.log("webpack-react-vue-spa-awesome-config"),
    console.log("\n"),
    console.log(
        "\u6781\u901f\u3001\u96f6\u914d\u7f6e\u7684 web \u5e94\u7528\u6253\u5305\u5de5\u5177, \u540c\u65f6\u652f\u6301 react \u548c vue \u7684\u5355\u9875\u9762\u5e94\u7528,\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u652f\u6301,\u57fa\u4e8ewebpack "
    ),
    console.log("\n"),
    console.log(
        "Fast, zero-configuration web application packaging tool that supports both single-page applications for react and vue, out-of-the-box support"
    ),
    console.log("\n"),
    console.log("\nworking directory : ".concat(process.cwd(), "\n")),
    console.log("\ncommand filename : ".concat(__filename, "\n"));

var w,
    x = c.default.argv.slice(1),
    _ = x.includes("start") ? "start" : x.includes("build") ? "build" : void 0,
    k =
        ((w = {}),
        x
            .filter(function (e) {
                return e.startsWith("--");
            })
            .map(function (e) {
                return u(/\x2D\x2D(.+?)=(.+)/g, {
                    key: 1,
                    value: 2,
                }).exec(e);
            })
            .forEach(function (e) {
                var o,
                    n,
                    t,
                    l = null === (o = e) || void 0 === o ? void 0 : o.groups,
                    c = null === (n = l) || void 0 === n ? void 0 : n.key,
                    r = null === (t = l) || void 0 === t ? void 0 : t.value;
                c && r && (w[c] = r);
            }),
        w);

console.log("\u89e3\u6790\u7684\u53c2\u6570:"),
    console.log(JSON.stringify(k, null, 4)),
    (function (e, o) {
        var n,
            t,
            l = o.config,
            r = o["react-hot-loader"],
            u = require.resolve(i.default.resolve(__dirname, "../")),
            a = l ? i.default.resolve(l) : u,
            s = o["output-public-path"],
            p = o.mode;
        if ("start" === e || "development" === p)
            (c.default.env.NODE_ENV = "development"),
                f(h, y),
                (n = d("webpack")),
                (t = [
                    "serve",
                    "--config",
                    a,
                    "--mode=" + c.default.env.NODE_ENV,
                ]),
                r && (t.push("--react-hot-loader=" + r), console.log("\n")),
                console.log("\n"),
                console.log(
                    "\u5f00\u53d1\u6a21\u5f0f\n\u542f\u52a8 webpack-dev-server"
                ),
                console.log("\n"),
                g(n, t);
        else if ("build" === e || "production" === p) {
            var v, b;
            console.log("\n"),
                console.log("\u751f\u4ea7\u6a21\u5f0f\n\u542f\u52a8 webpack"),
                console.log("\n"),
                (c.default.env.NODE_ENV = "production"),
                f(h, y),
                (v = d("webpack ")),
                (b = ["--config", a, "--mode=" + c.default.env.NODE_ENV]),
                s &&
                    s.length &&
                    (b.push("--output-public-path=" + s), console.log("\n")),
                g(v, b);
        } else
            console.log("\n"),
                console.log("usage:"),
                console.log("\n"),
                console.log(
                    "\u5f00\u53d1\u6a21\u5f0f\n\u542f\u52a8 webpack-dev-server"
                ),
                console.log("\n"),
                console.log(
                    "webpack-react-vue-spa-awesome-config start --mode=development"
                ),
                console.log("\n"),
                console.log(
                    "\u751f\u4ea7\u6a21\u5f0f\n    \u542f\u52a8 webpack"
                ),
                console.log("\n"),
                console.log(
                    "webpack-react-vue-spa-awesome-config build --mode=production"
                ),
                console.log("\n"),
                c.default.exit(1);
    })(_, k);
//# sourceMappingURL=index.js.map
