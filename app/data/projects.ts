export interface ProjectContent {
  type: "text" | "image";
  value: "string";
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  image: string;
  content?: ProjectContent[];
}

export const projects: Project[] = [
  {
    slug: "recepku",
    title: "Recepku",
    image: "/projects/recepku/thumbnail.jpg",
  },
  {
    slug: "levelup",
    title: "LevelUp",
    image: "/projects/levelup/thumbnail2.jpg",
  },
  {
    slug: "levelup",
    title: "Gamebrank",
    image: "/projects/recepku/thumbnail.jpg",
  },
  {
    slug: "hmifpeduli",
    title: "HMIFPeduli",
    image: "/projects/hmifpeduli/thumbnail.jpg",
  },
];
