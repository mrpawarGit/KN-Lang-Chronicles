# KN-Lang Chronicles 🧠🎮

This repository contains my solutions for the **KNNX India – KN-Lang Chronicles** assignment, implemented in two styles:

1. ✅ **Original KN-Lang pseudo language** (`.kn` + human-readable `.txt`)
2. ✅ **Node.js implementations**:
   - Pure **console-based** games (run with `node`)
   - A **web version** using **Node.js + Express + HTML** so both games can be played in the browser (and deployed on Render)

---

## 🔍 Project Structure

```text
KN-Lang-Chronicles
│   README.md
│
├───Quiz Master                    # Assignment 2: Quiz Master
│   │   QuizMaster.kn              # KN-Lang script
│   │   QuizMaster.txt             # Human-readable flow / explanation
│   │
│   └───In JS                      # Pure Node.js console implementation
│       │   index.js
│       │   Player.js
│       │   Question.js
│       │   QuizMaster.js
│       │
│       └───data
│               questionBank.js
│
└───Text Adventure                 # Assignment 1: Text Adventure
    │   TextAdv.kn                 # KN-Lang script
    │   TextAdv.txt                # Human-readable flow / explanation
    │
    └───In JS                      # Pure Node.js console implementation
            game.js
            player.js
            room.js
```

## 🌐 Deployed web version
```            
├───deployed-full-game-play        # Web version: Node.js + Express + HTML (for Render deployment)
│   │   .gitignore
│   │   package-lock.json
│   │   package.json
│   │   server.js
│   │
│   ├───public
│   │       index.html             # Simple console-style UI in browser
│   │
│   └───src
│       │   gameHub.js             # Main menu hub: choose which game to play
│       │
│       ├───quizMaster             # Quiz Master (web version logic)
│       │   │   index.js
│       │   │   Player.js
│       │   │   Question.js
│       │   │   QuizMaster.js
│       │   │
│       │   └───data
│       │           questionBank.js
│       │
│       └───textAdventure          # Text Adventure (web version logic)
│               Game.js
│               Player.js
│               Room.js
│
````

---

## 🕹️ Games Overview

### 1. Text Adventure 

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

### 2. Quiz Master 

* An interactive **quiz game** with:

  * Name input
  * Category selection: `Science`, `History`, `Fun Facts`
  * Difficulty selection: `Easy`, `Medium`, `Hard`
  * Scoring with different positive/negative points per difficulty
  * Final score + “rank” comment at the end

**Scoring rules (by difficulty):**

* **Easy:** +5 for correct / −2 for wrong
* **Medium:** +10 for correct / −5 for wrong
* **Hard:** +15 for correct / −7 for wrong

**OOP concepts used:**

* `Player` Squad: holds `name` and `score`, with `updateScore()`
* `Question` Squad: encapsulates `text`, `category`, `difficulty`, `correctAnswer`
* `QuizMaster` Squad:

  * Handles category & difficulty selection
  * Runs question loop
  * Evaluates answers
  * Applies scoring and final feedback

---

## 🖥️ Running the Console Versions (Local Node.js)

You can run **each game separately** using Node.js directly.

### 1️⃣ Run Text Adventure (console)

```bash
cd Text Adventure/In\ JS
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

### 2️⃣ Run Quiz Master (console)

```bash
cd "Quiz Master/In JS"
node index.js
```

Flow:

1. Enter your name
2. Choose category (`1/2/3`)
3. Choose difficulty (`1/2/3`)
4. Answer 10 questions
5. See your final score and rank

---

## 🌐 Web Version – Play Both Games in Browser

The `deployed-full-game-play` folder contains a **Node.js + Express + HTML** version.

When you open it in the browser, you get:

* A **main menu**:

  * `1. Text Adventure Game`
  * `2. Quiz Master`
  * `3. Exit`
* You type commands into a single input box (like a fake console).
* When a game finishes, it returns to the main menu so you can choose again.

### 📁 Structure (web version)

Inside `deployed-full-game-play`:

```text
deployed-full-game-play/
│   package.json       # Express server + scripts
│   server.js          # Starts Express, exposes /start and /command
│
├── public/
│   └── index.html     # Simple console-style UI (input + output)
│
└── src/
    │   gameHub.js     # GameHub: routes input to Text Adventure or Quiz Master
    │
    ├── textAdventure/
    │   ├── Game.js    # Web version Text Adventure engine (state machine)
    │   ├── Player.js
    │   └── Room.js
    │
    └── quizMaster/
        ├── index.js        # Wrapper for GameHub
        ├── QuizMaster.js   # Quiz engine with stages (name, category, difficulty, questions)
        ├── Player.js
        ├── Question.js
        └── data/
            └── questionBank.js
```

---

## ▶️ Run Web Version Locally

From the **root repo**:

```bash
cd deployed-full-game-play
npm install
npm start
```

Then open in your browser:

```text
http://localhost:3000
```

You’ll see the **KN-Lang Games Hub** with a console-style interface.

Example usage:

```text
=== KN-Lang Games Hub ===
1. Text Adventure Game
2. Quiz Master
3. Exit
Enter 1, 2, or 3:
> 1
```

Then you play the text adventure entirely in the browser.
When you finish the game, it returns to the main menu so you can select `2` and try the Quiz Master.

---

## 🧱 Tech Stack & Concepts

* **Languages:**

  * JavaScript (Node.js)
  * Simple HTML + inline CSS
  * KN-Lang (assignment-specific pseudo-language)

* **Backend:**

  * Node.js
  * Express (for the web playable version)

* **Frontend:**

  * One HTML file (`index.html`)
  * A minimal fake “console” built with:

    * A `<div>` for output
    * A single `<input>` field for commands
    * `fetch` calls to `/start` and `/command`

* **Design / OOP Concepts:**

  * Classes (`Squads`) for `Player`, `Room`, `GameManager`, `Question`, `QuizMaster`
  * Encapsulation of behaviour in each class
  * Clear separation between:

    * Core game logic (in `src/`)
    * IO layer (console or browser via Express)

---

## 📚 Files Mapping to Assignment

* **Text Adventure (Assignment 1):**

  * KN-Lang: `Text Adventure/TextAdv.kn`
  * Explanation: `Text Adventure/TextAdv.txt`
  * Local JS: `Text Adventure/In JS/*.js`
  * Web version: `deployed-full-game-play/src/textAdventure/*.js`

* **Quiz Master (Assignment 2):**

  * KN-Lang: `Quiz Master/QuizMaster.kn`
  * Explanation: `Quiz Master/QuizMaster.txt`
  * Local JS: `Quiz Master/In JS/*.js`
  * Web version: `deployed-full-game-play/src/quizMaster/*.js`

---

