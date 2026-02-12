// Игра "Угадай число".
// Создайте игру, в которой пользователь пытается угадать случайное число от 1 до 100.

// Требования:

// Сгенерируйте случайное число от 1 до 100.
// Предложите пользователю угадать это число.
// Дайте подсказки: больше или меньше загаданное число.
// Завершите игру, когда пользователь угадает число.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minNumber = 1;
const maxNumber = 100;

function guessANumber() {

    const randomNumber = getRandomInt(minNumber, maxNumber);
    // Для просмотра числа в консоли
    console.log(`____________________________________________randomNumber = ${randomNumber}`);

    do {
        const userNumber = prompt(`Введите число от ${minNumber} до ${maxNumber}`);

        // Для отладки в консоли использовал принудительное завершение функции
        if (userNumber === "!") {
            return;
        }

        if (userNumber === "") {
            alert("Вы ничего не ввели! Введите число.");
            continue;
        }

        const numUserNumber = Number(userNumber);

        if (Number.isNaN(numUserNumber)) {
            alert("Вы не ввели число! Введите число.");
            continue;
        }

        if (numUserNumber < minNumber || numUserNumber > maxNumber) {
            alert("Ваше число вне диапазона! Введите заново.");
            continue;
        }

        if (numUserNumber !== randomNumber) {
            if(randomNumber < numUserNumber) alert("Вы не угадали число. Оно меньше. Введите снова.");
            if(randomNumber > numUserNumber) alert("Вы не угадали число. Оно больше. Введите снова.");
            continue;
        } else {
            alert("Вы угадали число!!! The game is over :-)");
            break;
        }

    } while (true);
}

