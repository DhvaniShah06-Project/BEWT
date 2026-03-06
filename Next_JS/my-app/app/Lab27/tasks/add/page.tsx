import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function AddTask() {
  const users = await prisma.user.findMany();

  async function submitForm(formData: FormData) {
    "use server";

    const data = {
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      isCompleted: formData.get("isCompleted") === "on",
      user: {
        connect: {
          id: formData.get("userId")?.toString() || "",
        },
      },
    };

    await prisma.task.create({ data });
    revalidatePath("/Lab27/tasks");
    redirect("/Lab27/tasks");
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Add Task</h1>

        <form action={submitForm} className="space-y-4">
          {/* Title */}
          <div>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Description */}
          <div>
            <input
              type="text"
              name="description"
              placeholder="Task Description"
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Completed Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isCompleted"
              id="isCompleted"
              className="w-4 h-4 text-indigo-500 bg-gray-700 border-gray-600 rounded focus:ring-indigo-400"
            />
            <label htmlFor="isCompleted" className="ml-2 text-gray-200">
              Completed
            </label>
          </div>

          {/* User Select */}
          <div>
            <label htmlFor="userId" className="block mb-1 text-gray-300">
              Assign to User:
            </label>
            <select
              name="userId"
              id="userId"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">-- Select User --</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.city})
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold py-2 rounded-md shadow-md"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}