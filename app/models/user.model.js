var mongoose = require('mongoose');
//const educationObj = require('./education.model.js');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
