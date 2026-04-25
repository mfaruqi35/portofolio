export type ProjectTag =
  | "Backend Development"
  | "Computer Vision"
  | "Machine Learning"
  | "Android Development";

export interface Project {
  slug: string;
  title: string;
  image: string; // Thumbnail image
  tags: ProjectTag[];
  description: string;
  repoLink?: string;
  projectLink?: string;
  images?: string[]; // Carousel images for the detail page
}

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const projects: Project[] = [
  {
    slug: "project-satu",
    title: "PROJECT SATU",
    image: "/avatar.svg", 
    tags: ["Backend Development", "Machine Learning"],
    description: LOREM_IPSUM,
    repoLink: "https://github.com",
    projectLink: "https://example.com",
    images: ["/avatar.svg", "/avatar.svg", "/avatar.svg"],
  },
  {
    slug: "project-dua",
    title: "Project Dua",
    image: "/avatar.svg",
    tags: ["Computer Vision"],
    description: LOREM_IPSUM,
    repoLink: "https://github.com",
    images: ["/avatar.svg", "/avatar.svg"],
  },
  {
    slug: "project-tiga",
    title: "Project Tiga",
    image: "/avatar.svg",
    tags: ["Android Development", "Computer Vision"],
    description: LOREM_IPSUM,
    projectLink: "https://example.com",
    images: ["/avatar.svg"],
  },
  // {
  //   slug: "project-empat",
  //   title: "Project Empat",
  //   image: "/avatar.svg",
  //   tag: "Backend Development",
  //   description: LOREM_IPSUM,
  //   repoLink: "https://github.com",
  //   projectLink: "https://example.com",
  //   images: ["/avatar.svg", "/avatar.svg", "/avatar.svg", "/avatar.svg"],
  // },
  // {
  //   slug: "project-lima",
  //   title: "Project Lima",
  //   image: "/avatar.svg",
  //   tag: "Data Science",
  //   description: LOREM_IPSUM,
  //   repoLink: "https://github.com",
  //   images: ["/avatar.svg", "/avatar.svg"],
  // },
];
