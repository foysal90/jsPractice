let totalWon = 0;
let totalLost = 0;

for (let i = 1; i <= 5; i++) {
  let guess = parseInt(prompt("Enter a number between 1 - 5 :"));
  let random = Math.floor(Math.random() * 5) + 1;
  if (guess === random) {
    console.log("You Won");
    totalWon++;
  } else {
    console.log(
      "You Have Lost, Random Number was ",
      random + " And you put ",
      guess
    );
    totalLost++;
  }
}

document.write("Yo have won : " + totalWon + " Times" + "<br/>");

document.write("Yo have lost  : " + totalLost + " Times");
