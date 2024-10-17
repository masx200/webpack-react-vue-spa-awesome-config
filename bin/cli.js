#!/usr/bin/env node
"use strict";

var o = require("process"), e = require("fs"), n = require("path"), l = require("child_process");

function c(e, n) {
    console.log("\n"), console.log([ e, ...n ]);
    const c = l.spawn(e, n, {
        stdio: [ "pipe", "pipe", "pipe" ],
        shell: !0
    });
    c.stdout.on("data", (o => {
        console.log(` ${o}`.split("\n").filter((o => "" !== o)).join("\n\n")), console.log("\n");
    })), c.stderr.on("data", (o => {
        console.error(` ${o}`.split("\n").filter((o => "" !== o)).join("\n\n")), console.log("\n");
    })), c.on("close", (e => {
        console.log(`child process exited with code ${e}`), o.exit(e || 0);
    }));
}

const s = o.cwd();

function i(o, l) {
    l.forEach(((l, c) => {
        e.existsSync(l) || (console.log(`inputfile  not exsited! ${l}\n`), console.log(`initialize inputfile from ${o[c]}\n`), 
        [ "public", "src" ].map((o => n.resolve(s, o))).forEach((o => function(o) {
            e.existsSync(o) || (console.log("\u6240\u9700\u7684\u76ee\u5f55\u4e0d\u5b58\u5728,\u521b\u5efa\u76ee\u5f55", o), 
            console.log("\n"), e.mkdirSync(o));
        }(o))), e.copyFileSync(o[c], l));
    }));
}

function t(e) {
    return n.join(__dirname, "../", "node_modules", ".bin", e.trim() + ("win32" === o.platform ? ".cmd" : ""));
}

const r = o.cwd(), a = [ "public/index.html", "src/index.js" ], g = a.map((o => n.resolve(__dirname, "../", "release", o))), p = a.map((o => n.resolve(r, o))), d = "webpack";

function u(o, e) {
    Object.entries(o).forEach((o => {
        let [n, l] = o;
        e.push(`--${n}=${l}`);
    }));
}

function f(n, l, c) {
    e.existsSync(n) || (l.unshift(d), c("npx" + ("win32" === o.platform ? ".cmd" : "")));
}

console.log("\n"), console.log("webpack-react-vue-spa-awesome-config"), console.log("\n"), 
console.log("\u6781\u901f\u3001\u96f6\u914d\u7f6e\u7684 web \u5e94\u7528\u6253\u5305\u5de5\u5177, \u540c\u65f6\u652f\u6301 react \u548c vue \u7684\u5355\u9875\u9762\u5e94\u7528,\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u652f\u6301,\u57fa\u4e8ewebpack "), 
console.log("\n"), console.log("Fast, zero-configuration web application packaging tool that supports both single-page applications for react and vue, out-of-the-box support"), 
console.log("\n"), console.log(`\nworking directory : ${o.cwd()}\n`), console.log(`\ncommand filename : ${__filename}\n`);

const v = o.argv.slice(2);

console.log("\u63a5\u6536\u7684\u53c2\u6570", v);

const m = v.includes("start") ? "start" : v.includes("build") ? "build" : void 0, b = function(o) {
    const e = {};
    return o.filter((o => o.startsWith("--"))).map((o => /--(?<key>.+?)=(?<value>.+)/g.exec(o))).forEach((o => {
        var n, l, c;
        const s = null === (n = o) || void 0 === n ? void 0 : n.groups, i = null === (l = s) || void 0 === l ? void 0 : l.key, t = null === (c = s) || void 0 === c ? void 0 : c.value;
        i && t && (e[i] = t);
    })), e;
}(v);

console.log("\u89e3\u6790\u7684\u53c2\u6570:"), console.log(JSON.stringify(b, null, 4)), 
function(e, l) {
    const s = l.config, r = require.resolve(n.resolve(__dirname, "../", "./release/config/webpack.config.js")), a = s ? n.resolve(s) : r;
    Reflect.set(l, "config", a);
    const v = l.mode;
    if ("start" === e || "development" === v) {
        let e, n;
        o.env.NODE_ENV = "development", Reflect.set(l, "mode", o.env.NODE_ENV), i(g, p), 
        e = t(d), n = [ "serve" ], f(e, n, (o => {
            e = o;
        })), u(l, n), console.log("\n"), console.log("\u5f00\u53d1\u6a21\u5f0f \u542f\u52a8 webpack-dev-server"), 
        console.log("\n"), c(e, n);
    } else if ("build" === e || "production" === v) {
        let e, n;
        console.log("\n"), console.log("\u751f\u4ea7\u6a21\u5f0f \u542f\u52a8 webpack"), 
        console.log("\n"), o.env.NODE_ENV = "production", Reflect.set(l, "mode", o.env.NODE_ENV), 
        i(g, p), e = t(d), n = [ "build" ], f(e, n, (o => {
            e = o;
        })), u(l, n), c(e, n);
    } else console.log("\n"), console.log("usage:"), console.log("\n"), console.log("\u5f00\u53d1\u6a21\u5f0f\n\u542f\u52a8 webpack-dev-server"), 
    console.log("\n"), console.log("webpack-react-vue-spa-awesome-config start --mode=development"), 
    console.log("\n"), console.log("\u751f\u4ea7\u6a21\u5f0f\n\u542f\u52a8 webpack"), 
    console.log("\n"), console.log("webpack-react-vue-spa-awesome-config build --mode=production"), 
    console.log("\n"), o.exit(1);
}(m, b);
//# sourceMappingURL=cli.js.map
