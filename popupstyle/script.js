const popup = document.querySelector(".pop-btn");
const main = document.querySelector(".main");
const crossIcon = document.querySelector(".cross-icon");

popup.addEventListener("click", () => {
  main.classList.add("open");
});

crossIcon.addEventListener("click", () => {
  main.classList.remove("open");
});
