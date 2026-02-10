import React from "react";
import Link from "next/link";

export default function Lab20_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Tailwind CDN for single-file styling */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
        
        {/* BACKGROUND AURAS (The "Glow" effect) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[100px]"></div>
        </div>

        {/* FLOATING GLASS NAVIGATION */}
        <nav className="fixed top-6 inset-x-0 z-50 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-950/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex justify-between items-center">
              
              {/* Logo with Glow */}
              <Link href="/" className="group flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">L20</span>
                </div>
                <span className="text-white font-bold tracking-tight text-lg">
                  LAB<span className="text-cyan-400">20</span>
                </span>
              </Link>

              {/* Navigation Links */}
              <ul className="hidden md:flex items-center gap-1">
                {[
                  { name: "Main", path: "/Lab20" },
                  { name: "Home", path: "/Lab20/home" },
                  { name: "About", path: "/Lab20/about" },
                  { name: "Contact", path: "/Lab20/contact" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT CONTAINER */}
        <main className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto">
          
          {/* Decorative Page Header */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/60">
              Workspace Environment
            </span>
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          </div>

          {/* Content Card with Glassmorphism */}
          <div className="relative group">
            {/* The Outer Glow behind the card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[2rem] blur opacity-75"></div>
            
            <div className="relative bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl">
              {/* Subtle Grid Pattern Overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
              
              <div className="relative z-10">
                {children}
              </div>
            </div>
          </div>

          {/* Footer Decoration */}
          <p className="mt-8 text-center text-slate-600 text-xs tracking-widest uppercase">
            &copy; 2024 Lab20 • Secure Environment
          </p>
        </main>
      </div>
    </>
  );
}