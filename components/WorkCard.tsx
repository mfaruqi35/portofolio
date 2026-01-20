// components/WorkCard.tsx
import Image from "next/image";

export default function WorkCard({ project }: { project: any }) {
  return (
    <div className="h-auto transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
      <div className="group relative bg-[#333333] border border-slate-700 rounded-2xl overflow-hidden">
        <div className="relative aspect-video w-full bg-slate-800 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-top object-cover transition-transform duration-500"
          />
        </div>
      </div>
      <div className="text-white pl-3 pt-3">{project.title}</div>
    </div>
  );
}
