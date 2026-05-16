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
    description: `Gamebrank is an Information Retrieval system built as a final project for the Information Retrieval course. The goal was to help users find specific Indonesian-language game news articles more efficiently by implementing and comparing two retrieval approaches: BM25 as a lexical method and Sentence-BERT as a semantic method. Users can submit a query and instantly see results from both algorithms in one web interface.
    The system has two main parts. First, a data pipeline that crawls and scrapes articles from four Indonesian game news portals: Kotakgame, Gamebrott, Jagatplay, and Indogamers, collecting 2,029 articles in total. The pipeline handles full text preprocessing including stopword removal, selective stemming using Sastrawi, and whitelist-based preservation of game-specific terms like titles and technical jargon. Second, a Flask web app that serves real-time query results, displaying BM25 and S-BERT outputs simultaneously with article title, source, publication date, content snippet, and thumbnail.
    Evaluated on 400 queries against 2,020 articles, using a Cross-Encoder MS-MARCO model to automatically generate relevance ground truth. BM25 outperformed S-BERT across all metrics, achieving MAP of 0.7358, Precision of 0.2566, Recall of 0.8443, and F1-Score of 0.3378, compared to S-BERT's MAP of 0.5005, Precision of 0.2002, Recall of 0.6596, and F1-Score of 0.2616. For keyword-heavy domains like game news, lexical retrieval still wins because game-specific terms require exact matching rather than contextual understanding. `,
    repoLink: "https://github.com/affanshdr/Search-Engine-Stephy.git",
    video: "https://res.cloudinary.com/dnu2tbnva/video/upload/v1777217826/gamebrank_demo_en1yvr.mp4",
  },
  {
    slug: "road-damage-segmentation",
    title: "ROAD DAMAGE SEGMENTATION",
    image: "/projects/pothole/thumbnail.webp",
    tags: ["Machine Learning", "Computer Vision"],
    description: `Road Damage Segmentation is a computer vision project built for the ARA 7.0 Data Science Competition at Institut Teknologi Sepuluh Nopember (ITS), where our team finished in the top 5 out of 200+ competing teams. The goal was to automatically detect and segment pothole damage from road images, addressing the limitations of manual road surveying which tends to be slow, subjective, and expensive. By using image segmentation, the system can precisely delineate damaged areas and produce quantifiable measurements that can support road maintenance prioritization.
    The project covers a full pipeline from data preparation to inference. We started with EDA on 1,291 images to analyze class distribution, image size variance, and color characteristics across train and test sets. For preprocessing, images were standardized to 640x640 and augmented with both geometric techniques (flip, rotation, optical distortion, CoarseDropout) and photometric techniques (CLAHE, brightness/contrast, gamma adjustment, MixUp). The model uses UNet++ with EfficientNet-B5 as the encoder and scSE attention in the decoder, trained with Stratified 5-Fold Cross Validation. Inference uses a Weighted Ensemble of 5 best models combined with Test Time Augmentation (TTA), with post-processing steps including morphological operations and removal of areas smaller than 100px.
    Evaluated using IoU, Precision, and Recall across 5 folds. The model achieved a mean IoU of 0.71, Precision of 87.11%, and Recall of 80.16%. The Coefficient of Variation of IoU was 4.987%, which is below the 5% threshold, categorizing the model as highly stable across folds.`,
    projectLink: "https://colab.research.google.com/drive/1Aj5utII1bGT8LL-3X_tsWoqHHE_qVMKC?usp=sharing",
    images: ["/projects/pothole/pipeline.webp", "/projects/pothole/strats.webp", "/projects/pothole/eval.webp", "/projects/pothole/result.webp"],
  },
  {
    slug: "mbg-sentiment-analysis",
    title: "MBG SENTIMENT ANALYSIS",
    image: "/projects/mbg/thumbnail.webp",
    tags: ["Machine Learning", "Natural Language Processing"],
    description: `This project analyzes public sentiment toward Indonesia's Free Nutritious Meals program (Makan Bergizi Gratis / MBG) using data collected from X (Twitter). The program sparked wide public discourse, and this project classifies those opinions into three categories: positive, negative, and neutral. What makes this project a bit different from a standard sentiment analysis pipeline is the emphasis on data quality — a significant chunk of the dataset turned out to have noisy or inconsistent labels, and fixing that was a core part of the work.
    The full pipeline starts with preprocessing tailored for social media text, including slang normalization using a kamus alay, negation handling to preserve sentiment-critical words like "tidak" and "kurang", and hashtag splitting. From there, a Data-Centric AI approach was applied using Cleanlab's Confident Learning to detect mislabeled samples before training. Around 258 samples (roughly 23% of the dataset) were flagged as mislabeled or ambiguous and corrected. Features were extracted using TF-IDF with unigram configuration, and the final model is a linear-kernel SVM with balanced class weights to handle class imbalance.
    The model achieved 81% accuracy and a macro F1-score of 0.80. Analysis of model features showed that positive sentiment was driven by words like "dukung", "sehat", and "bantu", while negative sentiment centered around concerns like "racun", "tolak", and "anggaran". The Data-Centric approach of fixing label quality before training contributed meaningfully to the final model stability.`,
    repoLink: "https://github.com/mfaruqi35/mbg-sentiment-analysis",
    images: ["/projects/mbg/cm.webp"],
  },
];
