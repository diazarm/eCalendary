const usuarioModel = require('../models/usuarioModel')
const {compare} = require('../helpers/bcrypt')
const jwt = require('jsonwebtoken')

const userSession = {
    Session: async ( req, res )=>{
        try{
            const { email, password } = req.body;
            if(!email || !password){
                return res.status(400).json({menssaje: 'Faltan parametros'})
            }
            const contraEncrypt = await  usuarioModel.findOne({
                where: {
                    email: email
                }
            })
            const passObtaiDB = contraEncrypt.dataValues.password
            const contraDescrypt = await compare(password, passObtaiDB)
            
            if(contraDescrypt){
                console.log('ESTAMOS EN EL TOKEN')
                const secretKey = 'tu_clave_secreta';
                const user = {id: 'juan'}
                const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); 
                res.send({
                    redirect: '/',
                    token: token, 
                    // user_id: user_id
                })
            }
        }catch{
            res.status(404)
            res.send({error: 'No se puedo logearse'})
        }
    }
}

module.exports = userSession;



