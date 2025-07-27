let yourScore = 0;
let compScore = 0;

function game(user) {
  const choices = ["rock", "paper", "scissors"];
  const comp = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (user === comp) {
    result = "Draw, try again!";
  } else if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) {
    result = "You win!";
    yourScore++;
  } else {
    result = "Computer wins!";
    compScore++;
  }

  document.getElementById("result").innerHTML = `
    <strong>You chose:</strong> ${user}<br>
    <strong>Computer chose:</strong> ${comp}<br>
    <strong>Result:</strong> ${result}
  `;

}