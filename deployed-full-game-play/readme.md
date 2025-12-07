# Deployed Full Game

### 📁 Structure (web version)

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
