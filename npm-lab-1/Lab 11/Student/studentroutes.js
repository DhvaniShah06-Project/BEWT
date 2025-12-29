const express=require('express');
const Student=require('./student');
const app=express();

//Create
app.post("/",async(req,res)=>{
    try{
        const student=new Student(req.body)
        const savedStudent = await student.save()
        res.status(201).json(savedStudent);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

//Read All
app.get("/",async(req,res)=>{
    try{
        const student=await Student.find();
        res.json(student);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

module.exports=app;