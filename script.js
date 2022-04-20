console.log("Hello World!");

const choices = ['rock', 'paper', 'scissors'];
const youLose = "You lose! "
const youWin = "You Win! "
const tie = "It's a tie! "
const paperWin = "Paper beats Rock!"
const rockWin = "Rock beats Scissors!"
const scissorsWin = "Scissors beat Paper!"
let playerScore = 0;
let computerScore = 0;



function computerPlay() {
    // return random selection of rock, paper, or scissors
    const choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
};

function playRound(playerSelection,computerSelection) {
    switch(playerSelection) {
        case 'rock':
                switch(computerSelection) {
                    case 'rock':
                        return tie;
                        break;
        
                    case 'paper':
                        return youLose.concat(paperWin);
                        computerScore++;
                        console.log(playerScore + " vs " + computerScore);
                        break;

                    case 'scissors':
                        return youWin.concat(rockWin);
                        playerScore++;
                        console.log(playerScore + " vs " + computerScore);
                        break;
                }
            break;
        
        case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        return youWin.concat(paperWin);
                        playerScore++;
                        console.log(playerScore + " vs " + computerScore);
                        break;
        
                    case 'paper':
                        return tie;
                        break;

                    case 'scissors':
                        return youLose.concat(scissorsWin);
                        computerScore++;
                        console.log(playerScore + " vs " + computerScore);
                        break;
                }
            break;

        case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        return youLose.concat(rockWin);
                        computerScore++;
                        console.log(playerScore + " vs " + computerScore);
                        break;
        
                    case 'paper':
                        return youWin.concat(scissorsWin);
                        playerScore++;
                        console.log(playerScore + " vs " + computerScore);
                        break;

                    case 'scissors':
                        return tie;
                        break;
                }
            break;

        default:
            return "Please enter a valid choice."
    }
}

function game(rounds) {
    playerScore = 0;
    computerScore = 0;

    for (i=0;i<rounds;i++){
        console.log("Round " + (1+i))

        const playerSelection = prompt("Make a choice between Rock, Paper, and Scissors", "Rock").toLowerCase();
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }
    
    console.log("Final Score");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);

}

// game(1);

