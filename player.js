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
}