class Game {
  constructor() {
    this.players = [];
    this.playerTurn = 'one';
    this.movesLeft = 9;
  }

  addPlayers(player) {
    if (this.players.length < 2) {
      this.players.push(player)
    }
  }

  changePlayer() {
    var playerTurnDisplay = document.querySelector('#innerTextLine');
    if (this.playerTurn === 'one') {
      this.playerTurn = 'two';
      playerTurnDisplay.innerText = `${playerTwo.cursor}`;
      // playerTurnDisplay.innerText = `${playerTwo.cursor}`;
    } else {
      this.playerTurn = 'one';
      playerTurnDisplay.innerText = `${playerOne.cursor}`;
      // playerTurnDisplay.innerText = `${playerOne.cursor}`;
    }
  }

  displayPlayer() {
    var playerTurnDisplay = document.querySelector('#innerTextLine');
    if (this.playerTurn === 'one') {
      playerTurnDisplay.innerText = `${playerOne.cursor}`;
    } else {
      playerTurnDisplay.innerText = `${playerTwo.cursor}`;
    }    
  }

  checkForWin(player) {
      this.movesLeft -= 1;
      var winOne = player.moves.includes('squareOne') && player.moves.includes('squareTwo') && player.moves.includes('squareThree');
      var winTwo = player.moves.includes('squareFour') && player.moves.includes('squareFive') && player.moves.includes('squareSix');
      var winThree = player.moves.includes('squareSeven') && player.moves.includes('squareEight') && player.moves.includes('squareNine');
      var winFour = player.moves.includes('squareOne') && player.moves.includes('squareFour') && player.moves.includes('squareSeven');
      var winFive = player.moves.includes('squareTwo') && player.moves.includes('squareFive') && player.moves.includes('squareEight');
      var winSix = player.moves.includes('squareThree') && player.moves.includes('squareSix') && player.moves.includes('squareNine');
      var winSeven = player.moves.includes('squareThree') && player.moves.includes('squareFive') && player.moves.includes('squareSeven');
      var winEight = player.moves.includes('squareOne') && player.moves.includes('squareFive') && player.moves.includes('squareNine');
      
      if (winOne || winTwo || winThree || winFour || winFive || winSix || winSeven || winEight) {
        player.wins += 1;
        winDrawDisplay.innerHTML = `<h2>${player.cursor} Won!</h2>`;
        setTimeout(this.resetBoard, 3000);
        setTimeout(this.changePlayer, 3000);
        this.movesLeft = 9;
      } else if (this.movesLeft === 0) {
        winDrawDisplay.innerHTML = `<h2>It be a draw!</h2>`;
        setTimeout(this.resetBoard, 3000);
        setTimeout(this.changePlayer, 3000);
        this.movesLeft = 9;
      }
      // this.displayPlayer();
  }

  resetBoard() {
    var squares = document.getElementsByClassName('square');

    for (var i = 0; i < squares.length; i++) {
      squares[i].innerHTML = '';
    }
    playerOne.moves.length = 0;
    playerTwo.moves.length = 0;
    winDrawDisplay.innerHTML = `<h2 class="player-turn"">It's <span class="inner-text-display" id="innerTextLine"></span>'s turn</h2>`;
  }

}