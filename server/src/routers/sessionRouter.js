const express     = require('express');
const router      = express.Router();
const sessionController = require('../controllers/sessionController')

router.post('/api/acceso', sessionController.Session)


module.exports = router;