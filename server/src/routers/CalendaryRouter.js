const {Router}        = require('express')
const jobs_controller   = require('../controllers/JobController');

const calendary_router = Router();

calendary_router.get('/', jobs_controller.getCalendary );

module.exports = calendary_router;