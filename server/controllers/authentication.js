const Contractor = require('../models/contractors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newContractor = new Contractor({
            username,
            email,
            password: hashedPassword
        });

        await newContractor.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering new user', error });
    }
};