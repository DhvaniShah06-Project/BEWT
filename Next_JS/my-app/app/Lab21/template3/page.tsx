"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="relative min-h-screen bg-[#020617] text-slate-200 font-sans overflow-hidden selection:bg-indigo-500/30">
        {/* 1. ANIMATED BACKGROUND ORBS */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]"></div>
          <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-purple-600/10 blur-[120px]"></div>
        </div>

        {/* 2. NAVBAR */}
        <nav className="fixed top-6 inset-x-0 z-50 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-950/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl flex justify-between items-center shadow-2xl">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
                <span className="text-white font-black tracking-tighter text-xl">
                  AGENT<span className="text-indigo-400">LAB</span>
                </span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-2">
                {["Agents", "Use Cases", "Pricing"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
                    {item}
                  </Link>
                ))}
                <Link
                  href="/signup"
                  className="ml-4 bg-white text-black px-5 py-2 rounded-xl text-xs font-black hover:bg-indigo-400 transition-colors">
                  SIGN UP
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(true)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* 3. MOBILE MENU OVERLAY */}
        <div
          className={`fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <button
            className="absolute top-8 right-8 text-slate-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M18 6L6 18M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {["Home", "Agents", "Use Cases", "Pricing"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-3xl font-black text-white tracking-tighter hover:text-indigo-400"
              onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </Link>
          ))}
          <Link
            href="/signup"
            className="mt-4 bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}>
            Sign Up Now
          </Link>
        </div>

        {/* 4. HERO SECTION */}
        <main className="relative z-10 pt-40 pb-20 px-6 max-w-6xl mx-auto">
          <div className="text-center">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md hover:border-indigo-500/50 transition-colors cursor-default">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                Smart, Fast, Always Active.
              </span>
              <span className="bg-indigo-500 text-[10px] px-2 py-0.5 rounded text-white font-bold">
                Launch App
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              Build, Deploy & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 animate-gradient">
                Talk to AI Agents.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Design AI assistants that research, plan, and execute tasks — all
              powered by your prompts. The future of autonomous work is here.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20">
                Create Agent
              </button>
              <button className="px-10 py-4 bg-slate-900/50 backdrop-blur-md text-white border border-white/10 font-black rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 text-indigo-400"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Floating Decorative Elements */}
            <div className="mt-24 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 h-full w-full"></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-32 bg-slate-800/20 border border-white/5 rounded-2xl backdrop-blur-sm"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </>
  );
}
