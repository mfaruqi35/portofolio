// app/works/[slug]/page.tsx
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  return (
    <article className="min-h-screen bg-[#2b2b2b] text-[#f9fafb] pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header Proyek */}
        <header className="mb-12">
          <span className="text-blue-400 font-mono text-sm uppercase tracking-widest">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2"></div>
        </header>

        {/* Konten Dinamis (Banyak Gambar & Teks) */}
        <div className="space-y-12">
          {project.content.map((item, index) => (
            <div key={index}>
              {item.type === "text" ? (
                <p className="text-slate-300 leading-relaxed text-lg">
                  {item.value}
                </p>
              ) : (
                <div className="space-y-2">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700">
                    <Image
                      src={item.value}
                      alt={item.caption || ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {item.caption && (
                    <p className="text-sm text-slate-500 italic text-center">
                      {item.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
