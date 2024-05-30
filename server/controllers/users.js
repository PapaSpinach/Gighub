const User = require('../models/User');

exports.createUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(() => res.status(201).send('User created successfully'))
        .catch(err => res.status(500).send('Error creating user'));
};

exports.getUser = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.status(200).json(user);
        })
        .catch(err => res.status(500).send('Error retrieving user'));
};

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).send('Error updating user'));
};