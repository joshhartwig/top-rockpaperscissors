/* 
function playRound(playerSelection, computerSelection) {

rules:
1 = rock
2 = paper
3 = scissors
paper beats rock, rock beats scissors, scissors beat paper or tie if both selected

*/


function playRound(playerSelection, computerSelection){
    
    //tie
    if(playerSelection === computerSelection) {
        console.log('tie');
        return;
    }
    
    //rock vs paper
    if(playerSelection === 1 && computerSelection == 2) {
        console.log(`Computer wins Paper beats Rock. -- Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
        return;
    }

    //rock vs scissors
    if(playerSelection === 1 && computerSelection == 3) {
        console.log(`Player wins, Rock beats Scissors. -- Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
        return;
    }

    //paper vs rock
    if(playerSelection === 2 && computerSelection == 1) {
        console.log(`Player wins, Rock beats Paper. -- Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
        return;
    }

    //paper vs scissors
    if(playerSelection === 2 && computerSelection == 3) {
        console.log(`Computer wins, Scissors beats Paper. -- Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
        return;
    }

    //scissors vs rock
    if(playerSelection === 3 && computerSelection == 1) {
        console.log(`Computer wins, Rock beats Scissors. -- Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
        return;
    }

    //scissors vs rock
    if(playerSelection === 3 && computerSelection == 2) {
        console.log(`Player wins, Scissors beat paper. -- Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
        return;
    }

}