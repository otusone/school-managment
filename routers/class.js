const express = require('express');
const { getAllClasses } = require('../controllers/class');
const router = express.Router();
const { schoolAdminAuth } = require('../middleware/auth');



router.get('/all-list',schoolAdminAuth, getAllClasses);




module.exports = router;


