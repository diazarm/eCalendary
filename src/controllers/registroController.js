const usuarioModel = require('../models/usuarioModel');
const { v4: uuidv4 } = require('uuid');
const {encrypt} = require('../helpers/bcrypt')


const userRegis = {
    Registro: async (req, res) => {
        try{
            const { username, email, password } = req.body;
            if(!email || !password){
                return res.status(400).json({menssaje: 'Faltan parametros'})
            }
            const contraEncrypt = await encrypt(password)
            //cambiar a otro archivo
            const resultadoUsuario = await usuarioModel.create({
                id: uuidv4(),
                email: email,
                username: username,
                password: contraEncrypt,
            });
            //409
            res.status(200).send(resultadoUsuario);
        }catch(error){
            res.status(409).json({mensaje: `Error ya se esta utilizando ese correo ${error.message}`})
            
        }

    },
};

module.exports = userRegis;
