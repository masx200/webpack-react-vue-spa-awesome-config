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

var l = r(e),
    c = r(o),
    i = r(n);

function a() {
    a = function (e, o) {
        return new n(e, void 0, o);
    };
    var e = RegExp.prototype,
        o = new WeakMap();
    function n(e, t, r) {
        var l = new RegExp(e, t);
        return o.set(l, r || o.get(e)), s(l, n.prototype);
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
                var l = o.get(this);
                return e[Symbol.replace].call(
                    this,
                    n,
                    r.replace(/\$<([^>]+)>/g, function (e, o) {
                        return "$" + l[o];
                    })
                );
            }
            if ("function" == typeof r) {
                var c = this;
                return e[Symbol.replace].call(this, n, function () {
                    var e = arguments;
                    return (
                        "object" != typeof e[e.length - 1] &&
                            (e = [].slice.call(e)).push(t(e, c)),
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
                l = [],
                c = !0,
                i = !1;
            try {
                for (
                    n = n.call(e);
                    !(c = (t = n.next()).done) &&
                    (l.push(t.value), !o || l.length !== o);
                    c = !0
                );
            } catch (e) {
                (i = !0), (r = e);
            } finally {
                try {
                    c || null == n.return || n.return();
                } finally {
                    if (i) throw r;
                }
            }
            return l;
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

function d(e, o) {
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
                l.default.exit(e);
        });
}

var g = l.default.cwd();

function v(e, o) {
    o.forEach(function (o, n) {
        c.default.existsSync(o) ||
            (console.log("inputfile  not exsited! ".concat(o, "\n")),
            console.log("initialize inputfile from ".concat(e[n], "\n")),
            ["public", "src"]
                .map(function (e) {
                    return i.default.resolve(g, e);
                })
                .forEach(function (e) {
                    return (function (e) {
                        c.default.existsSync(e) ||
                            (console.log(
                                "\u6240\u9700\u7684\u76ee\u5f55\u4e0d\u5b58\u5728,\u521b\u5efa\u76ee\u5f55",
                                e
                            ),
                            console.log("\n"),
                            c.default.mkdirSync(e));
                    })(e);
                }),
            c.default.copyFileSync(e[n], o));
    });
}

function b(e) {
    return i.default.join(
        __dirname,
        "../",
        "node_modules",
        ".bin",
        e.trim() + ("win32" === l.default.platform ? ".cmd" : "")
    );
}

var m = require("path"),
    y = l.default.cwd(),
    h = ["public/index.html", "src/index.js", "public/favicon.ico"],
    w = h.map(function (e) {
        return m.resolve(__dirname, "../", "release", e);
    }),
    x = h.map(function (e) {
        return m.resolve(y, e);
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
    console.log("\nworking directory : ".concat(l.default.cwd(), "\n")),
    console.log("\ncommand filename : ".concat(__filename, "\n"));

var k,
    E = l.default.argv.slice(1),
    _ = E.includes("start") ? "start" : E.includes("build") ? "build" : void 0,
    S =
        ((k = {}),
        E.filter(function (e) {
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
                    l = null === (n = r) || void 0 === n ? void 0 : n.key,
                    c = null === (t = r) || void 0 === t ? void 0 : t.value;
                l && c && (k[l] = c);
            }),
        k);

console.log("\u89e3\u6790\u7684\u53c2\u6570:"),
    console.log(JSON.stringify(S, null, 4)),
    (function (e, o) {
        var n,
            t,
            r = o.config,
            a = require.resolve(i.default.resolve(__dirname, "../")),
            u = r ? i.default.resolve(r) : a,
            s = o["output-public-path"],
            p = o.mode;
        if ("start" === e || "development" === p)
            (l.default.env.NODE_ENV = "development"),
                v(w, x),
                (n = b("webpack")),
                (t = [
                    "serve",
                    "--config",
                    u,
                    "--mode=" + l.default.env.NODE_ENV,
                ]),
                c.default.existsSync(n) ||
                    (t.unshift("webpack"),
                    (n =
                        "npx" +
                        ("win32" === l.default.platform ? ".cmd" : ""))),
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
                d(n, t);
        else if ("build" === e || "production" === p) {
            var g, m;
            console.log("\n"),
                console.log("\u751f\u4ea7\u6a21\u5f0f\n\u542f\u52a8 webpack"),
                console.log("\n"),
                (l.default.env.NODE_ENV = "production"),
                v(w, x),
                (g = b("webpack")),
                (m = ["--config", u, "--mode=" + l.default.env.NODE_ENV]),
                c.default.existsSync(g) ||
                    (m.unshift("webpack"),
                    (g =
                        "npx" +
                        ("win32" === l.default.platform ? ".cmd" : ""))),
                Object.entries(o).forEach(function (e) {
                    var o = f(e, 2),
                        n = o[0],
                        t = o[1];
                    m.push("--".concat(n, "=").concat(t));
                }),
                s &&
                    s.length &&
                    (m.push("--output-public-path=" + s), console.log("\n")),
                d(g, m);
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
                l.default.exit(1);
    })(_, S);
//# sourceMappingURL=index.js.map
