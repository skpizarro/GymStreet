const mongoose = require('mongoose');

const {Schema} = mongoose;

const equipmentSchema = new Schema({
    name : String,
    bodyArea: String,
    muscles: [String],
    type: String,
    description: String
});

module.exports = mongoose.model('Equipment',equipmentSchema);
