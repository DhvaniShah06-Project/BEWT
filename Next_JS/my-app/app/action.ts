"use server"

interface ValidationErrors{
    username?:string
    email?:string
    password?:string
    age?:string
}

interface FormResult{
    success:boolean
    errors?:ValidationErrors
    data?:{
        username:string
        email:string
        age:number
    }
}

export async function validateAndSubmitForm(formData:FormData):Promise<FormResult>{
    const errors: ValidationErrors={}

    const username = formData.get('username') as string | null
    const email = formData.get('email') as string | null
    const password = formData.get('password') as string | null
    const age = formData.get('age') as string | null

    console.log("User name : ",username)
    console.log("Email : ",email)
    console.log("AGE : ",age)
    console.log("Password : ",password)

    if(!username || username.trim().length <3){
        errors.username="Username must be at least 3 characters long"
        console.log("Username is invalid")
    }
    else{
        console.log("Username is valid")
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!email || !emailRegex.test(email)){
        errors.email="Please enter a valid email address"
        console.log("Email is invalid")
    }else{
        console.log("Email is valid")
    }

    const ageNum = parseInt(age || '')
    if (!age || isNaN(ageNum) || ageNum < 18) {
        errors.age = "You must be at least 18 years old"
        console.log("Age is invalid")
    }else{
        console.log("Age is valid")
    }
    if (!password || password.length < 8) {
        errors.password = "Password must be at least 8 characters long"
        console.log("Password is invalid")
    } else {
        console.log("Password is valid")
    }
  return{
    success:true,
    data:{
   username:username!.trim(),
    email:email!.trim(),
    age:ageNum,
    }
 

  }

}