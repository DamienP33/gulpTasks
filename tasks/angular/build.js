'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');

var configAngular = require('../../config').angular;

/**
 * Build Angular project sources.
 * Detail:
 *  - concat JS files
 *  - add angular dependency injection annotations
 *  - minify JS files
 *  - add sourcemaps
 *
 * @see https://www.npmjs.com/package/gulp-concat
 * @see https://www.npmjs.com/package/gulp-sourcemaps
 * @see https://www.npmjs.com/package/gulp-ng-annotate
 * @see https://www.npmjs.com/package/gulp-uglify
 * @see https://github.com/mishoo/UglifyJS
 */
gulp.task('build-angular', function () {
    gulp.src(configAngular.src)
        .pipe(sourcemaps.init())
        .pipe(concat(configAngular.finalFileName))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(configAngular.dest))
    ;
});