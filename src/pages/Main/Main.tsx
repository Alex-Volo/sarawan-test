import { BookCard } from "../../components/BookCard/BookCard";
import S from "./Main.module.css";
import { getBooks } from "../../service/api";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { booksSelector } from "../../store";
import { setBooks } from "../../store/booksSlice";

export const Main: React.FC = () => {
  let books = useAppSelector(booksSelector);
  const dispatch = useAppDispatch();
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  if (isFiltering) {
    books = books.filter((book) => book.isLiked);
  }

  const cardsElements = books.map((book) => {
    return <BookCard key={book?.id} book={book} />;
  });

  useEffect(() => {
    getBooks().then((books) => {
      if (books) dispatch(setBooks(books));
    });
  }, [dispatch]);

  return (
    <div className={S.wrapper}>
      <h1 style={{ textAlign: "center", color: "#5f0421" }}>Gutenberg Books</h1>
      <button
        onClick={() => {
          setIsFiltering(!isFiltering);
          console.log("фильтруетсчя", isFiltering);
        }}
        className={S.filterButton}>
        {isFiltering ? "Show all" : "Show only liked"}
      </button>
      <div className={S.cards}>{cardsElements}</div>
    </div>
  );
};
