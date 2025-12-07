// Squad Player - Player with name & score
class Player {
  constructor(name) {
    this.name = name || "Player";
    this.score = 0;
  }

  updateScore(points) {
    this.score += points;
  }
}

module.exports = Player;
