var gulp = require('gulp');
var plugins = require('gulp-load-plugins');

plugins.rename = require('gulp-rename');
plugins.uglify = require('gulp-uglify');
plugins.jshint = require('gulp-jshint');

gulp.task('uglify',function(){
 gulp.src('js/jquery.js')
    .pipe(plugins.uglify())  //压缩
    .pipe(plugins.rename('jquery.min.js')) //会将jquery.js重命名为jquery.min.js
    .pipe(gulp.dest('js'));
});
gulp.task('jshint',function(){
 gulp.src('js/jquery.min.js')
    .pipe(plugins.jshint())  //压缩
    .pipe(plugins.jshint.reporter());
});
gulp.task('default',['uglify','jshint'],function(){
    console.log('uglify and jshint is done');
});