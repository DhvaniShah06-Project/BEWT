"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

async function deleteUser(id: string) {
  await prisma.user.delete({
    where: { id }
  });

  revalidatePath("/Lab27/users");
  redirect("/Lab27/users");
}

export { deleteUser };