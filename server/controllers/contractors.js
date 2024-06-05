
const Contractor = require('../models/Contractor');

exports.createContractor = (req, res) => {
    const newContractor = new User(req.body);
    newContractor.save()
        .then(() => res.status(201).send('Contractor created successfully'))
        .catch(err => res.status(500).send('Error creating contractor'));
};

exports.getContractor = (req, res) => {
    Contractor.findById(req.params.id)
        .then(contractor => {
            if (!contractor) {
                return res.status(404).send('Contractor not found');
            }
            res.status(200).json(user);
        })
        .catch(err => res.status(500).send('Error retrieving contractor'));
};

exports.updateContractor = (req, res) => {
    Contractor.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(contractor => res.status(200).json(contractor))
        .catch(err => res.status(500).send('Error updating contractor'));
};

exports.deleteContractor = (req, res) => {
    Contractor.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).send())
        .catch(err => res.status(500).send('Error deleting contractor'));
};
