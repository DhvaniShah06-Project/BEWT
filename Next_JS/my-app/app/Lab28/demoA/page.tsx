import React from 'react'

async function handleFormSubmit(formData:FormData) {
    "use server"

    const name=formData.get('name') as string
    const email = formData.get('email') as string
    console.log('Name:', name)
    console.log('Email:', email)
}

function DemoA_Page() {
  return (
 <div className="min-h-screen bg-black flex items-center justify-center p-4">
  <form 
    action={handleFormSubmit} 
    className="w-full max-w-sm bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-xl"
  >
        <h2 className="text-2xl font-bold text-white mb-6">User Information</h2>

    <div className="space-y-6">
      {/* Name Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">
          Name
        </label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-zinc-600"
          placeholder="Enter your name"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">
          Email
        </label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-zinc-600"
          placeholder="you@example.com"
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 active:scale-[0.97] transition-all duration-200 mt-2"
      >
        Submit
      </button>
    </div>
  </form>
</div>
  )
}

export default DemoA_Page
