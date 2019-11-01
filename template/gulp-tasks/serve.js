'use strict'
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/style.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'expanded', includePaths: './node_modules'}).on('error', sass.logError))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./assets/css'))
      .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

  browserSync.init({
      port: 3000,
      server: "./",
      ghostMode: false,
      notify: false
  });

  gulp.watch('./assets/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('./assets/js/**/*.js').on('change', browserSync.reload);

}));



// Static Server without watching scss files
gulp.task('serve:lite', function() {

  browserSync.init({
      server: "./",
      ghostMode: false,
      notify: false
  });

  gulp.watch('**/*.css').on('change', browserSync.reload);
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);

});



gulp.task('sass:watch', function () {
  gulp.watch('.assets//scss/**/*.scss');
});