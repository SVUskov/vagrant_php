var gulp = require('gulp');
var rename = require("gulp-rename");
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
// css
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
//js
var concatScript = require('gulp-concat-script');
var jasmine = require('gulp-jasmine');

gulp.task('connect', function() {
	connect.server({
		root: './',
		livereload: true
	});
});


gulp.task('css', function () {
	return gulp.src('assets/**/*.css')
		.pipe(concatCss("final.css"))
		.pipe(minifyCss())
		.pipe(rename('final.min.css'))
		.pipe(gulp.dest('dist/'))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	return gulp.src('assets/**/*.js')
		.pipe(concatScript("final.js"))
		.pipe(jasmine())
		.pipe(rename('final.min.js'))
		.pipe(gulp.dest('dist/'))
		.pipe(connect.reload());
});

gulp.task('html', function () {
	gulp.src('./**/*.html')
		.pipe(connect.reload());
});

gulp.task('watch',function(){
	gulp.watch('assets/**/*.css',['css']);
	gulp.watch('assets/**/*.js',['js']);
	gulp.watch('./**/*.html',['html'])
});
gulp.task('default',['connect','html','css','js','watch'])