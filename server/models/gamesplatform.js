const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, required: true},
    developer: { type: String, required: true},
    year: { type: String, required: true},
});

module.exports = mongoose.model("Platform", schema);