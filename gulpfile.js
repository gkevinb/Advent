var gulp = require('gulp');
var sass = require('gulp-sass');

/* Template:
gulp.task('task_name', function(){
    // do something..

});
*/
// Pipe is chain something together
/*
Returns scss file pipe it through sass and
*/
gulp.task('sass', function(){
    return gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});
