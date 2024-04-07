const input = document.querySelector("#input-password");
const warning = document.querySelector(".text");
input.addEventListener("input", function () {
  let password = input.value;
  if (password.length < 8) {
    warning.textContent = "password is to short";
    warning.style.color = "red";
  } else if (password.search(/[A-Z]/) == -1) {
    warning.textContent = "password is missing uppercase";
    warning.style.color = "red";
  } else if (password.search(/[a-z]/) == -1) {
    warning.textContent = "password is missing lowercase";
    warning.style.color = "red";
  } else if (password.search(/[0-9]/) == -1) {
    warning.textContent = "password is missing numeric value";
    warning.style.color = "red";
  } else if (password.search(/[!\@\#\$\%\^\&\*\(\)\+\ -\>\<\?\\]/) == -1) {
    warning.textContent = "password is missing spacial charecter ";
    warning.style.color = "red";
  } else {
    warning.textContent = "password is strong";
    warning.style.color = "green";
  }
});
