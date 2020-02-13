/**
 * @param {string} t
 */
export function commandfind(t) {
    return path.join(
        __dirname,
        "../",
        "node_modules",
        ".bin",
        t.trim() + (process.platform === "win32" ? ".cmd" : "")
    );
}
import path from "path";
import process from "process";
