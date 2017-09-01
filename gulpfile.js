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
let webserver = require('gulp-webserver');

// File paths
const PKG_NAME = 'bcc-calendar';
const CONFIG = {
		VENDOR: [
				'node_modules/angular/angular.js',
				'node_modules/angular-animate/angular-animate.js',
				'node_modules/angular-aria/angular-aria.js',
				'node_modules/angular-sanitize/angular-sanitize.js',
				'node_modules/moment/moment.js'
		],
		SCRIPTS: [
				'src/app/**/*.module.js',
				'src/app/**/*.js'
		],
		STYLES: {
				MAIN: 'src/sass/' + PKG_NAME + '.scss',
				PATH: 'src/sass/**/*.scss'
		}
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
gulp.task('dev:clean', function () {
		return del.sync([
				'dev/scripts/',
				'dev/styles/'
		]);
});

gulp.task('dev:vendor', function () {
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
				.pipe(concat(PKG_NAME + '.min.js'))
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

// Dist tasks
gulp.task('dist:clean', function () {
		del.sync([
				'dist/css/',
				'dist/js/'
		]);
});

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
				.pipe(babel({
						presets: ['es2015']
				}))
				.pipe(concat('bcc-calendar.min.js'))
				.pipe(uglify())
				.pipe(gulp.dest('dist/js'));
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
				.pipe(autoprefixer())
				.pipe(sass({
						outputStyle: 'compressed'
				}))
				.pipe(gulp.dest('dist/css'));
});

// Default (build dev, serve)
gulp.task('default', [
		'dev:clean',
		'lint',
		'dev:vendor',
		'dev:scripts',
		'dev:styles',
		'serve',
		'watch'
], function () {
		console.log('---Starting Default task---');
});

// Dist (build dist) !!!PLEASE USE THIS BEFORE COMMITTING TO MASTER!!!
gulp.task('dist', [
		'dist:clean',
		'lint',
		'dist:scripts',
		'dist:styles'
]);

// TODO: use livereload simple server
// Webserver
gulp.task('serve', function () {
		gulp.src('dev')
				.pipe(webserver({
						livereload: true,
						open: true
				}));
});

// Watch
gulp.task('watch', function () {
		console.log('---Starting Watch task---');
		livereload.listen();
		gulp.watch(CONFIG.SCRIPTS, ['lint']);
		gulp.watch(CONFIG.SCRIPTS, ['dev:scripts']);
		gulp.watch(CONFIG.STYLES.PATH, ['dev:styles']);
});
