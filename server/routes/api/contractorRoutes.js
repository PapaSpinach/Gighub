const router = require('express').Router();

// MAKE A CONST { function, function, function} = require(/pathtoControllers) TO IMPORT FUNCTIONS FROM CONTROLLER FILES

const {
    createContractor,
    getAllContractor,
    getContractor,
    updateContractor,
    deleteContractor,

} = require ('../../controllers/contractors');

// endpoint is /api I think or /api/contractors

// ENDPOINT IS /api/contractors
router.route('/').get(getAllContractor)


router.route('/:contractorId').get(getContractor).put(updateContractor).delete(deleteContractor);


// ENDPOINT IS /api/contractors/signup
router.route('/signup').post(createContractor);



module.exports = router;