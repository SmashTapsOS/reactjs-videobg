import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const name = "ReactVideoBg";
const dist = "dist";
const bundleName = "bundle";
const prod = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.js",
  output: [
    {
      file: `${dist}/${bundleName}.cjs.js`,
      format: "cjs"
    },
    {
      file: `${dist}/${bundleName}.esm.js`,
      format: "esm"
    },
    {
      name: name,
      globals: {
        react: "React"
      },
      file: `${dist}/${bundleName}.umd.js`,
      format: "umd"
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    postcss({
      modules: true
    }),
    babel({
      exclude: "node_modules/**"
    }),
    prod && terser(),
    commonjs()
  ]
};
