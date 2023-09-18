
/**
 * EJEMPLO TIPO DE ESTRUCTURA DE MANEJO DE RUTAS
 * LAS RUTAS DE CADA MODELO VA EN UN ARCHIVO DISTINTO
 * 
 * Ejm: userRoutes.js, businessRoutes.js etc
 */

const {Router} = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.get('/getUser', userController.getUsers);
router.post('/saveUser', userController.save);




module.exports = router;


/**
 * FINALMENTE EN app.js SE LLAMA A TODAS LAS RUTAS
 * 
 */
// EJEMPLO
const userRoutes=require('./routes/userRoute')

app.use('/usuario', userRoutes);
//..demas rutas de los otros modelos

// ECHEN UN VISTAZO AL ARCHIVO APP.JS


