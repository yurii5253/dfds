function mult() {
    // Отримуємо перше число
    let num1 = document.getElementById("first_num").value;
    // Отримуємо друге число
    let num2 = document.getElementById("second_num").value;
    // Перетворюємо значення на числа і множимо
    let result = Number(num1) * Number(num2);
    // Виводимо результат
    document.getElementById("result").innerHTML = "Результат: " + result;
}