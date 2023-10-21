const Results = require('../models/resultSchema');

const getAllResults = async (req, res) => {
  try {
    const resultData = await Results.find();
    res.status(200).json(resultData);
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};

const storeResult = async (req, res) => {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username || !result) {
      res.status(400).json({ error: 'Data Not Provided' });
    } else {
      const data = await Results.create({ username, result, attempts, points, achieved });
      res.status(201).json({ msg: 'Result Saved Successfully', data }); 
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};

const dropResults = async (req, res) => {
  try {
    await Results.deleteMany();
    res.status(200).json({ msg: 'Results Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};

module.exports = { getAllResults, storeResult, dropResults };
