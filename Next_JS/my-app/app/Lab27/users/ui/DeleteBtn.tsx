"use client"

export default async function DeleteButton(params:any){
    const {deleteId,deleteMethod}=await params;

    return(
        <button
        onClick={()=>{
            deleteMethod(deleteId);
        }}
          className="px-3 py-1 bg-red-600 rounded-lg hover:bg-red-500 text-white text-sm" >
            Delete
        </button>
    )
}