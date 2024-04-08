const allSpan = document.querySelectorAll("span");

allSpan.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("activ");
  });
});
