var config        = require('../config/styles');
var gulp          = require('gulp');
var postcss       = require('gulp-postcss');
var plugins       = require('postcss-load-plugins')();
var cssnext       = require("cssnext");
var browserSync   = require('browser-sync');

gulp.task('styles', function () {
  return gulp.src(config.src)
    .pipe(postcss([
      plugins.import(),
      plugins.mixins(),
      plugins.nested(),
      plugins.cssnext({
        import: false,
        url: false
      })
    ]))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
