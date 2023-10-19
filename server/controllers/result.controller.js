
const Result = require('../models/resultSchema.js');
const getResult = async(req,res) => {
    res.send("get all result")
}
const storeResult = async(req,res) => {
    res.send("post all result")
}
const dropResult = async(req,res) => {
    res.send("delete all result")
}



module.exports = {getResult, storeResult, dropResult};