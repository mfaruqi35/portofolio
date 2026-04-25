import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/data/projects";

export default function WorkCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/works/${project.slug}`}
      className="group relative block aspect-[4/3] w-[240px] shrink-0 overflow-hidden rounded-xl border border-black/10 bg-neutral-200 sm:w-[280px] md:w-[320px]"
    >
      {/* Thumbnail */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-end justify-center bg-black/50 p-4 opacity-0 transition-opacity group-hover:opacity-100">
        <h2 className="rounded-full bg-bg-light px-5 py-2 text-xs font-bold tracking-wide text-black shadow-lg">
          {project.title}
        </h2>
      </div>
    </Link>
  );
}
