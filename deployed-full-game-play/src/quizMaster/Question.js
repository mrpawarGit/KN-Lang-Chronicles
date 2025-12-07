// Squad Question
class Question {
  constructor({ text, category, difficulty, correctAnswer }) {
    this.text = text;
    this.category = category;
    this.difficulty = difficulty;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Question;
