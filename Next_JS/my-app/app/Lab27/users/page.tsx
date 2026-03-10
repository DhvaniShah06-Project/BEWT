import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "./ui/DeleteBtn";
import { deleteUser } from "../users/actions/deleteUser";

async function UserPage() {
  const data = await prisma.user.findMany();

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-green-400">User List</h1>

      <Link
        href="/Lab27/users/add"
        className="inline-block mb-6 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Add New User
      </Link>

      <ul className="space-y-4">
        {data.map((u) => (
          <li
            key={u.id}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-medium text-white">{u.name}</span>
              <span className="text-gray-300">{u.city}</span>
              <span className="text-gray-300">{u.age}</span>
            </div>

            <div className="flex items-center gap-2">
              <DeleteButton
                deleteMethod={deleteUser}
                deleteId={u.id}
                className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-md shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <Link
                href={"/Lab27/users/edit/" + u.id}
                className="px-3 py-1 bg-blue-600 rounded-lg hover:bg-blue-500 text-white text-sm shadow-md transition-colors"
              >
                Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;