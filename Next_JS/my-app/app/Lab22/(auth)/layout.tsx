import React from 'react'
import Link from 'next/link'

function Auth_Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30">
        
        {/* THEME BACKGROUND GLOWS (Consistent with your Home/Auth pages) */}
        <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none z-0"></div>

        {/* GORGEOUS MINIMAL NAVBAR */}
        <nav className="fixed top-0 inset-x-0 z-[100] px-6 py-4">
          <div className="max-w-5xl mx-auto bg-slate-950/40 backdrop-blur-xl border border-white/5 rounded-2xl px-6 h-14 flex items-center justify-between shadow-2xl">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <span className="text-white font-black text-[10px]">L22</span>
              </div>
              <span className="text-white font-black tracking-tighter text-sm uppercase hidden sm:block">
                Default
              </span>
            </Link>

            {/* Auth Navigation Links */}
            <ul className="flex items-center gap-2 sm:gap-6">
              {[
                { name: 'Main Page', href: '/Lab22' },
                { name: 'Login', href: '/Lab22/login' },
                { name: 'Register', href: '/Lab22/register' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* AUTH CONTENT WRAPPER */}
        <main className="relative z-10 flex items-center justify-center min-h-screen pt-20">
          {children}
        </main>

        {/* SECURE SESSION INDICATOR (Footer) */}
        <footer className="fixed bottom-6 inset-x-0 text-center pointer-events-none opacity-40">
          <p className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.5em]">
            Secure Encryption Module Active
          </p>
        </footer>

      </div>
    </>
  )
}

export default Auth_Layout