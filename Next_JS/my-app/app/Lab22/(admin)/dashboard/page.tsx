import React from 'react'

function Admin_Dashboard() {
  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="min-h-screen bg-[#020617] text-slate-200 font-sans overflow-x-hidden relative">
        
        {/* BACKGROUND GLOWS (Consistent Theme DNA) */}
        <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed bottom-[-10%] left-[10%] w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none z-0"></div>

        {/* 1. TOP NAVIGATION (Minimalist Glass) */}
      

        {/* 2. MAIN CONTENT AREA */}
        <main className="relative z-10 max-w-7xl mx-auto p-8 lg:p-20">
          
          {/* Greeting Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
              System Overview
            </h1>
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                Autonomous Workspace Ready
              </p>
            </div>
          </div>

          {/* Empty Slot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Primary Action Slot (Glassmorphic Button) */}
            <div className="group relative h-80 bg-white/[0.02] border-2 border-dashed border-white/10 rounded-[3rem] flex flex-col items-center justify-center transition-all hover:border-indigo-500/50 hover:bg-indigo-500/5 cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 group-hover:bg-[#667eea] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(102,126,234,0.3)] transition-all mb-6">
                <span className="text-4xl">+</span>
              </div>
              <p className="text-xs font-black text-slate-500 group-hover:text-white uppercase tracking-[0.2em]">
                Initialize Module
              </p>
            </div>

            {/* Secondary Placeholder Slots */}
            {[1, 2].map((i) => (
              <div key={i} className="h-80 bg-white/[0.01] border border-white/5 rounded-[3rem] flex flex-col items-center justify-center opacity-40 group relative overflow-hidden">
                 <div className="w-32 h-2 bg-white/10 rounded-full mb-4"></div>
                 <div className="w-20 h-2 bg-white/5 rounded-full"></div>
                 {/* Decorative scanline effect */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[2000ms]"></div>
              </div>
            ))}
          </div>

          {/* Bottom Info Bar (Premium CTA) */}
          <div className="mt-20 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-[3.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative p-12 bg-slate-950 border border-white/10 rounded-[3.5rem] text-white flex flex-col lg:flex-row justify-between items-center gap-10 shadow-2xl">
              <div className="text-center lg:text-left">
                <h4 className="font-black text-3xl tracking-tighter mb-2">Build your first AI agent</h4>
                <p className="text-slate-500 text-sm font-medium max-w-md">
                  Scale your production by deploying autonomous agents into your secure laboratory environment.
                </p>
              </div>
              <button className="whitespace-nowrap px-12 py-5 bg-white text-black font-black text-xs rounded-2xl hover:bg-[#667eea] hover:text-white transition-all uppercase tracking-widest shadow-2xl shadow-white/5 active:scale-95">
                Get Documentation
              </button>
            </div>
          </div>

        </main>

        {/* Minimal Footer */}
        <footer className="relative z-10 py-10 text-center border-t border-white/5">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em]">
            &copy; 2026 Lab Portal • All Systems Operational
          </p>
        </footer>
      </div>
    </>
  )
}

export default Admin_Dashboard