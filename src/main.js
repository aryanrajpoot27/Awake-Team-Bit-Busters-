const express = require("express");
const path = require("path") ;
const app = express(); 
const hbs = require("hbs");

const port = process.env.PORT || 3000; 

const static_path = path.join(__dirname, "../public" );  
const template_path = path.join(__dirname, "../templates/views" );
const partials_path = path.join(__dirname, "../templates/partials" );

app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
})