/* 
function playRound(playerSelection, computerSelection) {

rules:
1 = rock
2 = paper
3 = scissors
paper beats rock, rock beats scissors, scissors beat paper or tie if both selected

*/

let playerScore = 0;
let computerScore = 0;

console.log('let\'s play a game of rock paper scissors');

for(let i = 0; i < 100; i++){
    let guess = Math.floor(Math.random() * 3) + 1;
    playRound(guess, computerPlay());
}

console.log(`Game Over: Player Score is: ${playerScore} Computer Score is: ${computerScore}. X wins.`); 

//pick random number between 1 and 3
function computerPlay() {
    return Math.floor(Math.random() * 3) + 1;
}

function mapStringToNumber(choice){
    switch (choice.toLowerCase()) {
        case 'rock':
            return 1;
        case 'paper':
            return 2;
        case 'scissors':
            return 3;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    //tie
    if (playerSelection === computerSelection) {
        console.log('tie');
        return;
    }

    //rock vs paper
    if (playerSelection === 1 && computerSelection == 2) {
        console.log(`Computer wins Paper beats Rock. -- Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
        computerScore++;
        return;
    }

    //rock vs scissors
    if (playerSelection === 1 && computerSelection == 3) {
        console.log(`Player wins, Rock beats Scissors. -- Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
        playerScore++;
        return;
    }

    //paper vs rock
    if (playerSelection === 2 && computerSelection == 1) {
        console.log(`Player wins, Rock beats Paper. -- Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
        playerScore++;
        return;
    }

    //paper vs scissors
    if (playerSelection === 2 && computerSelection == 3) {
        console.log(`Computer wins, Scissors beats Paper. -- Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
        computerScore++;
        return;
    }

    //scissors vs rock
    if (playerSelection === 3 && computerSelection == 1) {
        console.log(`Computer wins, Rock beats Scissors. -- Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
        computerScore++;
        return;
    }

    //scissors vs rock
    if (playerSelection === 3 && computerSelection == 2) {
        console.log(`Player wins, Scissors beat paper. -- Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
        playerScore++;
        return;
    }

}