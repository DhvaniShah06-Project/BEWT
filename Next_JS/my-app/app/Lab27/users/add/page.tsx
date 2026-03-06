import React from 'react'
import { prisma } from "@/lib/prisma";
import { revalidatePath } from 'next/cache'
import {redirect} from "next/navigation"


function Add_User() {

    async function submitForm(formData:FormData){
        "use server"
        const data={
            name:formData.get("name")?.toString()||"",
            city:formData.get("city")?.toString()||"",
            age:Number(formData.get("age"))||0,
        }

        await prisma.user.create({data});
        revalidatePath("/Lab27/users")
        redirect("/Lab27/users")
    }
  return (
    <div>
      <div>
        <h1>Add User</h1>
        <form action={submitForm}>
            <input type="text" name='name' placeholder='Name' required/>
            <input type="text" name='city' placeholder='City' required/>
            <input type="text" name='age' placeholder='Age' required/>
            <button type='submit'>Add User</button>
        </form>
      </div>
    </div>
  )
}

export default Add_User
