// Main Game

const readline = require("readline");
const Player = require("./player");
const Room = require("./room");

// Game Squad - connects everything together
class Game {
  constructor() {
    // Quarks
    this.rooms = {};
    this.player = new Player();
    this.lockedDoorOpen = false;
    this.riddleSolved = false;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  // Doodle - setup all rooms and connections
  setupWorld() {
    const entrance = new Room(
      "Entrance",
      "You stand at the entrance of a strange building. The air smells like unfinished features."
    );
    entrance.exits = {
      north: "Main Hall",
    };

    const mainHall = new Room(
      "Main Hall",
      "A wide hall with flickering lights. A crumpled note lies on the floor."
    );
    mainHall.items.push("crumpled note");
    mainHall.exits = {
      south: "Entrance",
      north: "Storage Closet",
      west: "Locked Door",
      east: "Riddle Room",
    };

    const storage = new Room(
      "Storage Closet",
      "A tiny room full of dusty boxes. Something shiny peeks from under a box."
    );
    storage.items.push("rusty key");
    storage.exits = {
      south: "Main Hall",
    };

    const lockedDoor = new Room(
      "Locked Door",
      "A heavy wooden door with a stubborn keyhole. It looks unimpressed by your presence."
    );
    lockedDoor.exits = {
      south: "Main Hall",
      // east - will be added when unlocked
    };

    const riddleRoom = new Room(
      "Riddle Room",
      'The room is dark except for glowing text on the wall:\n"I follow you all day, but disappear at night. Who am I?"\nType: answer <your guess>'
    );
    riddleRoom.exits = {
      west: "Main Hall",
    };

    const treasureRoom = new Room(
      "Treasure Room",
      "You step into a bright room filled with glowing monitors and coffee mugs. You made it!"
    );
    treasureRoom.items.push("golden badge");
    treasureRoom.exits = {
      west: "Locked Door",
    };

    this.rooms["Entrance"] = entrance;
    this.rooms["Main Hall"] = mainHall;
    this.rooms["Storage Closet"] = storage;
    this.rooms["Locked Door"] = lockedDoor;
    this.rooms["Riddle Room"] = riddleRoom;
    this.rooms["Treasure Room"] = treasureRoom;
  }

  // Doodle - start the game, ask name, begin loop
  startGame() {
    console.log("Welcome to the KN-Lang Text Adventure (Node.js)!");
    this.rl.question("What is your name, adventurer? ", (name) => {
      this.player.name = name.trim() || "Unnamed Hero";
      console.log(`\nHello, ${this.player.name}. Try not to break reality.\n`);

      this.setupWorld();
      this.player.currentRoom = this.rooms["Entrance"];
      this.player.currentRoom.showDetails();

      console.log(
        "\nCommands: go <direction>, pick <item>, inventory, look, use <item>, answer <text>, quit"
      );

      this.mainLoop();
    });
  }

  // SpinCycle - main input loop
  mainLoop() {
    if (!this.player.isAlive) {
      this.rl.close();
      return;
    }

    this.rl.question(">> ", (input) => {
      const trimmed = input.trim();

      if (trimmed === "") {
        console.log("Silence. Dramatic, but not very productive.");
        return this.mainLoop();
      }

      this.handleCommand(trimmed);
      this.mainLoop();
    });
  }

  // Doodle - parse and route commands
  handleCommand(input) {
    const parts = input.split(" ");
    const command = parts[0].toLowerCase();
    const rest = parts.slice(1).join(" ");

    switch (command) {
      case "go":
        this.handleGo(rest);
        break;
      case "pick":
        this.handlePick(rest);
        break;
      case "inventory":
        this.player.showInventory();
        break;
      case "look":
        this.player.currentRoom.showDetails();
        break;
      case "use":
        this.handleUse(rest);
        break;
      case "answer":
        this.handleAnswer(rest);
        break;
      case "quit":
        console.log(
          "You leave the adventure. The world sighs in disappointment."
        );
        this.player.isAlive = false;
        break;
      default:
        console.log(
          "The universe tilts its head. It has no idea what that command means."
        );
    }
  }

  handleGo(directionRaw) {
    const direction = directionRaw.toLowerCase().trim();

    if (!direction) {
      console.log("Go where, exactly? Mind-reading is still in beta.");
      return;
    }

    // Puzzle (Locked Door)
    if (
      this.player.currentRoom.name === "Locked Door" &&
      direction === "east" &&
      !this.lockedDoorOpen
    ) {
      console.log(
        "You push the door. It does not care. Maybe a key would change its mood."
      );
      return;
    }

    this.player.move(direction, this.rooms);

    if (this.player.currentRoom.name === "Treasure Room") {
      console.log(
        "\nYou found the treasure room and earn eternal bragging rights. Game over!"
      );
      this.player.isAlive = false;
    }
  }

  handlePick(itemRaw) {
    const itemName = itemRaw.toLowerCase().trim();
    if (!itemName) {
      console.log("Pick what? Air? That's already taken.");
      return;
    }

    this.player.pickUp(itemName);
  }

  handleUse(itemRaw) {
    const itemName = itemRaw.toLowerCase().trim();

    if (!itemName) {
      console.log("Use what? Your imagination?");
      return;
    }

    // Puzzle - use rusty key at Locked Door
    if (
      (itemName === "rusty key" || itemName === "key") &&
      this.player.currentRoom.name === "Locked Door"
    ) {
      if (!this.player.inventory.includes("rusty key")) {
        console.log(
          "You pat your pockets. No key. Just lint and poor decisions."
        );
        return;
      }

      if (this.lockedDoorOpen) {
        console.log("The door is already unlocked. No need to overachieve.");
        return;
      }

      this.lockedDoorOpen = true;
      this.rooms["Locked Door"].exits.east = "Treasure Room";
      console.log(
        "You turn the rusty key. The lock clicks, the door swings open, and pretends it always liked you."
      );
      return;
    }

    console.log(
      `You wave the ${itemName} around. Nothing magical happens, sadly.`
    );
  }

  handleAnswer(answerRaw) {
    const answer = answerRaw.toLowerCase().trim();

    if (this.player.currentRoom.name !== "Riddle Room") {
      console.log(
        "You shout an answer into the void. The void is confused but respectful."
      );
      return;
    }

    if (!answer) {
      console.log("You answer with silence. Bold choice, but incorrect.");
      return;
    }

    if (answer === "shadow") {
      if (this.riddleSolved) {
        console.log("The wall text yawns. You already solved this one.");
        return;
      }

      this.riddleSolved = true;
      console.log(
        'The glowing text fades and a small token appears on the floor.\nYou got: "mysterious token".'
      );
      this.rooms["Riddle Room"].items.push("mysterious token");
    } else {
      console.log(
        "Close... if we were grading on imagination. The text stays unchanged."
      );
    }
  }
}

// Starting the Text Adv. Game
const game = new Game();
game.startGame();
