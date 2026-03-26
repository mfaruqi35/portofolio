import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const headerFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "800",
});

const contentFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "500",
});

export default function About() {
  return (
    <div className="overflow-x-hidden bg-background">
      <section
        id="about"
        className="w-full h-auto rounded-b-2xl bg-[#F9FAFB] px-4 pb-10 pt-60 sm:px-4 md:px-8 md:pb-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black/10 pb-8 mb-8 md:pb-10 md:mb-10 flex justify-between items-baseline-last">
            <h1
              className={`text-5xl font-bold text-black sm:text-7xl md:text-7xl ${headerFont.className}`}
            >
              ABOUT
            </h1>
            <div className="md:h-30 md:w-30 h-20 w-20 border rounded-full"></div>
          </div>
        </div>
        <div
          className={`max-w-7xl mx-auto grid grid-cols-1 gap-5 border-b border-black/10 pb-8 mb-8 md:pb-10 md:mb-10 md:grid-cols-4 md:gap-0 ${contentFont.className}`}
        >
          <div className="md:col-span-2 text-xs font-medium uppercase tracking-wide text-neutral-500 sm:text-sm">
            <span className="mr-1 text-neutral-400" aria-hidden>
              ↳
            </span>
            overview
          </div>
          <div className="md:col-span-2 space-y-3 text-base leading-relaxed text-black sm:text-md ">
            <p>
              Hi, I&apos;m Faruqi, an Informatics student at Syiah Kuala
              University with a keen interest in AI/ML and backend development.
              I enjoy building things that are grounded in real problems
            </p>
            <p>
              I tend to approach problems by exploring options before commiting,
              benchmarking algorithms, comparing model architectures, or
              stress-testing an idea against real constraints. I find that the
              best solutions usually come from understanding the tradeoffs, not
              just picking what sounds right.
            </p>
            <p>
              I&apos;m still early in the journey, but I&apos;m moving
              deliberately and I&apos;m always open to collaborations,
              interesting problems, or just a good conversation about building
              something worthwhile.
            </p>
            <a
              href="mailto:muhammad.faruqi35@gmail.com"
              className="group inline-flex items-center gap-1 font-bold transition-transform duration-200 hover:-translate-y-0.5"
            >
              muhammad.faruqi35@gmail.com
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
        <div
          className={`max-w-7xl mx-auto grid grid-cols-1 gap-8 border-b border-black/10 pb-8 mb-8 md:pb-10 md:mb-10 md:grid-cols-4 md:gap-0 ${contentFont.className}`}
        >
          <div className="md:col-span-2 text-xs font-medium uppercase tracking-wide text-neutral-500 sm:text-sm">
            <span className="mr-1 text-neutral-400" aria-hidden>
              ↳
            </span>
            Interests
          </div>
          <div className="md:col-span-2 text-black">
            <ul className="flex flex-col gap-1.5 text-base font-medium sm:hidden">
              <li>AI & Machine Learning</li>
              <li>NLP & Text Processing</li>
              <li>Backend Development</li>
              <li>Cloud Engineering</li>
            </ul>
            <div className="hidden sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2">
              <ul className="space-y-2 text-sm sm:text-base">
                <li>AI & Machine Learning</li>
                <li>NLP & Text Processing</li>
              </ul>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>Backend Development</li>
                <li>Cloud Engineering</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`max-w-7xl mx-auto grid grid-cols-1 gap-8 border-black/10 mb-5 md:grid-cols-4 md:gap-0 ${contentFont.className}`}
        >
          <div className="md:col-span-2 text-xs font-medium uppercase tracking-wide text-neutral-500 sm:text-sm">
            <span className="mr-1 text-neutral-400" aria-hidden>
              ↳
            </span>
            Recognitions
          </div>
          <div className="md:col-span-2 flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-x-8">
              <h3 className="text-sm font-medium leading-snug sm:text-base text-black">
                Beasiswa Unggulan
              </h3>
              <div className="flex flex-col gap-1 text-sm leading-snug sm:text-base">
                <span className="text-black">Fully Funded Scholarship</span>
                <span className="text-neutral-500">
                  Pusat Prestasi Nasional, 2023
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8">
              <h3 className="text-sm font-medium leading-snug sm:text-base text-black">
                University of Doha for Science and Technology
              </h3>
              <div className="flex flex-col gap-1 text-sm leading-snug sm:text-base">
                <span className="text-black">International Guest Student</span>
                <span className="text-neutral-500">Doha, Qatar — Jan 2026</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8">
              <h3 className="text-sm font-medium leading-snug sm:text-base text-black">
                Data Science ARA 7.0
              </h3>
              <div className="flex flex-col gap-1 text-sm leading-snug sm:text-base">
                <span className="text-black">Finalist</span>
                <span className="text-neutral-500">
                  Institut Teknologi Sepuluh Nopember, Feb 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
