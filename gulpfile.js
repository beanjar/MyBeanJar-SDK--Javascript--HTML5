// Include gulp
var gulp = require('gulp');




// Include plugins
var concat = require('gulp-concat');
var scss = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');



// Concatenate SDK files
gulp.task('concat', function() {
    return gulp.src('src/js/core/*.js')
      .pipe(concat('mbj-sdk-core.js'))
      .pipe(gulp.dest('dist/js'));
});



// Stage dependencies in distribution
gulp.task('stage-jquery', function() {
    return gulp.src('node_modules/jquery/dist/jquery.min.js')
      .pipe(concat('jquery.min.js'))
      .pipe(gulp.dest('dist/js'));
});



// Stage dependencies in distribution
gulp.task('stage-spin', function() {
    return gulp.src('node_modules/spin/dist/spin.min.js')
      .pipe(concat('spin.min.js'))
      .pipe(gulp.dest('dist/js'));
});



// Preprocess stylesheets
gulp.task('scss', function() {
    return scss(['src/scss/*.scss', 'src/scss/_*.scss'], {style: 'expanded'})
        // .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});



// Autoprefixer
gulp.task('autoprefixer', function () {
    return gulp.src('dist/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});



// Watch tasks
gulp.task('watch', function() {
    
    // Watch .js files
    gulp.watch('src/js/*.js', ['concat']);
    
    // Watch .scss files
    gulp.watch('src/scss/*.scss', ['scss', 'autoprefixer']);
    
 });



// Default Task
gulp.task('default', ['concat', 'scss', 'autoprefixer', 'stage-jquery', 'stage-spin', 'watch']);







 
