import React from "react";
// import mysql from "mysql2/promise";
import {db} from "../../../lib/mysql";

async function Movies_Page() {
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "",
  //   database: "minor_project",
  // });
  const [data, fields] = await db.query(
    "Select * from Movies where MovieID=1",
  );
  console.log("Fields : ", data);
  return <></>;
}

export default Movies_Page;
