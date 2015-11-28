var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task("js", function() {
  return gulp.src(["./static/js/bootstrap.min.js", 
                  "./static/js/jquery.magnific-popup.min.js", 
                  "./static/js/rosebotics.js"])
             .pipe(sourcemaps.init())
             .pipe(uglify())
             .pipe(concat("rosebotics.min.js"))
             .pipe(sourcemaps.write())
             .pipe(gulp.dest("./static/dist/js/"));
});

// Might want to split this up.
gulp.task("less", function() {
  return gulp.src(["./static/less/app.less", 
                  "./static/less/rosebot.less", 
                  "./static/less/rosebotics.less"])
             .pipe(sourcemaps.init())
             .pipe(less({
                paths: [ 
                  "./static/less/bootstrap",
                  "./static/less/"
                ]
              }))
             .pipe(minifyCSS())
             .pipe(sourcemaps.write())
             .pipe(gulp.dest('./static/dist/css/'));
});

gulp.task("teams", function() {
  return gulp.src([
    "./static/teams/js/base.js",
    "./static/teams/js/app.js", 
    "./static/teams/js/controllers/*.js", 
    "./static/teams/js/services.js",
    "./static/teams/js/directives.js",
    "./static/teams/js/angular.snackbar.min.js"])
   .pipe(sourcemaps.init())
   .pipe(uglify())
   .pipe(concat("app.min.js"))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest("./static/dist/teams/js/"));;       
});
