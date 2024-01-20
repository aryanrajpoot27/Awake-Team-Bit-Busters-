const mongoose = require("mongoose")

const driverSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },

    email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    }
}) 

const driverRegister = new mongoose.model("driverRegister", driverSchema);

module.exports = driverRegister;