const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const usersRoutes = require('./routes/users-routes');
const freelanceUsersRoutes = require('./routes/freelanceUsers-routes');

const HttpError = require('./models/http-error');
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

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

app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.code || 500).json({ message: error.message || 'An unknown error occurred!' });
});


mongoose.
    connect(MONGO_URL)
    .then(() => {
        app.listen(5000);
    })
    .catch(err => console.log(err));

