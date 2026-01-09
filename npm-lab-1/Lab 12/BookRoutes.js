const mongoose=require('mongoose')
const Book=require('./BookSchema');
const book = require('./BookSchema');

const express=require("express")
const app=express()

app.post("/",async(req,res)=>{
    try{
        const book=new Book(req.body)
        const savedBook = await book.save()
        res.status(201).json(savedBook);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

//Read All
app.get("/",async(req,res)=>{
    try{
        const book=await Book.find();
        res.json(book);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

//get by id
app.get('/:id',async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id);
        if(!book){
            return res.status(404).json({error:"Book not found"});
        }
        res.json(faculty);
    }catch(err){
        res.status(500).json({error:"Server Error"});
    }
})

//put badho data update krvo hoi to and patch khali mobile or zny field update krvi hoi to
//Update
app.put('/:id',async (req,res)=>{
    try{
        const updateBook=await book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateBook){
            res.sendStatus(404).send({error:"Book not found"});
        }
        res.json(updateBook);
    }catch(err){
       res.status(500).json({error:err.message})
    }
})

//Delete
app.delete('/:id',async(req,res)=>{
    try{
        const ans=await book.findByIdAndDelete(req.params.id);
        if(!ans){
            return res.status(404).send({error:"Book not found"});
        }
        res.json(book)
    }catch(err){
       return res.status(500).json({error:"Server Error"});
    }
})


module.exports=app