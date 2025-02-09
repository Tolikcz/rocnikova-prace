const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, required: true},
    power: { type: String, required: true},
    fuel: { type: String, required: true},
});

module.exports = mongoose.model("Engine", schema);