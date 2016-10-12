// dependencies
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var replace = require('gulp-replace');

// concat
gulp.task('concat', function() {
  return gulp.src(['src/settings/*.scss', 'src/tools/*.scss', 'src/utilities/*.scss'])
    .pipe(concat('inuit-displays.scss'))
    .pipe(gulp.dest('./'));
});

// sass
gulp.task('sass', function() {
  return gulp.src('./src/dist/*.scss')

    // sass
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))

    // remove stylelint rules for scss
    .pipe(replace(/\/\* stylelint-(enable|disable) (.*?) \*\//gm, ''))

    // add linebreaks before/after block comments /**
    .pipe(replace(/(\/\*{2}([\s\S]+?)\*\/)/g, "\n$1\n"))

    // convert multiple line breaks to one linebreak
    .pipe(replace(/^\s*[\r\n]/gm, "\n"))

    // dist
    .pipe(gulp.dest('./dist/'));
});

// build
gulp.task('build', ['concat', 'sass']);

// watch
gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['build']);
});

// default
gulp.task('default', ['build', 'watch']);