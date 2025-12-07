const TextAdventureGame = require("./textAdventure/Game");
const { QuizMasterWrapper } = require("./quizMaster");

class GameHub {
  constructor() {
    this.mode = "menu";
    this.output = [];
    this.currentGame = null;
  }

  log(line) {
    this.output.push(line);
  }

  flush() {
    const text = this.output.join("\n");
    this.output = [];
    return text;
  }

  start() {
    this.mode = "menu";
    this.currentGame = null;
    this.showMenu();
    return this.flush();
  }

  showMenu() {
    this.log("=== KN-Lang Games Hub ===");
    this.log("1. Text Adventure Game");
    this.log("2. Quiz Master");
    this.log("3. Exit");
    this.log("Enter 1, 2, or 3:");
  }

  processCommand(input) {
    const cmd = (input || "").trim();

    if (this.mode === "menu") {
      return this.handleMenu(cmd);
    }

    if (this.mode === "text" || this.mode === "quiz") {
      const gameOutput = this.currentGame.processCommand(cmd);
      this.log(gameOutput);

      if (this.currentGame.ended) {
        this.log("\nGame over. Returning to main menu...\n");
        this.start();
      }

      return this.flush();
    }

    this.log("Unknown hub state.");
    return this.flush();
  }

  handleMenu(cmd) {
    if (cmd === "1") {
      this.mode = "text";
      this.currentGame = new TextAdventureGame();
      const out = this.currentGame.startText();
      this.log(out);
    } else if (cmd === "2") {
      this.mode = "quiz";
      this.currentGame = new QuizMasterWrapper();
      const out = this.currentGame.startText();
      this.log(out);
    } else if (cmd === "3") {
      this.log("Goodbye! Refresh the page to start again.");
    } else {
      this.log("Invalid choice. Please enter 1, 2, or 3.");
    }

    return this.flush();
  }
}

module.exports = GameHub;
