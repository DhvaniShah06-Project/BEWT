"use client"

export default async function DeleteButton(params:any){
    const {deleteId,deleteMethod}=await params;

    return(
        <button
        onClick={()=>{
            deleteMethod(deleteId);
        }}>
            Delete
        </button>
    )
}