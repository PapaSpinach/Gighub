const User = require('../models/User');

exports.createUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(() => res.status(201).send('User created successfully'))
        .catch(err => res.status(500).send('Error creating user'));
};