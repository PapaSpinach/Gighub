const router = require('express').Router();

const clientRoutes = require('./clientRoutes');
const contractorRoutes = require('./contractorRoutes');
const jobsRoutes = require('./jobRoutes');
const authenticationRoutes = require('./authentication');

router.use('/clients', clientRoutes);
router.use('/contractors', contractorRoutes);
router.use('/jobs', jobsRoutes);
router.use(authenticationRoutes);

module.exports = router;
