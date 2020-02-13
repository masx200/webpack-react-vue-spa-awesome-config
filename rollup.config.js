import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
const manglecompressplugin = terser({
    toplevel: true,
    sourcemap: true,
    compress: true,
    mangle: { properties: false },
    output: {
        ascii_only: !0,
        comments: !1,
        beautify: true
    }
});
const dropcompressplugin = terser({
    sourcemap: true,
    toplevel: true,
    output: { ecma: 5, comments: !1, ascii_only: !0 },
    compress: {
        toplevel: true,
        unused: true,
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"]
    },
    mangle: { properties: false }
});
const banner = `#!/usr/bin/env node`;
export default [
    {
        input: "./polyfill/src/index.js",
        output: [
            {
                file: "./polyfill/polyfill.min.js",
                format: "iife",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            json(),
            babel({
                presets: ["@babel/preset-env"]
            }),
            dropcompressplugin
        ]
    },
    {
        external: ["path", "fs", "process", "child_process"],
        input: "./cli/src/index.js",
        output: [
            {
                banner,
                file: "./bin/index.js",
                format: "commonjs",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            json(),
            babel({
                presets: ["@babel/preset-env"]
            }),

            manglecompressplugin
        ]
    }
];
