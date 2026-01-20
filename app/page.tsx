"use client";
import { projects } from "./data/projects";
import WorkCard from "@/components/WorkCard";
import SlidingLink from "@/components/SlidingLink";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-background">
      <section
        id="hero"
        className="w-full h-screen rounded-b-2xl flex items-end bg-[#F9FAFB] px-10"
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

          <div className="py-10 flex items-center w-[50vw]">
            <h1 className="text-3xl font-light">
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
        className="w-full h-auto flex flex-col items-center justify-center py-5"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col">
            <h1 className="text-8xl font-serif text-off-white">Works</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-9xl mx-auto py-5">
            {projects.map((p, i) => (
              <WorkCard key={i} project={p} />
            ))}
          </div>
          {/* <SlidingLink text="Show More" href="/works" /> */}
        </div>
      </section>
      <section
        id="about"
        className="w-full h-auto rounded-2xl bg-[#F9FAFB] px-8 py-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end border-b pb-10 mb-10">
            <h1 className="text-8xl font-serif">About</h1>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-black"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 border-b pb-10 mb-10">
          <div className="md:col-span-2 text-sm font-medium uppercase flex gap-2">
            overview
          </div>
          <div className="md:col-span-2 space-y-4 text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ea illo eum perspiciatis veniam alias quibusdam numquam
              magni eligendi! Minima nemo error soluta ipsa. Tempora amet
              necessitatibus modi labore vitae.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 border-b pb-10 mb-10">
          <div className="md:col-span-2 text-sm font-medium uppercase flex gap-2">
            Skillset
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <ul className="space-y-1">
              <li>Backend Development</li>
              <li>Computer Vision</li>
              <li>Big Data (Hadoop/Spark)</li>
            </ul>
            <ul className="space-y-1">
              <li>Next.js & TypeScript</li>
              <li>Python & TensorFlow</li>
              <li>API Architecture</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 border-b pb-10 mb-10">
          <div className="md:col-span-2 text-sm font-medium uppercase flex gap-2">
            Recognitions
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
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
