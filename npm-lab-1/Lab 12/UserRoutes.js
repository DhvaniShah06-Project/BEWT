const mongoose=require('mongoose')
const User=require('./UserSchema');
const user = require('./UserSchema');

const express=require("express")
const app=express()

app.post("/",async(req,res)=>{
    try{
        const user=new User(req.body)
        const savedUser = await user.save()
        res.status(201).json(savedUser);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

//Read All
app.get("/",async(req,res)=>{
    try{
        const user=await User.find();
        res.json(user);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

//get by id
app.get('/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({error:"Book not found"});
        }
        res.json(user);
    }catch(err){
        res.status(500).json({error:"Server Error"});
    }
})

//put badho data update krvo hoi to and patch khali mobile or zny field update krvi hoi to
//Update
app.put('/:id',async (req,res)=>{
    try{
        const updateUser=await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateUser){
            res.sendStatus(404).send({error:"User not found"});
        }
        res.json(updateUser);
    }catch(err){
       res.status(500).json({error:err.message})
    }
})

//Delete
app.delete('/:id',async(req,res)=>{
    try{
        const ans=await user.findByIdAndDelete(req.params.id);
        if(!ans){
            return res.status(404).send({error:"Book not found"});
        }
        res.json(user)
    }catch(err){
       return res.status(500).json({error:"Server Error"});
    }
})


module.exports=app