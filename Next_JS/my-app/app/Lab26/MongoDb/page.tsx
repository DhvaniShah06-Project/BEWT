"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function Mongo_Db() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
const fetchData = async () => {
  try {
    const res = await fetch("/api/user");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const temp = await res.json();
    setData(temp);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
    <tbody>
  {loading ? (
    <tr>
      <td colSpan={5}>Loading data...</td>
    </tr>
  ) : data.length === 0 ? (
    <tr>
      <td colSpan={5}>No users found</td>
    </tr>
  ) : (
    data.map((d: any) => (
      <tr key={d._id}>
        <td>{d._id}</td>
        <td>{d.name}</td>
        <td>{d.city}</td>
        <td>{d.age}</td>
        <td>
          <button
            onClick={() => router.push(`/Lab26/MongoDb/${d._id}`)}
          >
            Details
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>
      </table>
    </>
  );
}

export default Mongo_Db;
