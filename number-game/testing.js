
var randomNumber = Math.floor(Math.random() * 100);
var attemptCounter = 0;
var oldGuess = [];
var success = false;

var answer = prompt("Guess a number:");
  while (sucess = false){
    answer = prompt("Guess a number:");
    if (answer === randomNumber){
      attemptCounter++;
      console.log("You got it! You took" + attempts + "attempts!");
      guessed = true;
    } else if (answer > randomNumber){
      console.log("Too high!");
      attemptCounter++;
      oldGuess = answer;
    } else if (answer < randomNumber){
      console.log("Too low!");
      attemptCounter++;
      oldGuess = answer;
    } else if (answer === NaN){
      console.log("Not a number! Try again!");
    } else if (oldGuess.indexOf(answer) > -1){
      console.log("Already Guessed!");
    }
  }




//must log old answer when valid value
//must add to attempt counter when player makes valid guess (sucess or failure)
//FAILURE STATES
//1) NaN = "Not a number! Try again!"
//2) same guess = "Already guessed!"
