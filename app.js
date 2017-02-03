/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Helper function to generate random number between 1 and 6.
// var player = player 0.

// Game Function

	// On ROLL DICE click:
		// Call random number helper function and store in local variable.
		// If number is between 2 and 6:
			// Player 0 ROUND SCORE is increased by that number.
		// Else if number is 1:
			// Player 0 GLOBAL SCORE is reset to 0.

	// On HOLD click:
		// Add ROUND SCORE to ACTIVE PLAYER's GLOBAL SCORE.
		// switch to other player:
			// If player = player 0:
				// Set player = player 1.
			// Else if player = player 1:
				// Set player = player 0.

	// Function to display dice img of number that was rolled.
		// Switch 1:
			// Display dice-1.
		// Switch 2:
			// Display dice-2.
		// Switch 3:
			// Display dice-3.
		// Switch 4:
			// Display dice-4.
		// Switch 5:
			// Display dice-5.
		// Switch 6:
			// Display dice-6.

// On NEW GAME click, call game function.