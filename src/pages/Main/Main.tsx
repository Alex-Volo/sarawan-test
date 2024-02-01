import { books } from "../../store/fakeStore";
import { BookCard } from "../../components/BookCard/BookCard";
import S from "./Main.module.css";

const cardsElements = books.map((book) => {
  return <BookCard book={book} />;
});
export const Main: React.FC = () => {
  return (
    <div className={S.wrapper}>
      <h1 style={{ textAlign: "center" }}>Gutenberg Books</h1>
      <div className={S.cards}>{cardsElements}</div>
    </div>
  );
};
