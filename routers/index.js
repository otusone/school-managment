const express = require('express');
const router = express.Router();
const { getAllSection } = require('../controllers/section');
const { getAllClassCategories } = require('../controllers/classCategory');


const superAdmin = require('./superAdmin');
router.use('/super-admin', superAdmin)

const adminSchool = require('./adminSchool');
router.use('/admin-school', adminSchool);


const teacher = require('./teacher');
router.use('/teacher', teacher)

const student = require('./student');
router.use('/student', student)

const parent = require('./parent');
router.use('/parent', parent)

const section = require('./section');
router.use('/section', section)

const classes = require('./class');
router.use('/class', classes)

const subject = require('./subject');
router.use('/subject', subject)



// common
router.get('/all-class-category-list', getAllClassCategories);



module.exports = router;
