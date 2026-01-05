"use client";

import { useState, useEffect } from "react";
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
    <nav className="fixed top-0 w-full z-50 bg-slate-50-900/80 backdrop-blur-md border h-15 flex items-center place-content-between pl-10">
      <div>
        <Link href="#hero">
          Muhammad<span className="font-bold">Faruqi</span>
        </Link>
      </div>
      <div className="flex flex-row h-full justify-between items-center w-2xl border-l px-20">
        {navLinks.map((link) => (
          <div key={link.id}>
            <Link
              href={link.href}
              className={`transition-colors duration-300 ${
                activeSection === link.id
                  ? `text-blue-600`
                  : `text-slate-500 hover:text-blue-600`
              }`}
            >
              {link.name}
            </Link>
          </div>
        ))}
        {/* <div>
          <Link href="#works">Works</Link>
        </div>
        <div>
          <Link href="#about">About</Link>
        </div>
        <div>
          <Link href="#contact">Contact</Link>
        </div> */}
      </div>
    </nav>
  );
}
