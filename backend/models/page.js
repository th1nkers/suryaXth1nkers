const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HomeSchema = new Schema({
    websiteEx: [
        {
            header: { type: String, required: true },
            links: { type: String, required: true }
        }
    ]
})

const pageSchema = new Schema({
    Home: [HomeSchema],
});


module.exports = mongoose.model('Page', pageSchema);