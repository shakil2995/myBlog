const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// get route 
app.get('/', function(req, res){
    
    res.send("I am working");
})

// post route 


// server 
app.listen(3000,function(req, res){
   console.log("server working");
})