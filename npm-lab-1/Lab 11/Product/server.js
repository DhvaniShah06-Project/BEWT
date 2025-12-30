const express=require('express')
const mongoose=require('mongoose')
const productroutes=require('./productroutes')
const app=express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/productDB')
.then(()=>console.log("Product Connecred"))
.catch(err=>console.log(err));

app.use('/api/product',productroutes)
app.listen(3000,()=>{
    console.log("Server Started @3000")
})