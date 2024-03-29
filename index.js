const prompt = require("prompt-sync")();

let number = Math.floor(Math.random() * 100 + 1);
let chances = 0;
let guess;

console.log(
  "This is a Guessing game and you have to enter a number and if it matches \nwith the number generated by computer, then you win...\n",
);
guess = prompt("Enter any number between 1 to 100");
++chances;

do {
  guess = Number.parseInt(guess);

  if (guess > number) {
    console.log("The Number which you have entered is Greater");
    guess = prompt("Try Again!");
    guess = Number.parseInt(guess);
    ++chances;
    continue;
  } else if (guess < number) {
    console.log("The Number which you have entered is Smaller");
    guess = prompt("Try Again!");
    guess = Number.parseInt(guess);
    ++chances;
    continue;
  }
} while (guess != number);

let score = 100 - chances;
console.log(
  "\nCongratulations🥳🥳\nThe number generated was",
  number + " and you guessed it right✅😁\nYour final score is",
  score,
);
