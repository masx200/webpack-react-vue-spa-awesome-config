#!/usr/bin/env node
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var process$1 = _interopDefault(require("process"));

var fs = _interopDefault(require("fs"));

var path$1 = _interopDefault(require("path"));

function consolehello() {
    console.log("\n");
    console.log("webpack-react-vue-spa-awesome-config");
    console.log("\n");
    console.log("\u6781\u901f\u3001\u96f6\u914d\u7f6e\u7684 web \u5e94\u7528\u6253\u5305\u5de5\u5177, \u540c\u65f6\u652f\u6301 react \u548c vue \u7684\u5355\u9875\u9762\u5e94\u7528,\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u652f\u6301,\u57fa\u4e8ewebpack 4.x");
    console.log("\n");
    console.log("Fast, zero-configuration web application packaging tool that supports both single-page applications for react and vue, out-of-the-box support");
    console.log("\n");
    console.log("\nworking directory : ".concat(process.cwd(), "\n"));
    console.log("\ncommand filename : ".concat(__filename, "\n"));
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
        return true;
    } catch (e) {
        return false;
    }
}

function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [ null ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor;
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}

function _wrapRegExp(re, groups) {
    _wrapRegExp = function(re, groups) {
        return new BabelRegExp(re, undefined, groups);
    };
    var _RegExp = _wrapNativeSuper(RegExp);
    var _super = RegExp.prototype;
    var _groups = new WeakMap;
    function BabelRegExp(re, flags, groups) {
        var _this = _RegExp.call(this, re, flags);
        _groups.set(_this, groups || _groups.get(re));
        return _this;
    }
    _inherits(BabelRegExp, _RegExp);
    BabelRegExp.prototype.exec = function(str) {
        var result = _super.exec.call(this, str);
        if (result) result.groups = buildGroups(result, this);
        return result;
    };
    BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
        if (typeof substitution === "string") {
            var groups = _groups.get(this);
            return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, (function(_, name) {
                return "$" + groups[name];
            })));
        } else if (typeof substitution === "function") {
            var _this = this;
            return _super[Symbol.replace].call(this, str, (function() {
                var args = [];
                args.push.apply(args, arguments);
                if (typeof args[args.length - 1] !== "object") {
                    args.push(buildGroups(args, _this));
                }
                return substitution.apply(this, args);
            }));
        } else {
            return _super[Symbol.replace].call(this, str, substitution);
        }
    };
    function buildGroups(result, re) {
        var g = _groups.get(re);
        return Object.keys(g).reduce((function(groups, name) {
            groups[name] = result[g[name]];
            return groups;
        }), Object.create(null));
    }
    return _wrapRegExp.apply(this, arguments);
}

function parseargs(args) {
    var \u53c2\u6570obj = {};
    args.filter((function(s) {
        return s.startsWith("--");
    })).map((function(s) {
        return _wrapRegExp(/\x2D\x2D(.+)=(.+)/g, {
            key: 1,
            value: 2
        }).exec(s);
    })).forEach((function(execArray) {
        var _a, _b, _c;
        var groups = (_a = execArray) === null || _a === void 0 ? void 0 : _a.groups;
        var key = (_b = groups) === null || _b === void 0 ? void 0 : _b.key;
        var value = (_c = groups) === null || _c === void 0 ? void 0 : _c.value;
        if (key && value) {
            \u53c2\u6570obj[key] = value;
        }
    }));
    return \u53c2\u6570obj;
}

function \u5224\u65ad\u5e76\u521b\u5efa\u76ee\u5f55(p) {
    if (!fs.existsSync(p)) {
        console.log("\u6240\u9700\u7684\u76ee\u5f55\u4e0d\u5b58\u5728,\u521b\u5efa\u76ee\u5f55", p);
        console.log("\n");
        fs.mkdirSync(p);
    }
}

var pwddir = process$1.cwd();

function \u751f\u6210\u5165\u53e3\u6587\u4ef6(sourcefiles, destfiles) {
    destfiles.forEach((function(p, i) {
        if (!fs.existsSync(p)) {
            console.log("inputfile  not exsited! ".concat(p, "\n"));
            console.log("initialize inputfile from ".concat(sourcefiles[i], "\n"));
            [ "public", "src" ].map((function(t) {
                return path$1.resolve(pwddir, t);
            })).forEach((function(e) {
                return \u5224\u65ad\u5e76\u521b\u5efa\u76ee\u5f55(e);
            }));
            fs.copyFileSync(sourcefiles[i], p);
        }
    }));
}

