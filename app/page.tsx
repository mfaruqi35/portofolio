'use client';

import { useState, useEffect, useRef } from 'react';

// Tipe untuk key dari section
type SectionKey = 'home' | 'works' | 'about' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>('home');
  const [showSocial, setShowSocial] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Gunakan useRef(null) dan biarkan React infer tipe secara otomatis
  const homeRef = useRef<HTMLElement>(null);
  const worksRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Tipe object sections agar TypeScript tahu key dan value-nya
  const sections = {
    home: homeRef,
    works: worksRef,
    about: aboutRef,
    contact: contactRef,
  } as const; // <-- Ini membuat objek immutable dan type-safe

  const email = "emailku@example.com";

  // Handle scroll untuk deteksi section aktif
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Loop dengan type-safe key
      (Object.entries(sections) as [SectionKey, typeof homeRef][]).forEach(([id, ref]) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const height = ref.current.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionKey) => {
    const ref = sections[id];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex bg-black text-white">
      {/* Desktop Navbar - Vertical Box */}
      <nav className="fixed top-8 left-8 hidden md:block w-32 p-4 bg-black border border-gray-700 rounded-md">
        <div className="space-y-3">
          {(['home', 'works', 'about'] as SectionKey[]).map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`block w-full text-left text-sm transition-colors ${
                activeSection === item ? 'font-medium text-white' : 'text-gray-400'
              } ${activeSection === item ? 'relative before:content-[""] before:absolute before:left-[-12px] before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full' : ''}`}
              onMouseEnter={(e) => e.currentTarget.classList.add('text-gray-200')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('text-gray-200')}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          {/* Contact - Hover to Show Social */}
          <div
            className="relative"
            onMouseEnter={() => setShowSocial(true)}
            onMouseLeave={() => setShowSocial(false)}
          >
            <button
              className={`block w-full text-left text-sm transition-colors ${
                activeSection === 'contact' ? 'font-medium text-white' : 'text-gray-400'
              } ${activeSection === 'contact' ? 'relative before:content-[""] before:absolute before:left-[-12px] before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full' : ''}`}
              onMouseEnter={(e) => e.currentTarget.classList.add('text-gray-200')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('text-gray-200')}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Social Media - Appears to the right of navbar on hover */}
      {showSocial && (
        <div className="fixed top-8 left-40 z-50 bg-black border border-gray-700 rounded-md p-4 w-40">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-300 hover:text-white transition">
            LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-300 hover:text-white transition">
            Instagram
          </a>
          <button
            onClick={copyEmail}
            className="block w-full text-left py-1 text-sm text-gray-300 hover:text-white transition"
          >
            {copied ? 'Copied!' : 'Email'}
          </button>
        </div>
      )}

      {/* Mobile Navbar - Horizontal */}
      <nav className="fixed top-0 left-0 w-full bg-black z-50 p-3 flex justify-around md:hidden shadow-sm">
        {(['home', 'works', 'about', 'contact'] as SectionKey[]).map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`text-xs ${activeSection === item ? 'font-medium text-white' : 'text-gray-400'}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="pt-16 md:pt-0 ml-0 md:ml-40 w-full">
        <section ref={homeRef} className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-light">Let’s make</h1>
          <h1 className="text-5xl font-light mt-4">it move.</h1>
        </section>

        <section ref={worksRef} className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Works</h1>
        </section>

        <section ref={aboutRef} className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">About Me</h1>
        </section>

        {/* Section Contact - Mobile & Desktop */}
        <section ref={contactRef} className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-6">Contact</h1>
          <div className="space-y-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-lg text-gray-300 hover:text-white transition">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-lg text-gray-300 hover:text-white transition">
              Instagram
            </a>
            <button
              onClick={copyEmail}
              className="block text-lg text-gray-300 hover:text-white transition"
            >
              {copied ? 'Copied!' : email}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}