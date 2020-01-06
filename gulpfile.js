const gulp = require('gulp')
const sass = require('gulp-sass')
const replace = require('gulp-replace')
const fs = require('fs')

// For forward-compatibility
sass.compiler = require('node-sass')


const crit = {
  src: `./src/styles/critical.scss`,
  dest: `./src/styles`,
}


/**
 * BUILD
 */
const buildCrit = () => (
  gulp.src(crit.src)
    .pipe(sass.sync({
      outputStyle: `compressed`,
    })).on(`error`, sass.logError)
    .pipe(gulp.dest(crit.dest))
)


/**
 * WATCHE
 */
const watchCrit = () => {
  gulp.watch([
    crit.src,
  ], gulp.series(buildCrit, injectCrit))
}


/**
 * INJECT
 */
const injectCrit = () => (
  gulp.src(`./src/pages/index.html`)
    .pipe(replace(/<!-- inject:critical-css -->/, () => {
      const styles = fs.readFileSync(`./src/styles/critical.css`, `utf-8`)
      return `<style>${styles}</style>`
    }))
    .pipe(gulp.dest(`./public`))
)


exports.build = gulp.series(buildCrit, injectCrit)
exports.watch = gulp.series(buildCrit, injectCrit, watchCrit)
