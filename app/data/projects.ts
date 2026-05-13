export type ProjectTag =
  | "Backend Development"
  | "Computer Vision"
  | "Machine Learning"
  | "Information Retrieval"
  | "Android Development"
  | "Natural Language Processing";

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
    slug: "gamebrank",
    title: "GAMEBRANK",
    image: "/projects/gamebrank/thumbnail.webp", 
    tags: ["Backend Development", "Machine Learning", "Information Retrieval"],
    description: `Gamebrank is a search engine specific for Indonesian game news. This search engine implements two information retrieval algorithms, BM25 and Sentence-BERT, to compare the performance of both algorithms in terms of precision, recall, and f1-score. `,
    repoLink: "https://github.com/affanshdr/Search-Engine-Stephy.git",
    video: "https://res.cloudinary.com/dnu2tbnva/video/upload/v1777217826/gamebrank_demo_en1yvr.mp4",
  },
  {
    slug: "pothole-segmentation",
    title: "POTHOLE SEGMENTATION",
    image: "/projects/pothole/thumbnail.webp",
    tags: ["Machine Learning", "Computer Vision"],
    description: "This project is a segmentation model that can detect potholes in the road. Built using U-Net architecture and EfficientNet-B5 as the encoder, gets 80% f1-score.",
    projectLink: "https://colab.research.google.com/drive/1Aj5utII1bGT8LL-3X_tsWoqHHE_qVMKC?usp=sharing",
    images: ["/projects/pothole/pipeline.webp", "/projects/pothole/strats.webp", "/projects/pothole/eval.webp", "/projects/pothole/result.webp"],
  },
  {
    slug: "mbg-sentiment-analysis",
    title: "MBG SENTIMENT ANALYSIS",
    image: "/projects/mbg/thumbnail.webp",
    tags: ["Machine Learning", "Natural Language Processing"],
    description: "Level Up is a SaaS platform to help MSMEs to be ",
    repoLink: "https://github.com",
    projectLink: "https://example.com",
    images: ["/avatar.svg", "/avatar.svg", "/avatar.svg", "/avatar.svg"],
  },
  {
    slug: "project-lima",
    title: "Project Lima",
    image: "/avatar.svg",
    tags: ["Machine Learning", "Natural Language Processing"],
    description: LOREM_IPSUM,
    repoLink: "https://github.com",
    images: ["/avatar.svg", "/avatar.svg"],
  },
];
