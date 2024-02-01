import { Book } from "../../types";
import S from "./BookCard.module.css";

export const BookCard: React.FC<{ book?: Book }> = ({ book }) => {
  return (
    <div className={S.card }>
      <h2>{book?.title}</h2>
      <p>Author: {book?.authors[0].name}</p>
      <p>Subjects: {book?.subjects.join(" ")}</p>
    </div>
  );
};
