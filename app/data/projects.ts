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
    slug: "recepku",
    title: "Recepku",
    image: "/projects/recepku/thumbnail.jpg",
  },
  {
    slug: "recepku",
    title: "Recepku",
    image: "/projects/recepku/thumbnail.jpg",
  },
  {
    slug: "recepku",
    title: "Recepku",
    image: "/projects/recepku/thumbnail.jpg",
  },
];
