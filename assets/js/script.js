// Wait for the DOM to finish loading before runnung the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
         button.addEventListener("click", function() {
            if (this.getAttribute("data-type")== "submit") {
                alert("You Clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
         })
    }

    runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's anwser has been processed
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else {
        alert('Unknown game type: ${gameType}');
        throw 'Unown game type: ${gameType}. Aborting!';
    }
}

function checkAnwser() {

}

function calculateCorrectAnwser() {

}

function incrementScore() {

}

function displayWrongAnwser() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}