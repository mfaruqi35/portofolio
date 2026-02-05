"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const logoFont = Inter({
  subsets: ["latin"],
  weight: "700",
});

const navFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "600",
});

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "works", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#works", id: "works" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black md:bg-transparent h-14 flex items-center justify-between px-6 md:pl-10 text-white border-b border-slate-800 md:mix-blend-difference">
      <div>
        <Link href="/">
          <div className={`font-bold tracking-tighter ${logoFont.className}`}>
            MUHAMMAD FARUQI
          </div>
        </Link>
      </div>

      <div className="hidden md:flex flex-row h-full justify-between items-center w-3xl border-l border-slate-800 px-25 font-medium">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <Link
              key={link.id}
              href={link.href}
              className={`group relative inline-block h-6 pb-1 text-white overflow-hidden ${navFont.className}`}
            >
              <span
                className={`block transition-all duration-300 ease-out
        group-hover:-translate-y-full group-hover:-rotate-2
        `}
              >
                {link.name}
              </span>

              <span
                className="absolute inset-0 block translate-y-full rotate-3
        transition-all duration-300 ease-out
        group-hover:translate-y-0 group-hover:rotate-0 text-white"
              >
                {link.name}
              </span>

              {isActive && (
                <span className="absolute left-1/2 -bottom-2 w-2 h-2 bg-black rounded-sm -translate-x-1/2" />
              )}
            </Link>
          );
        })}
      </div>

      <button
        className="flex md:hidden flex-col gap-1.5 cursor-pointer z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X size={28} strokeWidth={1.5} />
        ) : (
          <>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </>
        )}
      </button>

      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col px-8 py-20 transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex flex-col group"
            >
              <span className="text-5xl font-medium tracking-tighter group-active:text-blue-500">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-auto border-t border-slate-800 pt-10 flex flex-col gap-6">
          <span className="text-[10px] font-serif italic text-slate-500">
            Social
          </span>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-1 text-xs font-bold tracking-widest uppercase"
            >
              INSTAGRAM <ArrowUpRight size={14} className="text-slate-500" />
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-xs font-bold tracking-widest uppercase"
            >
              LINKEDIN <ArrowUpRight size={14} className="text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
