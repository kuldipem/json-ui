var gulp = require('gulp');
var sass = require('gulp-sass');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');

gulp.task('sass', function () {
    gulp.src('./app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function () {
  gulp.watch('./app/scss/*.scss', ['sass']);
});

// gulp.task('uglify', function() {
//   gulp.src('./app/dist/json_ui.js')
//     .pipe(uglify())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./app/dist'))
// });

gulp.task('default', ['sass', 'watch']);
// gulp.task('compress', ['uglify']);