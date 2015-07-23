var gulp     = require('gulp');
var watch    = require('gulp-watch');
var config   = require('../config');
var styles   = require('../config/styles');

gulp.task('watch', ['build', 'browserSync'], function() {
  watch(styles.watch, function() { gulp.start('styles'); });
});
