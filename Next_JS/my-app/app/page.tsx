import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Tailwind CDN */}
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
          <div className="max-w-5xl mx-auto">
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
                {["20", "21", "22", "23","24"].map((num) => (
                  <Link 
                    key={num}
                    href={`/Lab${num}`} 
                    className="px-5 py-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium"
                  >
                    Lab {num}
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </nav>

        {/* GORGEOUS CONTENT AREA */}
        <main className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
              Workspace v2.0
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              Creative Lab Suite
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Experiment with next-generation interface designs and interactive components.
            </p>
          </div>

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
    </>
  );
}