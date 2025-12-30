 const mongoose = require('mongoose')
 
 const facultySchema=new mongoose.Schema({
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
    experience:{
        type:Number,
        required:true
    },
    hireDate:{type:Date,default:Date.now}
 })
 
 module.exports=mongoose.model('Faculty',facultySchema);