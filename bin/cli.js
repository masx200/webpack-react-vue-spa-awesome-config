#!/usr/bin/env node
"use strict";

var e = require("process"), o = require("fs"), n = require("path"), t = require("child_process");

function r(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var l = r(e), c = r(o), i = r(n);

function a() {
    a = function(e, o) {
        return new n(e, void 0, o);
    };
    var e = RegExp.prototype, o = new WeakMap;
    function n(e, t, r) {
        var l = new RegExp(e, t);
        return o.set(l, r || o.get(e)), s(l, n.prototype);
    }
    function t(e, n) {
        var t = o.get(n);
        return Object.keys(t).reduce((function(o, n) {
            return o[n] = e[t[n]], o;
        }), Object.create(null));
    }
    return u(n, RegExp), n.prototype.exec = function(o) {
        var n = e.exec.call(this, o);
        return n && (n.groups = t(n, this)), n;
    }, n.prototype[Symbol.replace] = function(n, r) {
        if ("string" == typeof r) {
            var l = o.get(this);
            return e[Symbol.replace].call(this, n, r.replace(/\$<([^>]+)>/g, (function(e, o) {
                return "$" + l[o];
            })));
        }
        if ("function" == typeof r) {
            var c = this;
            return e[Symbol.replace].call(this, n, (function() {
                var e = arguments;
                return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(t(e, c)), 
                r.apply(this, e);
            }));
        }
        return e[Symbol.replace].call(this, n, r);
    }, a.apply(this, arguments);
}

function u(e, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(o && o.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), o && s(e, o);
}

function s(e, o) {
    return (s = Object.setPrototypeOf || function(e, o) {
        return e.__proto__ = o, e;
    })(e, o);
}

function f(e, o) {
    return function(e) {
        if (Array.isArray(e)) return e;
    }(e) || function(e, o) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null == n) return;
        var t, r, l = [], c = !0, i = !1;
        try {
            for (n = n.call(e); !(c = (t = n.next()).done) && (l.push(t.value), !o || l.length !== o); c = !0) ;
        } catch (e) {
            i = !0, r = e;
        } finally {
            try {
                c || null == n.return || n.return();
            } finally {
                if (i) throw r;
            }
        }
        return l;
    }(e, o) || d(e, o) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function p(e) {
    return function(e) {
        if (Array.isArray(e)) return g(e);
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || d(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function d(e, o) {
    if (e) {
        if ("string" == typeof e) return g(e, o);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, o) : void 0;
    }
}

function g(e, o) {
    (null == o || o > e.length) && (o = e.length);
    for (var n = 0, t = new Array(o); n < o; n++) t[n] = e[n];
    return t;
}

function v(e, o) {
    console.log("\n"), console.log([ e ].concat(p(o)));
    var n = t.spawn(e, o, {
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
    })), n.on("close", (function(e) {
        console.log("child process exited with code ".concat(e)), l.default.exit(e || 0);
    }));
}

var y = l.default.cwd();

function b(e, o) {
    o.forEach((function(o, n) {
        c.default.existsSync(o) || (console.log("inputfile  not exsited! ".concat(o, "\n")), 
        console.log("initialize inputfile from ".concat(e[n], "\n")), [ "public", "src" ].map((function(e) {
            return i.default.resolve(y, e);
        })).forEach((function(e) {
            return function(e) {
                c.default.existsSync(e) || (console.log("\u6240\u9700\u7684\u76ee\u5f55\u4e0d\u5b58\u5728,\u521b\u5efa\u76ee\u5f55", e), 
                console.log("\n"), c.default.mkdirSync(e));
            }(e);
        })), c.default.copyFileSync(e[n], o));
    }));
}

function m(e) {
    return i.default.join(__dirname, "../", "node_modules", ".bin", e.trim() + ("win32" === l.default.platform ? ".cmd" : ""));
}

var h = l.default.cwd(), w = [ "public/index.html", "src/index.js" ], x = w.map((function(e) {
    return i.default.resolve(__dirname, "../", "release", e);
})), k = w.map((function(e) {
    return i.default.resolve(h, e);
}));

function S(e, o) {
    Object.entries(e).forEach((function(e) {
        var n = f(e, 2), t = n[0], r = n[1];
        o.push("--".concat(t, "=").concat(r));
    }));
}

function E(e, o, n) {
    c.default.existsSync(e) || (o.unshift("webpack"), n("npx" + ("win32" === l.default.platform ? ".cmd" : "")));
}

console.log("\n"), console.log("webpack-react-vue-spa-awesome-config"), console.log("\n"), 
console.log("\u6781\u901f\u3001\u96f6\u914d\u7f6e\u7684 web \u5e94\u7528\u6253\u5305\u5de5\u5177, \u540c\u65f6\u652f\u6301 react \u548c vue \u7684\u5355\u9875\u9762\u5e94\u7528,\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u652f\u6301,\u57fa\u4e8ewebpack "), 
console.log("\n"), console.log("Fast, zero-configuration web application packaging tool that supports both single-page applications for react and vue, out-of-the-box support"), 
console.log("\n"), console.log("\nworking directory : ".concat(l.default.cwd(), "\n")), 
console.log("\ncommand filename : ".concat(__filename, "\n"));

var _ = l.default.argv.slice(2);

console.log("\u63a5\u6536\u7684\u53c2\u6570", _);

var j, O = _.includes("start") ? "start" : _.includes("build") ? "build" : void 0, A = (j = {}, 
_.filter((function(e) {
    return e.startsWith("--");
})).map((function(e) {
    return a(/\x2D\x2D(.+?)=(.+)/g, {
        key: 1,
        value: 2
    }).exec(e);
})).forEach((function(e) {
    var o, n, t, r = null === (o = e) || void 0 === o ? void 0 : o.groups, l = null === (n = r) || void 0 === n ? void 0 : n.key, c = null === (t = r) || void 0 === t ? void 0 : t.value;
    l && c && (j[l] = c);
})), j);

console.log("\u89e3\u6790\u7684\u53c2\u6570:"), console.log(JSON.stringify(A, null, 4)), 
function(e, o) {
    var n = o.config, t = require.resolve(i.default.resolve(__dirname, "../", "./release/config/webpack.config.js")), r = n ? i.default.resolve(n) : t;
    Reflect.set(o, "config", r);
    var c, a, u = o.mode;
    if ("start" === e || "development" === u) l.default.env.NODE_ENV = "development", 
    Reflect.set(o, "mode", l.default.env.NODE_ENV), b(x, k), E(c = m("webpack"), a = [ "serve" ], (function(e) {
        c = e;
    })), S(o, a), console.log("\n"), console.log("\u5f00\u53d1\u6a21\u5f0f \u542f\u52a8 webpack-dev-server"), 
    console.log("\n"), v(c, a); else if ("build" === e || "production" === u) {
        var s, f;
        console.log("\n"), console.log("\u751f\u4ea7\u6a21\u5f0f \u542f\u52a8 webpack"), 
        console.log("\n"), l.default.env.NODE_ENV = "production", Reflect.set(o, "mode", l.default.env.NODE_ENV), 
        b(x, k), E(s = m("webpack"), f = [ "build" ], (function(e) {
            s = e;
        })), S(o, f), v(s, f);
    } else console.log("\n"), console.log("usage:"), console.log("\n"), console.log("\u5f00\u53d1\u6a21\u5f0f\n\u542f\u52a8 webpack-dev-server"), 
    console.log("\n"), console.log("webpack-react-vue-spa-awesome-config start --mode=development"), 
    console.log("\n"), console.log("\u751f\u4ea7\u6a21\u5f0f\n\u542f\u52a8 webpack"), 
    console.log("\n"), console.log("webpack-react-vue-spa-awesome-config build --mode=production"), 
    console.log("\n"), l.default.exit(1);
}(O, A);
//# sourceMappingURL=cli.js.map
