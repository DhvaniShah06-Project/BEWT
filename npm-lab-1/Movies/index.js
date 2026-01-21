const express=require('express')
const routeUser = require('./Routes/users.route')
const app=express()
app.use(express.json())

app.use("/users",routeUser)

app.listen(3200,()=>{
    console.log("Server Started")
})