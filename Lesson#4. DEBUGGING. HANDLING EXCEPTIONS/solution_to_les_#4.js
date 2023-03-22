//1.
//Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

function sumSliceArray(arr, first, second) {
  try {
    if (typeof first !== "number" || typeof second !== "number") {
      throw new TypeError("Incorrect input!");
    }
    if ( first < 0 || second < 0 || first >= arr.length || second >= arr.length
    ) {
      throw new RangeError("Invalid range!");
    }
    return arr[first] + arr[second];
  } catch (err) {
    console.error(`${err.name}: ${err.message}`);
  }
}

//перевірка
console.log(sumSliceArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 5));
console.log(sumSliceArray([3, 5], 2, 9)); //error
console.log(sumSliceArray([3, 7, 8], "arr", 3)); //error
console.log(sumSliceArray([4, 10, 33, 45], -2, 3)); //error

//2.
//Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та опису помилки.

function checkAge() {
  let roles = ["admin", "moderator", "user"];
  let userName = prompt("What's your name?");
  let userAge = +prompt("How old are you?");
  let userStatus = prompt("What is your status?");
  try {
    if (!userName || !userAge || !userStatus) {
      throw new Error("The field is empty! Please enter your age");
    }
    if (!roles.includes(userStatus)) {
      throw new EvalError("Incorect role!");
    }
    if (userAge < 18 || userAge > 70) {
      throw new RangeError("This content isn't recommended for you.");
    }
    alert(`Welcome, ${userName}! You can access the movie content.`);
  } catch (error) {
    alert(`${error.name}: ${error.message}`);
  }
}
checkAge();

//3.
//Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
//Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea(width, height) {
  try {
    if (typeof width !== "number" || typeof height !== "number") {
      throw new TypeError("Arguments must be numbers!");
    }
    console.log(`Area = ${width * height}`);
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
}
//перевірка
calcRectangleArea(5, 6);
calcRectangleArea("5", 6);

//4.
//Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
//Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
//Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
//Приклад роботи програми:
//console.log(showMonthName(5));
//May
//console.log(showMonthName(14));
//MonthException Incorrect month number

class MonthException extends Error {
  constructor(massage) {
    super(massage);
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  try {
    if (typeof month !== "number" || month < 1 || month > 12) {
      throw new MonthException("Incorrect month number");
    }
    console.log(months[month - 1]);
  } catch (ex) {
    console.error(`${ex.name}: ${ex.message}`);
  }
}

//перевірка
showMonthName(3);
showMonthName(13);
showMonthName("one");

//5.
//Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
//Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

//Приклад роботи програми:
//showUsers([7, -12, 44, 22]);
//Error: ID must not be negative: -12
//[ {id: 7}, {id: 44}, {id: 22} ]

function showUser(id) {
  if (id < 0) {
    throw new Error(`ID must not be negative: ${id}`);
  }
  return { id };
}

function showUsers(ids) {
  let correct = [];
  for (let id of ids) {
    try {
      correct.push(showUser(id));
    } catch (error) {
      console.error(error.message);
    }
  }
  return correct;
}

console.log(showUsers([7, -12, 44, 22]));
