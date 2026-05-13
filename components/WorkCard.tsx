import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/data/projects";

export default function WorkCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/works/${project.slug}`}
      className="group relative block aspect-video w-[220px] shrink-0 overflow-hidden rounded-xl border border-black/10 bg-neutral-200 sm:w-[260px] md:w-[420px]"
    >
      {/* Thumbnail Container */}
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500"
          />
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-end justify-center bg-black/50 p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <h2 className="translate-y-4 rounded-full bg-bg-dark px-5 py-2 text-xs font-bold tracking-wide text-bg-light shadow-lg transition-transform duration-150 ease-out group-hover:translate-y-0">
          {project.title}
        </h2>
      </div>
    </Link>
  );
}
