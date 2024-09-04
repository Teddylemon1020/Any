document.getElementById('startGameBtn').addEventListener('click', function() {
    // Simulate the spinning of the roulette
    const resultElement = document.getElementById('rouletteResult');
    resultElement.textContent = Math.floor(Math.random() * 17);  // Example result from 0-16
});

document.getElementById('joinLobbyBtn').addEventListener('click', function() {
    alert("Joining the lobby...");
    // Implement your lobby logic here
});

document.getElementById('switchRoleBtn').addEventListener('click', function() {
    const switchRole = confirm("Do you want to switch roles?");
    if (switchRole) {
        alert("You are now the Bangkero!");
    } else {
        alert("Role switch declined.");
    }
});
