import React from 'react'
import styles from "../basic.module.css";

async function ID_Student({params}:{params:Promise<{id:String}>}) {
  const {id}=await params;
  const student=await(await fetch(`https://684af427165d05c5d35af75d.mockapi.io/Student/${id}`, { next: { revalidate: 10 } })).json();
    return (
    <div>
           <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
                <td>{student.id}</td>
                <td>
                  <img src={student.avatar}/>
                </td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.phone}</td>
                <td>{student.country}</td>
              </tr>
        </tbody>
      </table>
    </div>
      
    </div>
  )
}

export default ID_Student
