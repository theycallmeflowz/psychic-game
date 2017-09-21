alert('Welcome to the number guessing game!');
    var name = prompt("Enter Your Name to begin");
    alert('Instructions: The computer will try to choose a number between 1 & 6 And youll try to guess what the number is');
    var userGuess = document.getElementById("userguess");
	var computerGuess = document.getElementById("computerguess");
	var winsElem = document.getElementById("wins");
	var lossesElem = document.getElementById("losses");
	var wins = 0;
	var losses = 0;
    var html = "<p>" + name +"'s" + " Guess: " + userGuess + "</p>" +
          // "<p>The Computer Guessed: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>";


    // alert ("Guess What Number Im Thinking");    

	document.onkeyup = function(event){
		var userGuess = parseInt(event.key);
		var computerGuess = Math.floor(Math.random() * 7);
	console.log (computerGuess);


	if (userGuess === computerGuess){
		wins++;
		console.log("Youre Right");
		computerGuess = Math.floor(Math.random ()* 7);

		  html =
          "<p>" + name +"'s" + " Guess: " + userGuess + "</p>" +
          // "<p>The Computer Guessed: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>"

	} else {
		losses++;
		console.log("Youre Wrong");


		  html =
          "<p>" + name +"'s" + " Guess: " + userGuess + "</p>" +
          // "<p>The Computer Guessed: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>"

        // Set the inner HTML contents of the #game div to our html string
        
      }
document.querySelector("#game").innerHTML = html;

	}
	document.querySelector("#game").innerHTML = html;
	 
      // tiesElem.textContent = ties;
      // userGuess.textContent = userGuess;
      // computerGuess.textContent = computerGuess;
