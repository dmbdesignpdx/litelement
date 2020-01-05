const gulp = require('gulp')
const sass = require('gulp-sass')
const replace = require('gulp-replace')
const maps = require('gulp-sourcemaps')
const fs = require('fs')

// For forward-compatibility
sass.compiler = require('node-sass')


const crit = {
  src: `./src/styles/critical/critical.scss`,
  dest: `./src/styles/critical`,
}

const master = {
  src: `./src/styles/master/master.scss`,
  dest: `./public/css`,
}

const public = {
  rel: `../../../public/css`
}


/**
 * BUILDS
 */
const buildCrit = () => (
  gulp.src(crit.src)
    .pipe(maps.init())
    .pipe(sass.sync({
      outputStyle: `compressed`,
    })).on(`error`, sass.logError)
    .pipe(maps.write(public.rel, {
      sourceMappingURL: file => `/css/${file.relative}.map`
    }))
    .pipe(gulp.dest(crit.dest))
)

const buildMaster = () => (
  gulp.src(master.src)
    .pipe(maps.init())
    .pipe(sass.sync({
      outputStyle: `compressed`,
    })).on(`error`, sass.logError)
    .pipe(maps.write(public.rel, {
      sourceMappingURL: file => `/css/${file.relative}.map`
    }))
    .pipe(gulp.dest(master.dest))
)


/**
 * WATCHERS
 */
const watchCrit = () => {
  gulp.watch([
    crit.src,
  ], gulp.series(buildCrit, injectCrit))
}

const watchMaster = () => {
  gulp.watch([
    master.src,
  ], buildMaster)
}


/**
 * INJECTS
 */
const injectCrit = () => (
  gulp.src(`./src/pages/index.html`)
    .pipe(replace(/<!-- inject:critical-css -->/, () => {
      const styles = fs.readFileSync(`./src/styles/critical/critical.css`, `utf-8`)
      return `<style>${styles}</style>`
    }))
    .pipe(gulp.dest(`./public`))
)


exports.build = gulp.series(buildCrit, injectCrit, buildMaster)
exports.watch = gulp.series(buildCrit, injectCrit, buildMaster, watchCrit, watchMaster)
