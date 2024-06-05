const Contractor = require('../models/contractors');

// CREATE NEW CONTRACTOR, ON SIGNUP PAGE
exports.createContractor = (req, res) => {
    const newContractor = new Contractor(req.body);
    newContractor.save()
        .then(() => res.status(201).json(newContractor));
};

// GET ALL CONTRACTORS
exports.getAllContractor = async (req, res) => {
    const fullList = await Contractor.find({});
    res.json(fullList);
}


// GETBYID Route
exports.getContractor = async (req, res) => {
    try {
        const thisContractor = await Contractor.findById(req.params.contractorId);
        if (!thisContractor) {
            return res.status(404).send('Contractor not found');
        }
        res.status(200).json(thisContractor);
    } catch (err) {
        res.status(500).send('Could not retreive contractor');
    }
};

// UPDATED CONTRACTOR ROUTE (will be in profile tab only)
exports.updateContractor = async (req, res) => {
    try {
        const updatedContractor= await Contractor.findByIdAndUpdate(req.params.contractorId, req.body, { new: true });
        console.log(req.body);

        if (!updatedContractor) {
            return res.status (404).send('Could not be updated');
        } res.status(200).json(updatedContractor);
        
    } catch (err) {
        res.status(500).send('Cant update profile');
    }
};



// DELETE CONTRACTOR TAB, will be in the profile tab only)
exports.deleteContractor = async(req, res) => {
    
        const deletedContractor = await Contractor.findByIdAndDelete({_id:req.params.contractorId});
        res.status(200).json(deletedContractor);
    };

