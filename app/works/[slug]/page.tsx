import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowUpRight, Github, ArrowRight } from "lucide-react";
import ProjectCarousel from "@/components/ProjectCarousel";

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
        <ProjectCarousel 
          video={project.video} 
          images={project.images} 
          fallbackImage={project.image} 
          title={project.title} 
        />

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
          <div className="flex flex-col gap-4 text-lg leading-relaxed text-black/80">
            {project.description.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

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
