
const router= require('express').Router()
const userControllers= require('../controllers/userControllers')

router.post('/',userControllers.post)


module.exports=router