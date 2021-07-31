import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-ts";
const manglecompressplugin = terser({
    toplevel: true,
    //   sourcemap: true,
    compress: true,
    mangle: { properties: false },
    output: {
        ascii_only: !0,
        comments: !1,
        beautify: true,
    },
});
const banner = `#!/usr/bin/env node\n`;
export default [
    {
        external: ["path", "fs", "process", "child_process"],
        input: "./cli/index.ts",
        output: [
            {
                banner,
                file: "./bin/cli.js",
                format: "commonjs",
                sourcemap: true,
            },
        ],
        plugins: [
            typescript(),
            resolve(),
            commonjs(),
            json(),
            babel({
                babelHelpers: "bundled",
                presets: ["@babel/preset-env"],
                extensions: [".js", ".ts"],
            }),

            manglecompressplugin,
        ],
    },
    {
        external: ["path", "fs", "process", "child_process"],
        input: "./lib/index.ts",
        output: [
            {
                banner,
                file: "./bin/config.js",
                format: "commonjs",
                sourcemap: true,
            },
        ],
        plugins: [
            typescript(),
            resolve(),
            commonjs(),
            json(),
            babel({
                babelHelpers: "bundled",
                presets: ["@babel/preset-env"],
                extensions: [".js", ".ts"],
            }),

            manglecompressplugin,
        ],
    },
];
