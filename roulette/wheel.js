// Assume the initial credits for each player
let players = [
  { playerID: 1, CurrentPoints: 1000 },
  { playerID: 2, CurrentPoints: 1000 },
  { playerID: 3, CurrentPoints: 1000 },
  { playerID: 4, CurrentPoints: 1000 },
  { playerID: 5, CurrentPoints: 1000 }
];

// Function to update credits display
function updateCreditsDisplay(playerIndex) {
  const creditsElement = document.getElementById(`credits-player${playerIndex + 1}`);
  creditsElement.innerText = players[playerIndex].CurrentPoints;
}

// Modify the number button click handler
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
      const playerIndex = 0; // Assuming player 1 is the active player
      const betAmount = parseInt(prompt("Enter your bet amount:")); // Get bet amount from user
      if (betAmount && betAmount > 0 && betAmount <= players[playerIndex].CurrentPoints) {
          const buttonId = button.getAttribute('data-number');
          setBetAmount(`bet-display-${buttonId}`, betAmount); // Display the bet

          // Deduct bet amount from player's current points
          players[playerIndex].CurrentPoints -= betAmount;
          updateCreditsDisplay(playerIndex); // Update the display
      } else {
          alert("Invalid bet amount.");
      }
  });
});

// Handle color button clicks
colorButtons.forEach((button) => {
  button.addEventListener('click', () => {
      const playerIndex = 0; // Assuming player 1 is the active player
      const betAmount = parseInt(prompt("Enter your bet amount:")); // Get bet amount from user
      if (betAmount && betAmount > 0 && betAmount <= players[playerIndex].CurrentPoints) {
          const color = button.getAttribute('data-color');
          setBetAmount(`bet-display-${color}`, betAmount); // Display the bet

          // Deduct bet amount from player's current points
          players[playerIndex].CurrentPoints -= betAmount;
          updateCreditsDisplay(playerIndex); // Update the display
      } else {
          alert("Invalid bet amount.");
      }
  });
});

// Handle range button clicks
rangeButtons.forEach((button) => {
  button.addEventListener('click', () => {
      const playerIndex = 0; // Assuming player 1 is the active player
      const betAmount = parseInt(prompt("Enter your bet amount:")); // Ask the user for a bet amount
      if (betAmount && betAmount > 0 && betAmount <= players[playerIndex].CurrentPoints) {
          const range = button.getAttribute('data-number'); // Get the range (1-8 or 9-16)
          setBetAmount(`range${range}-btn`, betAmount); // Display the bet in the span

          // Deduct bet amount from player's current points
          players[playerIndex].CurrentPoints -= betAmount;
          updateCreditsDisplay(playerIndex); // Update the display
      } else {
          alert("Invalid bet amount.");
      }
  });
});

// Update the credits display for player 1 on page load
updateCreditsDisplay(0);




