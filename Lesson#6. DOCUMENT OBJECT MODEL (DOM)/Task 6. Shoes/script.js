const colors = document.querySelector(".colors");
const price = document.querySelector("#outprice");
const sizes = document.querySelector(".sizes");
const discountCheckbox = document.querySelector("#discountCheckbox");

let basePrice = parseInt(document.querySelector(".colors .active").getAttribute("data-price"));
let coefficient = parseFloat(document.querySelector(".sizes .active").getAttribute("data-price-coefficient"));

colors.addEventListener("click", (event) => {
  const activeColor = document.querySelector(".colors .active");
  activeColor.classList.remove("active");
  event.target.classList.add("active");
  basePrice = parseInt(event.target.getAttribute("data-price"));
  price.innerHTML = calculatePrice();
});

sizes.addEventListener("click", (event) => {
  const activeSize = document.querySelector(".sizes .active");
  activeSize.classList.remove("active");
  event.target.classList.add("active");
  coefficient = parseFloat(event.target.getAttribute("data-price-coefficient"));
  price.innerHTML = calculatePrice();
});

function calculatePrice() {
  return (basePrice * coefficient).toFixed(2);
}

discountCheckbox.addEventListener("change", () => {
  if (discountCheckbox.checked) {
   price.innerHTML = (calculatePrice() * 0.7).toFixed(2);
  }
});
