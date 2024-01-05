const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users-routes');
const freelanceUsersRoutes = require('./routes/freelanceUsers-routes');

const HttpError = require('./models/http-error');
const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://suryasingh11112003:AbzBShZP9GhZSJBx@cluster0.bvgnxyd.mongodb.net/suryaXth1nkers?retryWrites=true&w=majority'

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.use('/api/users', usersRoutes);
app.use('/api/freelance-service', freelanceUsersRoutes);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
})

app.use((error, req, res, next) => {

    if (req.file) {
        fs.unlink(req.file.path, err => {
            console.log(err);
        });
    };

    if (res.headerSent) return next(error);

    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
});


mongoose.
    connect(MONGO_URL)
    .then(() => {
        app.listen(5000);
    })
    .catch(err=>console.log(err));

