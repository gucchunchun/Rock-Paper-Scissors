// for easy setting change
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

// utility functions for gaming

//   randomly generate computer's select
function getComputerSelect(): Select {
    const values = Object.values(Select);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex] as Select;
}

//   logic: Select1 < Select2, Select2 < Select3, Select3 < Select1
function returnResult(userSelect:Select, computerSelect:Select):Result {
    switch ( userSelect ) {
        case Select.Select1:
            switch ( computerSelect ) {
                case Select.Select1:
                    return Result.Tie;
                case Select.Select2:
                    return Result.Lose;
                case Select.Select3:
                    return Result.Win;
            }
        case Select.Select2:
            switch ( computerSelect ) {
                case Select.Select1:
                    return Result.Win;
                case Select.Select2:
                    return Result.Tie;
                case Select.Select3:
                    return Result.Lose;
            }
        case Select.Select3:
            switch ( computerSelect ) {
                case Select.Select1:
                    return Result.Lose;
                case Select.Select2:
                    return Result.Win;
                case Select.Select3:
                    return Result.Tie;
            }
    }
}

function makeResult(win:number, lose:number, tie:number, numOfGames:number):string {
    return (`Game Result (Total: ${numOfGames}\n\nplayer Points: ${win}\nComputer Points: ${lose}\nTie: ${tie}`)
}

class Game {
    win:number;
    lose:number;
    tie:number;
    round:number;
    set: number;
    constructor() {
        this.win = 0;
        this.lose = 0;
        this.tie = 0;
        this.round = 1;
        this.set = 1;
    }
    play(userSelect:Select):Result {
        let result = returnResult(userSelect, getComputerSelect());

        if (result === Result.Win) {
            this.win++;
        } else if (result === Result.Lose) {
            this.lose++;
        }else {
            this.tie++;
        }
        this.round++;
        return result;
    }
}


const playButton = document.querySelector('#play-button');
const playerSelectButtons = document.querySelectorAll('.select');
let game = new Game;

playButton?.addEventListener('click', () =>{
    playButton.classList.toggle('play-button--end');
    
})
//  playerSelect = playerSelectButton.value as Select =>could be a problem when setting is changed
playerSelectButtons?.forEach((button)=>{
    let playerSelectButton = button as HTMLButtonElement;
    playerSelectButton.addEventListener('click', (event:MouseEvent)=>{
        event.preventDefault();
        let playerSelect = playerSelectButton.value as Select;
        let result = game.play(playerSelect);
        alert(result);
    });
})

