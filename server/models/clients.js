const { Schema, model } = require('mongoose');

const clientsSchema = new Schema({
    fullName: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: true}

});

const clients = model('clients', clientsSchema);
module.exports = clients;