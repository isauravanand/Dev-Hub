const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    fullname:{
        type:String,
        required:true,
        min:3,
        max:40
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:50
    }
})

module.exports = mongoose.model("User", userSchema);