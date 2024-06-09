const Job = require('../models/jobs');

exports.createJob = (req, res) => {
    const newJob = new Job({
      ...req.body,
      postedBy: req.user.username,
      email: req.user.email,
      phoneNumber: req.user.phoneNumber,
    });

    newJob.save()
        .then(() => res.status(201).json(newJob))
        .catch(err => res.status(400).json(err));
};

exports.getAllJobs = (req, res) => {
    Job.find()
        .then(jobs => res.json(jobs))
        .catch(err => res.status(500).json(err));
};

exports.getJob = async (req,res) => {
    try {
        const thisJob = await Job.findById(req.params.jobId);
        if (!thisJob) {
            return res.status(404).send('Job not found');
        }
        res.status(200).json(thisJob);
    } catch (err) {
        res.status(500).send('Could not retrieve job');
    }
}

exports.updateJob = (req, res) => {
    Job.findByIdAndUpdate(req.params.jobId, req.body, { new: true })
        .then(job => res.json(job))
        .catch(err => res.status(400).json(err));
};

exports.deleteJob = async(req,res) => {
    const deletedJob = await Job.findByIdAndDelete({_id:req.params.jobId});
    res.status(200).json(deletedJob);
}
