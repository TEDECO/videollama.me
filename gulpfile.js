//
// Módulos:
//
var gulp = require('gulp')
  , del = require('del')
  , i18n = require('gulp-html-i18n');

//
// Tareas de gulp
//

// limpiar
gulp.task('limpiar', function() {
  return del(['document_root/*'])
});

// traducir-html
gulp.task("traducirhtml", function() {
   return gulp.src(['src/plantillas/*.html', 'src/plantillas/*/*.html'])
      /*.pipe(fileInclude({ prefix: '@@', baseDir: '/partials'}))*/
      .pipe(i18n({
         langDir: './src/locales',
         /*defaultLang: 'es',*/
         fallback: 'es',
         createLangDirs: true,
         filenameI18n: true
      }))
      .pipe(gulp.dest('document_root/'));
});

// tarea por defecto

gulp.task('default', gulp.series('limpiar', 'traducirhtml'));
