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

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving clients', error });
    }
};

exports.getClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving client', error });
    }
};

exports.updateClient = async (req, res) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClient) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json({ message: 'Client updated successfully', data: updatedClient });
    } catch (error) {
        res.status(500).json({ message: 'Error updating client', error });
    }
};