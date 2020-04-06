const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');


//Rutas. 
router.get('/',tasksController.taskFindAll);
router.get('/:id', tasksController.taskFindById);
router.post('/', tasksController.taskCreate);
router.put('/:id', tasksController.taskUpdate);
router.delete('/:id', tasksController.taskDelete);

module.exports = router;
