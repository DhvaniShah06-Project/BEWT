import React from "react";

export default function Template1() {
  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>

      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden bg-slate-950 rounded-[3rem]">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-4xl text-center">
          <span className="inline-block py-1 px-3 mb-6 text-[10px] font-black tracking-[0.4em] text-indigo-400 uppercase border border-indigo-500/30 bg-indigo-500/10 rounded-full">
            Welcome to the Future
          </span>

          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Design that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Transcends.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience a workspace where aesthetics meet high-performance logic.
            No cards, no borders—just pure, immersive interface design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
              Get Started
            </button>
            <button className="px-10 py-4 bg-slate-900 text-white border border-slate-800 font-bold rounded-2xl hover:bg-slate-800 transition-all">
              Live Demo
            </button>
          </div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      </section>
    </>
  );
}
