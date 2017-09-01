let gulp = require('gulp');
let del = require('del');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let ngAnnotate = require('gulp-ng-annotate');
let plumber = require('gulp-plumber');
let notify = require('gulp-notify');
let gutil = require('gulp-util');
let uglify = require('gulp-uglify');
let sourceMaps = require('gulp-sourcemaps');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let livereload = require('gulp-livereload');
let jshint = require('gulp-jshint');
// let angularjs = require('./build/angularjs.build');

// File paths
const CONFIG = {
		VENDOR: [
				'node_modules/angular/angular.js',
				'node_modules/angular-animate/angular-animate.js',
				'node_modules/angular-aria/angular-aria.js',
				'node_modules/angular-sanitize/angular-sanitize.js'
		],
		SCRIPTS: [
				'src/app/**/*.module.js',
				'src/app/**/*.js'
		],
		STYLES: {
				MAIN: 'src/sass/style.scss',
				PATH: 'src/sass/**/*.scss'
		},
		INDEX: 'dev/index.html'
};

gulp.task('lint', function () {
		return gulp.src(CONFIG.SCRIPTS)
				.pipe(plumber({
						errorHandler: function (err) {
								notify.onError({
										title: 'Gulp error in ' + err.plugin,
										message: err.toString()
								})(err);

								// play a sound once
								gutil.beep();
						}
				}))
				.pipe(jshint());
});

// Assets

// Dev tasks
gulp.task('dev:vendorScripts', function () {
		return gulp.src(CONFIG.VENDOR)
				.pipe(plumber({
						errorHandler: function (err) {
								notify.onError({
										title: 'Gulp error in ' + err.plugin,
										message: err.toString()
								})(err);

								// play a sound once
								gutil.beep();
						}
				}))
				.pipe(concat('vendor.js'))
				.pipe(uglify())
				.pipe(gulp.dest('dev/scripts'));
});

gulp.task('dev:scripts', function () {
		return gulp.src(CONFIG.SCRIPTS)
				.pipe(plumber({
						errorHandler: function (err) {
								notify.onError({
										title: 'Gulp error in ' + err.plugin,
										message: err.toString()
								})(err);

								// play a sound once
								gutil.beep();
						}
				}))
				.pipe(ngAnnotate())
				.pipe(sourceMaps.init())
				.pipe(babel({
						presets: ['es2015']
				}))
				.pipe(concat('angular.bundle.js'))
				.pipe(uglify())
				.pipe(sourceMaps.write())
				.pipe(gulp.dest('dev/scripts'))
				.pipe(livereload());
});

gulp.task('dev:styles', function () {
		return gulp.src(CONFIG.STYLES.MAIN)
				.pipe(plumber({
						errorHandler: function (err) {
								notify.onError({
										title: 'Gulp error in ' + err.plugin,
										message: err.toString()
								})(err);

								// play a sound once
								gutil.beep();
						}
				}))
				.pipe(sourceMaps.init())
				.pipe(autoprefixer())
				.pipe(sass({
						outputStyle: 'compressed'
				}))
				.pipe(sourceMaps.write())
				.pipe(gulp.dest('dev/styles'))
				.pipe(livereload());
});

gulp.task('dev:index', function () {
		return gulp.src(CONFIG.INDEX)
				.pipe(plumber({
						errorHandler: function (err) {
								notify.onError({
										title: 'Gulp error in ' + err.plugin,
										message: err.toString()
								})(err);

								// play a sound once
								gutil.beep();
						}
				}))
				.pipe(gulp.dest('dev'))
				.pipe(livereload());
});

// Dist tasks
gulp.task('dist:scripts', function () {
		return gulp.src(CONFIG.SCRIPTS)
				.pipe(plumber({
						errorHandler: function (err) {
								notify.onError({
										title: 'Gulp error in ' + err.plugin,
										message: err.toString()
								})(err);

								// play a sound once
								gutil.beep();
						}
				}))
				.pipe(ngAnnotate())
				.pipe(sourceMaps.init())
				.pipe(babel({
						presets: ['es2015']
				}))
				.pipe(concat('angular.bundle.js'))
				.pipe(uglify())
				.pipe(sourceMaps.write())
				.pipe(gulp.dest('dist/js'))
				.pipe(livereload());
});

gulp.task('dist:styles', function () {
		return gulp.src(CONFIG.STYLES.MAIN)
				.pipe(plumber({
						errorHandler: function (err) {
								notify.onError({
										title: 'Gulp error in ' + err.plugin,
										message: err.toString()
								})(err);

								// play a sound once
								gutil.beep();
						}
				}))
				.pipe(sourceMaps.init())
				.pipe(autoprefixer())
				.pipe(sass({
						outputStyle: 'compressed'
				}))
				.pipe(sourceMaps.write())
				.pipe(gulp.dest('dist/css'))
				.pipe(livereload());
});

// Default (build dev, serve)
gulp.task('default', [
		'dev:clean',
		'lint',
		'dev:vendorScripts',
		'dev:scripts',
		'dev:styles',
		'dev:index',
		'serve'
], function () {
		console.log('---Starting Default task---');
});

// Dist (build dist) !!!PLEASE USE THIS BEFORE COMMITTING TO MASTER!!!
gulp.task('dist', [
		'dist:clean',
		'lint',
		''
]);

// Watch
gulp.task('serve', function () {
		console.log('---Starting Watch task---');
// 	require('./index.js');
		livereload.listen();
		gulp.watch(CONFIG.INDEX, ['angularIndex']);
		gulp.watch(CONFIG.SCRIPTS, ['lint']);
		gulp.watch(CONFIG.SCRIPTS, ['angularScripts']);
		gulp.watch(CONFIG.STYLES.PATH, ['angularStyles']);
});
