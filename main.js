let playerScore = 0;
let computerScore = 0;
let Ties = 0;

function Winner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    Ties ++;
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

function updateScores(result) {
  document.getElementById("player-score").innerText = `Player: ${playerScore}`;
  document.getElementById("computer-score").innerText = `Computer: ${computerScore}`;
 document.getElementById("ties-score").innerText = `Ties: ${Ties}`;
}

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const result = Winner(userChoice, computerChoice);

  document.getElementById("game-result").innerText = `Result: You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;

  updateScores(result);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  Ties = 0;
  document.getElementById("player-score").innerText = `Player: ${playerScore}`;
  document.getElementById("computer-score").innerText = `Computer: ${computerScore}`;
  document.getElementById("ties-score").innerText = `Ties: ${Ties}`;
  document.getElementById("game-result").innerText = "Result: ";
}
