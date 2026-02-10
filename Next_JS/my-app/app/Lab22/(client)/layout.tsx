import React from 'react'
import Link from 'next/link'

function Client_Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
        
        {/* ATMOSPHERIC BACKGROUND GLOWS */}
        <div className="fixed top-[-5%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-[-5%] left-[-5%] w-[300px] h-[300px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none"></div>

        {/* GLASSMORPHIC FLOATING NAVBAR */}
        <nav className="fixed top-0 inset-x-0 z-[100] px-6 py-8">
          <div className="max-w-4xl mx-auto bg-slate-950/40 backdrop-blur-xl border border-white/5 rounded-[2rem] px-8 h-16 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            
            {/* BRAND / DEFAULT */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <span className="text-white font-black text-[10px]">L22</span>
              </div>
              <span className="text-white font-black uppercase tracking-[0.3em] text-[11px] hidden sm:block">
                Default
              </span>
            </Link>

            {/* NAVIGATION LINKS */}
            <ul className="flex items-center gap-2 sm:gap-6">
              {[
                { name: 'Main Page', href: '/Lab22' },
                { name: 'Cart', href: '/Lab22/cart' },
                { name: 'Profile', href: '/Lab22/profile' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* STATUS BLIP */}
            
          </div>
        </nav>

        {/* CONTENT WRAPPER */}
        {/* pt-32 ensures content starts below the floating navbar */}
        <main className="relative z-10 pt-32 min-h-screen">
          {children}
        </main>

        {/* MINIMALIST FOOTER */}
        <footer className="py-12 border-t border-white/5 text-center">
          <p className="text-[9px] font-bold text-slate-700 uppercase tracking-[0.6em]">
            Lab 22 • Consumer Protocol v1.0
          </p>
        </footer>

      </div>
    </>
  )
}

export default Client_Layout