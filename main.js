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
var winDrawDisplay = document.querySelector('#displayTurn')
/* Data Model */

var game = new Game();
var playerOne = new Player('one', 'X');
var playerTwo = new Player('two', 'O');
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
    document.getElementById([event.target.id]).innerHTML = `<h2 class="player-icon">${playerOne.cursor}</h2>`;
    console.log('P1')
    playerOne.addMove(event.target.id);
    game.checkForWin(playerOne);
    game.changePlayer();
  } else if (game.playerTurn === "two" && !playerTwoOccupy && !playerOneOccupy){
    document.getElementById([event.target.id]).innerHTML = `<h2 class="player-icon">${playerTwo.cursor}</h2>`;
    console.log('P2')
    playerTwo.addMove(event.target.id);
    game.checkForWin(playerTwo);
    game.changePlayer();
  }
 
}

/* Functions */
