//
// Módulos:
//
var gulp = require('gulp')
  , del = require('del')
  , fileInclude = require('gulp-file-include')
  , i18n = require('gulp-html-i18n')
  , htmlmin = require('gulp-htmlmin');

//
// Tareas de gulp
//

// limpiar
gulp.task('limpiar', function() {
  return del(['document_root/*']);
});

// copiamos assets a document_root
gulp.task("copiar-assets", function() {
   return gulp.src("src/assets/**")
      .pipe(gulp.dest("document_root"));
});

// traducir-html
gulp.task("traducir-html", function() {
   return gulp.src(['src/plantillas/*.html', 'src/plantillas/*/*.html'])
      .pipe(fileInclude({ prefix: '@@', basepath: 'src/includes'}))
      .pipe(i18n({
         langDir: './src/locales',
         /*defaultLang: 'es',*/
         fallback: 'es',
         createLangDirs: true,
         filenameI18n: true
      }))
      .pipe(htmlmin({ collapseWhitespace: true, removeComments: true, minifyJS: true, minifyCSS: true }))
      .pipe(gulp.dest('document_root/'));
});

// copiamos el idioma por defecto es a document_root
gulp.task("copiar-idioma-es", function() {
   return gulp.src("document_root/es/**")
      .pipe(gulp.dest("document_root"));
});


// copiamos el idioma por defecto es a document_root
gulp.task("borrar-idioma-es", function() {
   return del("document_root/es");
});


// tarea por defecto
gulp.task('default', gulp.series('limpiar', 'copiar-assets', 'traducir-html', 'copiar-idioma-es', 'borrar-idioma-es'));
