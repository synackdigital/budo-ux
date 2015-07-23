var gulp    = require('gulp');
var del     = require('del');
var config  = require('../config');
var styles  = require('../config/styles');

gulp.task('clean', function (cb) {
  del([
    config.dest,
  ], cb);
});

gulp.task('clean:styles', function (cb) {
  del([
    styles.dest,
  ], cb);
});
