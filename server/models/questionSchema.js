const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const questionModel = Schema({
   questions: { type: Array, default: [] },
   answers: { type: Array, default: [] },
   createAt: { type: Date, default: Date.now }
});

const Question = model("Question", questionModel);

module.exports = Question;