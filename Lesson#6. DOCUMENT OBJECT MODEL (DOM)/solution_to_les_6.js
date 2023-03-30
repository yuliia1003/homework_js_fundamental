// 1.На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3

const list = document.querySelector("#list");

let firstItem = list.firstElementChild;
let lastItem = list.lastElementChild;
let secondItem = firstItem.nextElementSibling;
let thirdItem = secondItem.nextElementSibling;
let fourthItem = lastItem.previousElementSibling;

alert(
  `${firstItem.textContent}, ${lastItem.textContent}, ${secondItem.textContent}, ${fourthItem.textContent}, ${thirdItem.textContent}`
);

// 2.
// Для сторінки
// <body>
//   <h1>I'am a big header!!!</h1>
//   <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
//   </div>
//   <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
//   </ul>
//   <span>Make me invisible, please!</span>
// </body>

// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.

const title = document.querySelector("h1");
title.style.backgroundColor = "#90EE90";

const myDiv = document.querySelector("#myDiv");
myDiv.firstElementChild.style.fontWeight = "bold";
myDiv.firstElementChild.nextElementSibling.style.color = "red";
myDiv.lastElementChild.previousElementSibling.style.textDecoration = "underline";
myDiv.lastElementChild.style.fontStyle = "italic";

const myList = document.querySelector("#myList");
myList.style.listStyle = "none";

const listItems = document.querySelectorAll("#myList li");
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.display = "inline";
}

const textRemove = myList.childNodes;
for (let i = 0; i < textRemove.length; i++) {
  if ((textRemove[i].nodeName = "#text")) {
    textRemove[i].remove();
  }
}

const invisibleText = document.querySelector("span");
invisibleText.style.opacity = 0;

// 3.
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
// </body>

const body = document.body;
const main = document.createElement("main");
main.classList.add("mainClass", "check", "item");

const myDiv = document.createElement("div");
myDiv.id = "myDiv";

const paragraph = document.createElement("p");
let textParagraph = document.createTextNode("First paragraph");

paragraph.appendChild(textParagraph);
myDiv.appendChild(paragraph);
main.appendChild(myDiv);
body.appendChild(main);

// 4.
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/Jjabvez

const form = document.querySelector(".array fieldset");
const submitButton = form.querySelector(".btn");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const inputs = form.querySelectorAll(".arr");

  const outputDiv = document.createElement("div");
  outputDiv.classList.add("output");

  inputs.forEach((input) => {
    const label = input.getAttribute("data-form");
    const value = input.value;
    const formattedData = `${label}: ${value}<br>`;
    outputDiv.insertAdjacentHTML("beforeend", formattedData);
  });

  const outBlock = document.querySelector(".out");
  outBlock.appendChild(outputDiv);
});

// 5.
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/abzLvqo

const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  const anim = circle.getAttribute("data-anim");

  circle.classList.add(anim);

  if (circle.classList.contains(anim)) {
    console.log(`Animation '${anim}' applied`);
  } else {
    console.log(`Animation '${anim}' not applied`);
  }
});

// 6.
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/dyjyeGO

// в папці Task 6. Shoes


