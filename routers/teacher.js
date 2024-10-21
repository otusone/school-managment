const express = require('express');
const {loginTeacher, getTeacherProfile } = require('../controllers/teacher');
const router = express.Router();

const multer=require("multer");
const { teacherAuth } = require('../middleware/auth');

const storage=multer.diskStorage({});
const upload=multer({storage});

router.post('/login',loginTeacher);
router.get('/my-profile',teacherAuth, getTeacherProfile);




module.exports = router;


