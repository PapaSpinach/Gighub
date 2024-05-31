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

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({ employer: req.user._id });
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve jobs', error });
    }
};
