class Game {
  constructor() {
    this.players = [];
    this.playerTurn;
  }

  addPlayers(player) {
    if (this.players.length < 2) {
      this.players.push(player)
    }
  }

  changePlayer() {
  // conditionals statement
    if (this.playerTurn === 'one') {
      console.log("if")
      this.playerTurn = this.players[1].id;
    } else {
      console.log('else')
      this.playerTurn = this.players[0].id;
    }
    console.log('neither')
  // check for which cursor was last used
  // how do I know whos cursor was the last used
  // research last element placed?
  }

  checkForWin() {
  // create a property in the player class
  // this property will have an array of squares selected
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