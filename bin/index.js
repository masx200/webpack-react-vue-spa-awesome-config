const { exec } = require("child_process");

// let spawnObj;
let commandstring;
const path = require("path");
console.log("webpack-react-vue-spa-awesome-config");

const webpackconfigfile = path.resolve(
  __dirname,
  "../",
  "./release/config/webpack.config.js"
);

const commandfind = t =>
  path.resolve(__dirname, "../", "node_modules", ".bin", t);
if (process.argv.includes("start")) {
  const command = commandfind(`webpack-dev-server `);
  const commandargs = ["--config", webpackconfigfile, "--mode=development"];
  commandstring = command + " " + commandargs.join(" ");

  //   spawnObj = spawn(command, commandargs, { cwd: process.cwd() });
} else if (process.argv.includes("build")) {
  const command = commandfind(`webpack `);
  const commandargs = ["--config", webpackconfigfile, "--mode=production"];
  commandstring = command + " " + commandargs.join(" ");
  //   console.log(commandstring);
  //   spawnObj = spawn(command, commandargs, { cwd: process.cwd() });
} else {
  console.log("usage:");
  console.log("webpack-react-vue-spa-awesome-config start");
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
exec(commandstring, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
