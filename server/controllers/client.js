const Client = require('server/models/clients')

exports.createClient = async (req, res) => {
    try {
        const { fullName, userName, password, email, phoneNumber } = req.body;
        const newClient = new Client({ fullName, userName, password, email, phoneNumber });
        await newClient.save();
        res.status(201).json({ message: 'Client created successfully', data: newClient });
    } catch (error) {
        res.status(500).json({ message: 'Error creating client', error });
    }
};