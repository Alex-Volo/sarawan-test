import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { booksSelector } from "../../store";
import S from "./BookPage.module.css";

export const BookPage: React.FC = () => {
  const books = useAppSelector(booksSelector);
  const { id: currentBookId } = useParams();
  const currentBook = books.find((book) => book.id === Number(currentBookId));
  return (
    <div className={S.wrapper}>
      <h2 className={S.title}>{currentBook?.title}</h2>
      <p>Author: {currentBook?.authors[0].name}</p>
      <p>bookshelves: {currentBook?.bookshelves.join(", ")}</p>
      <p>languages: {currentBook?.languages.join(", ")}</p>
      <ul>
        Subjects:{" "}
        {currentBook?.subjects.map((subj) => (
          <li>{subj}</li>
        ))}
      </ul>
      <p>downloaded {currentBook?.download_count} times</p>
    </div>
  );
};
