const editPlayer1BtnElement = document.getElementById("edit-player1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player2-btn");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
// We can use the functions in a .js file, which are created or defined in other .js files. The only thing matters here is to place the .js file in which the function is defined; before the .js file in which the created function will be used, in the head section of our html file.
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
