const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const dataUserAreaController = require('../controllers/dataUserAreaController');

//login, register, update and delet 
router.post('/login', userController.login);
router.post('/registerStudent', userController.registerStudent);
router.post('/registerEmployeer', userController.registerEmployeer);

router.delete('/removeStudent', userController.deleteUser);

router.post('/updateStudent', userController.editStudent);
router.post('/updateEmployeer', userController.editEmployeer);


//userArea
router.post('/userAreaData', dataUserAreaController.firstName);



module.exports = router;