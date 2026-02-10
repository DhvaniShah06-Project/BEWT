import React from 'react'

function Template() {
  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="relative space-y-12">
        
        {/* HERO SECTION */}
        <section className="relative py-12">
          <div className="flex flex-col items-center text-center">
            {/* Animated Glow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Lab 21 Active</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
              Core Design <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Architectures.</span>
            </h1>

            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              Welcome to the main module of Lab 21. Here we explore advanced template systems, 
              asymmetric layouts, and high-performance glassmorphism.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { id: "01", name: "Template 1", desc: "Clean Editorial Design", color: "from-emerald-500" },
            { id: "02", name: "Template 2", desc: "Glassmorphic Cards", color: "from-teal-500" },
            { id: "03", name: "Template 3", desc: "Minimalist Hero Suite", color: "from-cyan-500" },
          ].map((item) => (
            <div key={item.id} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} to-blue-500 rounded-3xl blur opacity-10 group-hover:opacity-40 transition duration-500`}></div>
              <div className="relative bg-slate-950/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:border-emerald-500/30 transition-all">
                <span className="text-4xl font-black text-white/5 absolute top-4 right-6">{item.id}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{item.desc}</p>
                <button className="text-xs font-black uppercase tracking-widest text-emerald-400 group-hover:text-white transition-colors">
                  View Template →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SYSTEM STATUS FOOTER */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-[10px] font-black uppercase text-slate-600 tracking-widest">Environment</p>
              <p className="text-sm font-bold text-emerald-500">Production Ready</p>
            </div>
            <div className="h-8 w-px bg-white/5"></div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-600 tracking-widest">Version</p>
              <p className="text-sm font-bold text-slate-300">2.1.0-alpha</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-2xl transition-all shadow-lg shadow-emerald-900/20 uppercase tracking-tighter">
            Initialize Module
          </button>
        </div>

      </div>
    </>
  )
}

export default Template