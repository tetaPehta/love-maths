// Wait for the DOM to finish loading before runnung the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
         button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnwser();
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
    } else if (gameType ==="multiply") {
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unown game type: ${gameType}. Aborting!`;
    }
}
/**
 * checks the anwser against the first element in
 * the returned calculatedCorrectAnwser array
 */
function checkAnwser() {

    let userAnwser = parseInt(document.getElementById("anwser-box").value);
    let calculatedAnwser = calculateCorrectAnwser();
    let isCorrect = userAnwser === calculatedAnwser[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
     } else {
        alert(`Awwww....you anwsered ${userAnwser}. The correct anwser was ${calculatedAnwser[0]}!`);
        incrementWrongAnwser();
     }

     runGame(calculatedAnwser[1]);

}
/**
 * Gets the operands (the numbers) and the operator (plus, minus etc..)
 * directly from the dom, and returns the correct anwser.
 */
function calculateCorrectAnwser() {

       let operand1 = parseInt(document.getElementById('operand1').innerText);
       let operand2 = parseInt(document.getElementById('operand2').innerText);
       let operator = document.getElementById("operator").innerText;

       if (operator === "+") {
           return [operand1 + operand2, "addition"];
       } else if (operator === "x") {
          return [operand1* operand2, "multiply"];
       } else {
           alert(`Unimplemented operator ${operator}`);
           throw `Unimplemented operator ${operator}. Aborting!`;
       }

}
/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}
/**
 * Gets the current tally of incorrect anwsers from the DOM and increments it by 1
 */
function displayWrongAnwser() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}