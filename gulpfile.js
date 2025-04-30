function myTask(callback) {
    console.log('Hello Yurii!');
    callback();
  }
  
  async function myTask2() {
    console.log('Task2: Hello Yurii!');
  }
  
  exports.myTask = myTask;
  exports.myTask2 = myTask2;
  
  exports.myTask3 = async function myTask3() {
    console.log('Task3: Hello Yurii!');
  };
  
  exports.myTask4 = async () => {
    console.log('Task4: Hello Yurii!');
  };

  const gulp = require('gulp');

exports.cloneFiles = async () => {
  return gulp.src('app/*.html')  
    .pipe(gulp.dest('public'));  
};
  
const gulp = require('gulp');

gulp.task('copy', function () {
  return gulp.src('src/**/*') 
    .pipe(gulp.dest('public')); 
});

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css'); // підключаємо clean-css
const uglify = require('gulp-uglify'); // підключаємо uglify
const rename = require('gulp-rename'); // щоб перейменовувати файли (за бажанням)

gulp.task('minify-css', function () {
  return gulp.src('src/css/*.css') // шлях до CSS
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' })) // додає .min.css
    .pipe(gulp.dest('public/css'));
});

gulp.task('minify-js', function () {
  return gulp.src('src/js/*.js') // шлях до JS
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' })) // додає .min.js
    .pipe(gulp.dest('public/js'));
});

gulp.task('build', gulp.parallel('minify-css', 'minify-js'));

const gulp = require('gulp');

exports.cloneFiles = async () => {
  return gulp.src('app/**/*') // всі файли з app
    .pipe(gulp.dest('public')); // у public
};

exports.cloneFiles = async () => {
  return gulp.src('app/**/*') //копіювання всіх файлів з папки app
  .pipe(gulp.dest('public')); //виведення в public
 }
 exports.cloneFiles = async () => {
  return gulp.src('app/**/*.css') //копіювання всіх css файлів з папки app
  .pipe(gulp.dest('public')); //виведення в public
 }
 exports.cloneFiles = async () => {
  return gulp.src('app/**/*.js') //копіювання всіх css файлів з папки app
  .pipe(gulp.dest('public')); //виведення в public
 }

 const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// Задача для мініфікації CSS
exports.minifyCSS = async () => {
  return gulp.src('app/**/*.css') // Вибір всіх CSS-файлів у папці app
    .pipe(cleanCSS())             // Мініфікація CSS
    .pipe(gulp.dest('public'));  // Виведення у папку public
}

// Задача для мініфікації JS
exports.minifyJS = async () => {
  return gulp.src('app/**/*.js') // Вибір всіх JS-файлів у папці app
    .pipe(uglify())              // Мініфікація JS
    .pipe(gulp.dest('public')); // Виведення у папку public
}

// Комбінована задача, яка запускає обидві
exports.minifyAll = gulp.parallel(exports.minifyCSS, exports.minifyJS);

const gulp = require('gulp');

// Копіювання HTML
exports.copyHtml = async () => {
  return gulp.src('app/**/*.html') // усі html, включно з підпапками
    .pipe(gulp.dest('public'));
};

// Копіювання JS
exports.copyJs = async () => {
  return gulp.src('app/**/*.js') // усі js, включно з підпапками
    .pipe(gulp.dest('public'));
};

// Загальна задача
exports.copyAll = gulp.parallel(exports.copyHtml, exports.copyJs);

const { src, dest, series } = require('gulp');

// Копіювання HTML
function copyHtml() {
  return src('app/**/*.html')
    .pipe(dest('public'));
}

// Копіювання CSS
function copyCss() {
  return src('app/**/*.css')
    .pipe(dest('public'));
}

// Копіювання JS
function copyJs() {
  return src('app/**/*.js')
    .pipe(dest('public'));
}

exports.default = series(copyHtml, copyCss, copyJs);
