import path from "path";
import process from "process";
// const fs = require("fs");
const pwddir = process.cwd();

const inputfiles = ["public/index.html", "src/index.js", ];
const sourcefiles = inputfiles.map((p) =>
    path.resolve(__dirname, "../", "release", p)
);
const destfiles = inputfiles.map((p) => path.resolve(pwddir, p));

export { sourcefiles, destfiles };
