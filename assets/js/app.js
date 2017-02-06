/*
GAME RULES:

- The game has 2 players, playing in rounds.
- In each turn, a player rolls a die as many times as he whishes. Each result get added to his ROUND score.
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn.
- The first player to reach 100 points on GLOBAL score wins the game.

*/

// Create an array to hold both players' scores (index 0 for Player 1, index 1 for Player 2).
// Each set to zero to start.
// Array stored in a variable called SCORES.
var scores = [0, 0];
// One variable for the round score, since we only have one round score at a time:
var roundScore = 0;
// Active Player: Player 1 is 0 in the array, and Player 2 is 1 in the array. Set to 0 to begin:
var activePlayer = 0;

// Call the function that INITIALIZES the game:
init();

// Event Listener for ROLL DICE button clicks:
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
	diceDOM.src = "assets/img/dice-" + dice + ".png";
	// Update the roundScore IF the rolled number was NOT 1.
	if (dice !== 1) {
		roundScore += dice;
		document.querySelector("#current-" + activePlayer).textContent = roundScore;
	}
	// If it WAS 1:
	else {
		// Toggle to other player:
		nextPlayer();
	}
});

// Event Listener for HOLD button clicks:
document.querySelector(".btn-hold").addEventListener("click", function() {
	// Add current score to active player's global score:
	scores[activePlayer] += roundScore;
	// Update UI to show new score:
	document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
	// If player won game:
	if (scores[activePlayer] > 99) {
		// Replace Player Name with the word WINNER:
		document.querySelector("#name-" + activePlayer).textContent = "Winner!";
		// Remove the img of the die:
		document.querySelector(".dice").style.display = "none";
		// Add WINNER class to activePlayer:
		document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
		// Remove ACTIVE class from winner:
		document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
	} else {
		// Toggle to other player:
		nextPlayer();
	}
});

// Function to toggle between players when either a 1 is rolled or HOLD is clicked:
function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	// Reset both players' CURRENT scores to zero:
	document.getElementById("current-0").textContent = 0;
	document.getElementById("current-1").textContent = 0;
	// Toggle the ACTIVE class between the two players. (Default begins with player 0 as ACTIVE.)
	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");

	document.querySelector(".dice").style.display = "none";
}

// Event Listener for NEW GAME button, which calls the INIT function:
document.querySelector(".btn-new").addEventListener("click", init);

// Function to INITIALIZE game:
function init() {
	scores = [0, 0];
	// One variable for the round score, since we only have one round score at a time:
	roundScore = 0;
	// Active Player: Player 1 is 0 in the array, and Player 2 is 1 in the array. Set to 0 to begin:
	activePlayer = 0;
	// Hide the dice img before the dice are rolled for the first time:
	document.querySelector(".dice").style.display 		= "none";

	// Display Global Scores as zero for both players:
	document.getElementById("score-0").textContent 		= "0";
	document.getElementById("score-1").textContent 		= "0";
	// Display Current Scores as zero for both players:
	document.getElementById("current-0").textContent 	= "0";
	document.getElementById("current-1").textContent 	= "0";
	// Reset player names, in case one was changed to WINNER last time:
	document.getElementById("name-0").textContent 		= "Player 1";
	document.getElementById("name-1").textContent 		= "Player 2";
	// Remove WINNER class from both players, just to be safe:
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
	// Remove ACTIVE class from Player 2:
	document.querySelector(".player-1-panel").classList.remove("active");
}

