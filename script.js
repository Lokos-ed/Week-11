var turn = 0
var turnCount = 1
Buttons = {}
var gameOver = true
const alert = document.getElementById("alert")
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



for (let i = 1; i < 4; i++) {
  Element = document.getElementById(`a${i}(b)`)
  Buttons[`a${i}(b)`] = Element
  Element.textContent = "meow" 
} 
for (let i = 1; i < 4; i++) {
  Element = document.getElementById(`b${i}(b)`)
  Buttons[`b${i}(b)`] = Element
  Element.textContent = "meow" 
} 
for (let i = 1; i < 4; i++) {
  Element = document.getElementById(`c${i}(b)`)
  Buttons[`c${i}(b)`] = Element
  Element.textContent = "meow" 
} 
for (let element of Object.values(Buttons)) {
    element.textContent = "kitty"
  }

reset.addEventListener("click", ()  => {
    for (let element of Object.values(Buttons)) {
        element.textContent = ""
    }
    turn = 0
    turnCount = 0
    gameOver = false
    alert.style.backgroundColor = "#17b6ff"
    alert.textContent = "It is currently player 1's turn (X)"
})

for (let element of Object.values(Buttons)) {
    element.addEventListener('click', () => {
        if (gameOver == false) {
            if (element.textContent == '') {
                if (turn == 0) {
                    element.textContent = 'X'
                    turn = 1
                    turnCount += 1
                    
                    if (CheckWin("X") == true) {
                        gameOver = true
                        alert.textContent = "Player 1 (X) has won! 🏆 Please reset if you wish to play again."
                        alert.style.backgroundColor = "#f4ff82"
                    } else {
                        alert.textContent = "It is currently player 2's turn (O)"
                    }
                } else {
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
                } if (turnCount == 9) {
                    alert.style.backgroundColor = "#b6b4b4"
                    alert.textContent = "It's a tie, no one wins."
                    gameOver = true
                    
                }
            } else {
                window.alert("This square has already been taken, please select a different option.")
        }} else {
            window.alert("The game has already concluded. Please reset if you wish to play again.")
        }
    });
}

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
