'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');

gulp.task('sass', function () {

	return gulp.src('./scss/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./'));

});
 
gulp.task('sass:watch', ['sass'], function () {

	gulp.watch('./scss/*.scss', ['sass']);

});
 
gulp.task('ts', function () {

    return gulp.src('./scripts/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'script.js'
        }))
        .pipe(gulp.dest('./'));

});

gulp.task('ts:watch', ['ts'], function() {

    gulp.watch('./scripts/*.ts', ['ts']);

});

gulp.task('happy', ['sass:watch', 'ts:watch'], function() {
	// We are calling other watch tasks using dependencies
});