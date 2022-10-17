let editedPlayer = 0;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
/* Note 02: 
    These constants will be used within the functions which are created inside the config.js file but on the head section of our html file, config.js comes before this app.js file. So will this work? Will the functions in config.js file be able to see these constants?

    The answer is "Yes"! Because of the order we use inside thsi app.js file. We created or determined our constants up here before our eventlisteners down below.

    So,nthe eventlisteners and the functions within will be executed after our constants will have been created here and this will create no errors. */

const editPlayer1BtnElement = document.getElementById("edit-player1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");

const formElement = document.querySelector("form");
const playerNameInput = document.querySelector("#playername");
const playerNameConfirmBtn = document.getElementById("player-name-confirm-btn");

const playerOneName = document.getElementById("playerOneName");
const playerTwoName = document.getElementById("playerTwoName");

const startGameBtn = document.getElementById("start-game-btn");
const activeGameArea = document.getElementById("active-game");

const errorsOutputElement = document.getElementById("config-errors");
editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
/* Note 01: 
    We can use the functions in a .js file, which are created or defined in other .js files. The only thing matters here is to place the .js file in which the function is defined; before the .js file in which the created function will be used, in the head section of our html file. */
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
/* Note 04:
    Because also when we click on the transparent black area on the .modal class div, we want the overlay window to be closed as well.*/

formElement.addEventListener("submit", savePlayerConfig);

startGameBtn.addEventListener("click", startNewGame);
