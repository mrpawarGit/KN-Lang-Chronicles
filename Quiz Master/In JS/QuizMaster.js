const readline = require("readline");
const Player = require("./Player");
// const questionBank = require("./data/questionBank");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Doodle - function to read a line from console
function ask(promptText) {
  return new Promise((resolve) => {
    rl.question(promptText, (answer) => resolve(answer.trim()));
  });
}

// Squad QuizMaster
class QuizMaster {
  constructor(questions) {
    this.questions = questions;
    this.player = null;
    this.currentCategory = null;
    this.currentDifficulty = null;
  }

  // Doodle - Main entry – start
  async start() {
    console.log("=== Quiz Master ===");
    console.log("Welcome to the quiz game.\n");

    const name = await ask("Enter your name: ");
    this.player = new Player(name);

    console.log(`\nHello, ${this.player.name}.\n`);

    await this.chooseCategory();
    await this.chooseDifficulty();
    await this.runQuiz();
    this.showScore();

    rl.close();
  }

  // Doodle - Lets the player choose the quiz category
  async chooseCategory() {
    console.log("Choose a category:");
    console.log("1. Science");
    console.log("2. History");
    console.log("3. Fun Facts");

    while (!this.currentCategory) {
      const choice = await ask("Enter 1, 2, or 3: ");
      if (choice === "1") this.currentCategory = "Science";
      else if (choice === "2") this.currentCategory = "History";
      else if (choice === "3") this.currentCategory = "Fun Facts";
      else console.log("Invalid choice. Please enter 1, 2, or 3.");
    }

    console.log(`\nCategory selected: ${this.currentCategory}\n`);
  }

  // Doodle - Lets the player choose difficulty level
  async chooseDifficulty() {
    console.log("Choose difficulty:");
    console.log("1. Easy   (+5 / -2)");
    console.log("2. Medium (+10 / -5)");
    console.log("3. Hard   (+15 / -7)");

    while (!this.currentDifficulty) {
      const choice = await ask("Enter 1, 2, or 3: ");
      if (choice === "1") this.currentDifficulty = "Easy";
      else if (choice === "2") this.currentDifficulty = "Medium";
      else if (choice === "3") this.currentDifficulty = "Hard";
      else console.log("Invalid choice. Please enter 1, 2, or 3.");
    }

    console.log(`\nDifficulty selected: ${this.currentDifficulty}\n`);
  }

  // Doodle - Checks if answer is correct
  evaluateAnswer(question, userAnswer) {
    return (
      userAnswer.trim().toLowerCase() === question.correctAnswer.toLowerCase()
    );
  }

  // Doodle - comment based on correctness
  commentOnAnswer(isCorrect) {
    if (isCorrect) {
      console.log("Well, someone paid attention in school!");
    } else {
      console.log("Close… if we were grading on imagination.");
    }
  }

  // Returns points based on difficulty and correctness
  getPointsForDifficulty(isCorrect) {
    const d = this.currentDifficulty;
    if (d === "Easy") return isCorrect ? 5 : -2;
    if (d === "Medium") return isCorrect ? 10 : -5;
    if (d === "Hard") return isCorrect ? 15 : -7;
    return 0;
  }

  // Doodle - Asks one question
  async askQuestion(questionNumber, question) {
    console.log(
      `Question ${questionNumber}: (${question.category} - ${question.difficulty})`
    );
    console.log(question.text);
    const userAnswer = await ask("Your answer: ");

    const isCorrect = this.evaluateAnswer(question, userAnswer);
    const points = this.getPointsForDifficulty(isCorrect);

    this.player.updateScore(points);
    this.commentOnAnswer(isCorrect);
    console.log(
      `You ${isCorrect ? "gained" : "lost"} ${Math.abs(points)} points.`
    );
    console.log(`Current score: ${this.player.score}\n`);
  }

  // Doodle - Runs 10 questions
  async runQuiz() {
    const totalQuestions = 10;

    // Filter by selected category and difficulty
    let filtered = this.questions.filter(
      (q) =>
        q.category === this.currentCategory &&
        q.difficulty === this.currentDifficulty
    );

    if (filtered.length === 0) {
      filtered = this.questions.filter(
        (q) => q.category === this.currentCategory
      );
    }

    for (let i = 0; i < totalQuestions; i++) {
      const q = filtered[i % filtered.length];
      await this.askQuestion(i + 1, q);
    }
  }

  // Doodle - Shows final score and rank.
  showScore() {
    console.log("=== Quiz Over ===");
    console.log(`Final score for ${this.player.name}: ${this.player.score}`);

    if (this.player.score >= 80) {
      console.log("Quiz Royalty has arrived!");
    } else if (this.player.score >= 50) {
      console.log("Quiz Master in training.");
    } else {
      console.log("Better luck next time, genius.");
    }
  }
}

module.exports = QuizMaster;
