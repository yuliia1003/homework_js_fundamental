// 1. Дано три цілих числа: a, b, c. Перевірте істинність висловлювання: a < b < c

console.log(a < b && b < c);

// 2. Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.

let x = 1;
let y = 2;

let res1 = `${x}${y}`// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = !!x + "" + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x / `${y}`// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// 3. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”, 

let customerAge = prompt("Вкажіть ваш вік?");
let isAdult = customerAge >= 18;

if (isAdult) {
    console.log("Ви досягли повнолітнього віку.");
} else {
    console.log("Ви ще надто молоді.");
}

// 4. Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі входження цього числа із поточного масиву.
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let total = {};
let maxCount = 0;
let data;

for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (total[number]) {
        total[number] = total[number] + 1;
    } else {
        total[number] = 1;
    }
    if (total[number] > maxCount) {
        maxCount = total[number];
        data = number;
    }
}

let mostOftenNumArr = [data];
arr = arr.filter((number) => number !== data);

console.log(mostOftenNumArr); // [5]
console.log(arr); // [4, 2, 1, 6, 3, 2]

// 5. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно 
// a) визначити і вивести в консоль площу трикутника 
// b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).

let a = parseFloat(prompt("Довжина першої сторони"));
let b = parseFloat(prompt("Довжина другої сторони"));
let c = parseFloat(prompt("Довжина третьої сторони"));
if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Incorrect data");
} else {
    let s = Math.sqrt((a + b + c) * (a + b - c) * (b + c - a) * (a + c - b)) / 4;
    console.log(`Проща трикутника - ${s.toFixed(3)}`);

    if (a ** 2 === b ** 2 + c ** 2 || c ** 2 === b ** 2 + a ** 2 || b ** 2 === a ** 2 + c ** 2) {
        console.log("Трикутник прямокутний");
    } else {
        console.log("Трикутник не прямокутний");
    }
}

// 6. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

// Перший спосіб
let date = new Date();
let hour = date.getHours();

let message = hour >= 23 || hour < 5 ? "Доброї ночі" : hour >= 5 && hour < 11 ? "Доброго ранку" : hour >= 11 && hour < 17 ? "Доброго дня" : "Доброго вечора";

console.log(message);

// Другий спосіб

let day = new Date();
let hours = day.getHours();
let greeting;

switch (true) {
    case (hours >= 23 || hours < 5):
        greeting = "Доброї ночі";
        break;
    case (hours >= 5 && hours < 11):
        greeting = "Доброго ранку";
        break;
    case (hours >= 11 && hours < 17):
        greeting = "Доброго дня";
        break;
    default:
        greeting = "Доброго вечора";
        break;
}

console.log(greeting);
