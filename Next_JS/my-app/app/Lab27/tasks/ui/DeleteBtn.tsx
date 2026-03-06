"use client";

export default async function DeleteButton(params: any) {
  const { deleteId, deleteMethod } = await params;

  return (
  <div className="flex gap-2">
  <button
    onClick={() => deleteMethod(deleteId)}
    className="px-2 py-1 bg-red-600 rounded-lg  text-white text-sm">
    Delete
  </button>
  </div>
  );
}
