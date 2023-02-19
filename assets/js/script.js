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
                alert('You clicked ${gameType}');
            }
         })
    }
})


function runGame() {

}

function checkAnwser() {

}

function calculateCorrectAnwser() {

}

function incrementScore() {

}

function displayWrongAnwser() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}