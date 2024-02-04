export interface IBook {
  isLiked?: boolean;
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
  formats: { [identifier: string]: string };
  download_count: number;
}
