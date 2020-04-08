const express = require('express');
const router = express.Router();
const  userControllers = require('../controllers/userControllers');

/* GET users listing. */
router.get('/', userControllers.userFindAll);
router.get('/nombre/:name', userControllers.userFindByName);
router.get('/id/:id', userControllers.userFindById);
router.post('/', userControllers.userCreate);
router.put('/:id', userControllers.userUpdate);
router.delete('/id:',userControllers.userDelete);

module.exports = router;
