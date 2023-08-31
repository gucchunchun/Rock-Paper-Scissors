"use strict";
const selection = ['rock', 'paper', 'scissors'];
var Result;
(function (Result) {
    Result["Win"] = "You Win!";
    Result["Lose"] = "You Lose";
    Result["Tie"] = "Tie";
    Result["Typo"] = "Please type Rock, Paper or Scissors";
})(Result || (Result = {}));
function getComputerChoice() {
    return selection[Math.round(Math.random() * (selection.length - 1))];
}
function playRound(playerSelection, computerSelection) {
    const playerHand = playerSelection.toLowerCase();
    if (playerHand === 'rock') {
        if (computerSelection === 'rock') {
            return Result.Tie;
        }
        else if (computerSelection === 'paper') {
            return Result.Lose;
        }
        else {
            return Result.Win;
        }
    }
    else if (playerHand === 'paper') {
        if (computerSelection === 'rock') {
            return Result.Win;
        }
        else if (computerSelection === 'paper') {
            return Result.Tie;
        }
        else {
            return Result.Lose;
        }
    }
    else if (playerHand === 'scissors') {
        if (computerSelection === 'rock') {
            return Result.Lose;
        }
        else if (computerSelection === 'paper') {
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
function showResult(playerPoints, computerPoints, tie, numOfGames) {
    console.log('Game Result (Total: ' + numOfGames + '\n\nplayer Points: ' + playerPoints + '\nComputer Points: ' + computerPoints + '\nTie: ' + tie);
}
function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let tie = 0;
    let round = 0;
    let onGoing = true;
    while (onGoing) {
        console.log('ROUND ' + (round + 1));
        while (true) {
            let playerSelect = prompt('Rock, Paper or Scissors?');
            if (!playerSelect) {
                continue;
            }
            let result = playRound(playerSelect, getComputerChoice());
            console.log(result);
            if (result === Result.Typo) {
                continue;
            }
            else {
                if (result === Result.Win) {
                    playerPoints++;
                }
                else if (result === Result.Lose) {
                    computerPoints++;
                }
                else {
                    tie++;
                }
                round++;
                break;
            }
        }
        let quit;
        while (true) {
            quit = prompt('Do you want to continue game? y(yes) or n(no):');
            if (!quit) {
                continue;
            }
            else {
                quit = quit.toLowerCase();
                if (quit === 'y' || quit === 'n') {
                    break;
                }
                else {
                    console.log('Please Type y or n');
                    continue;
                }
            }
        }
        if (quit === 'n') {
            console.log('It was good game\n');
            onGoing = false;
        }
    }
    showResult(playerPoints, computerPoints, tie, round);
}
const playerSelectButtons = document.querySelectorAll('.selection');
playerSelectButtons === null || playerSelectButtons === void 0 ? void 0 : playerSelectButtons.forEach((button) => {
    let playerSelectButton = button;
    playerSelectButton.addEventListener('click', (event) => {
        event.preventDefault();
        let playerSelection = playerSelectButton.value;
        console.log(playRound(playerSelection, getComputerChoice()));
    });
});
