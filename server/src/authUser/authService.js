
const bcrypt =require('../utils/bcrypt')
const userServices=require('../services/userServices')
const service=new userServices()
const User= require('../models/usuarioModel')


 class  authServices{
    async checkCredentialsUsers (email,password){
        try{
            const user= await service.findUserByEmail(email)
            const verifyPassword= bcrypt.comparePassword(password,user.password)
            if(verifyPassword){
                return user
            }
            return null
        }
        catch(error){
            return null
        }
}
}

module.exports=authServices



