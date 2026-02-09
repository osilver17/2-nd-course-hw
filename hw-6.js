// Игра: Простая арифметика

// Сайт генерирует случайные задачи на сложение, вычитание, умножение и деление.
// Запрашивает у пользователя ответ.
// Проверяет правильность ответа и выводит результат.
// Последовательность действий
//  Генерация задач:
// Случайным образом создавайте арифметические задачи на сложение, вычитание, умножение и деление.
// Например, задачи могут выглядеть так: "5 + 3", "10 - 2", "4 * 7", "20 / 4".
//  Запрос ответа:
// Запрашивайте у пользователя ответ на сгенерированную задачу.
// Например, используя функцию 
// prompt().
//  Проверка и вывод результата:
// Проверьте правильность ответа пользователя.
// Выведите результат проверки: верный ответ или ошибка.

// Надо сгенерировать два числа и оператор.

// const minNumber = 1;
// const maxNumber = 100;

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function calculateTheExpression() {

    let operator = getRandomInt(1, 4);

    switch (operator) {
        case 1: operator = "+";
            break;
        case 2: operator = "-";
            break;
        case 3: operator = "*";
            break;
        case 4: operator = "/";
            break;
        default: operator = "+";
    }

    let firstOperand = getRandomInt(minNumber, maxNumber);
    let secondOperand = getRandomInt(minNumber, maxNumber);
    let annotationForDivision = "";

    let result;
    switch (operator) {
        case "+": result = firstOperand + secondOperand;
            break;
        case "-": result = firstOperand - secondOperand;
            break;
        case "*":
            if (firstOperand > 10) {
                secondOperand = getRandomInt(1, 10);
            }
            result = firstOperand * secondOperand;
            break;
        case "/":
            if (firstOperand < secondOperand) {
                const promNumber = secondOperand;
                secondOperand = firstOperand;
                firstOperand = promNumber;
            }
            if (secondOperand > 10) {
                secondOperand = getRandomInt(1, 10);
            }
            
            annotationForDivision = " (при делении округляем с отбрасыванием дробной части)"
            result = Math.floor(firstOperand / secondOperand);
            break;
        default: result = "Не определенно";
    }

    do {
        let userResponse = prompt(`Вычислите выражение: ${firstOperand} ${operator} ${secondOperand}${annotationForDivision} и введите ответ:`);

        // Для выхода из игры набираем:
        if (userResponse === "!") {
            return;
        }

        if (userResponse === "") {
            alert("Вы ничего не ввели! Введите число. Для выхода из игры введите '!'");
            continue;
        }

        const numUserResponse = Number(userResponse);

        if (Number.isNaN(numUserResponse)) {
            alert("Вы не ввели число! Введите число. Для выхода из игры введите '!'");
            continue;
        }

        if (numUserResponse === result) {
            alert("Ваш ответ верен!");
            break;
        } else {
            alert("Вы ошиблись :( Пересчитайте. Для выхода из игры введите '!'");
            continue;
        }

    } while (true);
}
