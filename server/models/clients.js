const { Schema, model } = require('mongoose');

const clientsSchema = new Schema({
    fullName: {type: String, required: true},
    userName: {type: String, required: true},
    passWord: {type: String, required: true},
    email: {type: email, required: true},
    phoneNumber: {type: Number, required: true}

});

const clients = model('clients', clientsSchema);
module.exports = clients;