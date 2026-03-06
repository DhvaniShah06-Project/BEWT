"use client"
import React from 'react'

export default async function DeleteBtn(params:any) {
    const [deleteId,deleteMethod]=await params;

  return (
    <div>
        <button onClick={()=>{
            deleteMethod(deleteId);
        }}>Delete</button>
    </div>
  )
}


