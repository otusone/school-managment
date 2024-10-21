const express = require('express');
const { getAllSubjects } = require('../controllers/subject');
const router = express.Router();


router.get('/all-subject-list', getAllSubjects);


module.exports = router;


