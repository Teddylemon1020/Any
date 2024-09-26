let gameStart = false;
let winningChar = None; 
let rouletteRange = None; 
let Ingame = false;
let Number_color_btn_active = true;
let Numbers_btn = true; 
let commands = true;


let players = [{ playerID: null, CurrentPoints: null, bettedAmount: null},
    { playerID: null, CurrentPoints: null, bettedAmount: null},
    { playerID: null, CurrentPoints: null, bettedAmount: null},
    { playerID: null, CurrentPoints: null, bettedAmount: null},
    { playerID: null, CurrentPoints: null, bettedAmount: null}
];


function Bangkero(newBankero, oldBankero) {
    let newBankeroIndex = players.indexOf(newBankero);
    let oldBankeroIndex = players.indexOf(oldBankero);
    
    players.splice(newBankeroIndex, 1);  
    players.splice(oldBankeroIndex, 1);  
    players.splice(oldBankeroIndex, 0, newBankero);
    players.splice(newBankeroIndex, 0, oldBankero);
}

function freeze_buttons() {
    if (Ingame === true && spinning === true) {  
        Spin_btn = false;
        Number_color_btn_active = false;
        Numbers_btn = false; 

        freeze_colors();
        freeze_commands();
        freeze_Numbers();

    }
}

function freeze_colors(){
    let buttons = document.querySelectorAll('.color-btn.green, .color-btn.black, .color-btn.red');
    if (Number_color_btn_active == false){
        buttons.forEach(button =>{
            button.classList.add('inactive');
        });
    } else {
        buttons.forEach(button =>{
            button.classList.remove('inactive');
        });
    }
}


function freeze_Numbers(){
    let buttons = document.querySelectorAll('.push-btn');
    if (Numbers_btn == false){
        buttons.forEach(button =>{
            button.classList.add('inactive');
        });
    } else {
        buttons.forEach(button =>{
            button.classList.remove('inactive');
        });
    }
}

function Playing(){
    startFunc();
    if (Ingame === true){
        

    }

}

function chip_distribution(selectedPlayer, added_chips){
    
    let summation = players[selectedPlayer].CurrentPoints += added_chips;

    

}

//add 10 seconds delay 
//add console
// add freeze to spin button 
// ui na ginawa ni sir ryko 
// add remove player
// add alert for the number that is selected in the roulette
// add icon button to change the profile of the user
// add unique id
//read and write new value of chips from current game
//terms and agreement and rules of the game

