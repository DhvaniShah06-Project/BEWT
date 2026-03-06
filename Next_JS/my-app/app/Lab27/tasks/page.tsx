import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeleteBtn from "./ui/DeleteBtn";
import { deleteTask } from "./actions/deleteTask";

export default async function TaskPage() {
  const tasks = await prisma.task.findMany({ include: { user: true } });

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-green-400 drop-shadow-md">
        Task List
      </h1>

      {/* Add Button */}
      <div className="mb-6">
        <Link
          href="/Lab27/tasks/add"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 shadow-md transition-colors"
        >
          Add New Task
        </Link>
      </div>

      {/* Task List */}
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-4 border border-gray-700 rounded-lg flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition-colors shadow-sm"
          >
            <div>
              <p className="font-semibold text-white">{task.title}</p>
              <p className="text-sm text-gray-300">
                {task.description || "-"} | Completed:{" "}
                <span className={task.isCompleted ? "text-green-400" : "text-red-400"}>
                  {task.isCompleted.toString()}
                </span>{" "}
                | Assigned to:{" "}
                <span className="text-yellow-300">{task.user?.name || "None"}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <DeleteBtn
                deleteMethod={deleteTask}
                deleteId={task.id}
                className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-lg shadow-md transition-colors"
              />

              <Link
                href={`/Lab27/tasks/edit/${task.id}`}
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