"use server";
interface UserDataResult{
    success: boolean;
    data: {
        name: string;
        age: string;
        country: string;
    }
}

export async function submitUserData(formData:FormData):Promise<UserDataResult>{
    const name = formData.get('name') as string;
    const age = formData.get('age') as string;
    const country = formData.get('country') as string;

    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Country:', country);
    return{
        success: true,
        data: {
            name,
            age,
            country
    }
}
}
