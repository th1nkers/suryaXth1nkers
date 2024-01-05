const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const freelanceUserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    field: { type: [String], required: true },
    outlook: { type: String, required: true },
    exampleWebLink: { type: [String] },
    targetAudience: { type: String, required: true },
    contentGoogleDrive: { type: String },
    telegramId: { type: String, required: true },
    publishAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('FreelanceUser', freelanceUserSchema);