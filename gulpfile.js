var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');

gulp.task('sass', function () {
    gulp.src('./app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'));
});

gulp.task('scripts', function() {
    //single entry point to browserify
    gulp.src(['app/js/json_ui.js'])
        .pipe(browserify({
          shim: {
            angular: {
                path: './app/bower_components/angular/angular.js',
                exports: 'angular'
            },
            'angular-route': {
                path: './app/bower_components/angular-route/angular-route.js',
                exports: "angular.module('ngRoute')",
                depends: {
                    angular: 'angular'
                }
            }
          }
        }))
        .pipe(gulp.dest('./app/dist/'))
});

gulp.task('watch', function () {
  gulp.watch('./app/scss/*.scss', ['sass']);
  gulp.watch('./app/js/**/*.js', ['scripts']);
});

// gulp.task('uglify', function() {
//   gulp.src('./app/dist/json_ui.js')
//     .pipe(uglify())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./app/dist'))
// });

gulp.task('default', ['sass', 'scripts', 'watch']);
// gulp.task('compress', ['uglify']);
