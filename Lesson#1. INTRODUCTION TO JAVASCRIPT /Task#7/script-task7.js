// 7. За допомогою функції prompt() напишіть скрипт , який послідовно запитує в користувача логін, імейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.
// Запитуємо у користувача логін, імейл та пароль за допомогою функції prompt()

const login = prompt('Enter your login:');
const email = prompt('Enter your email:');
const password = prompt('Enter your password:');

const message = `Dear User, your email is ${email}, your password is ${password}.`;
alert(message);
