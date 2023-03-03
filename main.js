/* query selectors */

var playerOneWins = document.querySelector('#playerOneWins')
var playerTwoWins = document.querySelector('#playerTwoWins')
var gameBoard = document.querySelector('#boardGame');
var winDrawDisplay = document.querySelector('#displayTurn');
/* Data Model */

var game = new Game();
var playerOne = new Player('one', 'X');
var playerTwo = new Player('two', 'O');
game.addPlayers(playerOne);
game.addPlayers(playerTwo);
displayPlayer();

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

  // game.changePlayer();
  displayPlayer()
  
}

function displayPlayer() {
    var playerTurnDisplay = document.querySelector('#innerTextLine');

    if (game.playerTurn === 'one') {
      playerTurnDisplay.innerText = `${playerOne.cursor}`;
    } else {
      playerTurnDisplay.innerText = `${playerTwo.cursor}`;
    }
  }  
