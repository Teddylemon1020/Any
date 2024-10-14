let gameStart = false;
let winningChar = None; 
let rouletteRange = None; 
let Ingame = false;
let Number_color_btn_active = true;
let Numbers_btn = true; 
let commands = true;
let NoEntry = false;


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
        commands = false;
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

function freeze_commands(){
    let buttons = document.querySelectorAll('.action-btn');
    if (commands == false){
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



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
    console.log("Start");
    
    await delay(2000);  // Wait for 2 seconds
    
    console.log("This runs after 2 seconds");
}

example();

function withdrawhan(selectedPlayer){
    let na_withdraw = players[selectedPlayer].CurrentPoints = 0;
    console.log(players)
}

function remove_player(selectedPlayer){
    let removed = players.splice(selectedPlayer, 1);
}

//add 10 seconds delay 
//add console
// ui na ginawa ni sir ryko 
// add alert for the number that is selected in the roulette
// add icon button to change the profile of the user
//terms and agreement and rules of the game
// add array index to icon 
// lagay sa button yung mga function

function createUniqueID(InsertID){
    if (InsertID.length >= 6){
        console.log("valid ID");
        let accept = true;
        accept === true;
        if (accept = true){
            if (!players[InsertID]){
                players[InsertID] = {playerID: []};

            }
            players[InsertID].playersID.push(InsertID); 

        }
    }else {
        accept = false; 
        console.log("invalid ID");
        }

    }

function maxAmountServer(players){
    amount_of_players = players.length 
    if (amount_of_players === 10){

        NoEntry = false; 
        console.log("Server Max");
        //alert for max number and script
        //for limiting after max value



    }

}




//make random numbers appear on small box
//make the final number the winning number
// create a set of min max for the value for the different triangles of the pie
// create a min max for the amount of rotations 
// create a compuatation that would take in the random taken value of the rotation and divide it by 360 modulo and the remainder should be divided by 21.18 deciding the range