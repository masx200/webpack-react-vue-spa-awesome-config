#!/usr/bin/env node 

"use strict";

function e(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}

var o = e(require("process")), n = e(require("fs")), t = e(require("path")), r = require("child_process");

function c(e, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(o && o.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), o && i(e, o);
}

function l(e) {
    return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

function i(e, o) {
    return (i = Object.setPrototypeOf || function(e, o) {
        return e.__proto__ = o, e;
    })(e, o);
}

function u() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), 
        !0;
    } catch (e) {
        return !1;
    }
}

function s(e, o, n) {
    return (s = u() ? Reflect.construct : function(e, o, n) {
        var t = [ null ];
        t.push.apply(t, o);
        var r = new (Function.bind.apply(e, t));
        return n && i(r, n.prototype), r;
    }).apply(null, arguments);
}

function a(e) {
    var o = "function" == typeof Map ? new Map : void 0;
    return (a = function(e) {
        if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
        var n;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== o) {
            if (o.has(e)) return o.get(e);
            o.set(e, t);
        }
        function t() {
            return s(e, arguments, l(this).constructor);
        }
        return t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), i(t, e);
    })(e);
}

function p(e, o) {
    p = function(e, o) {
        return new l(e, void 0, o);
    };
    var n = a(RegExp), t = RegExp.prototype, r = new WeakMap;
    function l(e, o, t) {
        var c = n.call(this, e, o);
        return r.set(c, t || r.get(e)), c;
    }
    function i(e, o) {
        var n = r.get(o);
        return Object.keys(n).reduce((function(o, t) {
            return o[t] = e[n[t]], o;
        }), Object.create(null));
    }
    return c(l, n), l.prototype.exec = function(e) {
        var o = t.exec.call(this, e);
        return o && (o.groups = i(o, this)), o;
    }, l.prototype[Symbol.replace] = function(e, o) {
        if ("string" == typeof o) {
            var n = r.get(this);
            return t[Symbol.replace].call(this, e, o.replace(/\$<([^>]+)>/g, (function(e, o) {
                return "$" + n[o];
            })));
        }
        if ("function" == typeof o) {
            var c = this;
            return t[Symbol.replace].call(this, e, (function() {
                var e = [];
                return e.push.apply(e, arguments), "object" != typeof e[e.length - 1] && e.push(i(e, c)), 
                o.apply(this, e);
            }));
        }
        return t[Symbol.replace].call(this, e, o);
    }, p.apply(this, arguments);
}

var f = o.cwd();

function g(e, o) {
    o.forEach((function(o, r) {
        n.existsSync(o) || (console.log("inputfile  not exsited! ".concat(o, "\n")), console.log("initialize inputfile from ".concat(e[r], "\n")), 
        [ "public", "src" ].map((function(e) {
            return t.resolve(f, e);
        })).forEach((function(e) {
            return function(e) {
                n.existsSync(e) || (console.log("\u6240\u9700\u7684\u76ee\u5f55\u4e0d\u5b58\u5728,\u521b\u5efa\u76ee\u5f55", e), 
                console.log("\n"), n.mkdirSync(e));
            }(e);
        })), n.copyFileSync(e[r], o));
    }));
}

function d(e) {
    return t.join(__dirname, "../", "node_modules", ".bin", e.trim() + ("win32" === o.platform ? ".cmd" : ""));
}

function v(e, o) {
    console.log("\n");
    var n = r.spawn(e, o, {
        stdio: [ "pipe", "pipe", "pipe" ]
    });
    n.stdout.on("data", (function(e) {
        console.log(" ".concat(e).split("\n").filter((function(e) {
            return "" !== e;
        })).join("\n\n")), console.log("\n");
    })), n.stderr.on("data", (function(e) {
        console.error(" ".concat(e).split("\n").filter((function(e) {
            return "" !== e;
        })).join("\n\n")), console.log("\n");
    }));
}

var b = require("path"), y = process.cwd(), h = [ "public/index.html", "src/index.js", "public/favicon.ico" ], m = h.map((function(e) {
    return b.resolve(__dirname, "../", "release", e);
})), w = h.map((function(e) {
    return b.resolve(y, e);
}));

console.log("\n"), console.log("webpack-react-vue-spa-awesome-config"), console.log("\n"), 
console.log("\u6781\u901f\u3001\u96f6\u914d\u7f6e\u7684 web \u5e94\u7528\u6253\u5305\u5de5\u5177, \u540c\u65f6\u652f\u6301 react \u548c vue \u7684\u5355\u9875\u9762\u5e94\u7528,\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u652f\u6301,\u57fa\u4e8ewebpack 4.x"), 
console.log("\n"), console.log("Fast, zero-configuration web application packaging tool that supports both single-page applications for react and vue, out-of-the-box support"), 
console.log("\n"), console.log("\nworking directory : ".concat(process.cwd(), "\n")), 
console.log("\ncommand filename : ".concat(__filename, "\n"));

var _, x = o.argv.slice(1), O = x.includes("start") ? "start" : x.includes("build") ? "build" : void 0, k = (_ = {}, 
x.filter((function(e) {
    return e.startsWith("--");
})).map((function(e) {
    return p(/\x2D\x2D(.+)=(.+)/g, {
        key: 1,
        value: 2
    }).exec(e);
})).forEach((function(e) {
    var o, n, t, r = null === (o = e) || void 0 === o ? void 0 : o.groups, c = null === (n = r) || void 0 === n ? void 0 : n.key, l = null === (t = r) || void 0 === t ? void 0 : t.value;
    c && l && (_[c] = l);
})), _);

console.log("\u89e3\u6790\u7684\u53c2\u6570:"), console.log(JSON.stringify(k, null, 4)), 
function(e, n) {
    var r, c, l = n.config, i = n["react-hot-loader"], u = require.resolve(t.resolve(__dirname, "../")), s = l ? t.resolve(l) : u, a = n["output-public-path"], p = n.mode;
    if ("start" === e || "development" === p) o.env.NODE_ENV = "development", g(m, w), 
    r = d("webpack-dev-server "), c = [ "--config", s, "--mode=" + o.env.NODE_ENV ], 
    i && (c.push("--react-hot-loader=" + i), console.log("\n")), console.log("\n"), 
    console.log("\u5f00\u53d1\u6a21\u5f0f\n\u542f\u52a8 webpack-dev-server"), console.log("\n"), 
    v(r, c); else if ("build" === e || "production" === p) {
        var f, b;
        console.log("\n"), console.log("\u751f\u4ea7\u6a21\u5f0f\n\u542f\u52a8 webpack"), 
        console.log("\n"), o.env.NODE_ENV = "production", g(m, w), f = d("webpack "), b = [ "--config", s, "--mode=" + o.env.NODE_ENV ], 
        a && a.length && (b.push("--output-public-path=" + a), console.log("\n")), v(f, b);
    } else console.log("\n"), console.log("usage:"), console.log("\n"), console.log("\u5f00\u53d1\u6a21\u5f0f\n\u542f\u52a8 webpack-dev-server"), 
    console.log("\n"), console.log("webpack-react-vue-spa-awesome-config start --mode=development"), 
    console.log("\n"), console.log("\u751f\u4ea7\u6a21\u5f0f\n    \u542f\u52a8 webpack"), 
    console.log("\n"), console.log("webpack-react-vue-spa-awesome-config build --mode=production"), 
    console.log("\n"), o.exit(1);
}(O, k);
//# sourceMappingURL=index.js.map
