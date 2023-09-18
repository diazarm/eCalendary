
  const User= require('../models/usuarioModel')
  const bcrypt=require('../utils/bcrypt.js')
  const uuid= require('uuid')
  

  class userServices{

   async createUser (obj){
       const {email,username,password}=obj
       const user= await User.create({
        id:uuid.v4(),
        email,
        username,
        password:bcrypt.hashPassword(password)
       })
       return user
   }
  async findUserByEmail (email){
     const user= await User.findOne({
        where:{
            email,
        }
     })
     return user
  }

  async findUserById (userId){
    const user= await User.findOne({
       where:{
           id:userId
       }
    })
    return user
 }
}
  module.exports=userServices
