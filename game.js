class Game {
  constructor() {
    this.players = [];
    this.playerTurn;
    this.movesLeft = 9;
  }

  addPlayers(player) {
    if (this.players.length < 2) {
      this.players.push(player)
    }
  }

  changePlayer() {
    if (this.playerTurn === 'one') {
      this.playerTurn = this.players[1].id;
    } else {
      this.playerTurn = this.players[0].id;
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
        winDrawDisplay.innerHTML = `<h2>You Won!</h2>`;
        setTimeout(this.resetBoard(), 5000)
        console.log("Pulled a win!")
      } else if (this.movesLeft === 0) {
        console.log("Draw")
      }
  }

  resetBoard() {
    this.playerTurn = "one"
    this.movesLeft = 9;
    playerOne.wins = 0;
    playerOne.moves.length = 0;
    playerTwo.wins = 0;
    playerTwo.moves.length = 0;
    winDrawDisplay.innerHTML = `<h2 class="player-turn">It's <span class="inner-text-display" id="innerTextLine"></span>'s turn</h2>`;
  }
}