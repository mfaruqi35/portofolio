import { projects } from "@/app/data/projects";
import WorkCard from "@/components/WorkCard";
import { Plus_Jakarta_Sans } from "next/font/google";

const headerFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "800",
});

export default function Works() {
  return (
    <div className="min-h-screen bg-bg-light px-4 py-24 sm:px-6 md:px-8 dark:bg-bg-dark">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 border-b border-black/10 pb-8 dark:border-white/10 md:mb-16 md:pb-10">
          <h1
            className={`text-5xl font-bold text-black sm:text-7xl md:text-7xl dark:text-white ${headerFont.className}`}
          >
            ALL WORKS
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
