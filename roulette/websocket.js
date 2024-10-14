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

let result = 5; // The spin result
let players = {
  player1: { selectedCharRoulette: "5", bettedAmount: 100, startingPoints: 1000 },
  player2: { selectedCharRoulette: "black", bettedAmount: 200, startingPoints: 1500 },
  player3: { selectedCharRoulette: "1-8", bettedAmount: 50, startingPoints: 800 }
};


// Check the result in the character map
if (characterMap.hasOwnProperty(result)) {
  const [winningChar, winningColor, winningGroup] = characterMap[result];
  console.log(`Result: Character - ${winningChar}, Color - ${winningColor}, Group - ${winningGroup}`);

  for (const player in players) {
    const playerInfo = players[player];
    const { selectedCharRoulette, bettedAmount, startingPoints } = playerInfo;
    
    if (selectedCharRoulette === winningChar) {
      playerInfo.startingPoints += bettedAmount * 15;
      console.log(`${player} wins with number! New points: ${playerInfo.startingPoints}`);
    } else if (selectedCharRoulette === winningColor) {
      playerInfo.startingPoints += bettedAmount * 2;
      console.log(`${player} wins with color! New points: ${playerInfo.startingPoints}`);
    } else if (selectedCharRoulette === winningGroup) {
      playerInfo.startingPoints += bettedAmount * 2;
      console.log(`${player} wins with number group! New points: ${playerInfo.startingPoints}`);
    } else if (result === 0) {
      playerInfo.startingPoints += bettedAmount * 8;
      console.log(`${player} wins with zero! New points: ${playerInfo.startingPoints}`);
    } else {
      playerInfo.startingPoints -= bettedAmount;
      console.log(`${player} loses! New points: ${playerInfo.startingPoints}`);
    }
  }
} else {
  console.log("Invalid spin result.");
}
