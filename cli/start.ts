import fs from "fs";
import path from "path";
import process from "process";
import 执行命令 from "./call-command";
import 生成入口文件 from "./copy-extrance";
import { commandfind } from "./find-command";
import { showhelp } from "./showhelp";
import { destfiles, sourcefiles } from "./source-dest-files";
const webpackcmd = "webpack";
export function start(operation: string, 参数object: Record<string, string>) {
    const 解析参数config = 参数object["config"];
    const defaultwebpackconfig = require.resolve(
        path.resolve(__dirname, "../")
    );
    const 参数webpackconfigfile = 解析参数config
        ? path.resolve(解析参数config)
        : defaultwebpackconfig;
    Reflect.set(参数object, "config", 参数webpackconfigfile);
    const mode = 参数object["mode"];
    if ("start" === operation || "development" === mode) {
        let command: string, commandargs: string[];
        process.env.NODE_ENV = "development";
        Reflect.set(参数object, "mode", process.env.NODE_ENV);

        生成入口文件(sourcefiles, destfiles);
        command = commandfind(webpackcmd);
        commandargs = ["serve"];
        changecmdnpx(command, commandargs, (cmd: string) => {
            command = cmd;
        });
        addparamstocmdargs(参数object, commandargs);
        console.log("\n");
        console.log(`开发模式 启动 webpack-dev-server`);
        console.log("\n");
        执行命令(command, commandargs);
    } else if ("build" === operation || "production" === mode) {
        let command: string, commandargs: string[];
        console.log("\n");
        console.log(`生产模式 启动 webpack`);
        console.log("\n");
        process.env.NODE_ENV = "production";
        Reflect.set(参数object, "mode", process.env.NODE_ENV);
        生成入口文件(sourcefiles, destfiles);
        command = commandfind(webpackcmd);
        commandargs = [];
        changecmdnpx(command, commandargs, (cmd: string) => {
            command = cmd;
        });

        addparamstocmdargs(参数object, commandargs);
        执行命令(command, commandargs);
    } else {
        showhelp();
    }
}

function addparamstocmdargs(参数object: object, commandargs: string[]) {
    Object.entries(参数object).forEach(([key, value]) => {
        commandargs.push(`--${key}=${value}`);
    });
}

function changecmdnpx(
    command: fs.PathLike,
    commandargs: string[],
    setcmd: { (cmd: string): void }
) {
    if (!fs.existsSync(command)) {
        commandargs.unshift(webpackcmd);
        setcmd("npx" + (process.platform === "win32" ? ".cmd" : ""));
    }
}
