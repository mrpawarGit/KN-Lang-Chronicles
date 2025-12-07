// Squad Player - Player with name & Score
class Player {
  constructor(name) {
    this.name = name || "Player";
    this.score = 0;
  }

  // Doodle updateScore - Adds / deduct points from score
  updateScore(points) {
    this.score += points;
  }
}

module.exports = Player;
