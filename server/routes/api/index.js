const router = require('express').Router();

const clientRoutes = require('./clientRoutes');
const contractorRoutes = require('./contractorRoutes');
const jobsRoutes = require('./jobRoutes');

router.use('/clients', clientRoutes);
router.use('/contractors', contractorRoutes);
router.use('/jobs', jobsRoutes);




module.exports = router;