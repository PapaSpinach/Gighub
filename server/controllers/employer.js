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

exports.updateJob = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update job', error });
    }
};

exports.deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedJob = await Job.findByIdAndDelete(id);
        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(204).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete job', error });
    }
};