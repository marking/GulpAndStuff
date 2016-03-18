'use strict';
/* tasks/default.js */

module.exports = (gulp, concat, uglify, jsFiles, gutil, merge, print, outputDir, yargs, gIf) => {
    gulp.task('default', () => {
        let args = yargs.argv;
        gutil.log('Inside default', gutil.colors.magenta(jsFiles));
        //let flat = gulp
        //    .src(jsFiles)
        //    .pipe(print())
        //    .pipe(gulp.dest('output/flat/'));

        //let combined = gulp
        //    .src(jsFiles)
        //    .pipe(print())
        //    .pipe(concat('combined.js'))
        //    .pipe(gulp.dest('output/'));

        //let min = combined
        //    .pipe(print())
        //    .pipe(uglify())
        //    .pipe(gulp.dest('output/min/'));

        //return merge(flat, min);
        return gulp
            .src(jsFiles)
            .pipe(gIf(args.verbose, print()))
            .pipe(gulp.dest(outputDir + '/flat'))
            .pipe(gIf(args.verbose, print()))
            .pipe(concat('combined.js'))
            .pipe(gIf(args.verbose, print()))
            .pipe(gulp.dest(outputDir))
            .pipe(gIf(args.verbose, print()))
            .pipe(uglify())
            .pipe(gIf(args.verbose, print()))
            .pipe(gulp.dest(outputDir + 'min'));
    });
};