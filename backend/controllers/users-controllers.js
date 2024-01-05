const { validationResult } = require('express-validator');

const User = require('../models/user');

const HttpError = require('../models/http-error');


const contactUp = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { name, email, reason } = req.body;

    let existingContactUp;
    try {
        existingContactUp = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError(
            'Server error occured, please try again later.',
            500
        );
        return next(error);
    }


    if (existingContactUp) {

        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

        if (existingContactUp.publishAt.getTime() < threeDaysAgo.getTime()) {

            existingContactUp.name = name;
            existingContactUp.reason = reason;
            existingContactUp.publishAt = new Date();

            try {
                await existingContactUp.save();
            } catch (err) {
                const error = new HttpError('Sending info failed, please try again.', 500);
                return next(error);
            }

            return res.status(201).json({ user: existingContactUp.toObject({ getters: true }) });
        } else {
            const error = new HttpError(
                'You had already applied, please try again later after 3 days of no response from the applied date.',
                422
            );
            return next(error);
        }
    }

    const createdContactUp = new User({
        name,
        email,
        reason,
    })

    try {
        await createdContactUp.save();
    } catch (err) {
        const error = new HttpError(
            'Sending info failed, please try again.',
            500
        );
        return next(error);
    }

    res
        .status(201)
        .json({createdContactUp})

}

exports.contactUp = contactUp;