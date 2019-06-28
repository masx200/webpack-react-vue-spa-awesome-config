#!/usr/bin/env node
"use strict";
const { spawn } = require("child_process");

// let spawnObj;
let commandstring, command, commandargs;
const path = require("path");
console.log("\n");
console.log("webpack-react-vue-spa-awesome-config");
console.log("\n");
const webpackconfigfile = path.resolve(
  __dirname,
  "../",
  "./release/config/webpack.config.js"
);

const commandfind = t =>
  path.join(
    __dirname,
    "..",
    "node_modules",
    ".bin",
    t.trim() + (process.platform === "win32" ? ".cmd" : "")
  );
if (process.argv.includes("start")) {
  command = commandfind(`webpack-dev-server `);
  commandargs = ["--config", webpackconfigfile, "--mode=development"];
  commandstring = command + " " + commandargs.join(" ");

  //   spawnObj = spawn(command, commandargs, { cwd: process.cwd() });
} else if (process.argv.includes("build")) {
  command = commandfind(`webpack `);
  commandargs = ["--config", webpackconfigfile, "--mode=production"];
  commandstring = command + " " + commandargs.join(" ");
  //   console.log(commandstring);
  //   spawnObj = spawn(command, commandargs, { cwd: process.cwd() });
} else {
  console.log("usage:");
  console.log("\n");
  console.log("webpack-react-vue-spa-awesome-config start");
  console.log("\n");
  console.log("webpack-react-vue-spa-awesome-config build");
  return;
}
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
  console.log(` ${data}`);
  console.log("\n");
});

runobj.stderr.on("data", data => {
  console.error(` ${data}`);
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
