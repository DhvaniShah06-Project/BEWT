import React from 'react'
import Link from 'next/link'

function Lab23_Layout({children}:{children:React.ReactNode}) {
  return (
    <div>
         <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <nav className="fixed top-0 inset-x-0 z-[100] px-4 py-4">
        <div className="max-w-6xl mx-auto bg-slate-950/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 h-16 flex items-center justify-between shadow-2xl">
          
          {/* BRAND / DEFAULT */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(102,126,234,0.3)] group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-[10px]">L23</span>
            </div>
            <span className="text-white font-black uppercase tracking-[0.2em] text-sm hidden sm:block">
              Lab<span className="text-indigo-400">Portal</span>
            </span>
          </Link>

          {/* NAVIGATION LINKS */}
          <ul className="flex items-center gap-2 sm:gap-6">
            {[
              { name: 'Main', href: '/Lab22' },
              { name: 'Feed', href: '/Lab23/feed' },
              { name: 'Photo', href: '/Lab23/photo' },
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className="px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* SYSTEM STATUS INDICATOR */}
         

        </div>
      </nav>
      
      {/* Spacer to prevent content from going under the fixed navbar */}
      <div className="h-24">
        
      </div>
    </>
      {children}
    </div>
  )
}

export default Lab23_Layout
