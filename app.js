//computer choices available
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Set all initial values and parameters
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;



//select a random letter index for the available computer choices
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

//Allows the user 10 guesses
// guesses = guesses || 10
var logGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var logLetterToGuess = function() {
  this.letterToGuess = this.computerChoice[Math.floor(Math.random() * this.computerChoice.length)];
};
var logGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#let').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 10;
  guessesLeft = 10;
  guessedLetters = [];

  logLetterToGuess();
  logGuessesLeft();
  logGuessesSoFar();
}

logLetterToGuess();
logGuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userChoice);
  logGuessesLeft();
  logGuessesSoFar();

        if (guessesLeft > 0){
            if (userChoice == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Woo, you got it!!! Are you sure you aren't Stephen Curry!?");
                reset();
            }
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Clairvoyant?...I think not. Try again, Sherlock.");
            // Then we'll call the reset. 
            reset();
        }
};
