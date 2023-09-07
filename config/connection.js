const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/RegsiterationForm-database")
.then(()=>console.log("mongodb connected succsesfully..."))
.catch((error)=>console.log("error in mongodb connection..", error))

const db = mongoose.connection
module.exports = db;