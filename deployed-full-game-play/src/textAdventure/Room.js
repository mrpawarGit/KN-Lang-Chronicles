// Squad Room - each room has name, description, items, exits

class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.items = [];
    this.exits = {};
  }

  getDetails() {
    let lines = [];
    lines.push(`\n=== ${this.name} ===`);
    lines.push(this.description);

    if (this.items.length > 0) {
      lines.push("Items here: " + this.items.join(", "));
    } else {
      lines.push("Nothing useful lying around.");
    }

    const exits = Object.keys(this.exits);
    if (exits.length > 0) {
      lines.push("Exits: " + exits.join(", "));
    }
    return lines.join("\n");
  }
}

module.exports = Room;
