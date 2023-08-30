"use strict";
const choice = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
    return choice[Math.round(Math.random() * (choice.length - 1))];
}
console.log(getComputerChoice());
