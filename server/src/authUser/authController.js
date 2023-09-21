const jwt = require('jsonwebtoken')
const authServices = require('./authService')
const jwtSecret = require('../../config').api.jwtSecret
const services=new authServices()


const authControllers={

postLogin: async (req,res)=>{
    const {email, password} = req.body
    if(email && password){
    services.checkCredentialsUsers(email, password)
    .then((data) => {
        if(data){
            const token = jwt.sign({
                id:    data.id,
                email: data.email
                }, jwtSecret) 

            res.status(200).json({
                message: 'Correct Credentials!',
                token
            })
        } else {
            res.status(401).json({message: 'Invalid Credentials'})
        }
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })

    }
    else{
        res.status(400).json({
            message: 'Missing Data', 
            fields: {
                email: 'example@example.com',
                password: "string****"
        }}) 
    }
    

}

}
module.exports=authControllers


    

    