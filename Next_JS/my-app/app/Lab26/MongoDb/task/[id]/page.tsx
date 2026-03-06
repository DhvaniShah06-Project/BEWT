"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState} from 'react'

function Mongo_id({params}:{params:{id:number}}) {
    const {id}=useParams();
    const [data,setData]=useState<any>("");

    const fetchData=async()=>{
      
            const res=await fetch(`/api/task/${id}`);
            const temp=await res.json();
            setData(temp);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
       <div> 
        {data.title}
        {data.description}
        {data.isCompleted} 
    </div>
  )
}

export default Mongo_id
