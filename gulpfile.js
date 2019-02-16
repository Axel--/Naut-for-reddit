'use strict';

var pkg = require('./package.json');

var gulp = require('gulp'),
    fs = require('fs'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    replace = require('gulp-replace'),
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    gutil = require('gulp-util'),
    snoowrap = require('snoowrap');

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

// Upload to reddit
gulp.task('reddit-upload', () => {
    return new Promise(function(resolve, reject) {
        try {
            let reddit = require('./reddit.json');

            try {
                const r = new snoowrap({
                    userAgent: `${pkg.name} ${pkg.version}`,
                    clientId: reddit.client_id,
                    clientSecret: reddit.client_secret,
                    refreshToken: reddit.refresh_token
                });

                r.getSubreddit(reddit.subreddit).updateStylesheet({css: fs.readFileSync("./stylesheet.css", "utf-8"), reason: `${pkg.name} ${pkg.version}`});
                gutil.log(`Successfully uploaded to ${reddit.subreddit}`);

                resolve();
            }

            catch(e) {
                gutil.log('Error uplaoding to subreddit: ', e);
                reject();
            }
        }

        catch(e) {
            gutil.log('Error loading reddit config: ', e);
            reject();
        }
    });
});

// Watch and upload to reddit
gulp.task('watch-upload', () => {
    gulp.watch('src/**/*', gulp.series('compile', 'reddit-upload'));
});