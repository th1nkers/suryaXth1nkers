const express = require('express');
const { check } = require('express-validator');

const freeLanceUserController = require('../controllers/freelanceUsers-controllers.js');

const router = express.Router();

router.post('/workup',
    [
        check('name').not().isEmpty(),
        check('email').normalizeEmail().isEmail(),
        check('field').isArray().not().isEmpty(),
        check('outlook').not().isEmpty(),
        check('targetAudience').not().isEmpty(),
        check('telegramId').not().isEmpty(),
    ],
    freeLanceUserController.workUp);

module.exports = router;