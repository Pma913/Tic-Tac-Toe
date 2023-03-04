class Game {
  constructor(players, playerTurn, movesLeft) {
    this.players = [];
    this.playerTurn = playerTurn || 'one';
    this.movesLeft = movesLeft || 9;
  }

  addPlayer(player) {
    if (this.players.length < 2) {
      this.players.push(player)
    }
  }

  changePlayer() {
    if (this.playerTurn === 'one') {
      this.playerTurn = 'two';
    } else {
      this.playerTurn = 'one';
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
        setTimeout(displayPlayer, 3000);
        this.movesLeft = 9;
        this.resetMoves();
        this.winCounter();
        winDrawDisplay.classList.add('end-game');
      } else if (this.movesLeft === 0) {
        winDrawDisplay.innerHTML = `<h2>It be a draw!</h2>`;
        setTimeout(this.resetBoard, 3000);
        setTimeout(displayPlayer, 3000);
        this.movesLeft = 9;
        this.resetMoves();
      }
      this.changePlayer();
      localStorage.setItem('game', JSON.stringify(game));
  }

  resetBoard() {
    var squares = document.getElementsByClassName('square');

    for (var i = 0; i < squares.length; i++) {
      squares[i].innerHTML = '';
    }
    winDrawDisplay.classList.remove('end-game');
    
    winDrawDisplay.innerHTML = `<h2 class="player-turn"">It's <span class="inner-text-display" id="innerTextLine"></span>'s turn</h2>`;
  }

  winCounter() {
    playerOneWins.innerText = `Number of wins: ${this.players[0].wins}`;
    playerTwoWins.innerText = `Number of wins: ${this.players[1].wins}`;
  }

  resetMoves() {
    playerOne.moves.length = 0;
    playerTwo.moves.length = 0;
  }
}