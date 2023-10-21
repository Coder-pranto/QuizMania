const router = require('express').Router()
const {getAllQuestion, createQuestion, deleteAllQuestion} = require('../controllers/questions.controller');
const {getAllResults, storeResult, dropResults} = require('../controllers/result.controller');

router.route('/questions').get(getAllQuestion).post(createQuestion).delete(deleteAllQuestion);
router.route('/result').get(getAllResults).post(storeResult).delete(dropResults);



module.exports  = router