const express = require('express');
const { loginAdminSchool, getAllTeacher } = require('../controllers/adminSchool');
const { onboardTeacher, getTeacherDetails } = require('../controllers/teacher');
const { schoolAdminAuth } = require('../middleware/auth');
const multer=require("multer");
const { addNewSubject, getAllSubjects } = require('../controllers/subject');
const { createTimetable, updateTimetableExceptions } = require('../controllers/timeTable');
const { onboardStudent, viewStudentDetails, getAllStudents } = require('../controllers/student');
const { onboardParent, viewParentDetails } = require('../controllers/parent');

const router = express.Router();


const storage=multer.diskStorage({});
const upload=multer({storage});

router.post('/signup',);
router.post('/login',loginAdminSchool);


router.post('/add-subject',schoolAdminAuth,addNewSubject);

// teacher
router.post('/onboard-new-teacher',schoolAdminAuth, upload.single("avatar"),onboardTeacher);
router.get('/get-all-teacher',schoolAdminAuth,getAllTeacher);
router.get('/get-teacher-details/:teacherId',schoolAdminAuth,getTeacherDetails);

// student
router.post('/onboard-new-student',schoolAdminAuth, upload.single("avatar"),onboardStudent);
router.get('/get-all-student',schoolAdminAuth,getAllStudents);
router.get('/get-student-details/:studentId',schoolAdminAuth,viewStudentDetails);


// parent
router.post('/onboard-new-parent',schoolAdminAuth, upload.single("avatar"),onboardParent);
router.get('/get-all-parent',schoolAdminAuth);
router.get('/get-parent-details/:parentId',schoolAdminAuth,viewParentDetails);

// time table
router.post('/create-new-time-table',schoolAdminAuth,createTimetable);
router.patch('/update-time-table-for-particular-date',schoolAdminAuth,updateTimetableExceptions);

module.exports = router;


