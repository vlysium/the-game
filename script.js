const buttons = document.querySelectorAll("#buttons button"); //selects the rock paper scissor buttons
const player1 = document.getElementById("player1"); //you are player 1, hand to the left
const player2 = document.getElementById("player2"); //the computer is player 2, hand to the right
const winScreen = document.getElementById("win"); //winner screen :)
const loseScreen = document.getElementById("lose"); //loser screen :(
const drawScreen = document.getElementById("draw"); //draw screen :|
const reset = document.getElementById("reset"); //reset button to play again

let yourMove; //this variable is your chosen move
let computersMove; //this variable is the computer's chosen move
let finalScore; //this variable is the concatenation of your move and the computer's move

let randomComputerChoice; //this variable determines the computer's chosen move

//wait until the docuent is loaded before firing the arrow function
document.addEventListener("DOMContentLoaded", () => {
  reset.addEventListener("click", playAgain);
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
        yourMove = "r";
        break;

      case "paper":
        yourMove = "p";
        break;

      case "scissors":
        yourMove = "s";
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
        computersMove = "r";
        break;

      case 2:
        player2.classList.add("paper");
        computersMove = "p";
        break;

      case 3:
        player2.classList.add("scissors");
        computersMove = "s";
        break;
    }
    //console.log("computer used " + computersMove);
  }, 1800); //delay by 1800ms
}

//calculate the winner of the match
function determineWinner() {
  finalScore = yourMove + computersMove;
  //console.log(finalScore);

  if (finalScore == "rs" || finalScore == "pr" || finalScore == "sp") {
    //you win
    winScreen.classList.remove("hidden");
  } else if (finalScore == "rp" || finalScore == "ps" || finalScore == "sr") {
    //you lose
    loseScreen.classList.remove("hidden");
  } else {
    //draw
    drawScreen.classList.remove("hidden");
  }

  reset.classList.remove("hidden");
}

//reset variables
function playAgain() {
  //reset scores
  yourMove = "";
  computersMove = "";
  finalScore = "";

  //remove classes from players
  player1.className = "player";
  player2.className = "player";

  //hide elements
  winScreen.classList.add("hidden");
  loseScreen.classList.add("hidden");
  drawScreen.classList.add("hidden");
  reset.classList.add("hidden");

  //make buttons visible again
  buttons.forEach((btn) => {
    btn.classList.remove("hidden");
  });
}
