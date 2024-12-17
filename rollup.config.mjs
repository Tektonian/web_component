
import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";
import cssimport from "postcss-import";
import { dts } from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-commonjs"
import commonjs from "@rollup/plugin-commonjs";


const External = [
  "react",
  "react-dom",
  "@radix-ui/themes",
  "@toss/react",
  "@mui/joy",
  "@mui/material",
  "@mui/x-date-pickers",
  "@mui/x-date-pickers/AdapterDateFnsV3/index.js",
  "@mui/styled-engine",
  "@mui/icons-material",
  "@emotion/react",
  "@emotion/styled",
  "@emotion/cache",
  "@emotion/serialize",
  "ethereum-blockies",
  '@fontsource/noto-sans-kr',

];

export default [
  {
    input: './src/components/index.ts',
    External,
    output: [{
      file: 'dist/esm/index.js',
      format: 'esm',
    }],
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      })
    ],
  },
  {
    input: './src/components/index.ts',
    output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    External,
  },
  {
    input: './src/components/index.ts',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      })
    ],
    External,
  },
  {
    input: './src/components/index.ts',
    output: [{ file: 'dist/cjs/index.d.ts', format: 'cjs' }],
    plugins: [dts()],
    External,
  }
];
