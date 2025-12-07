const express = require("express");
const path = require("path");
const GameHub = require("./src/gameHub");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let hub = null;

// Start or restart
app.get("/start", (req, res) => {
  hub = new GameHub();
  const output = hub.start();
  res.json({ output });
});

// Process a user command
app.post("/command", (req, res) => {
  if (!hub) {
    hub = new GameHub();
    hub.start();
  }
  const command = (req.body && req.body.command) || "";
  const output = hub.processCommand(command);
  res.json({ output });
});

// main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
