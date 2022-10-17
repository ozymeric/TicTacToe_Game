function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("enter player names first!!!");
    return; // by adding return here, we stop the code here. If we try to start the game when the player names are not given by the players, first we get the alert, but then this code will show the gameboard in anycase. But if we put return here, if names are not given, code will show warning, and stop here, so the gameboard will not be seen.
  }
  activeGameArea.style.display = "block";
}
