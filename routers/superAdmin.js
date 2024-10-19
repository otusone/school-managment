const express = require('express');
const { createSuperAdmin, loginSuperAdmin } = require('../controllers/superAdmin');
const { createAdminSchool } = require('../controllers/adminSchool');
const { superAdminAuth } = require('../middleware/auth');
const { validateAdminSchool } = require('../middleware/fieldValidation');
const router = express.Router();

// auth
router.post('/new-signup',createSuperAdmin);
router.post('/login',loginSuperAdmin);


// admin school
router.post('/onboard-new-admin-school',superAdminAuth,validateAdminSchool, createAdminSchool);



module.exports = router;


