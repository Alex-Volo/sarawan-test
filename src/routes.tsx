import { Route, Routes } from "react-router-dom";
// import { BookCard } from "./components/BookCard/BookCard";
import { Main } from "./pages/Main/Main";
import { NotFound } from "./pages/NotFound";
import { BookPage } from "./pages/BookPage/BookPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
