const router = require('express').Router()
const {getAllQuestion, createQuestion, deleteAllQuestion} = require('../controllers/questions.controller');
const {getResult, storeResult, dropResult} = require('../controllers/result.controller');

router.route('/questions').get(getAllQuestion).post(createQuestion).delete(deleteAllQuestion);
router.route('/result').get(getResult).post(storeResult).delete(dropResult);



module.exports  = router