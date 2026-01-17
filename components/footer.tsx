"use client";
import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="w-full bg-[#2b2b2b] py-20 px-10 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Sisi Kiri: Info Kontak */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Lets connect.</h2>
          <p className="text-slate-400">
            Tersedia untuk diskusi seputar Backend & AI/ML.
          </p>
          <a
            href="mailto:email@kamu.com"
            className="text-blue-500 hover:underline"
          >
            email@kamu.com
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-3 focus:outline-none"
          >
            <div className="p-4 rounded-full border border-slate-700 group-hover:border-blue-500 transition-colors">
              <ArrowUp
                size={20}
                className="text-slate-400 group-hover:text-blue-500 transition-colors"
              />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-200">
              Back to Top
            </span>
          </motion.button>
        </div>
      </div>

      <div className="mt-20 text-center text-xs text-slate-600 font-mono">
        © 2026 MUHAMMAD FARUQI. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
