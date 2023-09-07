const express = require('express');
const app =  express();
const port = process.env.PORT || 4000;
const path = require('path');
const registerModel = require('../models/registerSchema')

//require mongodb connection here
const mongooseConnection  = require('../config/connection');

const viewPath = path.join(__dirname , '../views')
const publicPath = path.join(__dirname , '../public')

//use view path here for ejs
app.set("view engine" , "ejs");
app.set("views" , viewPath);

//use public static path here
app.use(express.static(publicPath));

//convert api into json format
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/register" , require('../routes/registerRoute') )


app.use("/" , require('../routes/loginRoute') )

app.listen(port , ()=>{
    console.log(`server listen at port ${port}`)
})