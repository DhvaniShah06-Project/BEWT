import React from 'react'

function Admin_Product() {
  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden relative">
        
        {/* THEME BACKGROUND GLOWS */}
        <div className="fixed top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none"></div>

        <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
          
          {/* MINIMAL HEADER */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-2">Vault / Assets</p>
              <h1 className="text-4xl font-black text-white tracking-tighter">Products</h1>
            </div>
            <button className="px-6 py-3 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-indigo-500 hover:text-white transition-all active:scale-95 shadow-lg shadow-white/5">
              + New Entry
            </button>
          </div>

          {/* PRODUCT LIST (Minimum Data Style) */}
          <div className="space-y-4">
            
            {/* Example Product Item */}
            {[
              { id: 'PRD-01', name: 'Neural Link Module', price: '$2,400' },
              { id: 'PRD-02', name: 'Bio-Static Sensor', price: '$850' }
            ].map((item) => (
              <div key={item.id} className="group bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] flex items-center justify-between hover:bg-white/[0.04] hover:border-white/10 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div>
                    <h4 className="font-bold text-white tracking-tight">{item.name}</h4>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-indigo-400 tracking-tighter">{item.price}</p>
                  <button className="text-[10px] font-black text-slate-600 hover:text-white uppercase tracking-tighter mt-1 transition-colors">Edit</button>
                </div>
              </div>
            ))}

            {/* EMPTY STATE PLACEHOLDER */}
            <div className="border-2 border-dashed border-white/5 rounded-[2rem] p-12 flex flex-col items-center justify-center opacity-40">
               <div className="w-8 h-1 bg-white/10 rounded-full mb-2"></div>
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">End of Inventory</p>
            </div>

          </div>

          {/* FOOTER STATUS */}
          <div className="mt-12 flex items-center justify-center gap-3">
             <div className="h-1 w-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
             <p className="text-[9px] font-bold text-slate-700 uppercase tracking-[0.5em]">Lab 21 Secure Vault</p>
             <div className="h-1 w-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>

        </main>
      </div>
    </>
  )
}

export default Admin_Product