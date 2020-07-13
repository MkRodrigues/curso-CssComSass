const gulp = require('gulp');
const sass = require('gulp-sass');
const brSync = require('browser-sync').create();

/* ------------------------------- Gulp Sass ------------------------------- */

function compilaSass() {
    return gulp.src('scss/*.scss')
        .pipe(sass()
        .on('error', sass.logError))
        .pipe(gulp.dest('css/'))
        .pipe(brSync.stream());
}

exports.compilaSass = compilaSass;
// outputStyle: "compressed" 


/* ---------------------------- Browser-Sync Init --------------------------- */

function navegador() {
    brSync.init({
        server: {
            baseDir: './'
        }
    });
};

exports.navegador = navegador;

/* ------------------------------- Gulp Watch ------------------------------- */

function watch() {
    gulp.watch('scss/*.scss', compilaSass)
    gulp.watch('*.html').on('change', brSync.reload);
}

exports.watch = watch;

/* --------------------------------- Default -------------------------------- */

exports.default = gulp.parallel(watch, compilaSass, navegador);