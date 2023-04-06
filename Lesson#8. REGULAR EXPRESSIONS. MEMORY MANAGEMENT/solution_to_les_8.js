//8-1.
//Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні.
//Приклад роботи:
//upperCase('regexp');
//"String's not starts with uppercase character"
//upperCase('RegExp');
//"String's starts with uppercase character"

function upperCase(str) {
    return /^[A-Z]/.test(str)
      ? "String's not starts with uppercase character"
      : "String's starts with uppercase character";
  }
  console.log(upperCase("regexp"));
  console.log(upperCase("RegExp"));
  
  //8-2.
  //Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
  //Приклад роботи:
  //checkEmail("Qmail2@gmail.com");
  //true
  function checkEmail(email) {
    const regExpEmail = /^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regExpEmail.test(email);
  }
  console.log(checkEmail("Qmail2@gmail.com"));
  console.log(checkEmail("$mail2@gmail.com"));
  console.log(checkEmail("Qmail2gmail.com"));
  console.log(checkEmail("Qmail2@.com"));
  
  //8-3.
  //Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
  //Приклад роботи:
  //Вхідний рядок    "Java Script"
  //Вихід    “Script, Java”
  function replaceWords(str) {
    return str.replace(/(\w+)\s+(\w+)/, "$2, $1");
  }
  console.log(replaceWords("Java Script"));
  
  //8-4.
  //Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
  function isCardNumber(cardNumber) {
    const validCard = /^\d{4}([- ])?\d{4}([- ])?\d{4}([- ])?\d{4}$/;
    return validCard.test(cardNumber);
  }
  console.log(isCardNumber("9999"));
  console.log(isCardNumber("9999-9999"));
  console.log(isCardNumber("9999-9999-9999"));
  console.log(isCardNumber("9999-9999-9999-9999"));
  console.log(isCardNumber("9999 9999 9999 9999"));
  console.log(isCardNumber("9999999999999999"));
  console.log(isCardNumber("9999-9a99-9999-9999"));
  
  //8-5.
  //Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
  //Вимоги:
  //•  Цифри (0-9).
  //•  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
  //•  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
  // •  Символ “-” не може повторюватися.
  
  //checkEmail('my_mail@gmail.com');
  //"Email is correct!"
  //checkEmail('#my_mail@gmail.com');
  //"Email is not correct!"
  //checkEmail('my_ma--il@gmail.com');
  //"Email is not correct!"
  
  function checkEmail(email) {
    const regex = /^[a-zA-Z0-9]+[-]?[_]+\w+@[a-zA-Z]+\.[a-zA-Z]+$/;
    if (regex.test(email)) {
      return "Email is correct!";
    } else {
      return "Email is not correct!";
    }
  }
  console.log(checkEmail("my_mail@gmail.com"));
  console.log(checkEmail("#my_mail@gmail.com"));
  console.log(checkEmail("my_ma--il@gmail.com"));
  console.log(checkEmail("my__mail@gmail.com")); // true в символі “_” немає заборони на повторення
  
  //8-6.
  //Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
  //Приклад роботи:
  //checkLogin('ee1.1ret3');
  //true
  ////1.1, 3
  
  //checkLogin('ee1*1ret3');
  //false
  ////1, 1, 3
  
  function checkLogin(login) {
    const regex = /^[a-zA-Z]([a-zA-Z0-9]|\d+(\.\d+)){1,9}$/;
    console.log(regex.test(login));
    console.log(login.match(/\d+(\.\d+)?/g));
    return;
  }
  
  checkLogin("ee1.1ret3");
  checkLogin("ee1..1ret3");
  checkLogin("ee11ret3");
  checkLogin("ee1*1ret3");