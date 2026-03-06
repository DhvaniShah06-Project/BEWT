import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function Add_User() {
  async function submitForm(formData: FormData) {
    "use server";

    const data = {
      name: formData.get("name")?.toString() || "",
      city: formData.get("city")?.toString() || "",
      age: Number(formData.get("age")) || 0,
    };

    await prisma.user.create({ data });
    revalidatePath("/Lab27/users");
    redirect("/Lab27/users");
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-white text-center">Add User</h1>

        <form action={submitForm} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* City */}
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Age */}
          <div>
            <input
              type="number"
              name="age"
              placeholder="Age"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-md shadow-md transition-colors"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}