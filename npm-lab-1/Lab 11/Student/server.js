const express = require('express');
const mongoose=require('mongoose');
const studentroutes = require('./studentroutes');
const app=express();

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/studentDB")
.then(()=>console.log("Student Connected"))
.catch(err=>console.log(err));

app.use('/api/student',studentroutes)
app.listen
(3000,()=>{
    console.log("Server Started @3000")
})