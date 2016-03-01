const gulp = require('gulp');
const changed = require('gulp-changed');
const bs = require('browser-sync').get('bs');
const config = require('../config/fonts');

gulp.task('fonts', function () {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe(bs.stream());
});
