// #!/usr/bin/env node
"use strict";
import process from "process";
import { consolehello } from "./console-hello";
// import 判断并创建目录 from "./ensure-dir";
import { parseargs } from "./parse-args";
import { start } from "./start";

consolehello();
// console.log("输入的参数:");
// console.log(JSON.stringify(process.argv, null, 4));
const inargs = process.argv.slice(2);
console.log("接收的参数", inargs);
const operation = inargs.includes("start")
    ? "start"
    : inargs.includes("build")
    ? "build"
    : undefined;
const 参数object = parseargs(inargs);
console.log("解析的参数:");
console.log(JSON.stringify(参数object, null, 4));

start(operation, 参数object);
