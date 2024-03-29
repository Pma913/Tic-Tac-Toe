/* query selectors */

const playerOneWins = document.querySelector('#playerOneWins');
const playerTwoWins = document.querySelector('#playerTwoWins');
const gameBoard = document.querySelector('#boardGame');
const winDrawDisplay = document.querySelector('#displayTurn');
const resetButton = document.querySelector('#resetButton');

/* Data Model */

const savedGame = JSON.parse(localStorage.getItem('ticTacGame'));
let game;
let playerOne;
let playerTwo;


/* Event Handlers */

const establishData = () => {
  if (localStorage.ticTacGame) {
    assignDataModel();
  } else {
    createDataModel();
  }
  
  game.addPlayers(playerOne, playerTwo);
  displayPlayer();
  restoreBoard();
}

const addIcon = (event) => {
  const clickedSquare = document.getElementById([event.target.id]);
  const gameGood = !winDrawDisplay.classList.contains('end-game');
  const isEmpty = !event.target.hasChildNodes();

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

const resetAll = () => {
  localStorage.clear();
  location.reload();
}

/* functions */

const displayPlayer = () => {
  const playerTurnDisplay = document.querySelector('#innerTextLine');

  if (game.playerTurn === 'one') {
    playerTurnDisplay.innerText = `${playerOne.cursor}`;
  } else {
    playerTurnDisplay.innerText = `${playerTwo.cursor}`;
  }
}  

const assignDataModel = () => {
  game = new Game(savedGame.playerTurn, savedGame.movesLeft);
  playerOne = new Player('one', 'X', savedGame.players[0].wins, savedGame.players[0].moves);
  playerTwo = new Player('two', 'O', savedGame.players[1].wins, savedGame.players[1].moves);
}

const createDataModel = () => {
  game = new Game();
  playerOne = new Player('one', 'X');
  playerTwo = new Player('two', 'O');
}

const endGame = () => {
  setTimeout(resetBoard, 3000);
  setTimeout(displayPlayer, 3000);
  freezeBoard();
  winCounter();
  game.resetMoves();
}

const resetBoard = () => {
  let squares = document.getElementsByClassName('square');

  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
  }

  freezeBoard();
  winDrawDisplay.innerHTML = `<h2 class="player-turn"">It's <span class="inner-text-display" id="innerTextLine"></span>'s turn</h2>`;
}  

const restoreBoard = () => {
  playerOne.restoreMoves();
  playerTwo.restoreMoves();
  winCounter();
}

const displayWin = player => winDrawDisplay.innerHTML = `<h2>${player.cursor} Won!</h2>`;

const displayDraw = () => winDrawDisplay.innerHTML = `<h2>It be a draw!</h2>`;

const freezeBoard = () => winDrawDisplay.classList.toggle('end-game');

const winCounter = () => {
  playerOneWins.innerText = `Number of wins: ${playerOne.wins}`;
  playerTwoWins.innerText = `Number of wins: ${playerTwo.wins}`;
}

/* Event Listeners */

window.addEventListener('load', establishData);
gameBoard.addEventListener('click', addIcon);
resetButton.addEventListener('click', resetAll);
