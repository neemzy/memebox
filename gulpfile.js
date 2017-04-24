var browserify = require('browserify'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream'),

    srcPath = 'src/';
    distPath = 'dist/';

gulp.task('js', function() {
    return browserify(srcPath + 'scripts/index.js')
        .transform('babelify', { presets: ['env', 'react'] })
        .bundle()
        .pipe(source('memeholder.js'))
        .pipe(gulp.dest(distPath));
});

gulp.task('css', function() {
    gulp.src(srcPath + 'stylesheets/index.less')
        .pipe(less())
        .pipe(rename('memeholder.css'))
        .pipe(gulp.dest(distPath));
});

gulp.task('default', ['js', 'css']);
