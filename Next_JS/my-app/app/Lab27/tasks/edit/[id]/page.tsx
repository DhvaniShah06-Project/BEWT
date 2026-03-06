import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function updateTaskAction(id: string, formData: FormData) {
  "use server";

  const data = {
    title: formData.get("title")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    isCompleted: formData.get("isCompleted") === "on",
    user: formData.get("userId")
      ? { connect: { id: formData.get("userId")!.toString() } }
      : undefined,
  };

  await prisma.task.update({ where: { id }, data });

  revalidatePath("/Lab27/tasks");
  redirect("/Lab27/tasks");
}

export default async function EditTaskPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!id) return <p className="text-white">Task ID missing!</p>;

  const task = await prisma.task.findUnique({
    where: { id },
    include: { user: true },
  });

  if (!task) return <p className="text-white">Task not found!</p>;

  const users = await prisma.user.findMany();

  // Server action called by form
  async function submitForm(formData: FormData) {
    "use server";

    const data = {
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      isCompleted: formData.get("isCompleted") === "on",
      user: formData.get("userId")
        ? { connect: { id: formData.get("userId")!.toString() } }
        : undefined,
    };

    await prisma.task.update({ where: { id }, data });
    revalidatePath("/Lab27/tasks");
    redirect("/Lab27/tasks");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-6">
      <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl text-gray-100">
        <h2 className="mb-6 text-2xl font-bold text-white text-center">Edit Task</h2>

        <form action={submitForm} className="flex flex-col gap-5">
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            defaultValue={task.title}
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />

          <input
            type="text"
            name="description"
            placeholder="Task Description"
            defaultValue={task.description || ""}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              name="isCompleted"
              defaultChecked={task.isCompleted}
              className="w-4 h-4 text-blue-500 bg-zinc-800 border-zinc-700 rounded focus:ring-blue-400"
            />
            <label className="ml-2 text-zinc-200">Completed</label>
          </div>

          <select
            name="userId"
            defaultValue={task.user?.id || ""}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">-- Select User --</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} ({user.city})
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500 active:scale-[0.98]"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
}