/*
GAME RULES:

- The game has 2 players, playing in rounds.
- In each turn, a player rolls a die as many times as he whishes. Each result get added to his ROUND score.
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn.
- The first player to reach 100 points on GLOBAL score wins the game.

*/

// var name0Global = 0;
// var name1Global = 0;
// var activePlayer;

// Helper function to generate random number between 1 and 6 and store it in variable "randomNumber":

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