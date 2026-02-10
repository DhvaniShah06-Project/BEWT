import React from 'react'
import Link from 'next/link'

function Lab21_Layout({children,}: {children: React.ReactNode;}){
  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="min-h-screen bg-[#020c1b] text-emerald-50 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
        
        {/* ANIMATED AURORA BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[60%] rounded-full bg-emerald-600/10 blur-[130px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-500/10 blur-[120px]"></div>
          <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px]"></div>
        </div>

        {/* FLOATING NEON NAV */}
        <nav className="fixed top-6 inset-x-0 z-50 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-950/40 backdrop-blur-2xl border border-emerald-500/20 px-8 py-4 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] flex justify-between items-center">
              
              {/* Brand Logo with Glow */}
              <Link href="/" className="group flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative w-10 h-10 bg-black rounded-full border border-emerald-500/50 flex items-center justify-center">
                    <span className="text-emerald-400 font-black text-xs">21</span>
                  </div>
                </div>
                <span className="text-white font-bold tracking-widest text-lg">
                  LAB<span className="text-emerald-400">TEMPLATE</span>
                </span>
              </Link>

              {/* Navigation Links with Glass Effect */}
              <ul className="hidden lg:flex items-center gap-2">
                {[
                  { name: "Main Page", path: "/Lab21" },
                  { name: "Template 1", path: "/Lab21/template1" },
                  { name: "Template 2", path: "/Lab21/template2" },
                  { name: "Template 3", path: "/Lab21/template3" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link 
                      href={item.path} 
                      className="px-5 py-2 rounded-full text-emerald-100/60 hover:text-white hover:bg-emerald-500/10 transition-all duration-300 text-sm font-semibold tracking-wide"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </nav>

        {/* CONTENT AREA */}
        <main className="relative pt-36 pb-20 px-6 max-w-6xl mx-auto">
          
          {/* Subtle Page Header Area */}
          <div className="mb-12">
            <h2 className="text-emerald-400 text-xs font-black uppercase tracking-[0.4em] mb-2">Design System</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-transparent rounded-full"></div>
          </div>

          {/* Gorgeous Main Container */}
          <div className="relative group">
            {/* The "Aurora Glow" border */}
            <div className="absolute -inset-[1px] bg-gradient-to-tr from-emerald-500/40 via-transparent to-teal-500/40 rounded-[3rem] blur-sm"></div>
            
            <div className="relative bg-[#051122]/80 backdrop-blur-md border border-white/5 rounded-[3rem] p-10 shadow-3xl overflow-hidden min-h-[600px]">
              {/* Grain Texture */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>
              
              <div className="relative z-10">
                {children}
              </div>
            </div>
          </div>

          {/* Bottom Branding */}
          <footer className="mt-12 text-center">
            <p className="text-emerald-900 font-bold text-sm tracking-widest uppercase">
              Experimental UI Section 21
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Lab21_Layout