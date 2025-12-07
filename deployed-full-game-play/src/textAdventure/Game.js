const Player = require("./Player");
const Room = require("./Room");

// Text Adventure Game

class TextAdventureGame {
  constructor() {
    this.player = null;
    this.rooms = {};
    this.lockedDoorOpen = false;
    this.riddleSolved = false;
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

  setupWorld() {
    const entrance = new Room(
      "Entrance",
      "You stand at the entrance of a strange building. The air smells like unfinished features."
    );
    entrance.exits = { north: "Main Hall" };

    const mainHall = new Room(
      "Main Hall",
      "A wide hall with flickering lights. A crumpled note lies on the floor."
    );
    mainHall.items.push("crumpled note");
    mainHall.exits = {
      south: "Entrance",
      north: "Storage",
      west: "Locked Door",
      east: "Riddle Room",
    };

    const storage = new Room(
      "Storage",
      "A tiny room full of dusty boxes. Something shiny peeks from under a box."
    );
    storage.items.push("rusty key");
    storage.exits = { south: "Main Hall" };

    const lockedDoor = new Room(
      "Locked Door",
      "A heavy wooden door with a stubborn keyhole."
    );
    lockedDoor.exits = { south: "Main Hall" };

    const riddleRoom = new Room(
      "Riddle Room",
      'The room is dark except for glowing text on the wall:\n"I follow you all day, but disappear at night. Who am I?"'
    );
    riddleRoom.exits = { west: "Main Hall" };

    const treasureRoom = new Room(
      "Treasure Room",
      "You step into a bright room filled with glowing monitors and coffee mugs. You made it!"
    );
    treasureRoom.exits = { west: "Locked Door" };

    this.rooms["Entrance"] = entrance;
    this.rooms["Main Hall"] = mainHall;
    this.rooms["Storage"] = storage;
    this.rooms["Locked Door"] = lockedDoor;
    this.rooms["Riddle Room"] = riddleRoom;
    this.rooms["Treasure Room"] = treasureRoom;
  }

  startText() {
    this.stage = "askName";
    this.log("=== Text Adventure Game ===");
    this.log("Before we start, what's your name?");
    return this.flush();
  }

  processCommand(input) {
    const cmd = (input || "").trim();

    if (this.stage === "askName") {
      if (!cmd) {
        this.log("Please enter a name.");
        return this.flush();
      }
      this.player = new Player(cmd);
      this.setupWorld();
      this.player.currentRoom = this.rooms["Entrance"];
      this.stage = "playing";

      this.log(`Nice to meet you, ${this.player.name}.`);
      this.log("Your adventure begins...");
      this.log(
        "\nCommands: go <direction>, pick <item>, inventory, look, use <item>, answer <word>, quit"
      );
      this.log(this.player.currentRoom.getDetails());
      return this.flush();
    }

    if (this.stage === "ended") {
      this.log("This game is over. Return to menu.");
      return this.flush();
    }

    if (!cmd) {
      this.log("Silence. Dramatic, but not helpful.");
      return this.flush();
    }

    const parts = cmd.split(" ");
    const action = parts[0].toLowerCase();
    const rest = parts.slice(1).join(" ");

    switch (action) {
      case "go":
        this.handleGo(rest);
        break;
      case "pick":
        this.handlePick(rest);
        break;
      case "inventory":
        this.log(this.player.getInventoryText());
        break;
      case "look":
        this.log(this.player.currentRoom.getDetails());
        break;
      case "use":
        this.handleUse(rest);
        break;
      case "answer":
        this.handleAnswer(rest);
        break;
      case "quit":
        this.log("You walk away from the adventure. Game over.");
        this.stage = "ended";
        this.ended = true;
        break;
      default:
        this.log("The universe tilts its head. It doesn't know that command.");
    }

    return this.flush();
  }

  handleGo(directionRaw) {
    const direction = (directionRaw || "").toLowerCase().trim();
    if (!direction) {
      this.log("Go where? Be specific.");
      return;
    }

    if (
      this.player.currentRoom.name === "Locked Door" &&
      direction === "east" &&
      !this.lockedDoorOpen
    ) {
      this.log("The door refuses to open. Maybe a key would help.");
      return;
    }

    const moveResult = this.player.move(direction, this.rooms);
    this.log(moveResult);

    if (this.player.currentRoom.name === "Treasure Room") {
      this.log("\n🎉 You found the treasure room! You win!");
      this.stage = "ended";
      this.ended = true;
    }
  }

  handlePick(itemRaw) {
    const item = (itemRaw || "").toLowerCase().trim();
    if (!item) {
      this.log("Pick what?");
      return;
    }
    const res = this.player.pickUp(item);
    this.log(res);
  }

  handleUse(itemRaw) {
    const item = (itemRaw || "").toLowerCase().trim();
    if (!item) {
      this.log("Use what?");
      return;
    }

    if (
      (item === "rusty key" || item === "key") &&
      this.player.currentRoom.name === "Locked Door"
    ) {
      if (!this.player.inventory.includes("rusty key")) {
        this.log("You don't have the key.");
        return;
      }
      if (this.lockedDoorOpen) {
        this.log("The door is already unlocked.");
        return;
      }
      this.lockedDoorOpen = true;
      this.rooms["Locked Door"].exits.east = "Treasure Room";
      this.log("You unlock the door. It creaks open.");
      return;
    }

    this.log("Nothing happens.");
  }

  handleAnswer(answerRaw) {
    const answer = (answerRaw || "").toLowerCase().trim();

    if (this.player.currentRoom.name !== "Riddle Room") {
      this.log("There is no riddle here.");
      return;
    }

    if (!answer) {
      this.log("You answer with silence. Not correct.");
      return;
    }

    if (answer === "shadow") {
      if (this.riddleSolved) {
        this.log("You already solved this riddle.");
        return;
      }
      this.riddleSolved = true;
      this.log("Correct! The wall glows briefly, impressed.");
    } else {
      this.log("Wrong answer. Try again.");
    }
  }
}

module.exports = TextAdventureGame;
