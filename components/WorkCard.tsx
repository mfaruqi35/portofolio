// components/WorkCard.tsx
import Image from "next/image";

export default function WorkCard({ project }: { project: any }) {
  return (
    <div className="group relative bg-[#333333] border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
      {/* Bingkai Atas (Mockup Browser Style) */}
      <div className="bg-[#1a1a1a] h-8 flex items-center px-4 gap-1.5 border-b border-slate-700">
        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
        <div className="text-[10px] text-slate-500 flex-1 text-center pr-10 uppercase tracking-widest font-mono">
          {project.title}
        </div>
      </div>

      <div className="relative aspect-video w-full bg-slate-800 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500"
        />
        {/* Overlay saat Hover */}
        {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-sm font-medium tracking-widest border border-white/40 px-4 py-2 rounded-full">
            VIEW PROJECT
          </span>
        </div> */}
      </div>
    </div>
  );
}
