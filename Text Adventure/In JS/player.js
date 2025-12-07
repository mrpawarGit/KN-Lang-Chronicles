// PLayer Squad - handles things like movement, inventory, and interaction
class Player {
  constructor(name) {
    // Quarks (variables)
    this.name = name || "Unnamed Hero";
    this.inventory = [];
    this.currentRoom = null;
    this.isAlive = true;
  }

  // Doodle - pick up an item (if exists)
  pickUp(itemName) {
    if (!this.currentRoom) return;

    const index = this.currentRoom.items.indexOf(itemName);

    if (index === -1) {
      console.log(`There is no "${itemName}" here. Maybe imagine harder?`);
      return;
    }

    this.currentRoom.items.splice(index, 1);
    this.inventory.push(itemName);
    console.log(`You picked up the ${itemName}. Confidence level +10.`);
  }

  // Doodle - move to another room / direction (if exists)
  move(direction, rooms) {
    if (!this.currentRoom) return;

    const nextRoomName = this.currentRoom.exits[direction];

    if (!nextRoomName) {
      console.log(
        "You walk confidently in that direction... straight into nothing. Try another way."
      );
      return;
    }

    const nextRoom = rooms[nextRoomName];
    if (!nextRoom) {
      console.log(
        "That path feels unfinished. Maybe the developer forgot that room."
      );
      return;
    }

    this.currentRoom = nextRoom;
    this.currentRoom.showDetails();
  }

  // Doodle - show what's in inventory
  showInventory() {
    if (this.inventory.length === 0) {
      console.log("Your pockets are as empty as your weekend plans.");
    } else {
      console.log("You are carrying: " + this.inventory.join(", "));
    }
  }
}

module.exports = Player;
