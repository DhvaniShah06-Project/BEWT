import Link from "next/link";

export default async function Pagination({params,}: {params: { pageNo: string };}) {


  const parsedPage =await parseInt(params.pageNo, 10);
  const page = isNaN(parsedPage) ? 0 : parsedPage;

  const recordsPerPage = 10;
  const startIndex = page * recordsPerPage + 1;
  const endIndex = (page + 1) * recordsPerPage;
   const navItems = [
    { name: "Main", href: "/Lab22" },
    { name: "Admin", href: "/Lab22/dashboard" },
    { name: "Auth", href: "/Lab22/login" },
    { name: "Client", href: "/Lab22/cart" },
    { name: "Pagination", href: "/Lab22/pagination" },
  ];

  return (
    <>
          <script src="https://cdn.tailwindcss.com"></script>
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <nav className="fixed top-0 inset-x-0 z-[100] px-4 py-6">
        <div className="max-w-7xl mx-auto bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-3xl px-8 h-20 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* BRAND - Lab 22 Identity */}
          <Link href="/" className="group flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:rotate-6 transition-all duration-300">
              <span className="text-white font-black text-xs">L22</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold uppercase tracking-tighter text-lg leading-none">
                Lab<span className="text-cyan-400">22</span>
              </span>
              <span className="text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase">Enterprise</span>
            </div>
          </Link>

          {/* NAV - Dynamic Mapping */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

       
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-32" />

      <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-white">Pagination Info</h1>
      <h1 className="text-xl font-semibold text-cyan-400">Page Number: {page}</h1>
      <p className="text-xl font-semibold text-cyan-400">Start Index: {startIndex}</p>
      <p className="text-xl font-semibold text-cyan-400">End Index: {endIndex}</p>
      </main>
    </div>
     
</>

          )
}
