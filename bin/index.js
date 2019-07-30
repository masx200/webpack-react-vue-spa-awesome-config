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
// console.log(sourcefiles);
const destfiles = inputfiles.map(p => path.resolve(pwddir, p));
const webpackconfigfile = path.resolve(
  __dirname,
  "../",
  "./release/config/webpack.config.js"
);
consolehello();
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
/* 如果不存在入口文件,则复制过去

入口文件是"public/index.html"和'src/index.js'

"public/favicon.ico"
*/

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

      /* 判断文件夹是否存在! */
      fs.copyFileSync(sourcefiles[i], a[i]);
    }
  });
}

//   .map(p => fs.existsSync(p));

// console.log(existbool);

// path.resolve();
// fs.existsSync(path)
// let spawnObj;
// let commandstring, command, commandargs;

function commandfind(t) {
  return path.join(
    __dirname,
    "..",
    "node_modules",
    ".bin",
    t.trim() + (process.platform === "win32" ? ".cmd" : "")
  );
}

解析命令();

function 解析命令() {
  let commandstring, command, commandargs;
  if (process.argv.includes("start")) {
    process.env.NODE_ENV = "development";

    生成入口文件(sourcefiles, destfiles);
    command = commandfind(`webpack-dev-server `);
    commandargs = ["--config", webpackconfigfile, "--mode=development"];
    commandstring = command + " " + commandargs.join(" ");

    //   spawnObj = spawn(command, commandargs, { cwd: process.cwd() });
    console.log("\n");

    console.log(`开发模式
启动 webpack-dev-server`);
    console.log("\n");
    执行命令(commandstring, command, commandargs);
  } else if (process.argv.includes("build")) {
    console.log("\n");
    console.log(`生产模式
启动 webpack`);
    console.log("\n");
    process.env.NODE_ENV = "production";

    生成入口文件(sourcefiles, destfiles);
    command = commandfind(`webpack `);
    commandargs = ["--config", webpackconfigfile, "--mode=production"];

    if (
      process.argv.filter(t => String(t).startsWith("--output-public-path="))
        .length
    ) {
      const publicpath参数 = process.argv.filter(t =>
        String(t).startsWith("--output-public-path=")
      )[0];

      const 解析参数publicpath = publicpath参数.slice(
        publicpath参数.indexOf("--output-public-path=") +
          "--output-public-path=".length
      );
      if (解析参数publicpath.length) {
        commandargs.push("--output-public-path=" + 解析参数publicpath);
        console.log(`  output-public-path    is       ${解析参数publicpath}`);
        console.log("\n");
      }
    }

    commandstring = command + " " + commandargs.join(" ");
    //   console.log(commandstring);
    //   spawnObj = spawn(command, commandargs, { cwd: process.cwd() });

    执行命令(commandstring, command, commandargs);
  } else {
    console.log("\n");
    console.log("usage:");
    console.log("\n");
    console.log("webpack-react-vue-spa-awesome-config start");
    console.log("\n");

    console.log(`开发模式
启动 webpack-dev-server`);
    console.log("\n");
    console.log("webpack-react-vue-spa-awesome-config build");
    console.log("\n");
    console.log(`生产模式
启动 webpack`);
    console.log("\n");
    //  return;
  }
}
function 执行命令(commandstring, command, commandargs) {
  // console.log(spawnObj);
  // spawnObj.stdout.on("data", function(chunk) {
  //   console.log(chunk.toString());
  // });
  // spawnObj.stderr.on("data", data => {
  //   console.log(data);
  // });
  // spawnObj.on("close", function(code) {
  //   console.log("close code : " + code);
  // });
  // spawnObj.on("exit", code => {
  //   console.log("exit code : " + code);
  // });
  console.log(commandstring);
  console.log("\n");
  /* [Error: spawn ENOENT]  

windows下执行文件为
.cmd
*/
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
  /* exec(commandstring, (error, stdout, stderr) => {
  stderr && console.error(`stderr: ${stderr}`);
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }

  console.log(` ${stdout}`);
});
 */
}
