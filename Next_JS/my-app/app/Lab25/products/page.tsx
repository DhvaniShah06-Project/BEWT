import styles from "./basic.module.css";
import Link from "next/link";

export default async function Page() {
  const products = await (await fetch("https://684af427165d05c5d35af75d.mockapi.io/Product", { next: { revalidate: 10 } })).json();

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((d: any) => (
            <tr>
              <td>{d.id}</td>
                <td>
                  <img src={d.image} />
                </td>
              <td>{d.name}</td>
              <td>{d.price}</td>
              <td>{d.description}</td>
              <td><Link href={`/Lab25/products/${d.id}`} className="btn btn-primary">View Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
