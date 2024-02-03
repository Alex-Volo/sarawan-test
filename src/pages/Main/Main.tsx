// import { books } from "../../store/fakeStore";
import { BookCard } from "../../components/BookCard/BookCard";
import S from "./Main.module.css";
import { getBooks } from "../../service/api";
import { useEffect, useState } from "react";
import { IBook } from "../../types";

export const Main: React.FC = () => {
  const [books, setBooks] = useState<IBook[] | []>([]);

  const cardsElements = books.map((book) => {
    return <BookCard key={book?.id} book={book} />;
  });

  useEffect(() => {
    getBooks().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <div className={S.wrapper}>
      <h1 style={{ textAlign: "center", color: "#5f0421" }}>Gutenberg Books</h1>
      <button className={S.filterButton}>Показать только понравившиеся</button>
      <div className={S.cards}>{cardsElements}</div>
    </div>
  );
};
