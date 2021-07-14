/**
 * @param {import("fs").PathLike} p
 */
export default function 判断并创建目录(p: fs.PathLike) {
    if (!fs.existsSync(p)) {
        console.log("所需的目录不存在,创建目录", p);
        console.log("\n");
        fs.mkdirSync(p);
    }
}
import fs from "fs";
