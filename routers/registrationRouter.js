const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

//schedule
router.post('/registerSchedule', registrationController.registerSchedule);
router.post('/registerEvents', registrationController.registerEvent);
router.post('/registerMessage', registrationController.registerMesseger);
router.post('/registerFinance', registrationController.registerFinance);
router.post('/registerClass', registrationController.registerClass);
router.post('/registerWeeklySchedule', registrationController.registerWeeklySchedule);
router.post('/registerContent', registrationController.registerContent);

module.exports = router;