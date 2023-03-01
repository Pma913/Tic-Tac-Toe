class Game {
  constructor() {
    this.players = [];
  }

  addPlayers(player) {
    if (this.players.length < 2) {
      this.players.push(player)
    }
  }
}