## Quiz Master 

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

### 🕹️ Games Overview

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
