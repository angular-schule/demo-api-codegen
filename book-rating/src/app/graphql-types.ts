/* tslint:disable */

export interface Query {
  authors?: (Author | null)[] | null;
  books?: (Book | null)[] | null;
  book?: Book | null;
  isbnExists?: boolean | null;
  bookSearch?: (Book | null)[] | null;
}

export interface Author {
  name?: string | null;
  books?: (Book | null)[] | null;
}

export interface Book {
  isbn: string;
  title?: string | null;
  subtitle?: string | null;
  rating?: number | null;
  description?: string | null;
  thumbnails?: (Thumbnail | null)[] | null;
  authors?: (Author | null)[] | null;
}

export interface Thumbnail {
  url?: string | null;
  title?: string | null;
}

export interface Mutation {
  createBook?: Book | null;
}

export interface BookInput {
  isbn?: string | null;
  title?: string | null;
  subtitle?: string | null;
  rating?: number | null;
  description?: string | null;
}

export interface ThumbnailInput {
  url?: string | null;
  title?: string | null;
}
export interface BookQueryArgs {
  isbn: string;
}
export interface IsbnExistsQueryArgs {
  isbn: string;
}
export interface BookSearchQueryArgs {
  searchTerm?: string | null;
}
export interface CreateBookMutationArgs {
  book: BookInput;
}
export namespace BookList {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";
    book?: (Book | null)[] | null;
  };

  export type Book = {
    __typename?: "Book";
    isbn: string;
    title?: string | null;
    description?: string | null;
    rating?: number | null;
    thumbnails?: (Thumbnails | null)[] | null;
  };

  export type Thumbnails = {
    __typename?: "Thumbnail";
    url?: string | null;
  };
}
