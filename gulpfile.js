var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var foreach = require('gulp-foreach');
//var concat = require('gulp-concat');
 
gulp.task('default', function () {

  return gulp.src('img/photo_gallery/*.jpg')


    .pipe(foreach(function(stream, file){
      return stream

          .pipe(imageResize({ 
            width : 350,
            height : 250,
            crop : true,
            upscale : false
          }))
          //.pipe(concat(file.name));


    }))

    .pipe(gulp.dest('img/photo_gallery_thumbs'));
});
