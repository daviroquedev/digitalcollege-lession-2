process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import reload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import html from 'rollup-plugin-html2';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';

export default () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const extensions = ['.js'];
  return [
    {
      input: ['src/index.js'],
      output: {
        format: 'es',
        dir: 'dist'
      },
      plugins: [
        !isProduction &&
          serve({
            contentBase: ['dist', 'public'],
            open: false,
            port: process.env.PORT || 3000,
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          }),
        !isProduction &&
          reload({
            watch: 'dist'
          }),
        copy({
          targets: [{ src: 'src/assets/**/*', dest: 'dist/assets' }]
        }),
        html({
          template: './public/index.html'
        }),
        postcss(),
        resolve({
          extensions
        }),
        json(),
        babel({
          exclude: 'node_modules/**',
          extensions,
          babelHelpers: 'bundled'
        }),
        isProduction && terser()
      ]
    }
  ];
};
