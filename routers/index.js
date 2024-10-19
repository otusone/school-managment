const express = require('express');
const router = express.Router();


const superAdmin = require('./superAdmin');
router.use('/super-admin', superAdmin)

const adminSchool = require('./adminSchool');
router.use('/admin-school', adminSchool)

module.exports = router;
