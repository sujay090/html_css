const quiz = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];
const submitButton = document.querySelector(".submit-btn");

function myfunction() {
  const qustion = document.querySelector("h2");
  const optain1 = document.querySelector(".optain-a");
  const optain2 = document.querySelector(".optain-b");
  const optain3 = document.querySelector(".optain-c");
  const optain4 = document.querySelector(".optain-d");

  let allQustion = 0;
  let score = 0;

  qustion.textContent = quiz[allQustion].question;
  optain1.textContent = quiz[allQustion].ans1text;
  optain2.textContent = quiz[allQustion].ans2text;
  optain3.textContent = quiz[allQustion].ans3text;
  optain4.textContent = quiz[allQustion].ans4text;

  submitButton.addEventListener("click", () => {
    const chekedans = document.querySelector('input[type="radio"]:checked'); // get the radio input in to the html page
    if (chekedans === null) {
      alert("please select an answer ");
    } else {
      if (
        chekedans.nextElementSibling.textContent === quiz[allQustion].answer
      ) {
        score++;
      }
      allQustion++;
      if (allQustion < quiz.length) {
        qustion.textContent = quiz[allQustion].question;
        optain1.textContent = quiz[allQustion].ans1text;
        optain2.textContent = quiz[allQustion].ans2text;
        optain3.textContent = quiz[allQustion].ans3text;
        optain4.textContent = quiz[allQustion].ans4text;
        chekedans.checked = false;
      } else {
        alert(`your score is ${score} out of ${quiz.length}`);
        location.reload();
      }
    }
  });
}

myfunction();

// submitButton.addEventListener("dblclick", () => {

//   myfunction();
//   location.reload();
// });
