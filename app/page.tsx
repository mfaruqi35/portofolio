"use client";
import { projects } from "./data/projects";
import WorkCard from "@/components/WorkCard";
import Image from "next/image";

const dummyProjects = [
  {
    title: "Virtual Eyeglasses Try-On",
    category: "AI / Computer Vision",
    description:
      "Deep learning model for face shape detection and AR frame overlay.",
  },
  {
    title: "Hadoop Spark Cluster",
    category: "Data Engineering",
    description:
      "Multi-node cluster setup for processing large scale Indonesian news datasets.",
  },
  {
    title: "Hadoop Spark Cluster",
    category: "Data Engineering",
    description:
      "Multi-node cluster setup for processing large scale Indonesian news datasets.",
  },
  {
    title: "Hadoop Spark Cluster",
    category: "Data Engineering",
    description:
      "Multi-node cluster setup for processing large scale Indonesian news datasets.",
  },
];

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
          <div className="flex flex-col items-center">
            <h1 className="text-lg">
              A <span className="text-sm">small</span> selection of my recent
              works
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-9xl mx-auto py-5">
            {projects.map((p, i) => (
              <WorkCard key={i} project={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full h-auto rounded-2xl flex items-center bg-[#F9FAFB] px-8 py-8">
        <div className="text-black">
          <h1>INI about SECTION</h1>
        </div>
      </section>
    </div>
  );
}
