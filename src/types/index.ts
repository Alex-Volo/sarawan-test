export type Book = {
  id: number;
  title: string;
  authors: {
    name: string;
    birth_year: number;
    death_year: number;
  }[];
  translators: {
    name: string;
    birth_year: number;
    death_year: number;
  }[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: {};
  download_count: number;
};

export type Books = Book[];
