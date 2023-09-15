const router = require('express').Router()
const loginUser = require('./authController')


router.post('/login',loginUser.postLogin)


module.exports = router
