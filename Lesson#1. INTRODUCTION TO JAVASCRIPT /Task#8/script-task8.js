// 8. Напишіть скрипт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран. 

let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;

let month = prompt("Введіть номер місяця");
let daysInMonth = new Date(2023, month, 0).getDate();

let secondsInMonth = daysInMonth * secondsInDay;

console.log(`Кількість секунд у годині: ${secondsInHour}`);
console.log(`Кількість секунд у добі: ${secondsInDay}`);
console.log(`Кількість секунд у місяці ${month}: ${secondsInMonth}`);
