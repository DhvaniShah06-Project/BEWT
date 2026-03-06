import Link from "next/link";
import {prisma} from "@/lib/prisma";
import DeleteButton from "./ui/DeleteBtn";
import { deleteUser } from "../users/actions/deleteUser";

async function UserPage() {
  const data = await prisma.user.findMany();

  return (
    <>
      <Link href="/Lab27/users/add">Add New User</Link>

      <ul>
        {data.map((u) => (
          <li key={u.id}>
            {u.name }-
            {u.city}-
            {u.age} -{" "}
            <DeleteButton
              deleteMethod={deleteUser}
              deleteId={u.id}
            />
            {" - "}
            <Link href={"/Lab27/users/edit/" + u.id}>Edit</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserPage;