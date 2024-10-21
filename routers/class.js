const express = require('express');
const { getAllClasses } = require('../controllers/class');
const router = express.Router();



router.get('/all-list', getAllClasses);




module.exports = router;


