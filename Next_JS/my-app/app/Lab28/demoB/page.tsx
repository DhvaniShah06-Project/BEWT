'use client'

import React from 'react'
import { submitUserData } from './action'

function Lab_28_DemoB() {

  return (
   <div className="min-h-screen bg-black flex items-center justify-center p-6">
  <form action={submitUserData} className="w-full max-w-md bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-2xl">
    <h2 className="text-2xl font-bold text-white mb-6">User Information</h2>
    
    <div className="space-y-4">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        />
      </div>

      {/* Age Field */}
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-zinc-400 mb-1">Age</label>
        <input 
          type="text" 
          id="age" 
          name="age" 
          required 
          className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        />
      </div>

      {/* Country Field */}
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-zinc-400 mb-1">Country</label>
        <input 
          type="text" 
          id="country" 
          name="country" 
          required 
          className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full mt-4 bg-white text-black font-semibold py-3 rounded-lg hover:bg-zinc-200 transition-colors duration-200 active:scale-[0.98]"
      >
        Submit
      </button>
    </div>
  </form>
</div>
  )
}

export default Lab_28_DemoB
