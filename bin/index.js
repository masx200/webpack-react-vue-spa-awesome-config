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

function a(e) {
    return (a = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}

function s(e, o) {
    return (s =
        Object.setPrototypeOf ||
        function (e, o) {
            return (e.__proto__ = o), e;
        })(e, o);
}

function p() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return (
            Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
            ),
            !0
        );
    } catch (e) {
        return !1;
    }
}

function f(e, o, n) {
    return (f = p()
        ? Reflect.construct
        : function (e, o, n) {
              var t = [null];
              t.push.apply(t, o);
              var r = new (Function.bind.apply(e, t))();
              return n && s(r, n.prototype), r;
          }).apply(null, arguments);
}

function d(e) {
    var o = "function" == typeof Map ? new Map() : void 0;
    return (d = function (e) {
        if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
            return e;
        var n;
        if ("function" != typeof e)
            throw new TypeError(
                "Super expression must either be null or a function"
            );
        if (void 0 !== o) {
            if (o.has(e)) return o.get(e);
            o.set(e, t);
        }
        function t() {
            return f(e, arguments, a(this).constructor);
        }
        return (
            (t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                },
            })),
            s(t, e)
        );
    })(e);
}

function g(e, o) {
    g = function (e, o) {
        return new c(e, void 0, o);
    };
    var n = d(RegExp),
        t = RegExp.prototype,
        r = new WeakMap();
    function c(e, o, t) {
        var c = n.call(this, e, o);
        return r.set(c, t || r.get(e)), c;
    }
    function l(e, o) {
        var n = r.get(o);
        return Object.keys(n).reduce(function (o, t) {
            return (o[t] = e[n[t]]), o;
        }, Object.create(null));
    }
    return (
        u(c, n),
        (c.prototype.exec = function (e) {
            var o = t.exec.call(this, e);
            return o && (o.groups = l(o, this)), o;
        }),
        (c.prototype[Symbol.replace] = function (e, o) {
            if ("string" == typeof o) {
                var n = r.get(this);
                return t[Symbol.replace].call(
                    this,
                    e,
                    o.replace(/\$<([^>]+)>/g, function (e, o) {
                        return "$" + n[o];
                    })
                );
            }
            if ("function" == typeof o) {
                var c = this;
                return t[Symbol.replace].call(this, e, function () {
                    var e = [];
                    return (
                        e.push.apply(e, arguments),
                        "object" != typeof e[e.length - 1] && e.push(l(e, c)),
                        o.apply(this, e)
                    );
                });
            }
            return t[Symbol.replace].call(this, e, o);
        }),
        g.apply(this, arguments)
    );
}

var v = c.default.cwd();

function b(e, o) {
    o.forEach(function (o, n) {
        l.default.existsSync(o) ||
            (console.log("inputfile  not exsited! ".concat(o, "\n")),
            console.log("initialize inputfile from ".concat(e[n], "\n")),
            ["public", "src"]
                .map(function (e) {
                    return i.default.resolve(v, e);
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

function y(e) {
    return i.default.join(
        __dirname,
        "../",
        "node_modules",
        ".bin",
        e.trim() + ("win32" === c.default.platform ? ".cmd" : "")
    );
}

function h(e, o) {
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

var m = require("path"),
    w = process.cwd(),
    _ = ["public/index.html", "src/index.js", "public/favicon.ico"],
    x = _.map(function (e) {
        return m.resolve(__dirname, "../", "release", e);
    }),
    O = _.map(function (e) {
        return m.resolve(w, e);
    });

console.log("\n"),
    console.log("webpack-react-vue-spa-awesome-config"),
    console.log("\n"),
    console.log(
        "\u6781\u901f\u3001\u96f6\u914d\u7f6e\u7684 web \u5e94\u7528\u6253\u5305\u5de5\u5177, \u540c\u65f6\u652f\u6301 react \u548c vue \u7684\u5355\u9875\u9762\u5e94\u7528,\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u652f\u6301,\u57fa\u4e8ewebpack 4.x"
    ),
    console.log("\n"),
    console.log(
        "Fast, zero-configuration web application packaging tool that supports both single-page applications for react and vue, out-of-the-box support"
    ),
    console.log("\n"),
    console.log("\nworking directory : ".concat(process.cwd(), "\n")),
    console.log("\ncommand filename : ".concat(__filename, "\n"));

var k,
    E = c.default.argv.slice(1),
    j = E.includes("start") ? "start" : E.includes("build") ? "build" : void 0,
    S =
        ((k = {}),
        E.filter(function (e) {
            return e.startsWith("--");
        })
            .map(function (e) {
                return g(/\x2D\x2D(.+)=(.+)/g, {
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
                c && l && (k[c] = l);
            }),
        k);

console.log("\u89e3\u6790\u7684\u53c2\u6570:"),
    console.log(JSON.stringify(S, null, 4)),
    (function (e, o) {
        var n,
            t,
            r = o.config,
            l = o["react-hot-loader"],
            u = require.resolve(i.default.resolve(__dirname, "../")),
            a = r ? i.default.resolve(r) : u,
            s = o["output-public-path"],
            p = o.mode;
        if ("start" === e || "development" === p)
            (c.default.env.NODE_ENV = "development"),
                b(x, O),
                (n = y("webpack-dev-server ")),
                (t = ["--config", a, "--mode=" + c.default.env.NODE_ENV]),
                l && (t.push("--react-hot-loader=" + l), console.log("\n")),
                console.log("\n"),
                console.log(
                    "\u5f00\u53d1\u6a21\u5f0f\n\u542f\u52a8 webpack-dev-server"
                ),
                console.log("\n"),
                h(n, t);
        else if ("build" === e || "production" === p) {
            var f, d;
            console.log("\n"),
                console.log("\u751f\u4ea7\u6a21\u5f0f\n\u542f\u52a8 webpack"),
                console.log("\n"),
                (c.default.env.NODE_ENV = "production"),
                b(x, O),
                (f = y("webpack ")),
                (d = ["--config", a, "--mode=" + c.default.env.NODE_ENV]),
                s &&
                    s.length &&
                    (d.push("--output-public-path=" + s), console.log("\n")),
                h(f, d);
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
    })(j, S);
//# sourceMappingURL=index.js.map
