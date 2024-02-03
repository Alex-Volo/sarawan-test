import { Book } from "../../types";
import S from "./BookCard.module.css";

export const BookCard: React.FC<{ book?: Book }> = ({ book }) => {
  return (
    <div className={S.card}>
      <span className={S.delete}>X</span>
      <h2 className={S.title}>{book?.title}</h2>
      <p className={S.author}>Author: {book?.authors[0].name}</p>
      <p className={S.subjects}>Subjects: {book?.subjects.join(" ")}</p>
      <div className={S.like}>&#9825; &#9829;</div>
    </div>
  );
};
