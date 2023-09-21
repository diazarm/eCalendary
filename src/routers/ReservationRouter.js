const { Router } = require('express');
const reservarion_controller = require('../controllers/ReservationController')
const passportJWT = require('../middlewares/jwtAuthenticate')
const router = Router();

router.post('/', reservarion_controller.create );
router.get( '/', passportJWT.authenticate('jwt', {session: false}), reservarion_controller.list );

module.exports = router