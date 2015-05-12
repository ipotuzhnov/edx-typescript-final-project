var gulp = require('gulp'),
    srcmap = require('gulp-sourcemaps'),
    ts = require('gulp-typescript');

var tsProject = ts.createProject('scripts/tsconfig.json');/*, {
  sortOutput: true
});*/

gulp.task('release', function() {
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(gulp.dest('release'));
});


gulp.task('debug', function() {
  var tsResult = tsProject.src()
    .pipe(srcmap.init())
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(srcmap.write('.'))
    .pipe(gulp.dest('debug'));
});

gulp.task('watch', function() {
  gulp.watch(['debug']);
});

gulp.task('default', ['debug', 'watch']);
