"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    <nav className="fixed top-0 w-full z-50 bg-transparent h-14 flex items-center justify-between px-6 md:pl-10 text-white border-b border-slate-800 mix-blend-difference">
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

      <Link
        href="#about"
        className={`flex md:hidden text-white font-medium ${navFont.className}`}
      >
        About
      </Link>
    </nav>
  );
}
