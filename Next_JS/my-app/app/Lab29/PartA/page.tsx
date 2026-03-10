"use client"
import { useState } from "react"
import React from 'react'

function Lab29_A() {
    const [count,SetCount] = useState(0)

  return (
    <div>
      <button className="btn btn-primary" onClick={()=>{
        SetCount(count+1)
      }}>Increase</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Lab29_A
