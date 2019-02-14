'use strict';

var pkg = require('./package.json');

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    replace = require('gulp-replace'),
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    gutil = require('gulp-util');

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    t = new Date(),
    datestr = t.getDate() + ' ' + months[t.getMonth()] + ' ' + t.getFullYear(),
    header_ = ['/*',
        '    <%= pkg.name %> v<%= pkg.version %>',
        '    Stylesheet by <%= pkg.author %>',
        '    Last modified: <%= datestr %>',
        '    Find out more on /r/Naut',
        '*/',
        '',
        ''].join('\n'),
    footer_ = ['',
        '',
        '/*',
        '    End of Naut',
        '    Add your customizations and addons below!',
        '-------------------------------------------------------------------------- */',
        ''].join('\n');

// Compile task
gulp.task('compile', () => {
    return gulp.src('src/stylesheet.scss')
        .pipe(sass({
            includePaths: []
        }))
        // Instead of exiting on error, log to console and beep
        .on('error', sass.logError)
        .on('error', function() {
            gutil.beep();
        })
        .pipe(cleanCSS({
            inline: ['none']
        }))
        .pipe(replace('@charset "UTF-8";', ''))
        .pipe(header(header_, {pkg, datestr}))
        .pipe(footer(footer_))
        .pipe(gulp.dest('./'));
});

// Watch task
gulp.task('watch', () => {
    gulp.watch('src/**/*', gulp.series('compile'));
});