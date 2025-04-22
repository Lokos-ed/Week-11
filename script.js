//Necessary variables and array for code to utilize and run
var turn = 0
var turnCount = 0
Buttons = {}
var gameOver = false
const alert = document.getElementById("alert")
// This establishes all the possible win combinations
const wins = [
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"],
    ["a1", "b1", "c1"],
    ["a2", "b2", "c2"],
    ["a3", "b3", "c3"],
    ["a1", "b2", "c3"],
    ["a3", "b2", "c1"]
];


//Fetches all the buttons used in the tic-tac-toe grid
//This is used to reset their values and checking the values when the CheckWin() function is ran
for (let i = 1; i < 4; i++) {
  Element = document.getElementById(`a${i}(b)`)
  Buttons[`a${i}(b)`] = Element 
} 
for (let i = 1; i < 4; i++) {
  Element = document.getElementById(`b${i}(b)`)
  Buttons[`b${i}(b)`] = Element 
} 
for (let i = 1; i < 4; i++) {
  Element = document.getElementById(`c${i}(b)`)
  Buttons[`c${i}(b)`] = Element 
} 

//This runs a block of code when the button that with the matching ID is clicked.
reset.addEventListener("click", ()  => {
    //This iterates through the tic-tac-toe buttons in the Buttons array and sets the textContent to ""
    for (let element of Object.values(Buttons)) {
        element.textContent = ""
    }
    //This resets all the other needed variables.
    turn = 0
    turnCount = 0
    gameOver = false
    //This changes the alert background color back to the default blue and displaying the current turn
    alert.style.backgroundColor = "#17b6ff"
    alert.textContent = "It is currently player 1's turn (X)"
})

//Iterates through the tic-tac-toe buttons when clicked and sets their value to X
//This only happens if the gameOver variable is equal to false
//When the text content is changed, it increases the turnCount and sets the turn to 1 which allows O to make their move.
for (let element of Object.values(Buttons)) {
    element.addEventListener('click', () => {
        if (gameOver == false) {
            if (element.textContent == '') {
                if (turn == 0) {
                    element.textContent = 'X'
                    turn = 1
                    turnCount += 1
                    //This runs the CheckWin function with "X" as the parameter.
                    if (CheckWin("X") == true) {
                        //This sets gameOver to true which prevents any further moves from being made.
                        gameOver = true
                        //This displays an alert that declares player 1 as the victor and instructs the user to reset
                        alert.textContent = "Player 1 (X) has won! 🏆 Please reset if you wish to play again."
                        alert.style.backgroundColor = "#f4ff82"
                    } else {
                        //If X has not been determined the winner, the alert will change to display the turn as O's
                        alert.textContent = "It is currently player 2's turn (O)"
                    }
                } else {
                    //This runs the same code as above but in the context of the turn belonging to Os
                    element.textContent = 'O'
                    turn = 0
                    turnCount += 1
                    
                    if (CheckWin("O") == true) {
                        alert.textContent = "Player 2 (O) has won! 🏆 Please reset if you wish to play again."
                        alert.style.backgroundColor = "#f4ff82"
                        gameOver = true
                    } else {
                        alert.textContent = "It is currently player 1's turn (X)"
                    }
                //This checks for the conditions of a tie. If no player has reached a win condition by the time the turn count is 9, a tie is declared.
                } if (turnCount == 9 && CheckWin("X") !== true && CheckWin("O") !== true) {
                    alert.style.backgroundColor = "#b6b4b4"
                    alert.textContent = "It's a tie, no one wins."
                    gameOver = true
                    
                }
            } else {
                //This displays a window alert if the player tries to claim a square that has already been taken.
                window.alert("This square has already been taken, please select a different option.")
        }} else {
            //This prevents players from claiming any squares after the game has ended.
            window.alert("The game has already concluded. Please reset if you wish to play again.")
        }
    });
}
//This goes through each set of win combinations in the array and checks to see if the textcontent of the values in each combination match the value of the CurrentCheck parameter
function CheckWin(CurrentCheck) {
    for (let i = 0; i < wins.length; i++) {
        ele1 = document.getElementById(`${wins[i][0]}(b)`)
        ele2 = document.getElementById(`${wins[i][1]}(b)`)
        ele3 = document.getElementById(`${wins[i][2]}(b)`)

        if (ele1.textContent == CurrentCheck) {
            ele1 = true;
        } else {
            ele1 = false;
        }

        if (ele2.textContent == CurrentCheck) {
            ele2 = true;
        } else {
            ele2 = false;
        }

        if (ele3.textContent == CurrentCheck) {
            ele3 = true;
        } else {
            ele3 = false;
        }


        if (ele1 && ele2 && ele3) {
            
            return true
        }
    }
}
