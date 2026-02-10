import React from 'react'

function client_Cart() {
  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 relative overflow-hidden flex items-center justify-center">
        
        {/* THEME BACKGROUND GLOWS */}
        <div className="fixed top-[-5%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-[-5%] left-[-5%] w-[300px] h-[300px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none"></div>

        <main className="relative z-10 w-full max-w-lg px-6">
          
          {/* CART CONTAINER */}
          <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 backdrop-blur-3xl shadow-2xl">
            
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-black text-white tracking-tighter">Your Cart</h1>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2">Secure Checkout Suite</p>
            </div>

            {/* MINIMUM DATA ITEM LIST */}
            <div className="space-y-6 mb-10">
              {[
                { name: 'Core Module A1', qty: '01', price: '$499' },
                { name: 'Neural Patch', qty: '02', price: '$120' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0">
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.name}</h4>
                    <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mt-1">QTY: {item.qty}</p>
                  </div>
                  <p className="font-black text-white tracking-tighter">{item.price}</p>
                </div>
              ))}
            </div>

            {/* SUMMARY SECTION */}
            <div className="bg-white/5 rounded-2xl p-6 space-y-3 mb-8">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>Subtotal</span>
                <span>$619.00</span>
              </div>
              <div className="flex justify-between text-lg font-black text-white pt-2 border-t border-white/5">
                <span>Total</span>
                <span className="text-indigo-400">$619.00</span>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <button className="w-full py-5 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-indigo-500/20 hover:scale-[1.02] transition-all active:scale-95">
              Confirm Transaction
            </button>

            <button className="w-full mt-4 text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-colors">
              Continue Shopping
            </button>
          </div>

          {/* MINIMAL FOOTER */}
          <p className="mt-8 text-center text-[9px] font-bold text-slate-600 uppercase tracking-[0.4em]">
            Encryption Active • 256-bit SSL
          </p>
        </main>
      </div>
    </>
  )
}

export default client_Cart