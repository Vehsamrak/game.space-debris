var gulp = require('gulp');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');
var merge = require('merge-stream');

gulp.task('default', function () {
    var phaser = gulp.src('./lib/phaser.min.js');

    var ts = gulp.src('src/**/*.ts')
        .pipe(typescript({
            noImplicitAny: true
        }));

    return merge(phaser, ts)
        .pipe(concat('scripts.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./web/js'));
});
