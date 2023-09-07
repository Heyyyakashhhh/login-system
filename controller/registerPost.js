const RegiserModel = require('../models/registerSchema')


module.exports.creatData  = async(req,res)=>{
    try{
         const password = req.body.password;
         const confirmPassword  = req.body.confirmPass;
        

         if(password === confirmPassword){
               const newUser = new RegiserModel ({
                firstname: req.body.firstname,
                lasttname: req.body.lasttname,
                email: req.body.email,
                phone: req.body.mno,
                password: req.body.password,
                confirmpassword: req.body.confirmPass,
                gender: req.body.gender
               })
               
               console.log("the success part " + newUser)
               const token = await newUser.generateToken();

               console.log("the success part " + token)
               const registered = await newUser.save();
               res.status(201).render("login" )
               
         }else{
            res.send("Your confirm password dosn't match...")
         }
    }
    catch(err){
        res.status(400).send(err)
    }
} 


