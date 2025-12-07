// This Squad represents each room in the world.
// The Room Squad - stores descriptions, items, and available exits.
class Room {
  constructor(name, description) {
    // Quarks
    this.name = name;
    this.description = description;
    this.items = [];
    this.exits = {};
  }

  // Doodle - show description, items, exits
  showDetails() {
    console.log("\n=== " + this.name + " ===");
    console.log(this.description);

    if (this.items.length > 0) {
      console.log("Items here: " + this.items.join(", "));
    } else {
      console.log("Nothing useful lying around.");
    }

    const exits = Object.keys(this.exits);
    if (exits.length > 0) {
      console.log("Exits: " + exits.join(", "));
    }
  }
}

module.exports = Room;
