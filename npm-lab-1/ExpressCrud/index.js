import express from 'express'
import routerStudent from "./Routes/StudentRoutes.js";

const app=express()

app.use("/students",routerStudent)

app.listen(3000,()=>{
    console.log("Server Started")
})



