import { Route, Routes } from "react-router-dom";
// import { BookCard } from "./components/BookCard/BookCard";
import { Main } from "./pages/Main/Main";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      {/* <Route path="/card" element={<BookCard />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
