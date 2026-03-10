import React from 'react'
import Link from 'next/link'

function Lab28_Layout({children}:{children:React.ReactNode}) {
  return (
    <div>
       <div>
      <div className="row">
          <script src="https://cdn.tailwindcss.com"></script>

      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
        
        {/* GORGEOUS BACKGROUND AURAS */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse"></div>
          <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] rounded-full bg-purple-600/20 blur-[120px]"></div>
          <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-blue-600/10 blur-[120px]"></div>
        </div>

        {/* FLOATING GLASS NAV */}
        <nav className="fixed top-6 inset-x-0 z-50 px-6">
         <div className="max-w-7xl mx-w-full">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] flex justify-between items-center">
              
              {/* Animated Logo */}
              <Link href="/" className="relative group flex items-center gap-3">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-black p-2 rounded-lg border border-white/10">
                   <div className="w-5 h-5 bg-gradient-to-tr from-indigo-400 to-cyan-400 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                </div>
                <span className="relative text-xl font-bold tracking-tighter">
                  LAB<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">PORTAL</span>
                </span>
              </Link>

              {/* Links with Hover Glow */}
              <div className="hidden md:flex items-center gap-2">
            
                 <Link href="/Lab28" className="px-5 py-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium">
                  Main Page
                </Link>
                <Link href="/Lab28/demoA" className="px-5 py-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium">
                Demo A
                </Link>
                 <Link href="/Lab28/demoB" className="px-5 py-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium">
                  Demo B
                </Link>
                  <Link href="/Lab28/demoC" className="px-5 py-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium">
                  Demo C
                </Link>
              </div>

            </div>
          </div>
        </nav>

        {/* GORGEOUS CONTENT AREA */}
        <main className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto">
          
          {/* Section Header */}
          

          {/* Main Content Card with "Outer Glow" */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
               {/* Internal Grid Pattern */}
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
               
               <div className="relative z-10">
                 {children || (
                   <div className="flex flex-col items-center justify-center py-20 text-center">
                     <div className="w-20 h-20 mb-6 rounded-full bg-white/5 flex items-center justify-center animate-bounce">
                        <span className="text-3xl">✨</span>
                     </div>
                     <h2 className="text-2xl font-bold mb-2">Ready for deployment</h2>
                     <p className="text-slate-500">Select a module above to begin your creative session.</p>
                   </div>
                 )}
               </div>
            </div>
          </div>
        </main>

      </div>
      </div>
     
    </div>
    </div>
  )
}

export default Lab28_Layout
/*Server action : server ene run kare */