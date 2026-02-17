import styles from "../basic.module.css";

export default async function ID_Product({params}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;  

  const product =await(await fetch(`https://684af427165d05c5d35af75d.mockapi.io/Product/${id}`, { next: { revalidate: 10 } })).json();

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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.id}</td>
             <td>
                  <img src={product.image} />
                </td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
