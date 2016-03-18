'use strict';
// JavaScript source code
const gulp = require('gulp');
let di = require('gulp-di')(gulp, {
        pattern: ['gulp-*', 'gulp.*', '!gulp-di', 'vinyl-paths', 'del', 'yargs'],
        DEBUG: false,
        rename: {
            'gulp-if' : 'gIf'
        }
    })
    .tasks('./tasks')
    .provide('jsFiles', ['Scripts/**/*.js', '!Scripts/**/*min.js', '!Scripts/**/*-vsdoc.js', '!Scripts/**/*intellisense.js', '!Scripts/**/_references.js'])
    .provide('outputDir', 'output/')
    .resolve();