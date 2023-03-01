/* query selectors */
var squareOne = document.querySelector('#squareOne');
var squareTwo = document.querySelector('#squareTwo');
var squareThree = document.querySelector('#squareThree');
var squareFour = document.querySelector('#squareFour');
var squareFive = document.querySelector('#squareFive');
var squareSix = document.querySelector('#squareSix');
var squareSeven = document.querySelector('#squareSeven');
var squareEight = document.querySelector('#squareEight');
var squareNine = document.querySelector('#squareNine');
var gameBoard = document.querySelector('#boardGame');
/* Data Model */

var game = new Game();
var playerOne = new Player('one', '🎃');
var playerTwo = new Player('two', '👻');
game.addPlayers(playerOne);
game.addPlayers(playerTwo);
game.changePlayer();

/* Event Listeners */

gameBoard.addEventListener('click', addIcon);

/* Event Handlers */

function addIcon(event) {
  var playerOneOccupy = playerOne.moves.includes(event.target.id);
  var playerTwoOccupy = playerTwo.moves.includes(event.target.id);
  if (game.playerTurn === "one" && !playerOneOccupy && !playerTwoOccupy) {
    playerOne.addMove(event.target.id);
    game.changePlayer();
  } else if (game.playerTurn === "two" && !playerTwoOccupy && !playerOneOccupy){
    playerTwo.addMove(event.target.id);
    game.changePlayer();
  }
 
}

/* Functions */
