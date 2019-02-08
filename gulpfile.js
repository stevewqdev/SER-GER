const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

    gulp.task('sass', () =>
        gulp.src('./sass/*.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            versions: ['last 4 browsers']
        }))
        .pipe(gulp.dest('./dist/css'))
    );

    gulp.task('default', function() {
        gulp.watch('./sass/*.sass', gulp.series('sass'));
      });