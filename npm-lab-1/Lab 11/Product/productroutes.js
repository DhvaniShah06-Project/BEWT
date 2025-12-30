const express=require('express');
const Product=require('./product');
const app=express();
// create new on=bject for every field and then pass req.body for insert many store all in variable and then
//Create
app.post("/",async(req,res)=>{
    try{
        const product=new Product(req.body)
        const savedProduct = await product.save()
        res.status(201).json(savedProduct);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

//Read All
app.get("/",async(req,res)=>{
    try{
        const product=await Product.find();
        res.json(product);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

//get by id
app.get('/:id',async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({error:"product not found"});
        }
        res.json(product);
    }catch(err){
        res.status(500).json({error:"Server Error"});
    }
})
//put badho data update krvo hoi to and patch khali mobile or zny field update krvi hoi to
//Update
app.put('/:id',async (req,res)=>{
    try{
        const updateproduct=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateproduct){
            res.sendStatus(404).json({error:"product not found"});
        }
        res.json(updateproduct);
    }catch(err){
        res.json(updateproduct);
    }
})

//Delete
app.delete('/:id',async(req,res)=>{
    try{
        const ans=await Product.findByIdAndDelete(req.params.id);
        if(!ans){
            return res.sendStatus(404).json({error:"product not found"});
        }
        res.json(Product)
    }catch(err){
       return res.status(500).json({error:"Server Error"});
    }
})

module.exports=app;