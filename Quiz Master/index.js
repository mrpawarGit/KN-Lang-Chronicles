// Entry Point - Starting Game

const QuizMaster = require("./QuizMaster");
const questionBank = require("./data/questionBank");

const quiz = new QuizMaster(questionBank);
quiz.start();
