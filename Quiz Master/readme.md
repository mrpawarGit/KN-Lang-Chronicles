## 🕹️ Quiz Master 

### 🖥️ Running the Console Versions (Local Node.js)

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

###  Games Overview

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
