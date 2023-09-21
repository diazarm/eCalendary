const express     = require('express');
const router      = express.Router();
const JobController   = require('../controllers/JobController')
const passportJWT = require('../middlewares/jwtAuthenticate')

router.use( passportJWT.authenticate('jwt',{session:false}) )
router.post('/', JobController.create )
router.get('/', JobController.listing );

module.exports = router;