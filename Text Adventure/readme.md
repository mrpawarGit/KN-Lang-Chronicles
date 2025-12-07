## 🕹️ Text Adventure 

### 🖥️ Running the Console Versions (Local Node.js)

```bash
cd Text Adventure/In JS
node game.js
```

You’ll see something like:

```text
Welcome to the Text Adventure!
What is your name?
```

Then you can start typing commands like:

```text
go north
pick crumpled note
go north
pick rusty key
go west
use key
go east
```
---

###  Games Overview

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
