function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
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
  }
}
