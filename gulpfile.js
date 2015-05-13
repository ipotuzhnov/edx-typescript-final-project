var gulp = require('gulp'),
    merge = require('merge2'),
    srcmap = require('gulp-sourcemaps'),
    ts = require('gulp-typescript');

var tsProject = ts.createProject('scripts/tsconfig.json');

gulp.task('scripts', function() {
  var tsResult = tsProject.src()
    .pipe(srcmap.init())
    .pipe(ts({
      module: "amd",
      target: "es5"
    }));

  return merge([
    tsResult.js
      .pipe(srcmap.write('.'))
      .pipe(gulp.dest('scripts'))
  ]);
});

gulp.task('watch', ['scripts'], function() {
  gulp.watch('scripts/*.ts', ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
