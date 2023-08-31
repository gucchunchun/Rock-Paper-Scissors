"use strict";
// for easy setting change
var Select;
(function (Select) {
    Select["Select1"] = "rock";
    Select["Select2"] = "paper";
    Select["Select3"] = "scissors";
})(Select || (Select = {}));
var Result;
(function (Result) {
    Result["Win"] = "You Win!";
    Result["Lose"] = "You Lose";
    Result["Tie"] = "Tie";
})(Result || (Result = {}));
// utility functions for gaming
//   randomly generate computer's select
function getComputerSelect() {
    const values = Object.values(Select);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}
//   logic: Select1 < Select2, Select2 < Select3, Select3 < Select1
function returnResult(userSelect, computerSelect) {
    switch (userSelect) {
        case Select.Select1:
            switch (computerSelect) {
                case Select.Select1:
                    return Result.Tie;
                case Select.Select2:
                    return Result.Lose;
                case Select.Select3:
                    return Result.Win;
            }
        case Select.Select2:
            switch (computerSelect) {
                case Select.Select1:
                    return Result.Win;
                case Select.Select2:
                    return Result.Tie;
                case Select.Select3:
                    return Result.Lose;
            }
        case Select.Select3:
            switch (computerSelect) {
                case Select.Select1:
                    return Result.Lose;
                case Select.Select2:
                    return Result.Win;
                case Select.Select3:
                    return Result.Tie;
            }
    }
}
function makeResult(playerPoints, computerPoints, tie, numOfGames) {
    return ('Game Result (Total: ' + numOfGames + '\n\nplayer Points: ' + playerPoints + '\nComputer Points: ' + computerPoints + '\nTie: ' + tie);
}
class Game {
    constructor() {
        this.win = 0;
        this.lose = 0;
        this.tie = 0;
        this.round = 1;
        this.set = 1;
    }
    play(userSelect) {
        let result = returnResult(userSelect, getComputerSelect());
        if (result === Result.Win) {
            this.win++;
        }
        else if (result === Result.Lose) {
            this.lose++;
        }
        else {
            this.tie++;
        }
        this.round++;
        return result;
    }
}
const playButton = document.querySelector('#play-button');
const playerSelectButtons = document.querySelectorAll('.select');
let game = new Game;
playButton === null || playButton === void 0 ? void 0 : playButton.addEventListener('click', () => {
    playButton.classList.toggle('play-button--end');
});
//  playerSelect = playerSelectButton.value as Select =>could be a problem when setting is changed
playerSelectButtons === null || playerSelectButtons === void 0 ? void 0 : playerSelectButtons.forEach((button) => {
    let playerSelectButton = button;
    playerSelectButton.addEventListener('click', (event) => {
        event.preventDefault();
        let playerSelect = playerSelectButton.value;
        let result = game.play(playerSelect);
        alert(result);
        console.log(game.round);
    });
});
