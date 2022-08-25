const buttons = document.querySelectorAll("#buttons button"); //selects the rock paper scissor buttons
const player1 = document.getElementById("player1"); //you are player 1, hand to the left
const player2 = document.getElementById("player2"); //the computer is player 2, hand to the right
const winScreen = document.getElementById("win"); //winner screen :)
const loseScreen = document.getElementById("lose"); //loser screen :(
const drawScreen = document.getElementById("draw"); //draw screen :|

let yourMove; //this variable is your chosen move
let computersMove; //this variable is the computer's chosen move
let finalScore; //this variable is the concatenation of your move and the computer's move

let randomComputerChoice; //this variable determines the computer's chosen move

//wait until the docuent is loaded before firing the arrow function
document.addEventListener("DOMContentLoaded", () => {
  //reset scores
  yourMove = "";
  computersMove = "";
  finalScore = "";

  buttons.forEach((btn) => {
    btn.addEventListener("click", playerChoice);
    btn.classList.remove("hidden");
  });
});

//player makes a choice
function playerChoice() {
  //computer selects a move simultaneously
  computerChoice();

  //make the buttons invisible
  buttons.forEach((btn) => {
    btn.classList.add("hidden");
  });

  player1.classList.add("shake");

  //setTimeout delays a function by x milliseconds, in this case 1800ms for the shake animation to finish
  setTimeout(() => {
    player1.classList.remove("shake");

    //this code adds the corresponding class to the move you selected
    //console.log(this.dataset.move);
    let selectedMove = this.dataset.move;
    player1.classList.add(selectedMove);

    //determine the weight of your move
    switch (selectedMove) {
      case "rock":
        yourMove = "rock";
        break;

      case "paper":
        yourMove = "paper";
        break;

      case "scissors":
        yourMove = "scissors";
        break;
    }
    //console.log("you used " + yourMove);

    determineWinner();
  }, 1800); //delay by 1800ms
}

//the computer plays a random move
function computerChoice() {
  player2.classList.add("shake");

  //setTimeout delays a function by x milliseconds, in this case 1800ms for the shake animation to finish
  setTimeout(() => {
    player2.classList.remove("shake");

    //the computer selects a random number bewteen 1, 2 and 3
    randomComputerChoice = Math.ceil(Math.random() * 3);
    //console.log("computer chose move number" + randomComputerChoice);

    //determine the move and the weight of the computer's move
    switch (randomComputerChoice) {
      case 1:
        player2.classList.add("rock");
        computersMove = "rock";
        break;

      case 2:
        player2.classList.add("paper");
        computersMove = "paper";
        break;

      case 3:
        player2.classList.add("scissors");
        computersMove = "scissors";
        break;
    }
    //console.log("computer used " + computersMove);
  }, 1800); //delay by 1800ms
}

function determineWinner() {
  finalScore = `${yourMove + computersMove}`;
  //console.log(finalScore);

  switch (finalScore) {
    case "rockrock":
      drawScreen.classList.remove("hidden");
      break;

    case "rockpaper":
      loseScreen.classList.remove("hidden");
      break;

    case "rockscissors":
      winScreen.classList.remove("hidden");
      break;

    case "paperrock":
      winScreen.classList.remove("hidden");
      break;

    case "paperpaper":
      drawScreen.classList.remove("hidden");
      break;

    case "paperscissors":
      loseScreen.classList.remove("hidden");
      break;

    case "scissorsrock":
      loseScreen.classList.remove("hidden");
      break;

    case "scissorspaper":
      winScreen.classList.remove("hidden");
      break;

    case "scissorsscissors":
      drawScreen.classList.remove("hidden");
      break;
  }
}
