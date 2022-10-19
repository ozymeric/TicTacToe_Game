const gameData = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

let editedPlayer = 0;
let activePlayer = 0;
let roundCount = 1;


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
const gameOverElement = document.getElementById("game-result");
const gameOverElementText = document.getElementById("gamee");
const nextRoundButton = document.getElementById("next-round-btn");
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
// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");
// we can target the OL element with the game-board id like this.
// we can check this by typing "gameBoardElement.tagName;" to the console on the chrome dev tools.

const errorsOutputElement = document.getElementById("config-errors");

const activePlayerNameElement = document.getElementById("active-player-name");

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

// for (element of gameFieldElements) {
//   element.addEventListener("click", selectGameField);
// }
// here we've added eventlisteners to all the li items individualy by using a "for of loop".
// but actually we could have done this by targeting the "ol" element as well.
// now let's check that:

gameBoardElement.addEventListener("click", selectGameField);
// now this will work ass well just like adding eventlisteners to all the list items one by one.
// but there is only one slight problem with this solution. If we click on the boxes on the gameboard, everything works just fine; unless we click the gap betweeen boxes. Then the entire gameboard will disappear and we will see the sybols of players on a blank screen. Because we've written our function considering the li elements only. Befor it was working normally because there were no click listeners on the OL element which is the blank areas between boxes. But now as we've added the eventlistener to our OL element, when we click the child elements which are the LI items, everything works fine, but if we click the gaps, we will be clicking the OL item, and as we added the click listener to the OL element, it reacts, and executes our function.
// We can solve this problem easily. Check the function ont the game.js:

nextRoundButton.addEventListener("click", closePlayerConfig);