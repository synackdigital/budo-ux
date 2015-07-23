var config        = require('../config/styles');
var gulp          = require('gulp');
var changed       = require('gulp-changed');
var postcss       = require('gulp-postcss');
var plugins       = require('postcss-load-plugins')();
var cssnext       = require("cssnext");
var browserSync   = require('browser-sync');

gulp.task('styles', function () {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(postcss([
      plugins.import(),
      plugins.mixins(),
      plugins.cssnext({
        import: false,
        url: false
      })
    ]))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
