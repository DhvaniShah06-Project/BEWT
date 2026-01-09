const express=require('express')
const app=express()
const mongoose=require('mongoose')
const UserRoutes = require('./UserRoutes');
const BookRoutes = require('./BookRoutes');
const IssuedBookRoutes = require('./IssuedBookRoutes');


app.use(express.json())

mongoose.connect("mongodb://localhost:27017/library_management")
.then(()=>console.log("Connected"))
.catch(err=>console.log(err))

app.use("/books", BookRoutes);
app.use("/user", UserRoutes);
app.use("/issued_book", IssuedBookRoutes);


app.listen(4000,()=>{
    console.log("Server Started @4000")
})