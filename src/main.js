const express = require("express");
const path = require("path") ;
const app = express(); 
const hbs = require("hbs");

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
})