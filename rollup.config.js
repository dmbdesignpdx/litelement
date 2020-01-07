import resolve from 'rollup-plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'


const dev = process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: {
    sourcemap: dev,
    format: 'es',
    file: 'public/dist/main.js',
  },
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      plugins: [
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-proposal-decorators', { 'decoratorsBeforeExport': true }],
      ]
    }),
    dev && livereload(`public`),
    !dev && terser({
      compress: {
        drop_console: true,
        passes: 2,
      },
      output: {
        comments: false,
      }
    }),
  ]
}
