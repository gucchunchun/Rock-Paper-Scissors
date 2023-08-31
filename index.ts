const selection = ['rock','paper','scissors'];
enum Result {
    Win = 'You Win!',
    Lose = 'You Lose',
    Tie = 'Tie',
    Typo = 'Please type Rock, Paper or Scissors'
}

function getComputerChoice() {
    return selection[Math.round(Math.random() * (selection.length-1))];
}

function playRound(playerSelection:string, computerSelection:string):Result {
    const playerHand = playerSelection.toLowerCase();
    if( playerHand === 'rock' ) {
        if( computerSelection === 'rock' ) {
            return Result.Tie;
        }
        else if( computerSelection === 'paper' ) {
            return Result.Lose;
        }
        else {
            return Result.Win;
        }
    }
    else if( playerHand === 'paper' ) {
        if( computerSelection === 'rock' ) {
            return Result.Win;
        }
        else if( computerSelection === 'paper' ) {
            return Result.Tie;
        }
        else {
            return Result.Lose;
        }
    }
    else if( playerHand === 'scissors' ) {
        if( computerSelection === 'rock' ) {
            return Result.Lose;
        }
        else if( computerSelection === 'paper' ) {
            return Result.Win;
        }
        else {
            return Result.Tie;
        }
    }
    else {
        return Result.Typo;
    }
}
function showResult(userPoints:number, computerPoints:number, tie:number, numOfGames:number) {
    console.log('Game Result (Total: '+ numOfGames +'\n\nUser Points: ' + userPoints + '\nComputer Points: ' +computerPoints + '\nTie: ' + tie)
}

function game() {
    let userPoints:number = 0;
    let computerPoints:number = 0;
    let tie:number = 0;
    let round = 0;
    let onGoing = true;
    while (onGoing) {
        console.log('ROUND ' + (round+1));
        while (true) {
            let userSelect:(string|null) = prompt('Rock, Paper or Scissors?');
            if( !userSelect ){
                continue;
            }
            let result = playRound(userSelect, getComputerChoice());
            console.log(result);
            if( result === Result.Typo) {
                continue;
            }else {
                if( result === Result.Win ) {
                    userPoints ++;
                }else if (result === Result.Lose ) {
                    computerPoints ++;
                }else {
                    tie ++;
                }
                round ++;
                break;
            }
        }
        let quit:(string|null);
        while (true) {
            quit = prompt('Do you want to continue game? y(yes) or n(no):');
            if( !quit ){
                continue;
            }else {
                quit = quit.toLowerCase();
                if( quit === 'y' || quit === 'n' ) {
                    break;
                }else {
                    console.log('Please Type y or n');
                    continue;
                }
            }
        }
        if( quit === 'n' ) {
            console.log('It was good game\n');
            onGoing = false;
        }
    }
    showResult(userPoints, computerPoints, tie, round);
}

const userSelectButtons = document.querySelectorAll('.selection');
userSelectButtons?.forEach((button)=>{
    let userSelectButton = button as HTMLButtonElement;
    userSelectButton.addEventListener('click', (event:MouseEvent)=>{
        event.preventDefault();
        let userSelection = userSelectButton.value;
        console.log(playRound(userSelection, getComputerChoice()));
    });
})