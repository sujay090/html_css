const allchekbox = document.querySelectorAll(".chek-box");
const allinputs = document.querySelectorAll(".goal-input");
const progressBar = document.querySelector(".progress-bar");
const progressBarValue = document.querySelector(".progress-2");

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};
let completedGoals = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;
progressBarValue.style.width = `${(completedGoals / 3) * 100}%`;
document.querySelector(".com").textContent = `${completedGoals}/3 completed`;
allchekbox.forEach((cheakbox) => {
  cheakbox.addEventListener("click", (e) => {
    const allfid = [...allinputs].every(function (input) {
      return input.value;
    });
    if (allfid) {
      cheakbox.parentElement.classList.toggle("completed");
      const inputId = cheakbox.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      completedGoals = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      progressBarValue.style.width = `${(completedGoals / 3) * 100}%`;
      document.querySelector(
        ".com"
      ).textContent = `${completedGoals}/3 completed`;

      localStorage.setItem("allGoals", JSON.stringify(allGoals));
    } else {
      document.querySelector(".error-lable").style.display = "block";
    }
  });
});

allinputs.forEach((input) => {
  input.value = allGoals[input.id].name;
  if (allGoals[input.id.completed]) {
    input.parentElement.classList.add = "completed";
  }
  input.addEventListener("focus", () => {
    document.querySelector(".error-lable").style.display = "none";
  });
  input.addEventListener("input", (e) => {
    if (allGoals[input.id].completed) {
      e.target.value = allGoals[input.id].name;
      return;
    }
    allGoals[input.id] = {
      name: input.value,
      completed: false,
    };
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
