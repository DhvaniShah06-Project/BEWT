const express = require('express');
const mongoose=require('mongoose');
const facultyroutes = require('./facultyroutes');
const app=express();

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/facultyDB")
.then(()=>console.log("Faculty Connected"))
.catch(err=>console.log(err));

app.use('/api/faculty',facultyroutes)
app.listen
(3000,()=>{
    console.log("Server Started @3000")
})
//mongodb://localhost:27017/facultyDB