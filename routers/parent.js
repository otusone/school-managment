const express = require('express');
const router = express.Router();
const {loginParent, parentProfile}=require("../controllers/parent")
const multer=require("multer");
const { parentAuth } = require('../middleware/auth');
const {viewTimetableByStudentId } = require('../controllers/timeTable');

const storage=multer.diskStorage({});
const upload=multer({storage});

router.post('/login',loginParent);
router.get('/my-profile',parentAuth,parentProfile );
router.get('/time-table/:studentId',parentAuth, viewTimetableByStudentId);

module.exports = router;


