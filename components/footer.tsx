"use client";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="w-full bg-black text-white pt-10 pb-6 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col h-full justify-between">
        <div className="flex flex-wrap justify-between items-center pb-6 border-b border-slate-800 gap-4">
          <div className="flex gap-6">
            <a href="#" className="group flex items-center gap-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-white transition-colors">
                LinkedIn
              </span>
              <ArrowUpRight
                size={14}
                className="text-slate-600 group-hover:text-blue-500"
              />
            </a>
            <a href="#" className="group flex items-center gap-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-white transition-colors">
                Instagram
              </span>
              <ArrowUpRight
                size={14}
                className="text-slate-600 group-hover:text-blue-500"
              />
            </a>
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            Available for projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 py-8 border-b border-slate-800 gap-8">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-mono text-slate-600 uppercase">
              Email
            </span>
            <h2 className="text-2xl md:text-4xl font-medium tracking-tighter hover:text-blue-400 transition-colors cursor-pointer">
              muhammad.faruqi35@gmail.com
            </h2>
          </div>
        </div>

        <div className="py-8 md:py-12 text-left">
          <h1 className="text-[15vw] md:text-[10vw] font-bold leading-[0.8] tracking-tighter uppercase opacity-90">
            Contact
          </h1>
        </div>

        <div className="flex justify-between items-end pt-6">
          <div className="flex flex-col gap-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-500 hover:text-white transition-all"
            >
              <ArrowUp size={14} /> Back to top
            </button>
            <p className="text-[9px] text-slate-600 font-mono italic">
              © Design & Build by Muhammad Faruqi
            </p>
          </div>
          <div className="text-5xl font-bold tracking-tighter opacity-30 leading-none">
            ©{currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
}
