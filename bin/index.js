#!/usr/bin/env node
"use strict";

const path = require("path");
const fs = require("fs");
const pwddir = process.cwd();
const { spawn } = require("child_process");
const inputfiles = ["public/index.html", "src/index.js", "public/favicon.ico"];
const sourcefiles = inputfiles.map(p =>
  path.resolve(__dirname, "../", "release", p)
);
const destfiles = inputfiles.map(p => path.resolve(pwddir, p));
consolehello();
console.log("输入的参数:");
console.log(JSON.stringify(process.argv, null, 4));
const 参数object = parseargs(process.argv);
console.log("解析的参数:");
console.log(JSON.stringify(参数object, null, 4));
const 解析参数config = 参数object.config;
const 解析参数mode = 参数object.mode;
const 参数reacthotreload = 参数object["react-hot-loader"];
const defaultwebpackconfig = require.resolve(path.resolve(__dirname, "../"));
const 参数webpackconfigfile = 解析参数config
  ? path.resolve(解析参数config)
  : defaultwebpackconfig;
const 解析参数publicpath = 参数object["output-public-path"];
解析命令();
function parseargs(args) {
  try {
    return args
      .filter(s => s.startsWith("--"))
      .map(s => /--(?<key>.+)=(?<value>.+)/g.exec(s))
      .filter(Boolean)
      .map(a => a.groups)
      .reduce((a, v) => {
        return {
          ...a,
          ...{ [v["key"]]: v["value"] }
        };
      }, {});
  } catch (error) {
    console.log(process.argv);
    console.error("\n输入的参数有误!\n");
    console.error(error);
    throw Error("输入的参数有误!");
  }
}
function consolehello() {
  console.log("\n");
  console.log("webpack-react-vue-spa-awesome-config");
  console.log("\n");
  console.log(
    `极速、零配置的 web 应用打包工具, 同时支持 react 和 vue 的单页面应用,提供开箱即用支持,基于webpack 4.x`
  );
  console.log("\n");
  console.log(
    "Fast, zero-configuration web application packaging tool that supports both single-page applications for react and vue, out-of-the-box support"
  );
  console.log("\n");
  console.log(`\nworking directory : ${process.cwd()}\n`);
  console.log(`\ncommand filename : ${__filename}\n`);
}
function 判断并创建目录(p) {
  if (!fs.existsSync(p)) {
    console.log("所需的目录不存在,创建目录", p);
    console.log("\n");
    fs.mkdirSync(p);
  }
}
function 生成入口文件(sourcefiles, destfiles) {
  destfiles.forEach((p, i, a) => {
    if (!fs.existsSync(p)) {
      console.log(`inputfile  not exsited! ${p}\n`);
      console.log(`initialize inputfile from ${sourcefiles[i]}\n`);
      ["public", "src"]
        .map(t => path.resolve(pwddir, t))
        .forEach(e => 判断并创建目录(e));
      fs.copyFileSync(sourcefiles[i], a[i]);
    }
  });
}
function commandfind(t) {
  return path.join(
    __dirname,
    "..",
    "node_modules",
    ".bin",
    t.trim() + (process.platform === "win32" ? ".cmd" : "")
  );
}

function 解析命令() {
  if (process.argv.includes("start") || "development" === 解析参数mode) {
    let commandstring, command, commandargs;
    process.env.NODE_ENV = "development";
    生成入口文件(sourcefiles, destfiles);
    command = commandfind(`webpack-dev-server `);
    commandargs = [
      "--config",
      参数webpackconfigfile,
      "--mode=" + process.env.NODE_ENV
    ];
    if (参数reacthotreload) {
      commandargs.push("--react-hot-loader=" + 参数reacthotreload);
      //   console.log(`react-hot-loader :  ${参数reacthotreload}`);
      console.log("\n");
    }
    commandstring = command + " " + commandargs.join(" ");
    console.log("\n");
    console.log(`开发模式
启动 webpack-dev-server`);
    console.log("\n");
    执行命令(commandstring, command, commandargs);
  } else if (process.argv.includes("build") || "production" === 解析参数mode) {
    let commandstring, command, commandargs;
    console.log("\n");
    console.log(`生产模式
启动 webpack`);
    console.log("\n");
    process.env.NODE_ENV = "production";
    生成入口文件(sourcefiles, destfiles);
    command = commandfind(`webpack `);
    commandargs = [
      "--config",
      参数webpackconfigfile,
      "--mode=" + process.env.NODE_ENV
    ];
    if (解析参数publicpath && 解析参数publicpath.length) {
      commandargs.push("--output-public-path=" + 解析参数publicpath);
      //   console.log(`  output-public-path  :  ${解析参数publicpath}`);
      console.log("\n");
    }
    commandstring = command + " " + commandargs.join(" ");
    执行命令(commandstring, command, commandargs);
  } else {
    console.log("\n");
    console.log("usage:");
    console.log("\n");
    console.log(`开发模式
启动 webpack-dev-server`);
    console.log("\n");
    console.log(
      "webpack-react-vue-spa-awesome-config start --mode=development"
    );
    console.log("\n");
    console.log(`生产模式
    启动 webpack`);
    console.log("\n");
    console.log("webpack-react-vue-spa-awesome-config build --mode=production");
    console.log("\n");
  }
}
function 执行命令(commandstring, command, commandargs) {
  console.log(commandstring);
  console.log("\n");
  const runobj = spawn(command, commandargs, {
    stdio: ["pipe", "pipe", "pipe"]
  });
  runobj.stdout.on("data", data => {
    console.log(
      ` ${data}`
        .split("\n")
        .filter(t => t !== "")
        .join("\n\n")
    );
    console.log("\n");
  });
  runobj.stderr.on("data", data => {
    console.error(
      ` ${data}`
        .split("\n")
        .filter(t => t !== "")
        .join("\n\n")
    );
    console.log("\n");
  });
}
