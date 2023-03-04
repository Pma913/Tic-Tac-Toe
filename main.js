/* query selectors */

var playerOneWins = document.querySelector('#playerOneWins');
var playerTwoWins = document.querySelector('#playerTwoWins');
var gameBoard = document.querySelector('#boardGame');
var winDrawDisplay = document.querySelector('#displayTurn');
/* Data Model */
var savedGame = JSON.parse(localStorage.getItem('game'));
var game;
var playerOne;
var playerTwo;
checkLocalStorage();

/* Event Listeners */

gameBoard.addEventListener('click', addIcon);

/* Event Handlers */


/* Functions */

function addIcon(event) {
  var playerOneOccupy = playerOne.moves.includes(event.target.id);
  var playerTwoOccupy = playerTwo.moves.includes(event.target.id);
  var validSquare = !playerOneOccupy && !playerTwoOccupy && event.target.classList.contains('square');
  var clickedSquare = document.getElementById([event.target.id]);
  var gameGood = winDrawDisplay.classList.length === 1;

  if (game.playerTurn === "one" && validSquare && gameGood) {
    clickedSquare.innerHTML = `<h2 class="player-icon">${playerOne.cursor}</h2>`;
    playerOne.addMove(event.target.id);
    game.checkForWin(playerOne);
  } else if (game.playerTurn === "two" && validSquare && gameGood){
    clickedSquare.innerHTML = `<h2 class="player-icon">${playerTwo.cursor}</h2>`;
    playerTwo.addMove(event.target.id);
    game.checkForWin(playerTwo);
  }

  displayPlayer();
}

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
}

function assignDataModel() {
  game = new Game(savedGame.players, savedGame.playerTurn, savedGame.movesLeft);
  playerOne = new Player('one', 'X', savedGame.players[0].wins, savedGame.players[0].moves);
  playerTwo = new Player('two', 'O', savedGame.players[1].wins, savedGame.players[1].moves);
  game.addPlayers(playerOne);
  game.addPlayers(playerTwo);
}

function createDataModel() {
  game = new Game();
  playerOne = new Player('one', 'X');
  playerTwo = new Player('two', 'O');
  game.addPlayers(playerOne);
  game.addPlayers(playerTwo);
}