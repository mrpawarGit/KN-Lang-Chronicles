const Player = require("./Player");

class QuizMaster {
  constructor(questions) {
    this.questions = questions;
    this.player = null;
    this.currentCategory = null;
    this.currentDifficulty = null;
    this.filteredQuestions = [];
    this.currentIndex = 0;
    this.totalQuestions = 10;
    this.stage = "askName";
    this.output = [];
    this.ended = false;
  }

  log(line) {
    this.output.push(line);
  }

  flush() {
    const text = this.output.join("\n");
    this.output = [];
    return text;
  }

  startText() {
    this.stage = "askName";
    this.log("=== Quiz Master ===");
    this.log("Welcome to the quiz game.");
    this.log("What is your name?");
    return this.flush();
  }

  processCommand(input) {
    const cmd = (input || "").trim();

    if (this.stage === "askName") {
      return this.handleName(cmd);
    }

    if (this.stage === "chooseCategory") {
      return this.handleCategory(cmd);
    }

    if (this.stage === "chooseDifficulty") {
      return this.handleDifficulty(cmd);
    }

    if (this.stage === "asking") {
      return this.handleAnswer(cmd);
    }

    if (this.stage === "ended") {
      this.log("Quiz is over. Return to menu.");
      return this.flush();
    }

    this.log("Unexpected quiz state.");
    return this.flush();
  }

  handleName(name) {
    if (!name) {
      this.log("Please enter a name.");
      return this.flush();
    }
    this.player = new Player(name);
    this.stage = "chooseCategory";

    this.log(`\nHello, ${this.player.name}.\n`);
    this.log("Choose a category:");
    this.log("1. Science");
    this.log("2. History");
    this.log("3. Fun Facts");
    this.log("Enter 1, 2, or 3:");
    return this.flush();
  }

  handleCategory(choice) {
    if (choice === "1") this.currentCategory = "Science";
    else if (choice === "2") this.currentCategory = "History";
    else if (choice === "3") this.currentCategory = "Fun Facts";

    if (!this.currentCategory) {
      this.log("Invalid choice. Please enter 1, 2, or 3.");
      return this.flush();
    }

    this.stage = "chooseDifficulty";
    this.log(`\nCategory selected: ${this.currentCategory}\n`);
    this.log("Choose difficulty:");
    this.log("1. Easy   (+5 / -2)");
    this.log("2. Medium (+10 / -5)");
    this.log("3. Hard   (+15 / -7)");
    this.log("Enter 1, 2, or 3:");
    return this.flush();
  }

  handleDifficulty(choice) {
    if (choice === "1") this.currentDifficulty = "Easy";
    else if (choice === "2") this.currentDifficulty = "Medium";
    else if (choice === "3") this.currentDifficulty = "Hard";

    if (!this.currentDifficulty) {
      this.log("Invalid choice. Please enter 1, 2, or 3.");
      return this.flush();
    }

    this.log(`\nDifficulty selected: ${this.currentDifficulty}\n`);

    this.filteredQuestions = this.questions.filter(
      (q) =>
        q.category === this.currentCategory &&
        q.difficulty === this.currentDifficulty
    );

    if (this.filteredQuestions.length === 0) {
      this.filteredQuestions = this.questions.filter(
        (q) => q.category === this.currentCategory
      );
    }

    this.currentIndex = 0;
    this.stage = "asking";

    this.askNextQuestion();
    return this.flush();
  }

  askNextQuestion() {
    if (this.currentIndex >= this.totalQuestions) {
      this.finishQuiz();
      return;
    }

    const q =
      this.filteredQuestions[this.currentIndex % this.filteredQuestions.length];

    this.log(
      `Question ${this.currentIndex + 1}: (${q.category} - ${q.difficulty})`
    );
    this.log(q.text);
    this.log("Type your answer and press Enter:");
  }

  handleAnswer(answer) {
    if (this.currentIndex >= this.totalQuestions) {
      this.finishQuiz();
      return this.flush();
    }

    const q =
      this.filteredQuestions[this.currentIndex % this.filteredQuestions.length];

    const isCorrect =
      (answer || "").trim().toLowerCase() === q.correctAnswer.toLowerCase();

    const points = this.getPointsForDifficulty(isCorrect);

    this.player.updateScore(points);
    this.commentOnAnswer(isCorrect);
    this.log(
      `You ${isCorrect ? "gained" : "lost"} ${Math.abs(points)} points.`
    );
    this.log(`Current score: ${this.player.score}\n`);

    this.currentIndex++;

    if (this.currentIndex >= this.totalQuestions) {
      this.finishQuiz();
    } else {
      this.askNextQuestion();
    }

    return this.flush();
  }

  commentOnAnswer(isCorrect) {
    if (isCorrect) {
      this.log("Well, someone paid attention in school!");
    } else {
      this.log("Close… if we were grading on imagination.");
    }
  }

  getPointsForDifficulty(isCorrect) {
    const d = this.currentDifficulty;
    if (d === "Easy") return isCorrect ? 5 : -2;
    if (d === "Medium") return isCorrect ? 10 : -5;
    if (d === "Hard") return isCorrect ? 15 : -7;
    return 0;
  }

  finishQuiz() {
    this.stage = "ended";
    this.ended = true;

    this.log("=== Quiz Over ===");
    this.log(`Final score for ${this.player.name}: ${this.player.score}`);

    if (this.player.score >= 80) {
      this.log("Quiz Royalty has arrived!");
    } else if (this.player.score >= 50) {
      this.log("Quiz Master in training.");
    } else {
      this.log("Better luck next time, genius.");
    }
  }
}

module.exports = QuizMaster;
