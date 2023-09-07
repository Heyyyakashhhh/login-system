const express = require('express')
const router = express.Router();
//require controller here
const controller = require('../controller/registerController')
const controllerPost = require('../controller/registerPost')


router.get("/" ,controller.RegisterPage)
router.post("/" ,controllerPost.creatData)

module.exports = router;

