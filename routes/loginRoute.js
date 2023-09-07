const express = require('express')
const router = express.Router();
//require controller here
const loginPageRender = require('../controller/loginController')
const LoginPostController = require('../controller/loginPost')


router.get("/" , loginPageRender.LoginPage)
router.post("/" ,LoginPostController.loginUser);


module.exports = router;