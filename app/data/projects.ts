export type ProjectTag =
  | "Backend Development"
  | "Computer Vision"
  | "Machine Learning"
  | "Information Retrieval"
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
  video?: string; // Optional video URL for the detail page
}

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const projects: Project[] = [
  {
    slug: "gamebrenk",
    title: "GAMEBRENK",
    image: "/avatar.svg", 
    tags: ["Backend Development", "Machine Learning", "Information Retrieval"],
    description: "Gamebrank is a specific search engine for Indonesian game news. This Search engine implements two information retrieval algorithms, BM25 and Sentence-BERT, to compare the performance of both algorithms in terms of precision, recall, and f1-score.",
    repoLink: "https://github.com/affanshdr/Search-Engine-Stephy.git",
    projectLink: "https://example.com",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    slug: "pothole-segmentation",
    title: "POTHOLE SEGMENTATION",
    image: "/avatar.svg",
    tags: ["Machine Learning", "Computer Vision"],
    description: "This project is a segmentation model that can detect potholes in the road. Built using U-Net architecture and EfficientNet-B5 as the encoder, gets 80% f1-score.",
    repoLink: "https://github.com",
    images: ["/avatar.svg", "/avatar.svg"],
  },
  // {
  //   slug: "banana-ripeness-classification",
  //   title: "BANANA RIPENESS CLASSIFICATION",
  //   image: "/avatar.svg",
  //   tags: ["Machine Learning", "Computer Vision"],
  //   description: "This project is a classification model that can classify banana ripeness with 4 classes (unripe, ripe, overripe, and rotten).",
  //   repoLink: "https://github.com/Shqcod/BananaRipenessClassification.git",
  //   images: ["/avatar.svg"],
  // },
  {
    slug: "level-up",
    title: "LEVEL UP",
    image: "/avatar.svg",
    tags: ["Backend Development"],
    description: "Level Up is a SaaS platform to help MSMEs to be ",
    repoLink: "https://github.com",
    projectLink: "https://example.com",
    images: ["/avatar.svg", "/avatar.svg", "/avatar.svg", "/avatar.svg"],
  },
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
