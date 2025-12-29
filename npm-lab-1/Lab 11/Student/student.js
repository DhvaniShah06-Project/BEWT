 const mongoose = require('mongoose')
 
 const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    marks:{
        type:Number,
        required:true
    },
    roll:{
        type:Number,
        required:true,
        unique:true
    }
 })

 module.exports=mongoose.model('Student',studentSchema);