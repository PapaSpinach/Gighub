const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
    try {
        console.log("Controller: Retrieving all clients...");
        const clients = await Client.find();
        console.log("Controller: Clients found:", clients.length);
        res.status(200).json(clients);
    } catch (error) {
        console.log("Controller Error: Failed to retrieve clients", error);
        res.status(500).json({ message: 'Error retrieving clients', error });
    }
};

exports.createClient = async (req, res) => {
    try {
        console.log("Controller: Creating a new client with data:", req.body);
        const newClient = new Client(req.body);
        await newClient.save();
        console.log("Controller: Client created successfully");
        res.status(201).json({ message: 'Client created successfully', data: newClient });
    } catch (error) {
        console.log("Controller Error: Failed to create client", error);
        res.status(500).json({ message: 'Error creating client', error });
    }
};

exports.getClient = async (req, res) => {
    try {
        console.log(`Controller: Getting client with ID: ${req.params.id}`);
        const client = await Client.findById(req.params.id);
        if (!client) {
            console.log("Controller: No client found with ID:", req.params.id);
            return res.status(404).json({ message: 'Client not found' });
        }
        console.log("Controller: Client found:", client);
        res.status(200).json(client);
    } catch (error) {
        console.log("Controller Error: Failed to retrieve client", error);
        res.status(500).json({ message: 'Error retrieving client', error });
    }
};

exports.updateClient = async (req, res) => {
    try {
        console.log(`Controller: Updating client with ID: ${req.params.id}, Data:`, req.body);
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClient) {
            console.log("Controller: No client found with ID to update:", req.params.id);
            return res.status(404).json({ message: 'Client not found' });
        }
        console.log("Controller: Client updated successfully", updatedClient);
        res.status(200).json({ message: 'Client updated successfully', data: updatedClient });
    } catch (error) {
        console.log("Controller Error: Failed to update client", error);
        res.status(500).json({ message: 'Error updating client', error });
    }
};

exports.deleteClient = async (req, res) => {
    try {
        console.log(`Controller: Deleting client with ID: ${req.params.id}`);
        const deletedClient = await Client.findByIdAndDelete(req.params.id);
        if (!deletedClient) {
            console.log("Controller: No client found with ID to delete:", req.params.id);
            return res.status(404).json({ message: 'Client not found' });
        }
        console.log("Controller: Client deleted successfully");
        res.status(204).send();
    } catch (error) {
        console.log("Controller Error: Failed to delete client", error);
        res.status(500).json({ message: 'Error deleting client', error });
    }
};
