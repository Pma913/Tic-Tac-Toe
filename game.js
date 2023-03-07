class Game {
  constructor(playerTurn, movesLeft) {
    this.players = [];
    this.playerTurn = playerTurn || 'one';
    this.movesLeft = movesLeft || 9;
  }

  addPlayers(player1, player2) {
    if (!this.players.length) {
      this.players.push(player1);
      this.players.push(player2);
    }
  }

  changePlayer() {
    if (this.playerTurn === 'one') {
      this.playerTurn = 'two';
    } else {
      this.playerTurn = 'one';
    }
  }

  winAchieved(player) {
    var winOne = player.moves.includes('squareOne') && player.moves.includes('squareTwo') && player.moves.includes('squareThree');
    var winTwo = player.moves.includes('squareFour') && player.moves.includes('squareFive') && player.moves.includes('squareSix');
    var winThree = player.moves.includes('squareSeven') && player.moves.includes('squareEight') && player.moves.includes('squareNine');
    var winFour = player.moves.includes('squareOne') && player.moves.includes('squareFour') && player.moves.includes('squareSeven');
    var winFive = player.moves.includes('squareTwo') && player.moves.includes('squareFive') && player.moves.includes('squareEight');
    var winSix = player.moves.includes('squareThree') && player.moves.includes('squareSix') && player.moves.includes('squareNine');
    var winSeven = player.moves.includes('squareThree') && player.moves.includes('squareFive') && player.moves.includes('squareSeven');
    var winEight = player.moves.includes('squareOne') && player.moves.includes('squareFive') && player.moves.includes('squareNine');

    if (winOne || winTwo || winThree || winFour || winFive || winSix || winSeven || winEight) {
      return true;
    } else {
      return false;
    }
  }

  checkForWin(player) {
    this.removeMoves(); 

    if (this.winAchieved(player)) {
      player.increaseWins();
      displayWin(player);
      endGame();
    } else if (!this.movesLeft) {
      endGame();
      displayDraw();
    }

    this.changePlayer();
    this.saveGameData();
  } 

  resetMoves() {
    playerOne.moves.length = 0;
    playerTwo.moves.length = 0;
    this.movesLeft = 9;
  }

  saveGameData() {
    localStorage.setItem('game', JSON.stringify(game));
  }

  removeMoves() {
    this.movesLeft -= 1;
  }
}