function commandfind(t) {
    return path$1.join(__dirname, "../", "node_modules", ".bin", t.trim() + (process$1.platform === "win32" ? ".cmd" : ""));
}

var _require = require("child_process"), spawn = _require.spawn;

function \u6267\u884c\u547d\u4ee4(command, commandargs) {
    console.log("\n");
    var runobj = spawn(command, commandargs, {
        stdio: [ "pipe", "pipe", "pipe" ]
    });
    runobj.stdout.on("data", (function(data) {
        console.log(" ".concat(data).split("\n").filter((function(t) {
            return t !== "";
        })).join("\n\n"));
        console.log("\n");
    }));
    runobj.stderr.on("data", (function(data) {
        console.error(" ".concat(data).split("\n").filter((function(t) {
            return t !== "";
        })).join("\n\n"));
        console.log("\n");
    }));
}

var path = require("path");

var pwddir$1 = process.cwd();

var inputfiles = [ "public/index.html", "src/index.js", "public/favicon.ico" ];

var sourcefiles = inputfiles.map((function(p) {
    return path.resolve(__dirname, "../", "release", p);
}));

var destfiles = inputfiles.map((function(p) {
    return path.resolve(pwddir$1, p);
}));

function start(operation, \u53c2\u6570object) {
    var \u89e3\u6790\u53c2\u6570config = \u53c2\u6570object["config"];
    var \u53c2\u6570reacthotreload = \u53c2\u6570object["react-hot-loader"];
    var defaultwebpackconfig = require.resolve(path$1.resolve(__dirname, "../"));
    var \u53c2\u6570webpackconfigfile = \u89e3\u6790\u53c2\u6570config ? path$1.resolve(\u89e3\u6790\u53c2\u6570config) : defaultwebpackconfig;
    var \u89e3\u6790\u53c2\u6570publicpath = \u53c2\u6570object["output-public-path"];
    var mode = \u53c2\u6570object["mode"];
    if ("start" === operation || "development" === mode) {
        var command, commandargs;
        process$1.env.NODE_ENV = "development";
        \u751f\u6210\u5165\u53e3\u6587\u4ef6(sourcefiles, destfiles);
        command = commandfind("webpack-dev-server ");
        commandargs = [ "--config", \u53c2\u6570webpackconfigfile, "--mode=" + process$1.env.NODE_ENV ];
        if (\u53c2\u6570reacthotreload) {
            commandargs.push("--react-hot-loader=" + \u53c2\u6570reacthotreload);
            console.log("\n");
        }
        console.log("\n");
        console.log("\u5f00\u53d1\u6a21\u5f0f\n\u542f\u52a8 webpack-dev-server");
        console.log("\n");
        \u6267\u884c\u547d\u4ee4(command, commandargs);
    } else if ("build" === operation || "production" === mode) {
        var _command, _commandargs;
        console.log("\n");
        console.log("\u751f\u4ea7\u6a21\u5f0f\n\u542f\u52a8 webpack");
        console.log("\n");
        process$1.env.NODE_ENV = "production";
        \u751f\u6210\u5165\u53e3\u6587\u4ef6(sourcefiles, destfiles);
        _command = commandfind("webpack ");
        _commandargs = [ "--config", \u53c2\u6570webpackconfigfile, "--mode=" + process$1.env.NODE_ENV ];
        if (\u89e3\u6790\u53c2\u6570publicpath && \u89e3\u6790\u53c2\u6570publicpath.length) {
            _commandargs.push("--output-public-path=" + \u89e3\u6790\u53c2\u6570publicpath);
            console.log("\n");
        }
        \u6267\u884c\u547d\u4ee4(_command, _commandargs);
    } else {
        console.log("\n");
        console.log("usage:");
        console.log("\n");
        console.log("\u5f00\u53d1\u6a21\u5f0f\n\u542f\u52a8 webpack-dev-server");
        console.log("\n");
        console.log("webpack-react-vue-spa-awesome-config start --mode=development");
        console.log("\n");
        console.log("\u751f\u4ea7\u6a21\u5f0f\n    \u542f\u52a8 webpack");
        console.log("\n");
        console.log("webpack-react-vue-spa-awesome-config build --mode=production");
        console.log("\n");
    }
}

consolehello();

var inargs = process$1.argv.slice(1);

var operation = inargs[0];

var \u53c2\u6570object = parseargs(inargs);

console.log("\u89e3\u6790\u7684\u53c2\u6570:");

console.log(JSON.stringify(\u53c2\u6570object, null, 4));

start(operation, \u53c2\u6570object);
//# sourceMappingURL=index.js.map
