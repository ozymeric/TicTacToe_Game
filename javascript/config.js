function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
}

// ________ HANDLING FORM DATA:
function savePlayerConfig(event) {
  event.preventDefault();
  //this code prevents the confirm button; which is a type="submit" button, from reloading the page with a new url. Normally, when a submit button is clicked within a form, it will send a post request to the server and get an html response accordingly.
  const formData = new FormData(event.target);
  //this is a special function to create a FormData 'object'. And we will refer to its content by event.target notation.
  const enteredPlayerName = formData.get("playername");
  //as the name attribute of our input element is "playername", the typed text within the input field will be seen as the value of our name attribute of the input element which is "playername" in this case. That's why we want to get it by using the "get" method.
  console.log(enteredPlayerName);
}

//_________ This was my sollution:
// function setPlayerName() {
//   playerConfigOverlayElement.style.display = "none";
//   backdropElement.style.display = "none";
//   playerOneName.textContent = playerNameInput.value;
// }
