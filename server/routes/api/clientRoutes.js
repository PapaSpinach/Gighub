const router = require('express').Router();

// MAKE A CONST { function, function, function} = require(/pathtoControllers) TO IMPORT FUNCTIONS FROM CONTROLLER FILES
const {
    getAllClients,
    getClient,
    createClient,
    updateClient,
    deleteClient,
} = require('server/controllers/clientController')

// router.route('/') use .get(function) and .post(function) to get or add new jobs
router.route('/')
.get(getAllClients)
.post(createClient);


module.exports = router;