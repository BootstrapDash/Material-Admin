'use strict'
var gulp = require('gulp');
var requireDir = require('require-dir');
requireDir('gulp-tasks');

gulp.task('default', gulp.series('serve'));