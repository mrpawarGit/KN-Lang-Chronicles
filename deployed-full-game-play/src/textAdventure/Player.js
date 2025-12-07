// Squad Player - handles name, inventory, current room
class Player {
  constructor(name) {
    this.name = name || "Unnamed Hero";
    this.inventory = [];
    this.currentRoom = null;
  }

  pickUp(itemName) {
    if (!this.currentRoom) return "You are nowhere.";

    const index = this.currentRoom.items.indexOf(itemName);
    if (index === -1) {
      return `There is no "${itemName}" here.`;
    }

    this.currentRoom.items.splice(index, 1);
    this.inventory.push(itemName);
    return `You picked up the ${itemName}. Confidence level +10.`;
  }

  move(direction, rooms) {
    if (!this.currentRoom) return "You are lost in the void.";

    const nextRoomName = this.currentRoom.exits[direction];
    if (!nextRoomName) {
      return "You walk confidently into a wall. Try another direction.";
    }

    const nextRoom = rooms[nextRoomName];
    if (!nextRoom) {
      return "That direction feels unfinished. Maybe the dev forgot it.";
    }

    this.currentRoom = nextRoom;
    return this.currentRoom.getDetails();
  }

  getInventoryText() {
    if (this.inventory.length === 0) {
      return "Your pockets are empty.";
    }
    return "You are carrying: " + this.inventory.join(", ");
  }
}

module.exports = Player;
