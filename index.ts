enum Select {
    Select1 = 'rock',
    Select2 = 'paper',
    Select3 = 'scissors'
}
enum Result {
    Win = 'You Win!',
    Lose = 'You Lose',
    Tie = 'Tie'
}

function getComputerSelect(): Select {
    const values = Object.values(Select);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex] as Select;
}

function returnWinner(userSelect:Select, computerSelect:Select) {

}

function playRound(playerSelect:string, computerSelect:string):Result {
    const playerHand = playerSelect.toLowerCase();
    if( playerHand === 'rock' ) {
        if( computerSelect === 'rock' ) {
            return Result.Tie;
        }
        else if( computerSelect === 'paper' ) {
            return Result.Lose;
        }
        else {
            return Result.Win;
        }
    }
    else if( playerHand === 'paper' ) {
        if( computerSelect === 'rock' ) {
            return Result.Win;
        }
        else if( computerSelect === 'paper' ) {
            return Result.Tie;
        }
        else {
            return Result.Lose;
        }
    }
    else{
        if( computerSelect === 'rock' ) {
            return Result.Lose;
        }
        else if( computerSelect === 'paper' ) {
            return Result.Win;
        }
        else {
            return Result.Tie;
        }
    }
}

function makeResult(playerPoints:number, computerPoints:number, tie:number, numOfGames:number):string {
    return ('Game Result (Total: '+ numOfGames +'\n\nplayer Points: ' + playerPoints + '\nComputer Points: ' +computerPoints + '\nTie: ' + tie)
}


const playButton = document.querySelector('#play-button');
const playerSelectButtons = document.querySelectorAll('.Select');
const gameInfo = {
    playerPoints:0,
    computerPoints:0,
    tie:0,
    round:0,
}

function gameInit() {
}
playButton?.addEventListener('click', () =>{
    playButton.classList.toggle('play-button--end');
    playerSelectButtons?.forEach((button)=>{
        let playerSelectButton = button as HTMLButtonElement;
        playerSelectButton.addEventListener('click', (event:MouseEvent)=>{
            event.preventDefault();
            let playerSelect = playerSelectButton.value;
        });
    })
})


