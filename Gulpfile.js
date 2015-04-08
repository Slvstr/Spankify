var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bowerFiles = require('main-bower-files');
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var config = require('./server/config/environment');




gulp.task('js:dev', ['clean'], function() {
  var source = gulp.src('./client/app/**/*.js');
  var dest = gulp.dest('./build/app');

  return source.pipe($.angularFilesort()).pipe(dest).pipe(reload({stream: true}));
});


gulp.task('html', ['clean'], function() {
  return gulp.src('./client/**/*.html')
              .pipe(gulp.dest('./build'));
});


gulp.task('stylus', ['clean'], function() {
  return gulp.src('./client/app/**/*.styl')
              .pipe($.stylus())
              .pipe(gulp.dest('./build/app'))
              .pipe(reload({stream: true}));
});


gulp.task('vendor', ['stylus'], function() {

  var src = gulp.src(bowerFiles(), {base: './client/vendor'});
  var dest = gulp.dest('./build/vendor');

  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');

  return src
            .pipe(jsFilter)
            .pipe($.concat('vendor.min.js'))
            .pipe(jsFilter.restore())

            .pipe(cssFilter)
            .pipe($.concat('vendor.min.css'))
            .pipe($.csso())
            .pipe(cssFilter.restore())

            .pipe(dest)
            .pipe(reload({stream: true}));
});

gulp.task('icons', ['clean'], function() {
  var src = gulp.src(['./client/assets/icons/*/svg/design/*.svg', '!./client/assets/icons/*.html']);
  var dest = gulp.dest('./build/assets/icons');

  return src.pipe(dest);
});



gulp.task('inject', ['stylus', 'js:dev', 'vendor', 'html'], function() {


  var target = gulp.src('./client/index.html');
  var dest = gulp.dest('./build');

  var vendorCSS = gulp.src('./build/vendor/*.css', {read: false});
  var vendorJS = gulp.src('./build/vendor/*.js', {read: false});

  var appCSS = gulp.src('./build/app/*.css', {read: false});
  var appJS = gulp.src(['./build/app/**/*.js', './build/app/*.js'], {read: false});


  return target.pipe($.inject(vendorCSS, {name: 'vendor'}))
               .pipe($.inject(vendorJS, {name: 'vendor'}))
               .pipe($.inject(appCSS, {name: 'app'}))
               .pipe($.inject(appJS, {name: 'app'}))
               .pipe(dest);

});


gulp.task('clean', del.bind(null, ['build']));


gulp.task('server', ['inject', 'icons'], function() {

  $.nodemon({
          script: './server/index.js',
          env: { NODE_ENV: 'development' },
          /**
           * Nodemon watches all files from the directory it executes, in this
           * case the root directory. Must manually ignore all the non-server
           * files in order to prevent server reload on the file changes that
           * don't affect the server.
           */
           watch: [
            'server/'
           ],
          ignore: [
            'build/**/*',
            'node_modules/**/*',
            'client/**/*',
          ]
        });

});




gulp.task('watch', ['server'], function() {

  browserSync({
    proxy: 'localhost:' + config.port
  });

  gulp.watch('client/**/*.js', ['js:dev']);
  gulp.watch('client/index.html').on('change', reload);
  gulp.watch('client/**/*.styl', ['stylus']);

});



gulp.task('default', ['clean', 'html', 'icons', 'inject', 'server', 'watch'], function() {
  $.util.log($.util.colors.underline.red('You should see me'));
  return;
});