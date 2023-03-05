  class Player {
  constructor(id, cursor, wins, moves) {
    this.id = id;
    this.cursor = cursor;
    this.wins = wins || 0;
    this.moves = moves || [];
  }

  increaseWins() {
    this.wins += 1;
  }

  addMove(id) {
    this.moves.push(id);
  }

  restoreMoves() {
    for (var i = 0; i < this.moves.length; i++) {
      document.getElementById(this.moves[i]).innerHTML = `<h2 class="player-icon">${this.cursor}</h2>`
    }
  }
}