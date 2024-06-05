const Contractor = require('../models/contractors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const contractors = require('../models/contractors');

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

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const contractor = await Contractor.findOne({ email });

        if (!contractor) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { contractorId: contractor._id },
            'your_jwt_secret', // This should be in an environment variable
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};
