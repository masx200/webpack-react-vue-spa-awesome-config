/*  webpack --output-library-target=umd -p  -o ./lib/polyfill.min.js  --verbose ./polyfill/index.js   */
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "rollup-plugin-json";
export default [];
