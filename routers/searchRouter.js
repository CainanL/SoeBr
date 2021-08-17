const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController')

//student
router.post('/searchStudent', searchController.simpleSearchStudent);
router.post('/deepSearchStudent', searchController.deepSearchStudent);

//employeer
router.post('/searchEmployeer', searchController.simpleSearchEmployeer);

//schedule
router.post('/searchSchedule', searchController.simpleSearchSchedule);
router.post('/deepSearchSchedule', searchController.deepSearchSchedule);

//events
router.post('/searchEvent', searchController.simpleSearchEvent);

//finances
router.post('/searchFinance', searchController.simpleSeachFinance);

//userClass
router.post('/searchUserClass', searchController.simpleSearchClass);
router.post('/deepSearchUserClass', searchController.deepSearchClass);

//WeeklySchedule
router.post('/searchWeeklySchedule', searchController.simpleSearchWeeklySchedule);

//contents
router.post('/searchContent', searchController.simpleSearchContent);


module.exports = router;