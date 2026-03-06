import React from "react";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await prisma.user.findFirstOrThrow({ where: { id } });

  async function submitForm(formData: FormData) {
    "use server";
    const updateData = {
      name: formData.get("name")?.toString() || "",
      city: formData.get("city")?.toString() || "",
      age: Number(formData.get("age")) || 0,
    };
    await prisma.user.update({ where: { id }, data: updateData });
    revalidatePath("/Lab27/users");
    redirect("/Lab27/users");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-6">
      <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <h2 className="mb-6 text-2xl font-bold text-white">Edit User Profile</h2>
        
        <form action={submitForm} className="flex flex-col gap-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-400">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              defaultValue={data.name}
              required
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-400">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              defaultValue={data.city}
              required
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-400">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              defaultValue={data.age}
              required
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUserPage;