const express = require('express');
const router = express.Router();

// const initialCount = require('./previousUserId')
// router.use('/previous',initialCount)

const admin = require('./admin');
router.use('/admin', admin)

module.exports = router;
