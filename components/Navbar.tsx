"use client";

import { useState, useEffect } from "react";
import RollingText from "./RollingText";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "works", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section in sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Works", href: "#works", id: "works" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent h-14 flex items-center place-content-between pl-10 text-white border-b mix-blend-difference">
      <div>
        <Link href="/">
          <div className="flex flex-col w-75">MUHAMMAD FARUQI</div>
        </Link>
      </div>
      <div className="flex flex-row h-full justify-between items-center w-3xl border-l px-25 font-medium">
        {navLinks.map((link) => (
          <div key={link.id}>
            <Link
              href={link.href}
              className={`transition-colors duration-300 ${
                activeSection === link.id
                  ? `text-[#2b2b2b] `
                  : `text-slate-500 hover:text-blue-600`
              }`}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
