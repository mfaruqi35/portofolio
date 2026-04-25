import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowUpRight, Github } from "lucide-react";

const headerFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "800",
});

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="min-h-screen bg-bg-light px-4 pb-20 pt-24 sm:px-6 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex w-full gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
          {project.images && project.images.length > 0 ? (
            project.images.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-video w-full shrink-0 snap-center overflow-hidden rounded-2xl border border-black/10 bg-neutral-200"
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))
          ) : (
            <div className="relative aspect-video w-full shrink-0 snap-center overflow-hidden rounded-2xl border border-black/10 bg-neutral-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Header Proyek */}
        <header className="mb-10">
          <h1
            className={`mb-4 text-4xl font-bold text-black md:text-5xl ${headerFont.className}`}
          >
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="inline-block rounded-full border border-black/10 bg-neutral-100 px-4 py-2 text-sm font-medium text-black">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Konten Deskripsi & Link */}
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-black/80">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Visit Project <ArrowUpRight size={18} />
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-black px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                <Github size={18} /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
