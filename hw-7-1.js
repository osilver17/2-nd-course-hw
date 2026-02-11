// Задание 1
// Преобразовать строку 'js' в верхний регистр.
console.log("Задание 1");

let str = "js";

str = str.toUpperCase();

console.log(str);
console.log("");

// Задание 2
// Создать функцию, которая принимает массив строк и строку. 
// Функция должна вернуть новый массив, содержащий только те элементы первого массива, 
// которые начинаются со второй строки. 
// Регистр символов не влияет на результат.
console.log("Задание 2");

const arr = [
    `Мы вольные птицы; пора, брат, пора!,`,
    `Туда, где за тучей белеет гора,`,
    `Туда, где синеют морские края,`,
    `Туда, где гуляем лишь ветер… да я!`,
];

let str1 = "Туда";

function arrFilter(arr, str) {
    const arrFiltered = arr.filter(item => item.startsWith(str));
    return arrFiltered;
}
console.log(arr);
console.log(arrFilter(arr, str1));
console.log("");

// Задание 3
// Округлить число 32.58884:

// До меньшего целого.
// До большего целого.
// До ближайшего целого.
console.log("Задание 3");

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
console.log("");

// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
console.log("Задание 4");

const numArr = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numArr));
console.log(Math.max(...numArr));

console.log("");

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.
console.log("Задание 5");
function getRandomNumberTo10() {
    let rand = Math.floor(Math.random() * 10) + 1;
    console.log(rand);
}
getRandomNumberTo10();
console.log("");

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел 
// от 0 до этого числа. 
// Длина массива должна быть в два раза меньше переданного числа.
console.log("Задание 6");

function getRandomInt7(max, min = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function returnArr(num) {
    num = Math.ceil(num);
    let id = num;
    if (num % 2 !== 0) {
        id += 1;
    }
    const arr = [];
    for (let i = 0; i < id / 2; i++) {
        arr.push(getRandomInt7(num));
    }
    return arr;
}

console.log(returnArr(5));
console.log("");

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
console.log("Задание 7");

function getRandomInt77(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt77(5, 10));
console.log("");

// Задание 8
// Вывести в консоль текущую дату.
console.log("Задание 8");
console.log(new Date());
console.log("");

// Задание 9
// Создать переменную currentDate, хранящую текущую дату. 
// Вывести дату, которая наступит через 73 дня после текущей.
console.log("Задание 9");

const currentDate = new Date();

const dateAfter73days = +currentDate + 73 * 24 * 60 * 60 * 1000;
console.log("Через 73 дня будет:", new Date(dateAfter73days));
console.log("");

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]
console.log("Задание 10");

function dataConverter(date) {
    const options = {
        // day: 'numeric',
        // month: 'long',
        // year: 'numeric', 
        weekday: 'long'
    };
    console.log(date.toLocaleDateString('ru-RU'), "- это", date.toLocaleDateString('ru-RU', options));
    console.log(date.toLocaleTimeString('ru-RU'));
}

dataConverter(new Date());