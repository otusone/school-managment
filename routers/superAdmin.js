const express = require('express');
const { createSuperAdmin, loginSuperAdmin, addSection } = require('../controllers/superAdmin');
const { createAdminSchool } = require('../controllers/adminSchool');
const { superAdminAuth } = require('../middleware/auth');
const { validateAdminSchool } = require('../middleware/fieldValidation');
const router = express.Router();
const multer=require("multer");
const { addNewSubject } = require('../controllers/subject');
const { addClassCategory } = require('../controllers/classCategory');

const storage=multer.diskStorage({})

const upload=multer({storage})

// auth
router.post('/new-signup',createSuperAdmin);
router.post('/login',loginSuperAdmin);


// common
router.post('/add-section',superAdminAuth,addSection);
router.post('/add-class-category',superAdminAuth,addClassCategory);
router.post('/add-subject',superAdminAuth,addNewSubject);

// admin school
router.post('/onboard-new-admin-school',superAdminAuth,upload.single("logo"),validateAdminSchool, createAdminSchool);



module.exports = router;


