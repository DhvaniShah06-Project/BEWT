import React from 'react'

function client_Profile() {
  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="min-h-screen bg-[#020617] text-slate-200 font-sans flex items-center justify-center p-6 relative overflow-hidden">
        
        {/* BACKGROUND AMBIENCE */}
        <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none"></div>

        <main className="relative z-10 w-full max-w-4xl bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-3xl shadow-2xl flex flex-col md:flex-row">
          
          {/* LEFT SIDE: IDENTITY CARD */}
          <div className="w-full md:w-1/3 bg-white/[0.03] p-12 flex flex-col items-center border-b md:border-b-0 md:border-r border-white/5">
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative w-28 h-28 rounded-full bg-slate-900 border-2 border-white/10 flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-black text-white">JD</span>
              </div>
            </div>
            
            <h2 className="text-xl font-black text-white tracking-tighter mb-1">John Doe</h2>
            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-8">Verified Explorer</p>
            
            <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest text-white transition-all">
              Edit Avatar
            </button>
          </div>

          {/* RIGHT SIDE: MINIMUM DATA LIST */}
          <div className="w-full md:w-2/3 p-12">
            <div className="flex justify-between items-end mb-10">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Account Metadata</h3>
              <button className="text-[9px] font-black text-indigo-400 hover:text-white uppercase tracking-widest transition-colors">Modify Account</button>
            </div>

            <div className="space-y-8">
              {[
                { label: 'Primary ID', value: 'j.doe@lab22.sh' },
                { label: 'Access Level', value: 'Tier 02 - Alpha' },
                { label: 'Join Date', value: 'FEB 2026' },
                { label: 'Encryption Key', value: '•••• •••• •••• 8812' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{item.label}</span>
                  <span className="text-sm font-black text-white tracking-tight">{item.value}</span>
                </div>
              ))}
            </div>

            {/* SECURITY LOGOUT */}
            <div className="mt-12 pt-8 flex justify-end">
              <button className="flex items-center gap-3 text-red-400/50 hover:text-red-400 transition-colors group">
                <span className="text-[10px] font-black uppercase tracking-widest">Terminate Session</span>
                <div className="w-6 h-px bg-red-400/20 group-hover:w-10 transition-all"></div>
              </button>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default client_Profile