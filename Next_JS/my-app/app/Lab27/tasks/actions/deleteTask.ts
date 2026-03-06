import React from 'react'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import {prisma} from "@/lib/prisma"

async function deleteTask(id:string) {
    await prisma.task.delete({
        where:{id}
    })
 revalidatePath("Lab27/tasks")
redirect("Lab27/tasks")
}

export default deleteTask
