function getComputerChoice() {
  let randomChoice = parseInt(Math.random() * 3);
  switch (randomChoice) {
    case 0:
      return "ROCK";
      break;
    case 1:
      return "PAPER";
      break;
    case 2:
      return "SCISSORS";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() == computerSelection) {
    return "Draw!";
  }
  switch (true) {
    case playerSelection.toUpperCase() === "ROCK" &&
      computerSelection === "SCISSORS":
      return "You win! Rock beats scissors";
      break;
    case playerSelection.toUpperCase() === "ROCK" &&
      computerSelection === "PAPER":
      return "You lose! Paper beats rock";
      break;
    case playerSelection.toUpperCase() === "PAPER" &&
      computerSelection === "ROCK":
      return "You win! Paper beats rock";
      break;
    case playerSelection.toUpperCase() === "PAPER" &&
      computerSelection === "SCISSORS":
      return "You lose! Scissors beats paper";
      break;
    case playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection === "PAPER":
      return "You win! Scissors beats paper";
      break;
    case playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection === "ROCK":
      return "You lose! Rock beats scissors";
      break;
    default:
        console.log(playerSelection + " " + computerSelection);
      return "Error! Something went wrong.";
  }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i=0; i<5; i++) {
        let player = prompt("ROCK PAPER OR SCISSORS");
        let comp = getComputerChoice();
        let winner = playRound(player, comp);
        console.log(winner);
        if (winner.startsWith("You win")) {
            playerScore++;
        } else if (winner.startsWith("You lose")) {
            compScore++;
        }
    }
    if (playerScore == compScore) {
        console.log("No one win!");
    } else if (playerScore > compScore) {
        console.log("You win the game!");
    } else {
        console.log("You lose the game!");
    }
}

game();