// Створіть веб-додаток для визначення купе в плацкартному вагоні за номером квитка. Користувач вводить номер місця, вивести йому номер купе, тип місця - бічне чи ні, верхнє чи нижнє.

const findSeatButton = document.getElementById("button");
const seatNumberInput = document.getElementById("seatNumber");
const resultDiv = document.getElementById("result");

const findSeat = () => {
  const seatNumber = parseInt(seatNumberInput.value);

  if (seatNumber < 1 || seatNumber > 54)
    return (resultDiv.innerText =
      "Введіть коректний номер місця (від 1 до 54)");

  let coupeNumber = 0;
  let seatType = "";

  if (seatNumber % 2 === 1) {
    seatType += "нижнє";
  } else {
    seatType += "верхнє";
  }

  if (seatNumber <= 36) {
    coupeNumber = Math.ceil(seatNumber / 4);
    seatType += ", не бічне";
  } else {
    coupeNumber = Math.ceil(Math.abs(seatNumber - 55) / 2);
    seatType += ", бічне";
  }

  resultDiv.innerText = `Місце №${seatNumber} знаходиться в купе №${coupeNumber}, ${seatType} місце`;
};

findSeatButton.addEventListener("click", findSeat);
