// components/WorkCard.tsx
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/app/data/projects";

export default function WorkCard({ project }: { project: Project }) {
  return (
    <div className="group relative h-auto rounded-2xl border border-slate-700 bg-[#111111] p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
      {/* Thumbnail */}
      <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-xl bg-slate-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-top object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Title + icon */}
      <div className="mb-4 flex items-center justify-between text-white">
        <h2 className="text-xl font-semibold leading-tight">{project.title}</h2>
        <ArrowUpRight size={18} className="text-neutral-300" />
      </div>

      {/* Kotak-kotak kecil → lorem dulu */}
      <div className="flex flex-wrap gap-2 text-xs text-neutral-300">
        {["Lorem", "Lorem", "Lorem"].map((label, index) => (
          <span
            key={index}
            className="rounded-full border border-neutral-700 px-3 py-1 uppercase tracking-wide"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
