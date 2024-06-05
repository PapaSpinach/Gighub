const { Schema, model } = require('mongoose');

const contractorsSchema = new Schema({
    fullName: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    passWord: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phoneNumber: {type: Number, required: true},
    specialties: [],
    hourlyRate:  {type: Number, default: 25},
    ratings: []
});

const contractors = model('contractors', contractorsSchema);
module.exports = contractors;