const express = require('express');
const router = express.Router();

const multer=require("multer");
const { studentAuth } = require('../middleware/auth');
const { loginStudent, studentProfile } = require('../controllers/student');
const { studentTimeTable } = require('../controllers/timeTable');

const storage=multer.diskStorage({});
const upload=multer({storage});

router.post('/login',loginStudent);
router.get('/my-profile',studentAuth,studentProfile );
router.get('/my-time-table',studentAuth,studentTimeTable );


module.exports = router;


