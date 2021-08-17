const express = require('express');
const router = express.Router();
const removeControllers = require('../controllers/removeController');

//schedule
router.delete('/schedule', removeControllers.removeSchedule);
//events
router.delete('/events', removeControllers.removeEvents);
//class
router.delete('/removeUserClass', removeControllers.removeUserClass)
//content
router.delete('/content', removeControllers.removeContent)


module.exports = router;