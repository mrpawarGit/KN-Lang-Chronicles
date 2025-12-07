## 🕹️ Games Overview

###  Text Adventure 

* A small **console-based adventure game**.
* You move between rooms, pick up items, and solve simple puzzles.
* Commands supported:

  * `go <direction>` – move between rooms (e.g. `go north`)
  * `pick <item>` – pick up items (e.g. `pick rusty key`)
  * `inventory` – see what you’re carrying
  * `look` – re-print current room description
  * `use <item>` – use items (e.g. `use key` at the locked door)
  * `answer <word>` – answer the riddle (e.g. `answer shadow`)
  * `quit` – exit the game

**OOP concepts used:**

* `Player` Squad (class): name, inventory, current room, actions
* `Room` Squad (class): description, items, exits
* `Game`/GameManager Squad: sets up world, runs loop, parses commands
* Encapsulation of behaviour inside each class (Squad), matching KN-Lang’s spirit.

---
