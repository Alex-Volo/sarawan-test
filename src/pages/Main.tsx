import { books } from "../store/fakeStore";

const cardsElements = books.map((book) => {
  return (
    <div key={book.id}>
      <p>Заголовок: {book.title}</p>
    </div>
  );
});
export const Main: React.FC = () => {
  return (
    <>
      <h2>Главная страница</h2>
      {cardsElements}
    </>
  );
};
