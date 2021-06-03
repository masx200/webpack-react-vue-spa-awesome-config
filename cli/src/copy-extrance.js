import process from "process";
const pwddir = process.cwd();
import fs from "fs";
import path from "path";
import 判断并创建目录 from "./ensure-dir";
/**
 * @param {(import("fs").PathLike)[]} sourcefiles
 * @param {string[]} destfiles
 */
export default function 生成入口文件(sourcefiles, destfiles) {
    /**
     * @param {import("fs").PathLike} p
     * @param {number} i
     *
     */
    destfiles.forEach((p, i) => {
        if (!fs.existsSync(p)) {
            console.log(`inputfile  not exsited! ${p}\n`);
            console.log(`initialize inputfile from ${sourcefiles[i]}\n`);
            ["public", "src"]
                .map((t) => path.resolve(pwddir, t))
                .forEach((e) => 判断并创建目录(e));
            fs.copyFileSync(sourcefiles[i], p);
        }
    });
}
