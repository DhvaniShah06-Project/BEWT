import React from 'react'

export default function AboutDarkTemplate() {
  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="relative min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden rounded-[3rem]">
        
        {/* BACKGROUND AURAS (Maintains Home Theme) */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[130px] animate-pulse"></div>
          <div className="absolute -bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]"></div>
        </div>

        <main className="relative z-10 max-w-6xl mx-auto px-8 py-24">
          
          {/* TOP SECTION: LARGE TYPOGRAPHY */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <span className="inline-block py-1 px-3 mb-6 text-[10px] font-black tracking-[0.5em] text-indigo-400 uppercase border border-indigo-500/30 bg-indigo-500/10 rounded-full">
                Our Philosophy
              </span>
              <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                Beyond the <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Pixels.</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-md">
                We don't just build interfaces; we craft digital ecosystems that breathe and react to human intent.
              </p>
            </div>

            {/* DECORATIVE ELEMENT: GLASS BOX */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-2xl border border-white/10 p-12 rounded-[2.5rem] overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Visionary Labs</h3>
                <p className="text-slate-400 leading-relaxed">
                  Our mission is to simplify complexity. By merging minimalist aesthetics with robust architecture, we create the standard for tomorrow's web.
                </p>
              </div>
            </div>
          </div>

          {/* STATS GRID: BORDERLESS & CLEAN */}
          <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
            {[
              { label: "Experiments Run", val: "12,400+", color: "text-indigo-400" },
              { label: "Global Users", val: "85K", color: "text-emerald-400" },
              { label: "Success Rate", val: "99.9%", color: "text-cyan-400" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2 group-hover:text-white transition-colors">
                  {stat.label}
                </p>
                <h4 className={`text-5xl font-black tracking-tighter ${stat.color}`}>
                  {stat.val}
                </h4>
              </div>
            ))}
          </div>

          {/* CALL TO ACTION AREA */}
          <div className="mt-32 text-center p-16 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to see what's inside?</h2>
            <button className="px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-105">
              EXPLORE OUR PROJECTS
            </button>
          </div>

        </main>
      </div>
    </>
  )
}