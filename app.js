/*
GAME RULES:

- The game has 2 players, playing in rounds.
- In each turn, a player rolls a die as many times as he whishes. Each result get added to his ROUND score.
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn.
- The first player to reach 100 points on GLOBAL score wins the game.

*/

// An array to hold both players' scores (index 0 for Player 1, index 1 for Player 2).
// Each set to zero to start.
// Array stored in a variable called SCORES.
var scores = [0, 0];
// One variable for the round score, since we only have one round score at a time:
var roundScore = 0;
// Active Player: Player 1 is 0 in the array, and Player 2 is 1 in the array. Set to 0 to begin:
var activePlayer = 0;

// Hide the dice img before the dice are rolled for the first time:
document.querySelector(".dice").style.display = "none";

// Display Global Scores as zero for both players:
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
// Display Current Scores as zero for both players:
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// Event Handler for ROLL DICE button clicks:
// The first argument is the type of event it's listening for, which is a "click".
// The second argument is the function that will be called when this event happens, which in this case is an anonymous function because it will only be used inside this event listener.
document.querySelector(".btn-roll").addEventListener("click", function() {
	// Generate a random number between 1 and 6 and store it in a variable called dice:
	var dice = Math.floor(Math.random() * 6) + 1;
	// Display the result:
	// First store the selector in a variable so you don't have to keep writing out the entire selector over and over:
	var diceDOM = document.querySelector(".dice");
	// Un-hide the dice image:
	diceDOM.style.display = "block";
	// Set the dice image to be the one corresponding to the random number that was generated:
	diceDOM.src = "dice-" + dice + ".png";
	// Update the roundScore IF the rolled number was NOT 1.
	if (dice > 1) {
		// Add score
	}
	else {
		// Next player.
	}
});

// Switch player function:
	// If activePlayer = name-0:
		// Set player = name-1.
	// Else if activePlayer = name-1:
		// Set player = name-0.

// newGame Function

	// For each new game, have Player 1 go first:
		// activePlayer = name-0.

	// On ROLL DICE click:
		// Call random number helper function and store it in a local variable:
			// var randomNumber = getRandomNumber();
		// Switch statement:
			// Switch 1: randomNumber === 1:
				// Display dice-1.
				// activePlayer GLOBAL SCORE is reset to 0.
				// Call SWITCH PLAYER function.
				// Break;
			// Switch 2: randomNumber === 2:
				// Display dice-2.
				// activePlayer ROUND SCORE = ROUND SCORE + 2.
				// Break;
			// Switch 3: randomNumber === 3:
				// Display dice-3.
				// activePlayer ROUND SCORE = ROUND SCORE + 3.
				// Break;
			// Switch 4:
				// Display dice-4.
				// activePlayer ROUND SCORE = ROUND SCORE + 4.
				// Break;
			// Switch 5:
				// Display dice-5.
				// activePlayer ROUND SCORE = ROUND SCORE + 5.
				// Break;
			// Switch 6:
				// Display dice-6.
				// activePlayer ROUND SCORE = ROUND SCORE + 6.
				// Break;

	// On HOLD click:
		// Add ROUND SCORE to ACTIVE PLAYER's GLOBAL SCORE.
		// Check if activePlayer won:
			// If activePlayer's GLOBAL SCORE >= 100:
				// activePlayer wins!
			// Else:
				// Call SWITCH PLAYER function.

// On NEW GAME click, call newGame function.

// Call newGame function to start first game.