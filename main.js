/* query selectors */


var gameBoard = document.querySelector('#boardGame');
var winDrawDisplay = document.querySelector('#displayTurn');
/* Data Model */

var game = new Game();
var playerOne = new Player('one', 'X');
var playerTwo = new Player('two', 'O');
game.addPlayers(playerOne);
game.addPlayers(playerTwo);
game.displayPlayer();

/* Event Listeners */

gameBoard.addEventListener('click', addIcon);

/* Event Handlers */


/* Functions */

function addIcon(event) {
  var playerOneOccupy = playerOne.moves.includes(event.target.id);
  var playerTwoOccupy = playerTwo.moves.includes(event.target.id);
  if (game.playerTurn === "one" && !playerOneOccupy && !playerTwoOccupy && event.target.classList.contains('square')) {
    document.getElementById([event.target.id]).innerHTML = `<h2 class="player-icon">${playerOne.cursor}</h2>`;
    playerOne.addMove(event.target.id);
    // game.displayPlayer();
    game.checkForWin(playerOne);
    game.changePlayer();
  } else if (game.playerTurn === "two" && !playerTwoOccupy && !playerOneOccupy && event.target.classList.contains('square')){
    document.getElementById([event.target.id]).innerHTML = `<h2 class="player-icon">${playerTwo.cursor}</h2>`;
    playerTwo.addMove(event.target.id);
    // game.displayPlayer();
    game.checkForWin(playerTwo);
    game.changePlayer();
    console.log('here')
  }
  
  
}
