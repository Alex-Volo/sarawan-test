import { IBook } from "../types";

const baseUrl = "https://gutendex.com/books/?page=2";

export const getBooks = async (): Promise<IBook[] | undefined> => {
  try {
    const response = await fetch(baseUrl);
    const json = await response.json();
    return json.results.map((el: IBook) => ({ ...el, isLiked: false }));
  } catch (error) {
    console.warn(error);
  }
};
