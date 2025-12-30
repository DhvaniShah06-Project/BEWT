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

//get by id
app.get('/:id',async(req,res)=>{
    try{
        const student=await Student.findById(req.params.id);
        if(!student){
            return res.status(404).json({error:"Student not found"});
        }
        res.json(student);
    }catch(err){
        res.status(500).json({error:"Server Error"});
    }
})
//put badho data update krvo hoi to and patch khali mobile or zny field update krvi hoi to
//Update
app.put('/:id',async (req,res)=>{
    try{
        const updateStudent=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateStudent){
            res.sendStatus(404).json({error:"Student not found"});
        }
        res.json(updateStudent);
    }catch(err){
        res.json(updateStudent);
    }
})

//Delete
app.delete('/:id',async(req,res)=>{
    try{
        const ans=await Student.findByIdAndDelete(req.params.id);
        if(!ans){
            return res.status(404).json({error:"Student not found"});
        }
    }catch(err){
       return res.status(500).json({error:"Server Error"});
    }
})

module.exports=app;