const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');


/* GET users listing. */
router.get('/',tasksController.taskFindAll);
router.get('/:id', tasksController.taskFindById);




module.exports = router;
