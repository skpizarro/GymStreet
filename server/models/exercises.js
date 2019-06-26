const mongoose = require('mongoose');
const {Schema} = mongoose;

const exerciseSchema = new Schema({
    name:String,
    repetitions:Number,
    series:Number,
    duration:String
});

module.exports = mongoose.model('Exercise',exerciseSchema);