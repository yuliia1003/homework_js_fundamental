// 7-1. За допомогою методів об’єкта window створити:
//         1) нове вікно розміром 300х300 пікселів.
//         2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
//         3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
//         4) із затримкою 2 сек закрийте вікно.

const myWindow = window.open("", "", "width=300,height=300");
setTimeout(() => {
  myWindow.resizeTo(500, 500);
  setTimeout(() => {
    myWindow.moveTo(200, 200);
    setTimeout(() => {
      myWindow.close();
    }, 2000);
  }, 2000);
}, 2000);

// 7-2.
// Для заданої HTML-сторінки напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".

const changeBtn = document.querySelector("#change-btn");
const changeStyleText = document.querySelector("#text");

function changeCSS() {
  changeBtn.addEventListener("click", () => {
    changeStyleText.style.color = "pink";
    changeStyleText.style.fontSize = "20px";
    changeStyleText.style.fontFamily = "Comic Sans MS";
  });
}
changeCSS();

// 7-3.
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.

const blueBtn = document.querySelector(".blue");
const pinkBtn = document.querySelector(".pink");
const brownBtn = document.querySelector(".brown");
const yellowLink = document.querySelector(".yellow");
const body = document.body;

blueBtn.addEventListener("click", () => {
  body.style.backgroundColor = blueBtn.getAttribute("class");
});

pinkBtn.addEventListener("dblclick", () => {
  body.style.backgroundColor = pinkBtn.getAttribute("class");
});

brownBtn.addEventListener("mousedown", () => {
  body.style.backgroundColor = brownBtn.getAttribute("class");
});
brownBtn.addEventListener("mouseup", () => {
  body.style.backgroundColor = "white";
});

yellowLink.addEventListener("mouseover", () => {
  body.style.backgroundColor = yellowLink.getAttribute("class");
});
yellowLink.addEventListener("mouseout", () => {
  body.style.backgroundColor = "white";
});

// 7-4.
// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.

const selectList = document.querySelector("#myList");
const deleteBtn = document.querySelector("#deleteBtn");

deleteBtn.addEventListener("click", () => {
  selectList.remove(selectList.selectedIndex);
});

// 7-5.
// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".

const liveBtn = document.querySelector("#liveBtn");
const message = document.querySelector("#message");

liveBtn.addEventListener("click", () => {
  message.innerHTML += "<p>I was pressed!</p>";
});
liveBtn.addEventListener("mouseover", () => {
  message.innerHTML += "<p>Mouse on me!</p>";
});
liveBtn.addEventListener("mouseout", () => {
  message.innerHTML += "<p>Mouse is not on me!</p>";
});

// 7-6.
// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.

const sizes = document.querySelector("#sizes");

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  sizes.innerHTML = `Width: ${width}px, Height: ${height}px`;
});

//7-7.
//На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.

const countries = document.querySelector("#country");
const cities = document.querySelector("#cities");
const placeMessage = document.querySelector("#place-message");

const globe = {
  ger: [
    { text: "Berlin", value: "berlin" },
    { text: "Hamburg", value: "hamburg" },
    { text: "Munich", value: "munich" },
    { text: "Cologne", value: "cologne" },
    { text: "Frankfurt", value: "frankfurt" },
  ],
  usa: [
    { text: "New York", value: "new-york" },
    { text: "Los Angeles", value: "los-angeles" },
    { text: "Chicago", value: "chicago" },
    { text: "Houston", value: "houston" },
    { text: "Phoenix", value: "phoenix" },
  ],
  ukr: [
    { text: "Kyiv", value: "kyiv" },
    { text: "Lviv", value: "lviv" },
    { text: "Odesa", value: "odesa" },
    { text: "Kharkiv", value: "kharkiv" },
    { text: "Dnipro", value: "dnipro" },
  ],
};

countries.addEventListener("change", () => {
  cities.innerHTML = "";
  const selectedCountry = countries.value;
  const selectedCities = globe[selectedCountry];
  for (let i = 0; i < selectedCities.length; i++) {
    const city = document.createElement("option");
    city.value = selectedCities[i].value;
    city.text = selectedCities[i].text;
    cities.appendChild(city);
  }
  cities.addEventListener("change", () => {
    const cityText = cities.options[cities.selectedIndex].textContent;
    const contryText = countries.options[countries.selectedIndex].textContent;
    placeMessage.innerHTML = `You have selected ${cityText}, ${contryText}`;
  });
});