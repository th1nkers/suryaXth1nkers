const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');

const router = express.Router();

router.get('/',usersController.getWebEx)

router.post('/contactup',
    [
        check('name')
            .not()
            .isEmpty(),
        check('email')
            .normalizeEmail()
            .isEmail(),
        check('reason')
            .not()
            .isEmpty(),
    ],
    usersController.contactUp);

module.exports = router;