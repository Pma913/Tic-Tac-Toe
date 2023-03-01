class Player {
  constructor(id, cursor) {
    this.id = id;
    this.cursor = cursor;
    this.wins = 0;
    this.moves = [];
  }

  increaseWins() {
    this.wins += 1;
  }

  addMove(id) {
    this.moves.push(id);
  }
}