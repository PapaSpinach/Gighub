const { Schema, model } = require('mongoose');

const jobsSchema = new Schema({
    title: {type: String, required: true},

    postedBy: {type: String, required: true},
    description: {type: String, required: true},
    hourlyPay: Number,
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: true}

});

const jobs = model('jobs', jobsSchema);
module.exports = jobs;