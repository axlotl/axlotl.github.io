var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');

gulp.task('css', function(){
	return gulp.src('src/scss/*.scss')
		.pipe( sourcemaps.init())
		.pipe(autoprefixer({
			
		}))
		.pipe(sass())
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

gulp.task( 'watch', ['browserSync', 'css'], function(){
	gulp.watch('src/scss/**/*.scss', ['css']);
	gulp.watch('src/js/**/*.js', ['compress']);
});



gulp.task( 'default', ['css', 'compress', 'watch']);