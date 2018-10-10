const gulp = require('gulp');
const stylus = require('gulp-stylus');
const pug = require('gulp-pug');
const ts = require('gulp-typescript');
const plumber = require('gulp-plumber');



gulp.task('style', function () {
    gulp.src('./src/css/index.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('./dist'));
})

gulp.task('script', function () {
    gulp.src('./src/script/index.ts')
    .pipe(plumber())
    .pipe(ts({
        noImplicitAny: true,
        outFile: 'output.js',
        target: 'es6'
    }))
    
    .pipe(gulp.dest('./dist'));
})

gulp.task('pug', function () {
    gulp.src('./src/views/index.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./dist'));
})

gulp.task('start', ['pug', 'style', 'script']);

gulp.task('watch', function () {
    gulp.watch('./src/**/*', ['start']);
})

gulp.task('default',['start','watch'])