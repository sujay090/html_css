// const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let input = document.querySelector(".input");
const img = document.querySelector(".qr-img");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let qrvalue = input.value;
  if (!qrvalue) {
    alert("please write something");
    return;
  } else {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
  }
});
