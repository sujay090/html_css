const lineicon = document.querySelector(".line");
const crossIcon = document.querySelector(".cross-icon");
const popup = document.querySelector("#form");

lineicon.addEventListener("click", () => {
  popup.classList.add("collection-pro");
});

crossIcon.addEventListener("click", () => {
  popup.classList.remove("collection-pro");
});
