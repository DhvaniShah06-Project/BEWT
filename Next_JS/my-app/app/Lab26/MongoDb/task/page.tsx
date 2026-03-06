"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function Mongo_Db() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
const fetchData = async () => {
  try {
    const res = await fetch("/api/task");

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
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Completed</th>
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
        <td>{d.title}</td>
        <td>{d.description}</td>
        <td>{d.isCompleted}</td>
        <td>
          <button
            onClick={() => router.push(`/Lab26/MongoDb/task/${d._id}`)}
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
