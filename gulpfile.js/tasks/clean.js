var gulp      = require('gulp');
var del       = require('del');
var config    = require('../config');
var styles    = require('../config/styles');
var fonts     = require('../config/fonts');

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

gulp.task('clean:fonts', function (cb) {
  del([
    fonts.dest,
  ], cb);
});
