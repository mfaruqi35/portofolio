"use client";
import { useRef, useState } from "react";
import { projects } from "./data/projects";
import WorkCard from "@/components/WorkCard";
import Link from "next/link";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const headerFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "800",
});

const contentFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "500",
});

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDiff = Infinity;

    children.forEach((child, index) => {
      const diff = Math.abs(child.offsetLeft - container.scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const child = container.children[index] as HTMLElement;
    if (child) {
      container.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (activeIndex > 0) scrollToCard(activeIndex - 1);
  };

  const scrollNext = () => {
    if (activeIndex < projects.length - 1) scrollToCard(activeIndex + 1);
  };

  return (
    <div className="overflow-x-hidden bg-bg-dark isolate">
      <section
        id="hero"
        className={`flex min-h-dvh w-full flex-col justify-end rounded-b-2xl bg-bg-light px-5 pb-14 pt-20 sm:px-8 md:px-10 md:pb-18 ${contentFont.className}`}
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto flex w-full max-w-7xl flex-col gap-10 text-black md:gap-12"
        >
          <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-full border-2 border-[#2b2b2b]">
            <Image
              src="/avatar.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex w-full items-center md:w-[50vw] md:max-w-[50%]">
            <h1 className="text-lg font-light leading-[1.35] tracking-tight md:text-[25px]">
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
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      <section
        id="works"
        className="w-full h-auto px-4 py-8 sm:px-6 md:px-8 md:py-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-8 md:mb-10">
            <h1
              className={`text-5xl font-bold sm:text-7xl md:text-7xl ${headerFont.className}`}
            >
              WORKS
            </h1>
          </div>
          
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="relative flex w-full gap-2 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar"
          >
            {projects.map((project) => (
              <div key={project.slug} className="snap-center shrink-0">
                <WorkCard project={project} />
              </div>
            ))}
          </div>

          {/* <div className="mt-6 flex items-center justify-center gap-6">
            <button 
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronLeft size={20} className="text-black" />
            </button>
            
            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-8 bg-black" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={scrollNext}
              disabled={activeIndex === projects.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronRight size={20} className="text-black" />
            </button>
          </div> */}
        </div>
      </section>
      <section
        id="about"
        className="w-full h-auto rounded-2xl bg-bg-light px-4 py-10 sm:px-4 md:px-8 md:py-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black/10 pb-8 mb-8 md:pb-10 md:mb-10">
            <h1
              className={`text-5xl font-bold text-black sm:text-7xl md:text-7xl ${headerFont.className}`}
            >
              ABOUT
            </h1>
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
            <div>
              <a
                href="/about"
                className="group inline-flex items-center gap-1 font-bold transition-transform duration-200 hover:-translate-y-0.5"
              >
                Read More
              </a>
            </div>
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
              <li>Software Quality Assurance</li>
              <li>Backend Development</li>
              <li>Cloud Engineering</li>
            </ul>
            <div className="hidden sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2">
              <ul className="space-y-2 text-sm sm:text-base">
                <li>AI & Machine Learning</li>
                <li>Software Quality Assurance</li>
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
