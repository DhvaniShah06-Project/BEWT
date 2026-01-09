const mongoose=require('mongoose')
const Issued_Book=require('./issuedBooksSchema');
const issued_book = require('./issuedBooksSchema');

const express=require("express")
const app=express()

app.post("/",async(req,res)=>{
    try{
        const issued_book=new Issued_Book(req.body)
        const savedIssued_Book = await issued_book.save()
        res.status(201).json(savedIssued_Book);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

//Read All
app.get("/",async(req,res)=>{
    try{
        const issued_book=await Issued_Book.find();
        res.json(issued_book);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

//get by id
app.get('/:id',async(req,res)=>{
    try{
        const issued_book=await Issued_Book.findById(req.params.id);
        if(!issued_book){
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
        const updateIssued_Book=await issued_book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateIssued_Book){
            res.sendStatus(404).send({error:"Book not found"});
        }
        res.json(updateIssued_Book);
    }catch(err){
       res.status(500).json({error:err.message})
    }
})

//Delete
app.delete('/:id',async(req,res)=>{
    try{
        const ans=await issued_book.findByIdAndDelete(req.params.id);
        if(!ans){
            return res.status(404).send({error:"Book not found"});
        }
        res.json(issued_book)
    }catch(err){
       return res.status(500).json({error:"Server Error"});
    }
})


module.exports=app