function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("enter player names first!!!");
    return; // by adding return here, we stop the code here. If we try to start the game when the player names are not given by the players, first we get the alert, but then this code will show the gameboard in anycase. But if we put return here, if names are not given, code will show warning, and stop here, so the gameboard will not be seen.
  }
  activeGameArea.style.display = "block";
  activePlayerNameElement.textContent = players[0].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
    activePlayerNameElement.textContent = players[activePlayer].name;
  } else {
    activePlayer = 0;
    activePlayerNameElement.textContent = players[activePlayer].name;
  }
}

function selectGameField(event) {
  console.log(event.target.tagName);
  // we can see on the console which tag we click.
  // now we will create a logic which will be executable only if the "LI" item is clicked!
  if (event.target.tagName === "LI") {
    event.target.textContent = players[activePlayer].symbol;
    // now, only by changing the activePlayer value, we can change the player symbol on the gameboard.
    event.target.classList.add("disabled");
    switchPlayer();
  }
  // Now that solves our problem
}
