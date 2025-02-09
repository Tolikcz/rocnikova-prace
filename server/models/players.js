const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, required: true},
    game: { type: String, required: true},
    hour: { type: String, required: true},
});

module.exports = mongoose.model("Player", schema);