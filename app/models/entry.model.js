var mongoose = require('mongoose');
//const educationObj = require('./education.model.js');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    sunday: {
        type: Number,
        default: 0
    },
    monday: {
        type: Number,
        default: 0
    },
    tuesday: {
        type: Number,
        default: 0
    },
    wednesday: {
        type: Number,
        default: 0
    },
    thursday: {
        type: Number,
        default: 0
    },
    friday: {
        type: Number,
        default: 0
    },
    saturday: {
        type: Number,
        default: 0
    },
    status : {
        type: String,
        default: "pending"
    },
    weekNumber:{
        type:Number,
        required: true
    }
}, { timestamps: true }
);

module.exports = mongoose.model('Entry', entrySchema);
