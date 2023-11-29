
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: "src/app.js",
  output: {
    dir: "dist",
    format: "iife"
  },
  plugins: [
    scss({
      fileName: 'assets/bundle.css',
    }),
    nodeResolve()
  ]
}