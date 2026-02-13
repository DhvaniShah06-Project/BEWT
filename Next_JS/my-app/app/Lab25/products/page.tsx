import React from "react";
import Link from "next/link";
import styles from "./basic.module.css";

async function Lab25_Product() {
  const apiUrl = "https://684af427165d05c5d35af75d.mockapi.io/Product";
  const data=await((await fetch(apiUrl)).json());
  // const data=await temp.json();

  return (
    <>
        <th style={{"border":"1px solid white"}}>
                <tr>
                <td style={{"border":"1px solid white"}}>Id</td>
                <td style={{"border":"1px solid white"}}>Name</td>
                <td style={{"border":"1px solid white"}}>Price</td>
                <td style={{"border":"1px solid white"}}>Description</td>
                </tr>
              </th>
      <div>
            <table className={styles.table}>
          
              <tbody style={{"border":"1px solid white"}}>
                {data.map((d: any) => (
                  <tr key={d.id}>
                    <td style={{"border":"1px solid white"}}>{d.id}</td>
                    <td style={{"border":"1px solid white"}}>{d.name}</td>
                    <td style={{"border":"1px solid white"}}>{d.price}</td>
                    <td style={{"border":"1px solid white"}}>{d.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
           
          
      </div>
    </>
  );
}

export default Lab25_Product;
 // <li key={d.id}>
            //   <li>{d.id}</li>
            //   <li>{d.name}</li>
            //   <li>{d.price}</li>
            //   <li>{d.description}</li>
            // </li>