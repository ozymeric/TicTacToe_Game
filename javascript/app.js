//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

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

let editedPlayer = 0;
let activePlayer = 0;
let roundCount = 1;

let playerOneScore = 0;
let playerTwoScore = 0;

//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const gameOverElement = document.getElementById("game-result");
const gameOverElementText = document.getElementById("gamee");
const nextRoundButton = document.getElementById("next-round-btn");

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
const gameBoardElement = document.getElementById("game-board");

const errorsOutputElement = document.getElementById("config-errors");

const activePlayerNameElement = document.getElementById("active-player-name");

const roundData = document.getElementById("round-data");
const playerOneScoreData = document.getElementById("player-one-score-data");
const playerTwoScoreData = document.getElementById("player-two-score-data");

//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************

// edit buttons
editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

// cancel button
cancelConfigBtnElement.addEventListener("click", closePlayerConfig);

//backdrop element
// backdropElement.addEventListener("click", closePlayerConfig);

//form element
formElement.addEventListener("submit", savePlayerConfig);

// start game
startGameBtn.addEventListener("click", startNewGame);

//game-board
gameBoardElement.addEventListener("click", selectGameField);

// next round
nextRoundButton.addEventListener("click", restartGame);

//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************
