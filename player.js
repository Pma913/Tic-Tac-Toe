class Player {
  constructor(id, cursor) {
    this.id = id;
    this.cursor = cursor;
    this.wins = 0;
  }

  increaseWins() {
    this.wins += 1;
  }
}