const express = require('express');
const router = express.Router();

const user = require('../controllers/user');

router.get('/validateUser', (req, res) => {
    user.validateUser(req, res);
})

router.get('/withdrawFunds', (req, res) => {
    user.withdrawFunds(req, res);
})

module.exports = router;