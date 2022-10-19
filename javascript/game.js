function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("enter player names first!!!");
    return; // by adding return here, we stop the code here. If we try to start the game when the player names are not given by the players, first we get the alert, but then this code will show the gameboard in anycase. But if we put return here, if names are not given, code will show warning, and stop here, so the gameboard will not be seen.
  }
  activePlayerNameElement.textContent = players[0].name;
  activeGameArea.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName === "LI") {
    const selectedField = event.target;

    const selectedColumn = selectedField.dataset.col - 1;
    // as we are performing a mathematical operation in this example, we don't need to add + to convert the string data into a number.
    const selectedRow = selectedField.dataset.row - 1;
    // by decrementing 1 from these constants we get 0-2 which sits on index numbers for our 2 dimensional array.

    if (gameData[selectedRow][selectedColumn] > 0) {
      alert("Please select an empty field!")
      return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    // now, only by changing the activePlayer value, we can change the player symbol on the gameboard.
    selectedField.classList.add("disabled");

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    // console.log(gameData);


    switchPlayer();

    checkForWinner();

  }
  // Now that solves our problem
}

function checkForWinner() {
  let clickedBox = gameData[event.target.dataset.row -1][event.target.dataset.col -1];

  // __________________________________PLAYER 1 SCENARIO:
 
   if (clickedBox > 0 && clickedBox === 1) {
    // ROWS LOGIC:
    if (
      gameData[0][0] === gameData[0][1] && 
      gameData[0][1] === gameData[0][2] &&
      gameData[0][2] === 1) {
      console.log(playerOneName.textContent + " WINS !!!");
    } else if (
      gameData[1][0] === gameData[1][1] && 
      gameData[1][1] === gameData[1][2] &&
      gameData[1][2] === 1) {
        console.log(playerOneName.textContent + " WINS !!!");
    } else if (
      gameData[2][0] === gameData[2][1] && 
      gameData[2][1] === gameData[2][2] &&
      gameData[2][2] === 1) {
        console.log(playerOneName.textContent + " WINS !!!");
    }
    // COLUMNS LOGIC:
    else if (
      gameData[0][0] === gameData[1][0] && 
      gameData[1][0] === gameData[2][0] &&
      gameData[2][0] === 1) {
        console.log(playerOneName.textContent + " WINS !!!");
    } else if (
      gameData[0][1] === gameData[1][1] && 
      gameData[1][1] === gameData[2][1] &&
      gameData[2][1] === 1) {
        console.log(playerOneName.textContent + " WINS !!!");
    } else if (
      gameData[0][2] === gameData[1][2] && 
      gameData[1][2] === gameData[2][2] &&
      gameData[2][2] === 1) {
        console.log(playerOneName.textContent + " WINS !!!");
    }
    // DIAGONAL LOGIC:
    else if (
      gameData[0][0] === gameData[1][1] && 
      gameData[1][1] === gameData[2][2] &&
      gameData[2][2] === 1) {
        console.log(playerOneName.textContent + " WINS !!!");
    } else if (
      gameData[0][2] === gameData[1][1] && 
      gameData[1][1] === gameData[2][0] &&
      gameData[2][0] === 1) {
        console.log(playerOneName.textContent + " WINS !!!");
    }

  
   // __________________________________PLAYER 2 SCENARIO:
  
  } else if (clickedBox > 0 && clickedBox === 2) {
    // ROWS LOGIC:
    if (
      gameData[0][0] === gameData[0][1] && 
      gameData[0][1] === gameData[0][2] &&
      gameData[0][2] === 2) {
      console.log(playerTwoName.textContent + " WINS !!!");
    } else if (
      gameData[1][0] === gameData[1][1] && 
      gameData[1][1] === gameData[1][2] &&
      gameData[1][2] === 2) {
      console.log(playerTwoName.textContent + " WINS !!!");

    } else if (
      gameData[2][0] === gameData[2][1] && 
      gameData[2][1] === gameData[2][2] &&
      gameData[2][2] === 2) {
      console.log(playerTwoName.textContent + " WINS !!!");
      }
    // COLUMNS LOGIC:
    else if (
      gameData[0][0] === gameData[1][0] && 
      gameData[1][0] === gameData[2][0] &&
      gameData[2][0] === 2) {
      console.log(playerTwoName.textContent + " WINS !!!");
      } else if (
      gameData[0][1] === gameData[1][1] && 
      gameData[1][1] === gameData[2][1] &&
      gameData[2][1] === 2) {
      console.log(playerTwoName.textContent + " WINS !!!");
      } else if (
      gameData[0][2] === gameData[1][2] && 
      gameData[1][2] === gameData[2][2] &&
      gameData[2][2] === 2) {
      console.log(playerTwoName.textContent + " WINS !!!");
      }
    // DIAGONAL LOGIC:
    else if (
      gameData[0][0] === gameData[1][1] && 
      gameData[1][1] === gameData[2][2] &&
      gameData[2][2] === 2) {
      console.log(playerTwoName.textContent + " WINS !!!");
      } else if (
      gameData[0][2] === gameData[1][1] && 
      gameData[1][1] === gameData[2][0] &&
      gameData[2][0] === 2) {
      console.log(playerTwoName.textContent + " WINS !!!");
      }
  }
}
