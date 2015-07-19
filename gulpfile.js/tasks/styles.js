var config    = require('../config');
var gulp      = require('gulp');
var postcss   = require('gulp-postcss');
var plugins   = require('postcss-load-plugins')();
var cssnext   = require("cssnext");

gulp.task('styles', function () {
  return gulp.src(config.app + '/styles/*.css')
    .pipe(postcss([
      plugins.cssnext({
        // compress: true
      })
    ]))
    .pipe(gulp.dest(config.build + '/styles'));
});
