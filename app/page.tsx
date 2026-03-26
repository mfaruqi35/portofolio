"use client";
import { projects } from "./data/projects";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const headerFont = Inter({
  subsets: ["latin"],
  weight: "700",
});

const contentFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-background ">
      <section
        id="hero"
        className={`flex min-h-dvh w-full flex-col justify-end rounded-b-2xl bg-[#F9FAFB] px-5 pb-10 pt-20 sm:px-8 md:px-10 md:pb-14 ${contentFont.className}`}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 text-black md:gap-12">
          <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-full border-2 border-[#2b2b2b]">
            <Image
              src="/avatar.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex w-full items-center md:w-[50vw] md:max-w-[50%]">
            <h1 className="text-[22px] font-light leading-[1.35] tracking-tight">
              Banda Aceh based Backend Developer and AI/ML Enthusiast, turning
              ideas into working systems that solve real problems.
            </h1>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div className="flex justify-between gap-8 sm:justify-start sm:gap-12 md:gap-24">
              <div className="flex flex-col gap-1">
                <span className="text-base leading-tight">
                  AI/ML Enthusiast
                </span>
                <span className="text-base leading-tight">
                  Backend Developer
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-base leading-tight">Based In</span>
                <span className="text-base leading-tight">Banda Aceh</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 sm:shrink-0 sm:items-end sm:text-right">
              <span className="text-base leading-tight">Get in Touch</span>
              <a
                href="mailto:muhammad.faruqi35@gmail.com"
                className="group inline-flex items-center gap-1 font-bold transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span>muhammad.faruqi35@gmail.com</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="works"
        className="w-full h-auto px-4 py-10 sm:px-6 md:px-8 md:py-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col">
            <h1
              className={`text-7xl font-bold text-off-white sm:text-7xl md:text-7xl ${headerFont.className}`}
            >
              PROJECTS
            </h1>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="w-full h-auto rounded-2xl bg-[#F9FAFB] px-4 py-10 sm:px-6 md:px-8 md:py-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black/10 pb-6 mb-8 md:pb-10 md:mb-10">
            <h1
              className={`text-7xl font-bold text-black sm:text-7xl md:text-7xl ${headerFont.className}`}
            >
              ABOUT
            </h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 border-b border-black/10 pb-10 mb-10 md:grid-cols-4 md:gap-0">
          <div className="md:col-span-2 text-xs font-medium uppercase tracking-wide text-neutral-500 sm:text-sm">
            <span className="mr-1 text-neutral-400" aria-hidden>
              ↳
            </span>
            overview
          </div>
          <div className="md:col-span-2 space-y-4 text-base leading-relaxed text-black sm:text-md">
            <p>
              Hi, I&apos;m Faruqi, an Informatics student at Syiah Kuala
              University with a passion for building intelligent and scalable
              systems. From NLP pipelines to backend APIs, I enjoy turning ideas
              into working software.
            </p>
            <div>
              <a href="/about">Read More</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 border-b border-black/10 pb-10 mb-10 md:grid-cols-4 md:gap-0">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 border-b border-black/10 pb-10 mb-10 md:grid-cols-4 md:gap-0">
          <div className="md:col-span-2 text-xs font-medium uppercase tracking-wide text-neutral-500 sm:text-sm">
            <span className="mr-1 text-neutral-400" aria-hidden>
              ↳
            </span>
            Recognitions
          </div>
          <div className="md:col-span-2 text-black">
            <div className="space-y-10 sm:space-y-12">
              <div className="grid grid-cols-[minmax(0,34%)_minmax(0,1fr)] gap-x-3 gap-y-1 sm:gap-x-6">
                <h3 className="text-sm font-medium leading-snug text-black sm:text-base">
                  Beasiswa Unggulan
                </h3>
                <div className="flex min-w-0 flex-col gap-1 text-sm leading-snug sm:text-base">
                  <span>Fully Funded Scholarship</span>
                  <span className="text-neutral-500">
                    Pusat Prestasi Nasional, 2023
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-[minmax(0,34%)_minmax(0,1fr)] gap-x-3 gap-y-1 sm:gap-x-5">
                <h3 className="text-sm font-medium leading-snug text-black sm:text-base">
                  University of Doha for Science and Technology
                </h3>
                <div className="flex min-w-0 flex-col gap-1 text-sm leading-snug sm:text-base">
                  <span>International Guest Student</span>
                  <span className="text-neutral-500">
                    Doha, Qatar — Jan 2026
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-[minmax(0,34%)_minmax(0,1fr)] gap-x-3 gap-y-1 sm:gap-x-5">
                <h3 className="text-sm font-medium leading-snug text-black sm:text-base">
                  Data Science ARA 7.0
                </h3>
                <div className="flex min-w-0 flex-col gap-1 text-sm leading-snug sm:text-base">
                  <span>Finalist</span>
                  <span className="text-neutral-500">
                    Institut Teknologi Sepuluh Nopember, Feb 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
