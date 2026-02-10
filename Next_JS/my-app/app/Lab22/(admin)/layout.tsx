import React from 'react'
import Link from 'next/link'

function Admin_Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30">
        
        {/* GORGEOUS FLOATING NAVBAR */}
        <nav className="fixed top-0 inset-x-0 z-[100] px-6 py-4">
          <div className="max-w-6xl mx-auto bg-slate-950/40 backdrop-blur-xl border border-white/5 rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <span className="text-white font-black text-[10px]">L22</span>
              </div>
              <span className="text-white font-black tracking-tighter text-lg uppercase hidden sm:block">
                Lab<span className="text-indigo-400">22</span>
              </span>
            </Link>

            {/* Navigation Links */}
            <ul className="flex items-center gap-1 sm:gap-4">
              {[
                { name: 'Main', href: '/Lab22' },
                { name: 'Dashboard', href: '/Lab22/dashboard' },
                { name: 'Product', href: '/Lab22/product' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Status Indicator */}
           
          </div>
        </nav>

        {/* PAGE CONTENT WRAPPER */}
        {/* Padding-top added so content doesn't hide under the fixed navbar */}
        <div className="relative pt-24 min-h-screen">
          {children}
        </div>

      </div>
    </>
  )
}

export default Admin_Layout