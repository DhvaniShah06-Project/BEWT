import React from 'react'
import Link from 'next/link'

function Auth_Main() {
  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="min-h-screen bg-[#020617] text-slate-200 font-sans flex items-center justify-center relative overflow-hidden">
        
        {/* THEME BACKGROUND GLOWS */}
        <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none"></div>

        <main className="relative z-10 w-full max-w-4xl px-6 text-center">
          
          {/* LOGO AREA */}
          <div className="mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(102,126,234,0.3)] mb-6 transition-transform hover:scale-110 duration-500">
              <span className="text-white font-black text-2xl">L</span>
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter mb-2">Access Portal</h1>
            <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-xs">Secure Laboratory Environment</p>
          </div>

          {/* DUAL ACTION CARDS */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            
            {/* Login Card */}
            <Link href="/auth/login" className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-[2rem] blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] backdrop-blur-xl hover:bg-white/[0.07] transition-all h-full flex flex-col items-center justify-center">
                <h3 className="text-xl font-black text-white mb-2">Sign In</h3>
                <p className="text-xs text-slate-500 font-medium mb-6">Return to your workspace</p>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <span className="text-white">→</span>
                </div>
              </div>
            </Link>

            {/* Register Card */}
            <Link href="/auth/register" className="group relative">
              <div className="absolute -inset-0.5 bg-white/20 rounded-[2rem] blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] backdrop-blur-xl hover:bg-white/[0.07] transition-all h-full flex flex-col items-center justify-center">
                <h3 className="text-xl font-black text-white mb-2">Create Account</h3>
                <p className="text-xs text-slate-500 font-medium mb-6">Initialize new laboratory</p>
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                  <span className="text-white font-bold">+</span>
                </div>
              </div>
            </Link>

          </div>

          {/* FOOTER LINK */}
          <div className="mt-16">
            <Link href="/" className="text-[10px] font-black text-slate-600 hover:text-indigo-400 uppercase tracking-[0.5em] transition-colors">
              ← Return to Main Page
            </Link>
          </div>

        </main>
      </div>
    </>
  )
}

export default Auth_Main