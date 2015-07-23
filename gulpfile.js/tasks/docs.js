var config        = require('../config/docs');
var gulp          = require('gulp');
var browserSync   = require('browser-sync');

gulp.task('docs', function () {
  return gulp.src(config.watch)
    .pipe(browserSync.reload({stream: true}));
});
