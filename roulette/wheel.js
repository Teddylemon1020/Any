
const characterMap = {
  0: ["0", "green", "none"],
  1: ["1", "black", "1-8"],
  2: ["2", "red", "1-8"],
  3: ["3", "black", "1-8"],
  4: ["4", "red", "1-8"],
  5: ["5", "black", "1-8"],
  6: ["6", "red", "1-8"],
  7: ["7", "black", "1-8"],
  8: ["8", "red", "1-8"],
  9: ["9", "black", "9-16"],
  10: ["10", "red", "9-16"],
  11: ["11", "black", "9-16"],
  12: ["12", "red", "9-16"],
  13: ["13", "black", "9-16"],
  14: ["14", "red", "9-16"],
  15: ["15", "black", "9-16"],
  16: ["16", "red", "9-16"]
};

/// Assume the initial credits for Player 1
let players = [
  { playerID: 1, CurrentPoints: 1000, bettedAmount: 0, selectedCharRoulette: null }
];

// Function to update credits display for Player 1
function updateCreditsDisplayForPlayer1() {
  const creditsElement = document.getElementById('credits-player1');
  creditsElement.innerText = players[0].CurrentPoints; // Update based on Player 1's CurrentPoints
}

// Modify the number button click handler for Player 1
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerIndex = 0; // Player 1
    const betAmount = parseInt(prompt("Enter your bet amount:")); // Get bet amount from user
    if (betAmount && betAmount > 0 && betAmount <= players[playerIndex].CurrentPoints) {
      const buttonId = button.getAttribute('data-number');
      setBetAmount(`bet-display-${buttonId}`, betAmount); // Display the bet

      // Deduct bet amount from Player 1's current points
      players[playerIndex].bettedAmount = betAmount;
      players[playerIndex].CurrentPoints -= betAmount;
      players[playerIndex].selectedCharRoulette = buttonId; // Set the selected number

      // Update the display with updated credits
      updateCreditsDisplayForPlayer1();
    } else {
      alert("Invalid bet amount.");
    }
  });
});

// Similarly, you can modify the color button click handler for Player 1
colorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerIndex = 0; // Player 1
    const betAmount = parseInt(prompt("Enter your bet amount:"));
    if (betAmount && betAmount > 0 && betAmount <= players[playerIndex].CurrentPoints) {
      const color = button.getAttribute('data-color');
      setBetAmount(`bet-display-${color}`, betAmount);

      players[playerIndex].bettedAmount = betAmount;
      players[playerIndex].CurrentPoints -= betAmount;
      players[playerIndex].selectedCharRoulette = color; // Set the selected color

      updateCreditsDisplayForPlayer1();
    } else {
      alert("Invalid bet amount.");
    }
  });
});

rangeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerIndex = 0; // Player 1
    const betAmount = parseInt(prompt("Enter your bet amount:"));
    if (betAmount && betAmount > 0 && betAmount <= players[playerIndex].CurrentPoints) {
      const range = button.getAttribute('data-number');
      setBetAmount(`range${range}-btn`, betAmount);

      players[playerIndex].bettedAmount = betAmount;
      players[playerIndex].CurrentPoints -= betAmount;
      players[playerIndex].selectedCharRoulette = range; // Set the selected range

      updateCreditsDisplayForPlayer1();
    } else {
      alert("Invalid bet amount.");
    }
  });
});

function checkResultForPlayer1(result) {
  if (characterMap.hasOwnProperty(result)) {
    const [winningChar, winningColor, winningGroup] = characterMap[result];
    console.log(`Result: Character - ${winningChar}, Color - ${winningColor}, Group - ${winningGroup}`);

    const player = players[0]; // Player 1
    const { selectedCharRoulette, bettedAmount, CurrentPoints } = player;

    if (selectedCharRoulette === winningChar) {
      player.CurrentPoints += bettedAmount * 15;
      console.log(`Player 1 wins with number! New points: ${player.CurrentPoints}`);
    } else if (selectedCharRoulette === winningColor) {
      player.CurrentPoints += bettedAmount * 2;
      console.log(`Player 1 wins with color! New points: ${player.CurrentPoints}`);
    } else if (selectedCharRoulette === winningGroup) {
      player.CurrentPoints += bettedAmount * 2;
      console.log(`Player 1 wins with number group! New points: ${player.CurrentPoints}`);
    } else if (selectedCharRoulette === '0' && result === 0) {  // Only if Player bet on 0 and result is 0
      player.CurrentPoints += bettedAmount * 8;
      console.log(`Player 1 wins with zero! New points: ${player.CurrentPoints}`);
    } else {
      console.log(`Player 1 loses! No changes to points.`);
    }

    updateCreditsDisplayForPlayer1();
  } else {
    console.log("Invalid spin result.");
  }
}