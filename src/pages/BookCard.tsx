import { Book } from "../types";
export const BookCard: React.FC<{book?: Book}> = ({ book }) => {
  return <div>
    <h2>{book?.title}</h2>
    <p>Author: {book?.authors[0].name}</p>
    <p>Subjects: {book?.subjects.join(' ')}</p>
  </div>;
};
