const gulp = require('gulp');
const scripts = require('../config/scripts');
const styles = require('../config/styles');
const fonts = require('../config/fonts');
const images = require('../config/images');

gulp.task('watch', ['build', 'bs'], function() {
  gulp.watch(scripts.watch, ['scripts']);
  gulp.watch(styles.watch, ['styles']);
  gulp.watch(fonts.watch, ['fonts']);
  gulp.watch(images.watch, ['images']);
});
