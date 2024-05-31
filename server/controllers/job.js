const Job = require('../models/Job');

exports.createJob = (req, res) => {
    const newJob = new Job(req.body);
    newJob.save()
        .then(job => res.status(201).json(job))
        .catch(err => res.status(400).json(err));
};

exports.getAllJobs = (req, res) => {
    Job.find()
        .then(jobs => res.json(jobs))
        .catch(err => res.status(500).json(err));
};

exports.updateJob = (req, res) => {
    Job.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(job => res.json(job))
        .catch(err => res.status(400).json(err));
};

exports.deleteJob = (req, res) => {
    Job.findByIdAndRemove(req.params.id)
        .then(() => res.status(204).send())
        .catch(err => res.status(500).json(err));
};