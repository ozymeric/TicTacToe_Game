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
  console.log(event.target.tagName);
  // we can see on the console which tag we click.
  // now we will create a logic which will be executable only if the "LI" item is clicked!
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
    console.log(gameData);

    switchPlayer();
  }
  // Now that solves our problem
}
