import React from 'react'
import mysql from 'mysql2/promise';

async function Movies_Page() {
  const connection=await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"minor_project"
  });
  const[data,fields]=await connection.query("Select * from Movies where MovieID=1")
    console.log("Fields : ",data)
  return (
    <div>
      
    </div>
  )
}

export default Movies_Page
