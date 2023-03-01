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
    // for (var i = 0; i < this.players.length; i++) {
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

        console.log("Pulled a win!")
      } else if (this.movesLeft === 0) {
        console.log("Draw")
      }
    // }
  
  
  // if the players array contains certain combos, then they win
  // if they win, 

  // for a draw, set a move counter. 
  // if no winnig conditions have been met after a certain number then   result in a draw
  
  }

  resetBoard() {
  // research a timer setting to display inner HTML
  // when a winner has been selected, then run the timer
  // when timer runs out, the board clears (player move array gets set to 0) and dom gets updated
  // 
  }
}