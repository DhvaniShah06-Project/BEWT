import React from "react";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await prisma.user.findFirstOrThrow({ where: { id } });

  async function submitForm(formData: FormData) {
    "use server";
    const data = {
      name: formData.get("name")?.toString() || "",
      city: formData.get("city")?.toString() || "",
      age: Number(formData.get("age")) || 0,
    };
    await prisma.user.update({ where: { id }, data });
    revalidatePath("/Lab27/users");
    redirect("/Lab27/users");
  }

  return (
    <div>
        <form action={submitForm}>
            <input type="text" name='name' placeholder='Name' defaultValue={data.name} required/>
            <input type="text" name='city' placeholder='City' defaultValue={data.city} required/>
            <input type="text" name='age' placeholder='Age' defaultValue={data.age} required/>
            <button type='submit'>Update User</button>
        </form>
    </div>
  )
}

export default EditUserPage;
