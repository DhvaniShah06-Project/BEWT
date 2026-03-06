import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import React from "react";

function Add_task() {

  async function submitForm(formData: FormData) {
    "use server"

    const data = {
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      isCompleted: formData.get("isCompleted") === "on" ? true : false
    };

    await prisma.task.create({ data });
    revalidatePath("/Lab27/tasks");
    redirect("/Lab27/tasks");
  }

  return (
    <div>
      <h1>Add Task</h1>

      <form action={submitForm}>
        <input type="text" name="title" placeholder="Task Title" required />
        <br /><br />
        <input type="text" name="description" placeholder="Task Description" />
        <br /><br />
        <input type="checkbox" name="isCompleted" id="isCompleted" />
        <label htmlFor="isCompleted">Completed</label>
        <br /><br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default Add_task;