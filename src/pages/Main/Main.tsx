import { BookCard } from "../../components/BookCard/BookCard";
import S from "./Main.module.css";
import { getBooks } from "../../service/api";
import { useEffect } from "react";
// import { IBook } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { booksSelector } from "../../store";
import { setBooks } from "../../store/booksSlice";

export const Main: React.FC = () => {
  const books = useAppSelector(booksSelector);
  const dispatch = useAppDispatch();

  const cardsElements = books.map((book) => {
    return <BookCard key={book?.id} book={book} />;
  });

  useEffect(() => {
    getBooks().then((books) => {
      dispatch(setBooks(books));
    });
  }, [dispatch]);

  return (
    <div className={S.wrapper}>
      <h1 style={{ textAlign: "center", color: "#5f0421" }}>Gutenberg Books</h1>
      <button className={S.filterButton}>Показать только понравившиеся</button>
      <div className={S.cards}>{cardsElements}</div>
    </div>
  );
};
