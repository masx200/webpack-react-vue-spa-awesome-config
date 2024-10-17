import { spawn } from "child_process";
import process from "process";
/**
 *
 * @param {string} command
 * @param { string[]} commandargs
 */

function 执行命令(
    /* commandstring,  */ command: string,
    commandargs: string[]
) {
    // console.log(commandstring);
    console.log("\n");
    console.log([command, ...commandargs]);
    const runobj = spawn(command, commandargs, {
        stdio: ["pipe", "pipe", "pipe"],
        shell: true,
    });
    runobj.stdout.on("data", (data) => {
        console.log(
            ` ${data}`
                .split("\n")
                .filter((t) => t !== "")
                .join("\n\n")
        );
        console.log("\n");
    });
    runobj.stderr.on("data", (data) => {
        console.error(
            ` ${data}`
                .split("\n")
                .filter((t) => t !== "")
                .join("\n\n")
        );
        console.log("\n");
    });
    runobj.on("close", (code) => {
        console.log(`child process exited with code ${code}`);
        process.exit(code || 0);
    });
}
export default 执行命令;
