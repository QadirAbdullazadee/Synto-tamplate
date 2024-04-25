let firstUsa = document.querySelector(".first-usa");
let firstDropDown = document.querySelector("ul");
firstUsa.addEventListener("click", function () {
  firstDropDown.classList.toggle("first-dropdown");
});