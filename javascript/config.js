//*************************************************************************************************
//****************************** REVEAL PLAYER CONFIGURATION MENU *********************************
//*************************************************************************************************

function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

//*************************************************************************************************
//******************************** HIDE PLAYER CONFIGURATION MENU *********************************
//*************************************************************************************************

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
  gameOverElement.style.display = "none";
  resetGameBoard();
}

//*************************************************************************************************
//****************************** SETTING PLAYER CONFIGURATION *************************************
//*************************************************************************************************

// ________ HANDLING FORM DATA:
function savePlayerConfig(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const enteredPlayerName = formData.get("playername").trim();
  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}

//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************
