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
// app.get("/",async(req,res)=>{
//     try{
//         const faculty=await Faculty.find();
//         res.json(faculty);
//     }catch(error){
//         res.status(500).json({error:error.message})
//     }
// })

app.get("/",async (req,res)=>{
     try{
        const{n,page=1,limit=5} =req.query;
        let filter={};
        if(n){
            filter.name={$regex:n,$options:'i'}
        }
        const skip=(page-1)*limit;
        const data=await Faculty.find(filter)
        .skip(skip)
        .limit(parseInt(limit));
        const total=await Faculty.countDocuments(filter);
        res.status(200).json({
            totalRecords:total,
            page:Number(page),
            limit:Number(limit),
            data
        });

    }catch(error){
        res.status(500).json({error:error.message})
    }
})

//get by id
app.get('/:id',async(req,res)=>{
    try{
        const faculty=await Faculty.findById(req.params.id);
        if(!faculty){
            return res.status(404).json({error:"Faculty not found"});
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
        const updateFaculty=await faculty.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateFaculty){
            res.sendStatus(404).send({error:"Faculty not found"});
        }
        res.json(updateFaculty);
    }catch(err){
       res.status(500).json({error:error.message})
    }
})

//Delete
app.delete('/:id',async(req,res)=>{
    try{
        const ans=await faculty.findByIdAndDelete(req.params.id);
        if(!ans){
            return res.status(404).send({error:"Faculty not found"});
        }
        res.json(faculty)
    }catch(err){
       return res.status(500).json({error:"Server Error"});
    }
})

module.exports=app;