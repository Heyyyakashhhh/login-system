const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt  = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const registersSchema = mongoose.Schema({
    firstnama: {
        type: String,
       
    },
    lastname: {
        type: String,
        
    },
    email: {
        type: String,
        required: true,
        unique: {
            value: true,
            message: "This email is already registered in our database"
        },
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Please enter a valid email id");
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        unique: {
            value: true,
            message: "The number is already in use"
        },
        minlength: 10,
        maxlength: 11
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    confirmpassword: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]
});

// ...

// Corrected method name: generateToken
// ...

// Corrected method name: generateToken
registersSchema.methods.generateToken = async function () {
    try {
        console.log(this._id); // Access _id using this._id
        const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token }); // Add the token to the tokens array
        await this.save();
        return token;
    } catch (err) {
        console.log("error in jwt part " + err);
    }
}

// ...


// ...


registersSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
         
            this.password = await bcrypt.hash(this.password, 10); //after hashing pas
            this.confirmpassword =  await bcrypt.hash(this.confirmpassword, 10); 
        }
        next();
    } catch (error) {
        console.log(error);
        next(error); // Pass the error to the next middleware
    }
});
const Register = mongoose.model('Register', registersSchema);

module.exports = Register;
