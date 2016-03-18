'use strict';
/* tasks/clean.js */

module.exports = (gulp, del, outputDir, vinylPaths, gIf, yargs, print) => {
    gulp.task('clean', () => {
        let args = yargs.argv;
        return gulp
            .src(outputDir + '**/*.js')
            .pipe(gIf(args.verbose, print()))
            .pipe(vinylPaths(del));
    });
};