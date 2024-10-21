const express = require('express');
const {loginTeacher, getTeacherProfile, getTimetableByTeacher } = require('../controllers/teacher');
const router = express.Router();

const multer=require("multer");
const { teacherAuth } = require('../middleware/auth');

const storage=multer.diskStorage({});
const upload=multer({storage});

router.post('/login',loginTeacher);
router.get('/my-profile',teacherAuth, getTeacherProfile);
router.get('/my-time-table',teacherAuth, getTimetableByTeacher);




module.exports = router;


