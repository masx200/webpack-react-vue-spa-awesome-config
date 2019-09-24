/*  webpack --output-library-target=umd -p  -o ./lib/polyfill.min.js  --verbose ./polyfill/index.js   */
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "rollup-plugin-json";
export default [
  {
    input: "./polyfill/src/index.js",
    output: [
      {
        file: "./polyfill/dist/polyfill.min.js",
        format: "iife",
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      babel({
        // /*     plugins: [
        //       /*   [
        //         "@babel/plugin-transform-react-jsx",
        //         {
        //           pragma: "createElement",
        //           pragmaFrag: "Fragment"
        //         }
        //       ],
        //       "babel-plugin-htm",
        //       "@babel/plugin-proposal-class-properties" */
        //     ], */
        presets: ["@babel/preset-env"]
      }),
      terser({
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
      })
    ]
  }
];
