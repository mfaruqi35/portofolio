"use client";

// import { useState } from "react";

export default function Home() {
  // const [copied, setCopied] = useState<boolean>(false);

  return (
    <div className="overflow-x-hidden">
      <section
        id="hero"
        className="w-full h-screen flex items-center justify-center"
      >
        <div className="flex justify-center">Hero Section</div>
      </section>
      <section
        id="works"
        className="w-full h-screen flex items-center justify-center"
      >
        <div className="flex justify-center">Work Section</div>
      </section>
      <section
        id="about"
        className="w-full h-screen flex justify-center items-center"
      >
        <div className="flex justify-center align-middle">About Section</div>
      </section>
      <section
        id="contact"
        className="w-full h-screen flex justify-center items-center"
      >
        <div className="flex justify-center">Contact Section</div>
      </section>
    </div>
  );
}
