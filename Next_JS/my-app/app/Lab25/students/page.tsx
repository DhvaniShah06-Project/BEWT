import React from "react";
import styles from "./basic.module.css";
import Link from "next/link";

async function Lab25_Student() {
  const ans = await (
    await fetch("https://684af427165d05c5d35af75d.mockapi.io/Student", {
      next: { revalidate: 10 },
    })
  ).json();

  return (
    <>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ans.map((s: any) => (
              <tr>
                <td>{s.id}</td>
                <td>
                  <img src={s.avatar} />
                </td>
                <td>{s.name}</td>
                <td>{s.gender}</td>
                <td>{s.phone}</td>
                <td>{s.country}</td>
                <td>
                  <Link
                    href={`/Lab25/students/${s.id}`}
                    className="btn btn-primary">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Lab25_Student;
