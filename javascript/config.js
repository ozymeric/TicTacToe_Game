function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  //we added + because it turns our string data to an integer data.

  // if data-player-id="1";
  // then:
  // const selectedPlayerId = event.target.dataset["player-id"];
  // because it's not allowed to use dashes in dot notation.
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
  gameOverElement.style.display = "none";
  resetGameBoard();
}

// ________ HANDLING FORM DATA:
function savePlayerConfig(event) {
  event.preventDefault();
  //this code prevents the confirm button; which is a type="submit" button, from reloading the page with a new url. Normally, when a submit button is clicked within a form, it will send a post request to the server and get an html response accordingly.
  const formData = new FormData(event.target);
  //this is a special function to create a FormData 'object'. And we will refer to its content by event.target notation.
  const enteredPlayerName = formData.get("playername").trim(); //trim gets rid of all the whitespace at the beginning and at the end of the input. "      " => ""
  //as the name attribute of our input element is "playername", the typed text within the input field will be seen as the value of our name attribute of the input element which is "playername" in this case. That's why we want to get it by using the "get" method.
  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
    //return keyword executes and stops the function here. When the if statement is true; this function gets executed and stops here. If not; we pass to the rest of the function.
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
    // here, the editedPlayer gets updated when we hit the edit button of the player, and it gets updated by the openPlayerConfig function above.
  );

  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  // Now let's store the names of the players for a later use on declaring the winner.
  // if (editedPlayer === 1) {
  //   players[0].name = enteredPlayerName;
  // } else {
  //   players[1].name = enteredPlayerName;
  // }
  // _____or:
  players[editedPlayer - 1].name = enteredPlayerName;
  //We keep hold of the name of the enteredPlayerName in order to use it in the future to declare the winner name when the game is finished!

  closePlayerConfig();
}
