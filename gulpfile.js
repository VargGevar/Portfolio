const gulp = require('gulp')
const stylus = require('gulp-stylus')
const pug = require('gulp-pug')
const ts = require('gulp-typescript')
const plumber = require('gulp-plumber')
const sync = require('browser-sync')
const browser = sync.create()


gulp.task('style', () => {

  gulp.src('./src/css/index.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('./dist'))

})

gulp.task('script', () => {

  gulp.src('./src/script/index.ts')
    .pipe(plumber())
    .pipe(ts({
      noImplicitAny: true,
      outFile: 'output.js',
      target: 'es6'
    }))
    .pipe(gulp.dest('./dist'))

})

gulp.task('pug', () => {

  gulp.src('./src/views/index.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./dist'))

})

gulp.task('start', ['pug', 'style', 'script', 'assets'])

gulp.task('watch', () => {
  gulp.watch('./src/**/*', ['start'], () => browser.sync() )
}) 

gulp.task('default', ['browser', 'start', 'watch'])

gulp.task('browser', () => browser.init({server: './dist'}))

gulp.task('assets', () => gulp.src('./src/assets/*') .pipe(gulp.dest('./dist/assets')))