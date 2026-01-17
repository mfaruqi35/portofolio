"use client";

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
      <section id="works" className="w-full h-screen flex ">
        <div>
          <h1>INI WORKS SECTION</h1>
        </div>
      </section>
      <section className="w-full h-screen rounded-2xl flex items-end bg-[#F9FAFB] px-8 pb-8">
        <div>
          <h1>INI about SECTION</h1>
        </div>
      </section>
      {/* <section
        id="contact"
        className="w-full h-screen border flex items-center"
      >
        <div>
          <h1>INI CONTACT SECTION</h1>
        </div>
      </section> */}
    </div>
  );
}
