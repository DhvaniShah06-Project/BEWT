const express=require('express');
const Faculty=require('./faculty');
const app=express();

//Create
app.post("/",async(req,res)=>{
    try{
        const faculty=new Faculty(req.body)
        const savedFaculty = await faculty.save()
        res.status(201).json(savedFaculty);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

//Read All
app.get("/",async(req,res)=>{
    try{
        const faculty=await Faculty.find();
        res.json(faculty);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

module.exports=app;