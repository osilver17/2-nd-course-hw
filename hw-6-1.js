// // Задание 1
// // Дан массив: 
// // [1, 5, 4, 10, 0, 3].

// // Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. 
// // После вывода значения 10 в консоль цикл должен прекратить свою работу.
// console.log("Задание 1");

// const arr1 = [1, 5, 4, 10, 0, 3];
// console.log("arr1 = [1, 5, 4, 10, 0, 3]");

// for (let item of arr1) {
//     console.log(item);
//     if (item === 10) break;
// }
// console.log("");

// // Задание 2
// // Дан массив: [1, 5, 4, 10, 0, 3].
// // Найдите индекс значения 4 в этом массиве.
// console.log("Задание 2");

// const arr2 = [1, 5, 4, 10, 0, 3];

// let id4 = arr2.indexOf(4);
// console.log("arr2 = [1, 5, 4, 10, 0, 3]");
// console.log("index of item 4 = ", id4);

// console.log("");

// // Задание 3
// // Дан массив чисел: [1, 3, 5, 10, 20].
// // С помощью метода join выведите элементы массива через пробел (пустую строку ' ').
// console.log("Задание 3");

// const arr3 = [1, 3, 5, 10, 20];

// const str = arr3.join(" ");
// console.log("arr3 = [1, 3, 5, 10, 20]");
// console.log("typeof str =", typeof str);
// console.log("str = ", str);

// console.log("");

// // Задание 4
// // С помощью вложенных циклов создайте многомерный массив вида: 
// // [[1, 1, 1], [1, 1, 1], [1, 1, 1]].
// console.log("Задание 4");

// const arr4 = new Array(3);

// for (let i = 0; i < 3; i++) {
//     arr4[i] = new Array(3).fill(1);
// }
// console.log(arr4);

// console.log("");

// // Задание 5
// // Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.
// console.log("Задание 5");

// const arr5 = [1, 1, 1];
// console.log(arr5);
// for (let i = 0; i < 3; i++) {
//     arr5.push(2);
// }
// console.log(arr5);
// console.log("");

// // Задание 6
// // Дан массив: [9, 8, 7, 'a', 6, 5].

// // С помощью метода sort отсортируйте массив и удалите букву 'a'из массива. 
// // Затем выведите массив.
// console.log("Задание 6");

// const arr6 = [9, 8, 7, 'a', 6, 5];
// console.log("arr6 =", arr6);

// arr6.sort();
// console.log("sorted arr6 =", arr6);

// arr6.pop();
// console.log("delete 'a' from arr6 =", arr6);
// console.log("");
// // Задание 7
// // Дан массив: [9, 8, 7, 6, 5].

// // Попросите пользователя угадать число с помощью метода prompt. 
// // Если значение, которое ввел пользователь, есть в массиве, выведите в alert
// // «Угадал», в противном случае — «Не угадал».
// console.log("Задание 7");

// arr7 = [9, 8, 7, 6, 5];
// console.log("arr7 =", arr7);

// let userNumber = Number(prompt("Угадайте одно число от 0 до 9 из 5-ти заранее выбранных"));

// console.log("userNumber =", userNumber);

// if (arr7.includes(userNumber)) {
//     console.log("Вы угадали!", userNumber);
//     alert("Вы угадали!");
// } else {
//     console.log("Вы не угадали.", userNumber);
//     alert("Вы не угадали.");
// }
// console.log("");

// // Задание 8
// // Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.
// console.log("Задание 8");

// let str1 = 'abcdef';
// console.log("str1 =", str1);

// const arr8 = str1.split("");
// str1 = arr8.reverse().join("");

// console.log("str1 =", str1);
// console.log("");

// // Задание 9
// // Дан массив: [[1, 2, 3],[4, 5, 6]]. 
// // Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].
// console.log("Задание 9");

// const arr9 = [[1, 2, 3], [4, 5, 6]];
// console.log("arr9 =", arr9);

// const arr99 = [...arr9[0], ...arr9[1]];

// console.log("arr99 =", arr99);
// console.log("");

// // Задание 10
// // Создайте массив с произвольными числами (диапазон от 1 до 10).
// // Переберите его с помощью цикла for.
// // В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// console.log("Задание 10");

// const arr10 = [];

// for (let i = 0; i < 10; i++) {
//     arr10[i] = getRandomInt(1, 10);
// }

// console.log("arr10 =", arr10);
// console.log("Сумма текущего и следующего элементов:");
// for (let i = 0; i < arr10.length - 1; i++) {
//     console.log(arr10[i] + arr10[i + 1]);
// }
// console.log("");

// // Задание 11
// // Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.
// console.log("Задание 11");

// function squareItemOfArray(arr) {
//     const newArr = arr.map(item => item * item);
//     return newArr;
// }
// console.log("arr10 =", arr10);
// console.log("squareItemOfArray(arr10) =", squareItemOfArray(arr10));
// console.log("");

// // Задание 12
// // Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.
// console.log("Задание 12");

// const arr12 = ["Петр", "Василий", "Дмитрий", "Владислав"];

// function getLenthOfStrings(arr) {
//     const newArr = arr.map(item => item.length);
//     return newArr;
// }

// console.log("arr12 =", arr12);
// console.log("getLenthOfStrings(arr12) =", getLenthOfStrings(arr12));
// console.log("");

// // Задание 13
// // Создайте функцию, которая принимает на вход массив целых чисел, 
// // а возвращает массив, содержащий только отрицательные значения.
// console.log("Задание 13");

// const arr13 = [1, 2, 3, -4, -5, 0, 8, -7];

// function getNegativeNumbers(arr) {
//     const newArr = arr.filter(item => item < 0);
//     return newArr;
// }

// console.log("arr13 =", arr13);
// console.log("getNegativeNumbers(arr13) =", getNegativeNumbers(arr13));
// console.log("");

// // Задание 14
// // Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода 
// // Math.random() в диапазоне от 0 до 10.
// // В данном массиве найдите все четные значения и добавьте их в новый массив. 
// // Результат работы программы необходимо вывести в консоль — это будут два массива: 
// // исходный массив и массив с четными значениями.
// console.log("Задание 14");

// const arr14 = [];
// for (let i = 0; i < 10; i++) {
//     arr14.push(getRandomInt(0, 10));
// }

// const arr1414 = arr14.filter(item => item % 2 === 0);
// console.log("arr14 =", arr14);
// console.log("Четные элементы:");
// console.log("arr1414 =", arr1414);
// console.log("");

// // Задание 15
// // Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью 
// // Math.random() в диапазоне от 1 до 10.
// // Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.
// console.log("Задание 15");

// const arr15 = [];
// for (let i = 0; i < 6; i++) {
//     arr15.push(getRandomInt(0, 10));
// }

// let arithmeticMean = arr15.reduce((accumulator, item) => accumulator += item) / arr15.length;

// console.log("arr15 =", arr15);
// console.log("arithmeticMean =", arithmeticMean);
