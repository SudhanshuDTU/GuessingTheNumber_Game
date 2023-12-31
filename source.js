let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (guess >= 1 && guess <= 100) {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over!! Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  } else {
    alert("Please Enter valid Number");
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Won The Game !!`);
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage(`Number is Low`);
  } else if(guess > randomNumber){
    displayMessage(`Number is High`);
  }
}
function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2> ${message} </h2>`;
    
}
function endGame(params) {
    userInput.value = "";
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();

}
function newGame(params) {
   const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess=1;
    guessSlot.innerHTML = "";
    remaining.innerHTML=`${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;

});
}
