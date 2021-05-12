import process from "process";
import 生成入口文件 from "./copy-extrance";
import path from "path";
import { commandfind } from "./find-command";
import 执行命令 from "./call-command";
import { sourcefiles, destfiles } from "./source-dest-files";

/**
 * @param {string|undefined} operation
 * @param {Record<string,string>} 参数object
 */
export function start(operation, 参数object) {
    const 解析参数config = 参数object["config"];
    // const 解析参数mode = 参数object.mode;
    const 参数reacthotreload = 参数object["react-hot-loader"];
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
        command = commandfind(`webpack`);
        //升级webpack5的修改命令 webpack serve
        commandargs = [
            "serve",
            "--config",
            参数webpackconfigfile,
            "--mode=" + process.env.NODE_ENV,
        ];
        if (参数reacthotreload) {
            commandargs.push("--react-hot-loader=" + 参数reacthotreload);
            //   console.log(`react-hot-loader :  ${参数reacthotreload}`);
            console.log("\n");
        }
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
        command = commandfind(`webpack `);
        commandargs = [
            "--config",
            参数webpackconfigfile,
            "--mode=" + process.env.NODE_ENV,
        ];
        if (解析参数publicpath && 解析参数publicpath.length) {
            commandargs.push("--output-public-path=" + 解析参数publicpath);
            //   console.log(`  output-public-path  :  ${解析参数publicpath}`);
            console.log("\n");
        }
        执行命令(/* commandstring, */ command, commandargs);
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
        console.log(
            "webpack-react-vue-spa-awesome-config build --mode=production"
        );
        console.log("\n");
        process.exit(1);
    }
}
