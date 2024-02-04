import { useNavigate } from "react-router-dom";
import { IBook } from "../../types";
import S from "./BookCard.module.css";
import { toggleLike } from "../../store/booksSlice";
import { useAppDispatch } from "../../hooks";

export const BookCard: React.FC<{ book?: IBook }> = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (!book) return <></>;

  return (
    <div onClick={() => navigate(`book/${book.id}`)} className={S.card}>
      <span className={S.delete}>X</span>
      <h2 className={S.title}>{book.title}</h2>
      <p className={S.author}>Author: {book.authors[0].name}</p>
      <p className={S.subjects}>Subjects: {book.subjects.join(" ")}</p>
      <div className={S.like}>
        {book?.isLiked ? (
          <span
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleLike(book.id));
            }}>
            &#9829;
          </span>
        ) : (
          <span
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleLike(book.id));
            }}>
            &#9825;
          </span>
        )}{" "}
      </div>
    </div>
  );
};
