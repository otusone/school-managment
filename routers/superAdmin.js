const express = require('express');
const { createSuperAdmin, loginSuperAdmin } = require('../controllers/superAdmin');
const { createAdminSchool, testAdmin } = require('../controllers/adminSchool');
const { superAdminAuth } = require('../middleware/auth');
const { validateAdminSchool } = require('../middleware/fieldValidation');
const router = express.Router();
const multer=require("multer");

const storage=multer.diskStorage({})

const upload=multer({storage})

// auth
router.post('/new-signup',createSuperAdmin);
router.post('/login',loginSuperAdmin);


// admin school
router.post('/onboard-new-admin-school',superAdminAuth,upload.single("logo"),validateAdminSchool, createAdminSchool);



module.exports = router;


