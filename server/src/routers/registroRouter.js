const express     = require('express');
const router      = express.Router();
const registroController = require('../controllers/registroController')

router.post('/api/registro', registroController.Registro)


module.exports = router;