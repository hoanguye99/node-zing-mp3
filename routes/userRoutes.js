const express = require('express')
const router = express.Router()
const userController = require('../controller/userController');

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

router.post('/register', userController.handleRegister);

router.post('/login', userController.handleLogin);


module.exports = router;