export interface Thumbnail {
    url: string;
    title: string;
}

export interface Book {
  isbn: string;
  title: string;
  description?: string;
  rating?: number;
  thumbnails?: Thumbnail[];
}
