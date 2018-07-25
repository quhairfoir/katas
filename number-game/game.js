var prompt = require("prompt-sync")();

// code below (replace this example)
function game2(){
  var randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  var attemptCounter = 0;
  var oldGuess = [];
  var success = false;
  var answer = prompt("Guess a number:");
  while (success !== true){
    if (answer === randomNumber){
      attemptCounter++;
      console.log("You got it! You took" + attemptCounter + "attempts!");
      return success = true;
    } else if (oldGuess.indexOf(answer) > -1){
      console.log("Already Guessed!");
      answer = prompt("Guess a number:");
    } else if (answer < randomNumber){
      console.log("Too low!");
      attemptCounter++;
      oldGuess.push(answer);
      console.log(attemptCounter);
      console.log(oldGuess);
      answer = prompt("Guess a number:");
    } else if (answer > randomNumber){
      console.log("Too high!");
      attemptCounter++;
      oldGuess.push(answer);
      console.log(attemptCounter);
      console.log(oldGuess);
      answer = prompt("Guess a number:");
    } else if (isNaN(answer)){
      console.log("Not a number! Try again!");
      answer = prompt("Guess a number:");
    }
  }
}

game2();


/*function game(){
  var randomNumber = Math.floor(Math.random() * 100);
  var attemptCounter = 0;
  var oldGuess = [];
  var success = false;
  var answer = prompt("Guess a number:");
  while (success == false){
    if (answer === randomNumber){
      attemptCounter++;
      console.log("You got it! You took" + attempts + "attempts!");
      success = true;
    } else if (answer > randomNumber){
      console.log("Too high!");
      attemptCounter++;
      oldGuess.push(answer);
    } else if (answer < randomNumber){
      console.log("Too low!");
      attemptCounter++;
      oldGuess.push(answer);
    } else if (answer === NaN){
      console.log("Not a number! Try again!");
    } else if (oldGuess.indexOf(answer) > -1){
      console.log("Already Guessed!");
    }
    answer = prompt("Guess a number:");
  }
}*/

