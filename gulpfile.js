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
  return gulp.src('app/*.html')   // Вибираємо всі .html файли з папки app
    .pipe(gulp.dest('public'));   // Копіюємо їх у папку public
};
  
  