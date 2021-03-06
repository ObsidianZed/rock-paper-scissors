
const choices = ['rock', 'paper', 'scissors'];
const youLose = "You lose! "
const youWin = "You Win! "
const tie = "It's a tie! "
const paperWin = "Paper beats Rock!"
const rockWin = "Rock beats Scissors!"
const scissorsWin = "Scissors beat Paper!"
let playerScore = 0;
let computerScore = 0;
let gameRound = 1;

const container = document.querySelector('#container');
const gameResults = document.createElement('div');
gameResults.classList.add('.gameResult');
gameResults.innerHTML = "Click a button to begin playing.";
container.appendChild(gameResults);

function playRock() {
    computerSelection = computerPlay();
    playRound('rock', computerSelection);
}

function playPaper() {
    computerSelection = computerPlay();
    playRound('paper', computerSelection);
}

function playScissors() {
    computerSelection = computerPlay();
    playRound('scissors', computerSelection);
}

const rockBtn = document.querySelector('.rockButton');
rockBtn.addEventListener('click', playRock);
const paperBtn = document.querySelector('.paperButton');
paperBtn.addEventListener('click', playPaper);
const scissorsBtn = document.querySelector('.scissorsButton');
scissorsBtn.addEventListener('click', playScissors);

function computerPlay() {
    const choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
};

function initializeGame() {
    playerScore = 0;
    computerScore = 0;
    gameRound = 1;
    // gameResults.innerHTML = `Round ${gameRound}: ${playerScore} to ${computerScore}<br>`;
};

function playRound(playerSelection,computerSelection) {

    if(gameRound == 1) {
        initializeGame();
    }

    gameResults.innerHTML = `Round ${gameRound}<br>`;

    switch(playerSelection) {
        case 'rock':
                switch(computerSelection) {
                    case 'rock':
                        console.log(tie + "\n" + playerScore + " vs " + computerScore);
                        gameResults.innerHTML += tie;
                        break;
        
                    case 'paper':
                        ++computerScore;
                        console.log(youLose.concat(paperWin) + "\n" + playerScore + " vs " + computerScore);
                        gameResults.innerHTML += youLose + '<br>' + paperWin;
                        break;

                    case 'scissors':
                        ++playerScore;
                        console.log(youWin.concat(rockWin) + "\n" + playerScore + " vs " + computerScore);
                        gameResults.innerHTML += youWin + '<br>' + rockWin;
                        break;
                }
            break;
        
        case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        ++playerScore;
                        console.log(youWin.concat(paperWin) + "\n" + playerScore + " vs " + computerScore);
                        gameResults.innerHTML += youWin + '<br>' + paperWin;
                        break;
        
                    case 'paper':
                        console.log(tie + "\n" + playerScore + " vs " + computerScore);
                        gameResults.innerHTML += tie;
                        break;

                    case 'scissors':
                        ++computerScore;
                        console.log(youLose.concat(scissorsWin) + "\n" + playerScore + " vs " + computerScore);
                        gameResults.innerHTML += youLose + '<br>' + scissorsWin;
                        break;
                }
            break;

        case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        ++computerScore;
                        console.log(youLose.concat(rockWin) + "\n" + playerScore + " vs " + computerScore);
                        gameResults.innerHTML += youLose + '<br>' + rockWin;
                        break;
        
                    case 'paper':
                        ++playerScore;
                        console.log(youWin.concat(scissorsWin) + "\n" + playerScore + " vs " + computerScore);
                        gameResults.innerHTML += youWin + '<br>' + scissorsWin;
                        break;

                    case 'scissors':
                        console.log(tie + "\n" + playerScore + " vs " + computerScore);
                        gameResults.innerHTML += tie;
                        break;
                }
            break;

        default:
            return "Please enter a valid choice."
    }

    gameRound++;
    gameResults.innerHTML +=  `<br> Score: ${playerScore} to ${computerScore}`;

    if(playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            gameResults.innerHTML = `You won THE GAME!<br>The Final Score was ${playerScore} to ${computerScore}`;
        } else if (computerScore > playerScore) {
            gameResults.innerHTML = `You lost THE GAME!<br>The Final Score was ${playerScore} to ${computerScore}`;
        } else {
            gameResults.innerHTML = `THE GAME was inconclusive.<br>The Final Score was ${playerScore} to ${computerScore}`;
        }
        initializeGame();
        gameResults.innerHTML += "<br>Click any button to start a new game."
    }

};

function game(rounds) {
    playerScore = 0;
    computerScore = 0;

    for (i=0;i<rounds;i++){
        // console.log("Round " + (1+i))

        let playerSelection = prompt("Make a choice between Rock, Paper, and Scissors", "Rock");
        const computerSelection = computerPlay();

        if (playerSelection != null) {
            playerSelection = playerSelection.toLowerCase();
            console.log(playRound(playerSelection, computerSelection));
        } else {
            playerSelection = prompt("Please enter a valid choice.");
            if (playerSelection == null) {
                return "You have decided not to play."
            } else {
                playerSelection = playerSelection.toLowerCase();
                console.log(playRound(playerSelection, computerSelection));
            }
        }

    }
    
    if (playerScore > computerScore) {
        return "You won THE GAME!";
    } else if (computerScore > playerScore) {
        return "You lost THE GAME!";
    } else {
        return "THE GAME was inconclusive."
    }

};
