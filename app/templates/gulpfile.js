var gulp = require('gulp');

var less = require('gulp-less');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');
var concat = require('gulp-concat');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var inject = require("gulp-inject");

var paths = {
    src: './src/<%= moduleName %>.js',
    styles: './styles/*.less',
    tests: './test/unit/*.js',
    functionalTests: './test/functional/*.js',
    dist: './dist',
    karma: function () {
        return [
            this.src,
            this.tests,
            './bower_components/sinonjs/sinon.js'
        ];
    }
};


gulp.task('inject:tests', function () {
    var target = gulp.src('./TestsRunner.html');
    var sources = gulp.src(paths.functionalTests, {read: false});

    return target.pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./'));
});

gulp.task('less', function () {
    gulp.src(paths.styles)
        .pipe(less({compress: true}))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('scripts:prod', function () {
    gulp.src(paths.src)
        .pipe(concat('<%= moduleName %>.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('jshint', function () {
    gulp.src([paths.src, paths.tests, paths.functionalTests])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function () {
    gulp.watch(paths.styles, ['less']);
    gulp.watch([paths.tests, paths.src], ['test']);
    gulp.watch(paths.functionalTests, ['test:e2e']);
});

gulp.task('unit', function() {
    return gulp.src(paths.karma())
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'start'
        }))
        .on('error', function(err) {
            throw err;
        });
});

gulp.task('e2e', function () {
    return gulp.src('TestsRunner.html')
        .pipe(mochaPhantomJS());
});

gulp.task('build', ['less', 'scripts:prod']);
gulp.task('test', ['jshint', 'unit']);
gulp.task('test:e2e', ['inject:tests', 'e2e']);
