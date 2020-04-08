const express = require('express');
const router = express.Router();
const  userControllers = require('../controllers/userControllers');

/* GET users listing. */
router.get('/', userControllers.userFindAll);
router.get('/:name', userControllers.userFindByName);
router.get('/:id', userControllers.userFindById);
router.post('/', userControllers.userCreate);
router.delete('/id:',userControllers.userDelete);
module.exports = router;
