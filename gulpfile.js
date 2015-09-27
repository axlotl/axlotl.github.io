var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
// var gulpif = require('gulp-if');
// var sprity = require('sprity');

gulp.task('css', function(){
	return gulp.src('src/scss/*.scss')
		.pipe(concat('styles.css'))
		.pipe( sourcemaps.init())
		.pipe(autoprefixer({

		}))
		.pipe(sass({
			outputStyle : 'compressed'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
		.pipe( browserSync.reload({
			stream : true
		}));
});

gulp.task('compress', function(){
	return gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('browserSync', function(){
	browserSync({
		server : {
			baseDir: '.'
		}
	});
});

// gulp.task('sprites', function(){
// 	return sprity.src({
// 		src: 'src/img/**/*.{png,jpg}',
// 		style: 'src/scss/sprite.scss',
// 		out: 'dist/img/',
// 		format: 'jpg',
// 		'style-indent-char': 'tab',
// 		'style-indent-size': 1
// 		//processor : 'sass'
// 	})
// 	.pipe(gulpif('*.jpg', gulp.dest('dist/img/'), gulp.dest('src/scss/')));
// });

gulp.task( 'watch', ['browserSync', 'css'], function(){
	gulp.watch('src/scss/**/*.scss', ['css']);
	gulp.watch('src/js/**/*.js', ['compress']);
});



gulp.task( 'default', [/*'sprites',*/ 'css', 'compress', 'watch']);