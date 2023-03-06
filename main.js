/* query selectors */

var playerOneWins = document.querySelector('#playerOneWins');
var playerTwoWins = document.querySelector('#playerTwoWins');
var gameBoard = document.querySelector('#boardGame');
var winDrawDisplay = document.querySelector('#displayTurn');
var resetButton = document.querySelector('#resetButton');
/* Data Model */
var savedGame = JSON.parse(localStorage.getItem('game'));
var game;
var playerOne;
var playerTwo;

checkLocalStorage();
restoreBoard();

/* Event Listeners */

gameBoard.addEventListener('click', addIcon);
resetButton.addEventListener('click', resetAll);
resetButton.addEventListener('mouseenter', onHover);
resetButton.addEventListener('mouseleave', offHover);

/* Event Handlers */

function addIcon(event) {
  var clickedSquare = document.getElementById([event.target.id]);
  var gameGood = !winDrawDisplay.classList.contains('end-game');
  var isEmpty = !event.target.hasChildNodes();

  if (game.playerTurn === "one" && isEmpty && gameGood) {
    clickedSquare.innerHTML = `<h2 class="player-icon">${playerOne.cursor}</h2>`;
    playerOne.addMove(event.target.id);
    game.checkForWin(playerOne);
  } else if (game.playerTurn === "two" && isEmpty && gameGood){
    clickedSquare.innerHTML = `<h2 class="player-icon">${playerTwo.cursor}</h2>`;
    playerTwo.addMove(event.target.id);
    game.checkForWin(playerTwo);
  }

  displayPlayer();
}

function resetAll() {
  localStorage.clear();
  location.reload();
}

function onHover() {
    resetButton.classList.add('hover');
}

function offHover() {
  resetButton.classList.remove('hover');
}

/* Functions */


function displayPlayer() {
  var playerTurnDisplay = document.querySelector('#innerTextLine');

  if (game.playerTurn === 'one') {
    playerTurnDisplay.innerText = `${playerOne.cursor}`;
  } else {
    playerTurnDisplay.innerText = `${playerTwo.cursor}`;
  }
}  

function checkLocalStorage() {
  if (localStorage.length === 1) {
    assignDataModel();
    displayPlayer();
  } else {
    createDataModel();
    displayPlayer();
  }
  
  addPlayers();
}

function assignDataModel() {
  game = new Game(savedGame.playerTurn, savedGame.movesLeft);
  playerOne = new Player('one', 'X', savedGame.players[0].wins, savedGame.players[0].moves);
  playerTwo = new Player('two', 'O', savedGame.players[1].wins, savedGame.players[1].moves);
}

function createDataModel() {
  game = new Game();
  playerOne = new Player('one', 'X');
  playerTwo = new Player('two', 'O');
}

function addPlayers() {
  game.addPlayer(playerOne);
  game.addPlayer(playerTwo);
}

function restoreBoard() {
  playerOne.restoreMoves();
  playerTwo.restoreMoves();
  game.winCounter();
}

function displayWin(player) {
  winDrawDisplay.innerHTML = `<h2>${player.cursor} Won!</h2>`;
}

function displayDraw() {
  winDrawDisplay.innerHTML = `<h2>It be a draw!</h2>`;
}

function freezeBoard() {
  winDrawDisplay.classList.add('end-game');
}