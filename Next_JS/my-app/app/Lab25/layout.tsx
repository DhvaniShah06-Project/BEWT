// import React from "react";
// import Link from "next/link";

// function Lab25_Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div>
//       <script src="https://cdn.tailwindcss.com"></script>

//       <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
//         {/* BACKGROUND AURAS (The "Glow" effect) */}
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]"></div>
//           <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[100px]"></div>
//         </div>

//         {/* FLOATING GLASS NAVIGATION */}
//         <nav className="fixed top-6 inset-x-0 z-50 px-6">
//           <div className="max-w-5xl mx-auto">
//             <div className="bg-slate-950/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex justify-between items-center">
//               {/* Logo with Glow */}
//               <Link href="/" className="group flex items-center gap-2">
//                 <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:rotate-12 transition-transform duration-300">
//                   <span className="text-white font-bold text-xs">L20</span>
//                 </div>
//                 <span className="text-white font-bold tracking-tight text-lg">
//                   LAB<span className="text-cyan-400">20</span>
//                 </span>
//               </Link>

//               {/* Navigation Links */}
//               <ul className="hidden md:flex items-center gap-1">
//                 {[
//                   { name: "Main", path: "/Lab25" },
//                   //   { name: "Home", path: "/Lab25/home" },
//                   //   { name: "About", path: "/Lab25/about" },
//                   //   { name: "Contact", path: "/Lab25/contact" },
//                 ].map((link) => (
//                   <li key={link.path}>
//                     <Link
//                       href={link.path}
//                       className="px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </nav>

//         {/* MAIN CONTENT CONTAINER */}
//         <main className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto">
//           {/* Decorative Page Header */}
//           <div className="mb-10 flex items-center gap-4">
//             <div className="h-px flex-grow bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
//             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/60">
//               Workspace Environment
//             </span>
//             <div className="h-px flex-grow bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
//           </div>

//           {/* Content Card with Glassmorphism */}
//           <div className="relative group">
//             {/* The Outer Glow behind the card */}
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[2rem] blur opacity-75"></div>

//             <div className="relative bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl">
//               {/* Subtle Grid Pattern Overlay */}
//               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>

//               <div className="relative z-10">{children}</div>
//             </div>
//           </div>

//           {/* Footer Decoration */}
//           <p className="mt-8 text-center text-slate-600 text-xs tracking-widest uppercase">
//             &copy; 2026 Lab25 • Secure Environment
//           </p>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Lab25_Layout;

import React from 'react'
import Link from 'next/link'

function Lab25_Layout({children}:{children:React.ReactNode}) {
  return (
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
            
                 <Link href="/Lab25" className="px-5 py-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium">
                  Main Page
                </Link>
                <Link href="/Lab25/products" className="px-5 py-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium">
                  Products
                </Link>
                 <Link href="/Lab25/students" className="px-5 py-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium">
                  Students
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
  )
}

export default Lab25_Layout

