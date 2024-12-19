let score = {
  wins: parseInt(localStorage.getItem("wins")) || 0,
  losses: parseInt(localStorage.getItem("losses")) || 0,
  draws: parseInt(localStorage.getItem("draws")) || 0,
};
function playGame(userChoice) {
  let choices = ["Rock", "Scissors", "Paper"];
  let computerChoise = choices[Math.floor(Math.random() * choices.length)];

  document.querySelector(
    ".user__choice"
  ).textContent = `Your choise: ${userChoice}`;
  document.querySelector(
    ".computer__choice"
  ).textContent = `Computer choise: ${computerChoise}`;

  let result = finalWinner(userChoice, computerChoise);

  document.querySelector(".final").textContent = `Result: ${result}`;

  if (result === "You win") {
    document.querySelector(".final").style.color = "green";
    score.wins++;
  } else if (result === "You lose") {
    score.losses++;
    document.querySelector(".final").style.color = "red";
  } else {
    score.draws++;
    document.querySelector(".final").style.color = "white";
  }
  localStorage.setItem("wins", score.wins);
  localStorage.setItem("losses", score.losses);
  localStorage.setItem("draws", score.draws);
}

function finalWinner(user, computer) {
  if (user === computer) {
    return "Draw";
  }
  if (
    (user === "Rock" && computer === "Scissors") ||
    (user === "Scissors" && computer === "Paper") ||
    (user === "Paper" && computer === "Rock")
  ) {
    return "You win";
  } else {
    return "You lose";
  }
}
