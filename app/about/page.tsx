import { Plus_Jakarta_Sans, Inter } from "next/font/google";

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
        className="w-full h-auto rounded-b-2xl bg-[#F9FAFB] px-4 pb-8 pt-50 sm:px-4 md:px-8 md:pb-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black/10 pb-8 mb-8 md:pb-10 md:mb-10 flex justify-between">
            <h1
              className={`text-5xl font-bold text-black sm:text-7xl md:text-7xl ${headerFont.className}`}
            >
              ABOUT
            </h1>
            <div className="h-30 w-30 border rounded-full"></div>
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
              University with a passion for building intelligent and scalable
              systems. From NLP pipelines to backend APIs, I enjoy turning ideas
              into working software.
            </p>
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
