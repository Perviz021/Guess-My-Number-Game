const checkBtn = document.querySelector(".check");
const input = document.querySelector(".guess");
const question = document.querySelector("header .question");
const message = document.querySelector(".message");
const again = document.querySelector(".again");

// Generating random number
function generateRandom(min = 1, max = 21) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}
let randomNumber = generateRandom();
console.log(`Random number: ${randomNumber}`);

let score = 20;
let highscore = 0;

//For checking the numbers
checkBtn.addEventListener("click", findNumber);

// When pressing Enter key
input.addEventListener("keyup", function (e) {
  if (e.which === 13) {
    findNumber();
  }
});

function findNumber() {
  const inputValue = Number(input.value);
  //If the user clicks button without entering a number
  if (!inputValue) {
    message.textContent = "⛔ No Number!";
  } //When user wins
  else if (inputValue === randomNumber) {
    message.textContent = "🎊 Correct Number!";
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.backgroundColor = "transparent";
    document.querySelector(".score").textContent = score;
    question.textContent = inputValue;
    question.style.padding = "0px 50px";

    //To find the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } //If user guesses wrong number or loses
  else if (inputValue !== randomNumber) {
    if (score > 1) {
      message.textContent = inputValue < randomNumber ? "📉 Low" : "📈 High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
}

// For resetting the game; Highscore remains.
again.addEventListener("click", function () {
  randomNumber = generateRandom();
  console.log(`Random number: ${randomNumber}`);
  score = 20;
  question.textContent = "?";
  question.padding = "0px 30px";
  input.value = "";
  message.textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
});
