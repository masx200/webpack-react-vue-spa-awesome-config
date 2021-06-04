import fs from "fs";
import path from "path";
import process from "process";
import 执行命令 from "./call-command";
import 生成入口文件 from "./copy-extrance";
import { commandfind } from "./find-command";
import { showhelp } from "./showhelp";
import { destfiles, sourcefiles } from "./source-dest-files";
const webpackcmd = "webpack";
/**
 * @param {string|undefined} operation
 * @param {Record<string,string>} 参数object
 */
export function start(operation, 参数object) {
    const 解析参数config = 参数object["config"];
    // const 解析参数mode = 参数object.mode;

    const defaultwebpackconfig = require.resolve(
        path.resolve(__dirname, "../")
    );
    const 参数webpackconfigfile = 解析参数config
        ? path.resolve(解析参数config)
        : defaultwebpackconfig;
    const 解析参数publicpath = 参数object["output-public-path"];
    const mode = 参数object["mode"];
    if ("start" === operation || "development" === mode) {
        let command, commandargs;
        process.env.NODE_ENV = "development";
        生成入口文件(sourcefiles, destfiles);
        command = commandfind(webpackcmd);
        commandargs = [
            "serve",
            "--config",
            参数webpackconfigfile,
            "--mode=" + process.env.NODE_ENV,
        ];
        if (!fs.existsSync(command)) {
            commandargs.unshift(webpackcmd);
            command = "npx" + (process.platform === "win32" ? ".cmd" : "");
        }
        //升级webpack5的修改命令 webpack serve

        Object.entries(参数object).forEach(([key, value]) => {
            commandargs.push(`--${key}=${value}`);
        });
        console.log("\n");
        console.log(`开发模式
启动 webpack-dev-server`);
        console.log("\n");
        执行命令(/* commandstring, */ command, commandargs);
    } else if ("build" === operation || "production" === mode) {
        let command, commandargs;
        console.log("\n");
        console.log(`生产模式
启动 webpack`);
        console.log("\n");
        process.env.NODE_ENV = "production";
        生成入口文件(sourcefiles, destfiles);
        command = commandfind(webpackcmd);
        commandargs = [
            "--config",
            参数webpackconfigfile,
            "--mode=" + process.env.NODE_ENV,
        ];
        if (!fs.existsSync(command)) {
            commandargs.unshift(webpackcmd);
            command = "npx" + (process.platform === "win32" ? ".cmd" : "");
        }
        Object.entries(参数object).forEach(([key, value]) => {
            commandargs.push(`--${key}=${value}`);
        });
        if (解析参数publicpath && 解析参数publicpath.length) {
            commandargs.push("--output-public-path=" + 解析参数publicpath);
            //   console.log(`  output-public-path  :  ${解析参数publicpath}`);
            console.log("\n");
        }
        执行命令(/* commandstring, */ command, commandargs);
    } else {
        showhelp();
    }
}
