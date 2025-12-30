import bodyParser from "body-parser"
import { Router } from "express"

const routerStudent=Router()
const data=["Dhvani","Shah","B.TECH","CSE"];
routerStudent.use(bodyParser.json())

//Add
routerStudent.post("/",(req,res)=>{
    const StudentName=req.body.StudentName
    data.push(StudentName)
    res.send("Created")
})

//Get
routerStudent.get("/",(req,res)=>{
    res.send(data)
})

//Get By id
routerStudent.get("/:id",(req,res)=>{
    res.send(data[req.params.id])
});

//Update
routerStudent.put("/:id",(req,res)=>{
    const StudentName = req.body.StudentName
    data[req.params.id]=StudentName
    res.send("Updated")
})

//Delete
routerStudent.delete("/:id",(req,res)=>{
    data.splice(req.params.id,1)
    res.send("Deleted")
})
 export default routerStudent