#!/usr/bin/env node
"use strict";

var e = require("process"),
    o = require("fs"),
    n = require("path"),
    t = require("child_process");

function r(e) {
    return e && "object" == typeof e && "default" in e
        ? e
        : {
              default: e,
          };
}

var c = r(e),
    l = r(o),
    i = r(n);

function a() {
    a = function (e, o) {
        return new n(e, void 0, o);
    };
    var e = RegExp.prototype,
        o = new WeakMap();
    function n(e, t, r) {
        var c = new RegExp(e, t);
        return o.set(c, r || o.get(e)), s(c, n.prototype);
    }
    function t(e, n) {
        var t = o.get(n);
        return Object.keys(t).reduce(function (o, n) {
            return (o[n] = e[t[n]]), o;
        }, Object.create(null));
    }
    return (
        u(n, RegExp),
        (n.prototype.exec = function (o) {
            var n = e.exec.call(this, o);
            return n && (n.groups = t(n, this)), n;
        }),
        (n.prototype[Symbol.replace] = function (n, r) {
            if ("string" == typeof r) {
                var c = o.get(this);
                return e[Symbol.replace].call(
                    this,
                    n,
                    r.replace(/\$<([^>]+)>/g, function (e, o) {
                        return "$" + c[o];
                    })
                );
            }
            if ("function" == typeof r) {
                var l = this;
                return e[Symbol.replace].call(this, n, function () {
                    var e = arguments;
                    return (
                        "object" != typeof e[e.length - 1] &&
                            (e = [].slice.call(e)).push(t(e, l)),
                        r.apply(this, e)
                    );
                });
            }
            return e[Symbol.replace].call(this, n, r);
        }),
        a.apply(this, arguments)
    );
}

function u(e, o) {
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

function f(e, o) {
    return (
        (function (e) {
            if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, o) {
            var n =
                e &&
                (("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"]);
            if (null == n) return;
            var t,
                r,
                c = [],
                l = !0,
                i = !1;
            try {
                for (
                    n = n.call(e);
                    !(l = (t = n.next()).done) &&
                    (c.push(t.value), !o || c.length !== o);
                    l = !0
                );
            } catch (e) {
                (i = !0), (r = e);
            } finally {
                try {
                    l || null == n.return || n.return();
                } finally {
                    if (i) throw r;
                }
            }
            return c;
        })(e, o) ||
        (function (e, o) {
            if (!e) return;
            if ("string" == typeof e) return p(e, o);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
                return p(e, o);
        })(e, o) ||
        (function () {
            throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
        })()
    );
}

function p(e, o) {
    (null == o || o > e.length) && (o = e.length);
    for (var n = 0, t = new Array(o); n < o; n++) t[n] = e[n];
    return t;
}

var d = c.default.cwd();

function g(e, o) {
    o.forEach(function (o, n) {
        l.default.existsSync(o) ||
            (console.log("inputfile  not exsited! ".concat(o, "\n")),
            console.log("initialize inputfile from ".concat(e[n], "\n")),
            ["public", "src"]
                .map(function (e) {
                    return i.default.resolve(d, e);
                })
                .forEach(function (e) {
                    return (function (e) {
                        l.default.existsSync(e) ||
                            (console.log(
                                "\u6240\u9700\u7684\u76ee\u5f55\u4e0d\u5b58\u5728,\u521b\u5efa\u76ee\u5f55",
                                e
                            ),
                            console.log("\n"),
                            l.default.mkdirSync(e));
                    })(e);
                }),
            l.default.copyFileSync(e[n], o));
    });
}

function v(e) {
    return i.default.join(
        __dirname,
        "../",
        "node_modules",
        ".bin",
        e.trim() + ("win32" === c.default.platform ? ".cmd" : "")
    );
}

function b(e, o) {
    console.log("\n"), console.log([e, o]);
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

var y = require("path"),
    m = process.cwd(),
    h = ["public/index.html", "src/index.js", "public/favicon.ico"],
    w = h.map(function (e) {
        return y.resolve(__dirname, "../", "release", e);
    }),
    x = h.map(function (e) {
        return y.resolve(m, e);
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

var E,
    _ = c.default.argv.slice(1),
    k = _.includes("start") ? "start" : _.includes("build") ? "build" : void 0,
    j =
        ((E = {}),
        _.filter(function (e) {
            return e.startsWith("--");
        })
            .map(function (e) {
                return a(/\x2D\x2D(.+?)=(.+)/g, {
                    key: 1,
                    value: 2,
                }).exec(e);
            })
            .forEach(function (e) {
                var o,
                    n,
                    t,
                    r = null === (o = e) || void 0 === o ? void 0 : o.groups,
                    c = null === (n = r) || void 0 === n ? void 0 : n.key,
                    l = null === (t = r) || void 0 === t ? void 0 : t.value;
                c && l && (E[c] = l);
            }),
        E);

console.log("\u89e3\u6790\u7684\u53c2\u6570:"),
    console.log(JSON.stringify(j, null, 4)),
    (function (e, o) {
        var n,
            t,
            r = o.config,
            l = require.resolve(i.default.resolve(__dirname, "../")),
            a = r ? i.default.resolve(r) : l,
            u = o["output-public-path"],
            s = o.mode;
        if ("start" === e || "development" === s)
            (c.default.env.NODE_ENV = "development"),
                g(w, x),
                (n = v("webpack")),
                (t = [
                    "serve",
                    "--config",
                    a,
                    "--mode=" + c.default.env.NODE_ENV,
                ]),
                Object.entries(o).forEach(function (e) {
                    var o = f(e, 2),
                        n = o[0],
                        r = o[1];
                    t.push("--".concat(n, "=").concat(r));
                }),
                console.log("\n"),
                console.log(
                    "\u5f00\u53d1\u6a21\u5f0f\n\u542f\u52a8 webpack-dev-server"
                ),
                console.log("\n"),
                b(n, t);
        else if ("build" === e || "production" === s) {
            var p, d;
            console.log("\n"),
                console.log("\u751f\u4ea7\u6a21\u5f0f\n\u542f\u52a8 webpack"),
                console.log("\n"),
                (c.default.env.NODE_ENV = "production"),
                g(w, x),
                (p = v("webpack ")),
                (d = ["--config", a, "--mode=" + c.default.env.NODE_ENV]),
                Object.entries(o).forEach(function (e) {
                    var o = f(e, 2),
                        n = o[0],
                        t = o[1];
                    d.push("--".concat(n, "=").concat(t));
                }),
                u &&
                    u.length &&
                    (d.push("--output-public-path=" + u), console.log("\n")),
                b(p, d);
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
    })(k, j);
//# sourceMappingURL=index.js.map
