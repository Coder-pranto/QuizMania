const Question = require("../models/questionSchema");
const { questions, answers } = require("../database/data.js");

const getAllQuestion = async (req, res) => {
  try {
    const question = await Question.find();
    res.status(200).json( question ); 
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};

const createQuestion = async (req, res) => {
  try {
    await Question.insertMany({ questions, answers });
    res.status(201).json({ msg: 'Data Saved Successfully...!' }); 
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};

const deleteAllQuestion = async (req, res) => {
  try {
    await Question.deleteMany();
    res.status(200).json({ msg: 'Questions Deleted Successfully...!' }); 
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};

module.exports = { getAllQuestion, createQuestion, deleteAllQuestion };
