const router = require('express').Router();

// MAKE A CONST { function, function, function} = require(/pathtoControllers) TO IMPORT FUNCTIONS FROM CONTROLLER FILES

const {
createJob,
getAllJobs,
getJob,
updateJob,
deleteJob
} = require ('../../controllers/job');

const { protect } = require('../../controllers/authentication');

// router.route('/') use .get(function) and .post(function) to get or add new jobs

// ENDPOINT IS /api/jobs
router.route('/').get(getAllJobs);

// ENDPOINT IS /api/jobs/:jobId
router.route('/:jobId').get(getJob).put(updateJob).delete(deleteJob);

// ENDPOINT IS /api/jobs/create
router.route('/createJob').post(protect, createJob);


module.exports = router;