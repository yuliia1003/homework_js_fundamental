// 1.
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]

function compact(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // 2.
  // Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
  //  - початкове значення
  //  - кінцеве значення
  // а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
  // let arr = createArray(2, 9);
  // console.log(arr); // [2,3,4,5,6,7,8,9]
  
  function createArray(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  
  // 3.
  // Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
  
  function printNumbers(a, b) {
    for (let i = a; i <= b; i++) {
      for (let j = 1; j <= i - a + 1; j++) {
        console.log(i);
      }
    }
  }
  
  // 4.
  // Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
  // randArray(5);  // [399,310,232,379,40]
  
  function randArray(k) {
    let result = [];
    for (let i = 1; i <= k; i++) {
      result.push(Math.floor(Math.random() * 500) + 1);
    }
    return result;
  }
  
  // 5.
  // Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
  // Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
  // let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
  // let arrNew = funcName(arr);
  //  /*
  // [
  // [5, 12, 99, 2, 2, 4, 3],
  // [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
  // ]
  // */
  
  function funcName(array) {
    let newArray = array.flat();
    let strings = [];
    let numbers = [];
    for (let i = 0; i < newArray.length; i++) {
      if (typeof newArray[i] === "number") {
        numbers.push(newArray[i]);
      } else {
        strings.push(newArray[i]);
      }
    }
    return [numbers, strings];
  }
  
  // 6.
  // Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
  
  function calc(a, b, op) {
    let result;
    switch (op) {
      case 1:
        result = a - b;
        break;
      case 2:
        result = a * b;
        break;
      case 3:
        result = a / b;
        break;
      default:
        result = a + b;
    }
    return result;
  }
  
  // 7.
  // Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
  // findUnique([1, 2, 3, 5, 3]);  // => false
  // findUnique([1, 2, 3, 5, 11]); // => true
  
  function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== i) {
        return false;
      }
    }
    return true;
  }
  
  