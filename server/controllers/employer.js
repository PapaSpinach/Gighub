const Job = require('../models/Job');

exports.createJob = async (req, res) => {
    const { title, description, salary, location } = req.body;
    try {
        const newJob = new Job({
            title,
            description,
            salary,
            location,
            employer: req.user._id
        });
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create job', error });
    }
};