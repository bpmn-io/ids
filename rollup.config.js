import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json' with { type: 'json' };

function pgl(plugins = []) {
  return [
    commonjs(),
    resolve(),
    ...plugins
  ];
}

const srcEntry = './index.js';

export default [
  {
    input: srcEntry,
    output: [
      { file: pkg.exports['.'], format: 'es' }
    ],
    plugins: pgl()
  }
];