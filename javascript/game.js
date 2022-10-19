//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("enter player names first!!!");
  }
  activePlayerNameElement.textContent = players[0].name;
  activeGameArea.style.display = "block";
}

//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************

function selectGameField(event) {
  if (event.target.tagName === "LI") {
    const selectedField = event.target;

    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) {
      alert("Please select an empty field!")
      return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add("disabled");
    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    switchPlayer();
    checkForWinner();
  }
}

//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************

function checkForWinner() {
  let clickedBox = gameData[event.target.dataset.row -1][event.target.dataset.col -1];
   // __________________________________TIE SCENARIO:
  if (clickedBox > 0 &&
      document.querySelector("#game-board li:nth-of-type(1)").textContent &&
      document.querySelector("#game-board li:nth-of-type(2)").textContent &&
      document.querySelector("#game-board li:nth-of-type(3)").textContent &&
      document.querySelector("#game-board li:nth-of-type(4)").textContent &&
      document.querySelector("#game-board li:nth-of-type(5)").textContent &&
      document.querySelector("#game-board li:nth-of-type(6)").textContent &&
      document.querySelector("#game-board li:nth-of-type(7)").textContent &&
      document.querySelector("#game-board li:nth-of-type(8)").textContent &&
      document.querySelector("#game-board li:nth-of-type(9)").textContent
      ) {
        backdropElement.style.display = "block";
        gameOverElement.style.display = "flex";
        gameOverElementText.innerText = "It's a tie baby!!!";
      } 
   // __________________________________PLAYER 1 SCENARIO:
    // ROWS LOGIC:
      else if (clickedBox > 0 && clickedBox === 1) {
        if (
          gameData[0][0] === gameData[0][1] && 
          gameData[0][1] === gameData[0][2] &&
          gameData[0][2] === 1
          ) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerOneName.textContent + " WINS !!!";
          } else if (
          gameData[1][0] === gameData[1][1] && 
          gameData[1][1] === gameData[1][2] &&
          gameData[1][2] === 1) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerOneName.textContent + " WINS !!!";
        } else if (
          gameData[2][0] === gameData[2][1] && 
          gameData[2][1] === gameData[2][2] &&
          gameData[2][2] === 1) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerOneName.textContent + " WINS !!!";
        }
    // COLUMNS LOGIC:
        else if (
          gameData[0][0] === gameData[1][0] && 
          gameData[1][0] === gameData[2][0] &&
          gameData[2][0] === 1) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerOneName.textContent + " WINS !!!";
        } else if (
          gameData[0][1] === gameData[1][1] && 
          gameData[1][1] === gameData[2][1] &&
          gameData[2][1] === 1) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerOneName.textContent + " WINS !!!";
        } else if (
          gameData[0][2] === gameData[1][2] && 
          gameData[1][2] === gameData[2][2] &&
          gameData[2][2] === 1) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerOneName.textContent + " WINS !!!";
        }
    // DIAGONAL LOGIC:
        else if (
          gameData[0][0] === gameData[1][1] && 
          gameData[1][1] === gameData[2][2] &&
          gameData[2][2] === 1) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerOneName.textContent + " WINS !!!";
        } else if (
          gameData[0][2] === gameData[1][1] && 
          gameData[1][1] === gameData[2][0] &&
          gameData[2][0] === 1) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerOneName.textContent + " WINS !!!";
        }
      }
  
   // __________________________________PLAYER 2 SCENARIO:
    // ROWS LOGIC:
      else if (clickedBox > 0 && clickedBox === 2) {
        if (
          gameData[0][0] === gameData[0][1] && 
          gameData[0][1] === gameData[0][2] &&
          gameData[0][2] === 2) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerTwoName.textContent + " WINS !!!";
        } else if (
          gameData[1][0] === gameData[1][1] && 
          gameData[1][1] === gameData[1][2] &&
          gameData[1][2] === 2) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerTwoName.textContent + " WINS !!!";

        } else if (
          gameData[2][0] === gameData[2][1] && 
          gameData[2][1] === gameData[2][2] &&
          gameData[2][2] === 2) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerTwoName.textContent + " WINS !!!";
          }
        // COLUMNS LOGIC:
          else if (
          gameData[0][0] === gameData[1][0] && 
          gameData[1][0] === gameData[2][0] &&
          gameData[2][0] === 2) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerTwoName.textContent + " WINS !!!";
          } else if (
          gameData[0][1] === gameData[1][1] && 
          gameData[1][1] === gameData[2][1] &&
          gameData[2][1] === 2) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerTwoName.textContent + " WINS !!!";
          } else if (
          gameData[0][2] === gameData[1][2] && 
          gameData[1][2] === gameData[2][2] &&
          gameData[2][2] === 2) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerTwoName.textContent + " WINS !!!";
          }
        // DIAGONAL LOGIC:
        else if (
          gameData[0][0] === gameData[1][1] && 
          gameData[1][1] === gameData[2][2] &&
          gameData[2][2] === 2) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerTwoName.textContent + " WINS !!!";
          } else if (
          gameData[0][2] === gameData[1][1] && 
          gameData[1][1] === gameData[2][0] &&
          gameData[2][0] === 2) {
            backdropElement.style.display = "block";
            gameOverElement.style.display = "flex";
            gameOverElementText.innerText = playerTwoName.textContent + " WINS !!!";
          }
      }
}

//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************

