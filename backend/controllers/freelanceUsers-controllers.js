const { validationResult } = require('express-validator');
const FreelanceUser = require('../models/freelanceUsers');
const HttpError = require('../models/http-error');

const workUp = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { name, email, field, outlook, exampleWebLink, targetAudience, contentGoogleDrive, telegramId } = req.body;

    let existingWorkUp;
    try {
        existingWorkUp = await FreelanceUser.findOne({ email: email });
    } catch (err) {
        const error = new HttpError(
            'Server error occurred, please try again later.',
            500
        );
        return next(error);
    }

    if (existingWorkUp) {
        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

        if (existingWorkUp.publishAt.getTime() < threeDaysAgo.getTime()) {
            existingWorkUp.name = name;
            existingWorkUp.field = field; // Assuming you want to update the field array
            existingWorkUp.outlook = outlook;
            existingWorkUp.exampleWebLink = exampleWebLink;
            existingWorkUp.targetAudience = targetAudience;
            existingWorkUp.contentGoogleDrive = contentGoogleDrive;
            existingWorkUp.telegramId = telegramId;
            existingWorkUp.publishAt = new Date();

            try {
                await existingWorkUp.save();
            } catch (err) {
                const error = new HttpError('Updating info failed, please try again.', 500);
                return next(error);
            }

            return res.status(200).json({ user: existingWorkUp.toObject({ getters: true }) });
        } else {
            const error = new HttpError(
                'You had already applied, please try again later after 3 days of no response from the applied date.',
                422
            );
            return next(error);
        }
    }

    const createdWorkUp = new FreelanceUser({
        name,
        email,
        field,
        outlook,
        exampleWebLink,
        targetAudience,
        contentGoogleDrive,
        telegramId
    });

    try {
        await createdWorkUp.save();
    } catch (err) {
        const error = new HttpError(
            'Sending info failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ freelanceUser: createdWorkUp.toObject({ getters: true }) });
}

exports.workUp = workUp;
