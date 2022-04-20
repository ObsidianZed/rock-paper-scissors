console.log("Hello World!");

let choices = ['Rock', 'Paper', 'Scissors'];
let youLose = "You lose! "
let youWin = "You Win! "
let paperWin = "Paper beats Rock!"
let rockWin = "Rock beats Scissors!"
let scissorsWin = "Scissors beat Paper!"


function computerPlay() {
    // return random selection of rock, paper, or scissors
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
};

function playRound() {
    // rock beats scissors, 
}

function game() {
    // 
}












const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));