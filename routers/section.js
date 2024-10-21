const express = require('express');
const { getAllSection } = require('../controllers/section');
const router = express.Router();



router.get('/all-list', getAllSection);




module.exports = router;


