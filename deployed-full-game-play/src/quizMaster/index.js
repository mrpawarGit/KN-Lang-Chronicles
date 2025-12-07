const QuizMaster = require("./QuizMaster");
const questionBank = require("./data/questionBank");

// Wrapper for same interface
class QuizMasterWrapper {
  constructor() {
    this.engine = new QuizMaster(questionBank);
    this.ended = false;
  }

  startText() {
    return this.engine.startText();
  }

  processCommand(input) {
    const out = this.engine.processCommand(input);
    this.ended = this.engine.ended;
    return out;
  }
}

module.exports = { QuizMasterWrapper };
