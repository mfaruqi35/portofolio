import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/app/data/projects";

export default function WorkCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/works/${project.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-black/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#111111]"
    >
      {/* Thumbnail */}
      <div className="relative mb-4 aspect-video w-full shrink-0 overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <div className="mb-6 flex flex-1 flex-col">
        <h2 className="text-xl font-bold leading-tight text-black dark:text-white">
          {project.title}
        </h2>
      </div>

      {/* Bottom Area: Tag and CTA */}
      <div className="mt-auto flex items-end justify-between gap-2">
        {/* Tag */}
        <span className="rounded-full border border-black/10 bg-neutral-100 px-3 py-1.5 text-xs font-medium text-black dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300">
          {project.tag}
        </span>

        {/* CTA */}
        <div className="flex items-center gap-1.5 rounded-full border border-black/10 bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-black transition-colors group-hover:bg-black group-hover:text-white dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:group-hover:bg-white dark:group-hover:text-black">
          See details
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
