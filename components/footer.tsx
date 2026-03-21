"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="w-full bg-black text-white px-6 md:px-16 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-4xl md:text-7xl font-medium leading-[0.95] tracking-tight">
            Say Hello,
          </h2>
          <h2 className="text-4xl md:text-7xl font-medium leading-[0.95] tracking-tight">
            I Don&apos;t Bite.
          </h2>
        </div>

        <div className="mt-10 md:mt-14">
          <a
            href="mailto:muhammad.faruqi35@gmail.com"
            className="text-xl md:text-3xl text-neutral-200 hover:text-white transition-colors"
          >
            muhammad.faruqi35@gmail.com
          </a>
        </div>

        <div className="mt-10 md:mt-14 border-t border-white/15 pt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm md:text-base">
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
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
