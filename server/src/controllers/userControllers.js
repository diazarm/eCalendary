
const userServices = require('../services/userServices.js')


const services= new userServices()


const userControllers={

post: async (req,res)=>{
  const {username,email,password}=req.body
  services.createUser({username,email,password})
  .then(data=>{
    res.status(201).json({
        message:"User created successfully",
        user:data
    })
  })
  .catch(err=>{
    res.status(400).json({
        message:err.message,
        fields:{
            email:"string NOT NULL",
            password:"string NOT NULL",
            username:"string"
        }
   })
  })
},

}
module.exports=userControllers