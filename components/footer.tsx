"use client";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="w-full bg-black text-white px-6 md:px-16 pt-16 md:pt-24 pb-5 md:pb-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-4xl md:text-7xl font-medium leading-[0.95] tracking-tight">
            Say Hello,
          </h2>
          <h2 className="text-4xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
            I Don&apos;t Bite.
          </h2>
        </div>

        <div className="mt-10 md:mt-14">
          <a
            href="mailto:muhammad.faruqi35@gmail.com"
            className="text-l md:text-2xl text-neutral-200 hover:text-white transition-colors"
          >
            muhammad.faruqi35@gmail.com
          </a>
        </div>

        <div className="mt-2 md:mt-4 border-t border-white/15 pt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm md:text-base">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-faruqi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mfaruqi35"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-sm md:text-base text-neutral-400">
            © {currentYear} Muhammad Faruqi
          </p>
        </div>
      </div>
    </footer>
  );
}
