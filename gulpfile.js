var gulp = require('gulp');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');
var merge = require('merge-stream');

gulp.task('default', function () {
    var phaser = gulp.src('./lib/phaser.min.js');

    var ts = typescript.createProject('tsconfig.json').src()
        .pipe(typescript({
            target: "es5",
            noImplicitAny: true,
            out: 'scripts.js'
        }));

    return merge(phaser, ts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./web/js'));
});
