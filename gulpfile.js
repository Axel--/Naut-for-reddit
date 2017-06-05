'use strict';

var pkg = require('./package.json');

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    replace = require('gulp-replace'),
    header = require('gulp-header'),
    gutil = require('gulp-util');

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    t = new Date(),
    datestr = t.getDate() + ' ' + months[t.getMonth()] + ' ' + t.getFullYear(),
    banner = ['/*',
        '    <%= pkg.name %> v<%= pkg.version %>',
        '    Stylesheet by <%= pkg.author %>',
        '    Maintained by /u/RenegadeAI & /u/LackingAGoodName',
        '    Last modified: <%= datestr %>',
        '    Find out more on /r/Naut',
        '*/',
        '',
        ''].join('\n');


gulp.task('compile', function() {
    return gulp.src('src/naut.scss')
        .pipe(sass({
            includePaths: []
        }))
        .on('error', sass.logError)
        .on('error', function() {
            gutil.beep();
        })
        .pipe(cleanCSS({
            inline: ['none']
        }))
        .pipe(replace('@charset "UTF-8";', ''))
        .pipe(header(banner, {pkg, datestr}))
        .pipe(gulp.dest('./'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('src/**/*',['compile']);
});