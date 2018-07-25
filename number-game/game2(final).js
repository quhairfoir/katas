var prompt = require("prompt-sync")();

// code below (replace this example)

function game(){
  //declare guess, counter, guess array, random number, while loop condition.
  var randomNumber = Math.floor(Math.random() * 100);
  var guess = prompt("Guess a number:");
  var counter = 0;
  var guessArray = [];
  var win = false;
  while (win === false){ // false
    if (guess == randomNumber){
      // correct = add to counter, message, (true)
      counter++;
      console.log("You got it! It took you " + counter + " attempts!");
      win = true;
    } else if (guessArray.indexOf(guess) > -1){
      // guess already in guess array = message
      console.log("Already guessed!");
      guess = prompt("Guess a number:");
    } else if (guess < randomNumber){
      // too low = message, add to counter, add to guess array
      console.log("Too low!");
      counter++;
      guessArray.push(guess);
      guess = prompt("Guess a number:");
    } else if (guess > randomNumber){
      // too high = message, add to counter, add to guess array
      console.log("Too high!");
      counter++;
      guessArray.push(guess);
      guess = prompt("Guess a number:");
    } else if (isNaN(guess) === true){
      // NaN = message
      console.log("Not a number! Try again!");
      guess = prompt("Guess a number:");
    }
  }
}


game();