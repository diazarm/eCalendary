const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

//verificar ruta
router.get('/api/calendarios?servicio_id', controller.servicios)
router.post('/api/reservas', controller.reservas)

module.exports = router