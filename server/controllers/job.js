const Job = require('../models/Job');

exports.createJob = (req, res) => {
    const newJob = new Job(req.body);
    newJob.save()
        .then(job => res.status(201).json(job))
        .catch(err => res.status(400).json(err));
};