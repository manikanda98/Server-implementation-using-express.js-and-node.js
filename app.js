const express =require("express");
const exphbs=require("express-handlebars");
const bodyParser=require("body-parser");
const mysql=require("mysql")
const file=require("fs")
const app=express();

require('dotenv').config(); 
//used to set the port number 
const port=process.env.PORT || 5001;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//used to set the public folder as static to get the files
app.use(express.static("public"));

//it is used to the html files with the extension .hbs
const handlebars=exphbs.create({extname:".hbs"});

//it is used to create template engine
app.engine('hbs',handlebars.engine)
app.set("view engine","hbs");

//route
app.get('/',(req,res)=>{
    res.render("home")
});
//to listen the port
app.listen(port,()=>{
    console.log("Listening "+port);
    //file.write("form.html");
    
});
