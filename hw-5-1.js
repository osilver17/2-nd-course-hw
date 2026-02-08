// Задание 1
// Напишите функцию, которая возвращает меньшее из двух чисел.

// Например, из двух чисел — 8 и 4 — функция должна вернуть значение 4.
// Если мы передаем два одинаковых значения, например 6 и 6,
// то функция должна вернуть это значение (в данном случае — 6).

console.log("Задание 1");

function getMinNumber(a, b) {

    console.log(`a = ${a}`);
    console.log(`b = ${b}`);

    if (isNaN(a) || isNaN(b)) {
        console.log("Параметры не числа!");
        return;
    }

    if (a <= b) {
        console.log(`a <= b return ${a}:`);
        return a;
    } else {
        console.log(`a > b return ${b}:`);
        return b;
    }
}

console.log(getMinNumber(7, 2));
console.log("");

// Задание 2

// Напишите функцию, которая принимает число и возвращает:
// строку 'Число четное', если число четное;
// строку 'Число нечетное', если число нечетное.
console.log("Задание 2");

function getStringEvenOdd(a) {

    console.log(`a = ${a}`);

    if (isNaN(a)) {
        console.log("Параметр не число!");
        return;
    }

    if (a % 2 === 0) {
        return "Число четное."
    } else {
        return "Число нечетное."
    }
}

console.log(getStringEvenOdd(7));
console.log("");

// Задание 3

// Напишите функцию, которая принимает параметром число и выводит в консоль
// квадрат этого числа.
// Напишите функцию, которая принимает параметром число и возвращает
// квадрат этого числа значением — так, чтобы потом это значение можно было использовать.
console.log("Задание 3");

function logTheSquareOfTheNumber(a) {
    console.log(`a = ${a}`);
    console.log(Math.pow(a, 2));
}

logTheSquareOfTheNumber(4);

function getTheSquareOfTheNumber(a) {
    console.log(`a = ${a}`);
    return Math.pow(a, 2);
}

console.log(getTheSquareOfTheNumber(5));
console.log("");

// Задание 4
// Создайте функцию, которая:

// Спрашивает у пользователя, сколько ему лет.
// Если пользователь введет отрицательное число — выведет на экран
// 'Вы ввели неправильное значение'.
// Если пользователь введет число от 0 до 12 — выведет на экран
// 'Привет, друг!'.
// Если пользователь введет число больше или равно 13 — выведет на экран
// 'Добро пожаловать!'.
console.log("Задание 4");

function askHowOldAreYou() {
    do {
        const userAge = prompt(`Введите Ваш возраст.`);

        // Для отладки в консоли использовал принудительное завершение функции
        if (userAge === "!") {
            return;
        }

        if (userAge === "") {
            console.log("Вы ничего не ввели! Введите Ваш возраст.");
            alert("Вы ничего не ввели! Введите Ваш возраст.");
            continue;
        }

        const numUserAge = Number(userAge);

        if (Number.isNaN(numUserAge)) {
            console.log("Вы не ввели число! Введите Ваш возраст.");
            alert("Вы не ввели число! Введите Ваш возраст.");
            continue;
        }

        if (numUserAge < 0) {
            console.log("Вы ввели неправильное значение.");
            alert("Вы ввели неправильное значение.");
            continue;
        }

        if (numUserAge <= 12) {
            console.log("Привет, друг!");
            alert("Привет, друг!");
            break;
        } else {
            console.log("Добро пожаловать!");
            alert("Добро пожаловать!");
            break;
        }
    } while (true);
}

askHowOldAreYou();
console.log("");

// Задание 5
// Напишите функцию, которая принимает на вход два числа, а далее следует алгоритму:

// Проверяет, являются ли переданные параметры корректными числами.
// Подсказка: используйте преобразование типов и isNaN().

// Если нет — возвращает строку 'Одно или оба значения не являются числом'.
// Если оба параметра — числа, то возвращает произведение данных чисел.
console.log("Задание 5");

function multiplierOfNumbers(a, b) {

    console.log(`a = ${a}`);
    console.log(`b = ${b}`);

    if (isNaN(a) || isNaN(b)) {
        //console.log("Одно или оба значения не являются числом.");
        return "Одно или оба значения не являются числом.";
    }
    return a * b;
}

console.log(`a * b = ${multiplierOfNumbers("j", 2)}`);
console.log("");

// Задание 6
// Напишите функцию, которая выполняет следующий алгоритм:

// Запрашивает у пользователя число.
// Проверяет, является ли введенное значение числом.
// Если значение не является числом, возвращает строку
// 'Переданный параметр не является числом'.
// Если значение является числом, возвращает строку
// 'n в кубе равняется <получившееся значение>', где n
//  — введенное число, а <получившееся значение>
//  — число, возведенное в куб.
// Проверьте работу функции с числами от 0 до 10.
console.log("Задание 6");

function getTheThirdPowerOfTheNumber() {
    do {
        const number = prompt(`Введите число.`);

        // Для отладки в консоли использовал принудительное завершение функции
        if (number === "!") {
            return;
        }

        if (number === "") {
            console.log("Вы ничего не ввели! Введите число.");
            alert("Вы ничего не ввели! Введите число.");
            continue;
        }

        if (isNaN(number)) {
            console.log("Переданный параметр не является числом.");
            alert("Переданный параметр не является числом.");
            continue;
        }

        const thirdPower = Math.pow(number, 3);

        console.log(`${number} в кубе равняется ${thirdPower}`);

        return `${number} в кубе равняется ${thirdPower}`;

    } while (true);
}

alert(getTheThirdPowerOfTheNumber());
console.log("");

// Задание 7
// Создайте два объекта, circle1 и circle2, каждый из которых имеет свойство radius.

// Оба объекта должны иметь:
// Метод getArea, который возвращает площадь круга, вычисляемую через радиус.
// Метод getPerimeter, который возвращает периметр окружности.
console.log("Задание 7");

function culcArea() {
    return Math.PI * Math.pow(this.radius, 2);
}

function calcPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    getArea: culcArea,
    getPerimeter: calcPerimeter, 
}

const circle2 = {
    radius: 7,
    getArea: culcArea,
    getPerimeter: calcPerimeter, 
}

console.log(`circle1.getArea() = ${circle1.getArea()}`);
console.log(`circle2.getArea() = ${circle2.getArea()}`);
console.log(`circle1.getPerimeter() = ${circle1.getPerimeter()}`);
console.log(`circle2.getPerimeter() = ${circle2.getPerimeter()}`);
