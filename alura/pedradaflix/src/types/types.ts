export interface ICategory {
  id: number;
  titulo: string;
  cor: string;
  link_extra: { text: string; url: string };
}

export interface ICategoryEmbedVideos {
  id: number;
  titulo: string;
  cor: string;
  link_extra: { text: string; url: string };
  videos: { titulo: string; url: string }[];
}
