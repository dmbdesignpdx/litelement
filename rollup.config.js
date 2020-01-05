import resolve from 'rollup-plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'


const dev = process.env.ROLLUP_WATCH

export default {
  input: 'src/index.ts',
  output: {
    sourcemap: dev,
    format: 'es',
    file: 'public/dist/main.js',
  },
  plugins: [
    resolve(),
    typescript(),
    dev && livereload(`public`),
    !dev && terser({
      output: {
        comments: false,
      }
    }),
  ]
}
