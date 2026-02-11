"use client";
import { projects } from "./data/projects";
import WorkCard from "@/components/WorkCard";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Image from "next/image";

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
        className={`w-full h-screen rounded-b-2xl flex items-end bg-[#F9FAFB] px-10 ${contentFont.className}`}
      >
        <div className=" text-black w-full h-100 ">
          <div className="relative h-18 w-18 rounded-full border-2 border-[#2b2b2b] justify-center overflow-x-hidden items-center">
            <Image
              src="/avatar.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="py-15 flex items-center w-[50vw]">
            <h1 className="text-[22px] font-light">
              Banda Aceh based Backend Developer and AI/ML Specialist crafting
              robust architectures and intelligent models for forward-thinking
              digital experiences.
            </h1>
          </div>
          <div className="flex flex-row justify-between">
            <div className="">
              <h1>AI/ML Specialist</h1>
              <h1>Backend Developer</h1>
            </div>
            <div className="">
              <h1>Based In</h1>
              <h1>Banda Aceh</h1>
            </div>
            <div className="">
              <h1>Get in Touch</h1>
              <h1>muhammad.faruqi35@gmail.com</h1>
            </div>
          </div>
        </div>
      </section>
      <section
        id="works"
        className="w-full h-auto flex flex-col items-center justify-center py-16"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col">
            <h1
              className={`text-7xl font-bold text-off-white ${headerFont.className}`}
            >
              PROJECTS
            </h1>
          </div>

          {/* Timeline layout */}
          <div className="relative mt-16">
            {/* Garis vertikal di tengah */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#F9FAFB]" />

            <div className="flex flex-col gap-20">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className={`relative flex items-center ${
                    i % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Titik di garis */}
                  <div className="pointer-events-none absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-neutral-900" />

                  <div
                    className={`w-full md:w-1/2 ${
                      i % 2 === 0 ? "pr-10 md:pr-16" : "pl-10 md:pl-16"
                    }`}
                  >
                    <WorkCard project={p} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="w-full h-auto rounded-2xl bg-[#F9FAFB] px-8 py-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end border-b pb-10 mb-10">
            <h1 className="text-8xl font-bold text-black">About</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 border-b pb-10 mb-10">
          <div className="md:col-span-2 text-sm font-medium uppercase flex gap-2 text-black">
            overview
          </div>
          <div className="md:col-span-2 space-y-4 text-lg leading-relaxed text-black">
            <p>
              I am an Informatics student with a strong interest in backend
              development and AI/ML, experienced in building projects ranging
              from sustainability-focused applications to data-driven and
              predictive systems. I also have experience teaching programming
              fundamentals and enjoy designing solutions that are clean,
              scalable, and impactful.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 border-b pb-10 mb-10">
          <div className="md:col-span-2 text-sm font-medium uppercase flex gap-2 text-black">
            Skillset
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4 text-black">
            <ul className="space-y-1">
              <li>Backend Development</li>
              <li>Machine Learning</li>
            </ul>
            <ul className="space-y-1">
              <li>Next.js & TypeScript</li>
              <li>Python & TensorFlow</li>
              <li>API Architecture</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 border-b pb-10 mb-10">
          <div className="md:col-span-2 text-sm font-medium uppercase flex gap-2 text-black">
            Recognitions
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4 text-black">
            <ul className="space-y-1">
              <li>Awardee</li>
              <li>Awardee</li>
              <li>Awardee</li>
            </ul>
            <ul className="space-y-1">
              <li>
                <div className="flex flex-col">
                  <h1>TES</h1>
                  <h1>Tes</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
